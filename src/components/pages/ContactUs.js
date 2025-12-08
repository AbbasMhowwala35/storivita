import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import emailjs from "emailjs-com";
import '../assets/css/ContactUs.css';
import Download from '../common/Download';
import axios from 'axios';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        subject: "",
        email: "",
        mobile: "",
        message: ""
    });
    const [formData, setFormData] = useState({
        email: "",
        feedback: "",
    });
    const [errors, setErrors] = useState({});
    const [error, setError] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors((prev) => {
            const updatedErrors = { ...prev };
            if (name === "name" && value.trim()) delete updatedErrors.name;
            if (name === "subject" && value.trim()) delete updatedErrors.subject;
            if (name === "email") {
                if (/\S+@\S+\.\S+/.test(value)) delete updatedErrors.email;
            }
            if (name === "mobile") {
                if (/^[0-9]{8,15}$/.test(value)) delete updatedErrors.mobile;
            }
            if (name === "message" && value.trim()) delete updatedErrors.message;
            return updatedErrors;
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError((prevErrors) => {
            const newErrors = { ...prevErrors };

            if (name === "email") {
                if (!value.trim()) {
                    newErrors.email = "Email is required.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors.email = "Please enter a valid email address.";
                } else {
                    delete newErrors.email;
                }
            }
            if (name === "feedback") {
                if (!value.trim()) {
                    newErrors.feedback = "Please enter your feedback.";
                } else {
                    delete newErrors.feedback;
                }
            }
            return newErrors;
        });
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
        if (error) setError("");
    }

    const validateForm = () => {
        let newErrors = {};
        if (!form.name.trim()) newErrors.name = "Full Name is required";
        if (!form.subject.trim()) newErrors.subject = "Subject is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!form.mobile.trim()) {
            newErrors.mobile = "Mobile is required";
        } else if (!/^[0-9]{8,15}$/.test(form.mobile)) {
            newErrors.mobile = "Enter a valid mobile number";
        }
        if (!form.message.trim()) newErrors.message = "Message cannot be empty";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        emailjs
            .send(
                "service_2jfcon2",
                "template_dnp2tv2",
                form,
                "mEBZ00b_Q6xHgGRV5"
            )
            .then(() => {
                alert("Message sent!");
                setForm({
                    name: "",
                    subject: "",
                    email: "",
                    mobile: "",
                    message: "",
                });
                setErrors({});
            })
            .catch((err) => console.error(err));
    };

    const validateFeedbackForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.feedback.trim()) {
            newErrors.feedback = "Please enter your feedback.";
        }
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendFeedback = async (e) => {
        e.preventDefault();
        if (!validateFeedbackForm()) return;
        setIsSending(true);
        try {
            const response = await axios.post(
                "https://backend.storivita.com/api/feedback/website",
                {
                    email: formData.email,
                    description: formData.feedback,
                }
            );
            if (response.status === 200) {
                alert("Thank you for your feedback!");
                setFormData({ email: "", feedback: "" });
                setError({});
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong while sending feedback. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="contact-page">
            <Container className="text-center">
                <h2 className="fw-bold">Get In Touch</h2>
                <p className="text-muted">
                    Have questions, feedback, or need support? We’re here to help!
                    Reach out to us and we’ll get back to you as soon as possible.
                </p>
            </Container>
            <Container>
                <Row className="justify-content-between">
                    <Col md={6}>
                        <Card className="office-card shadow-sm">
                            <Card.Body>
                                <h6 className="fw-bold">Rajasthan (Head Office)</h6>
                                <p className="mb-1">412/19, Chatai Ganj, Ajmer, Rajasthan 305001</p>
                                <p className="mb-1">
                                    <a href="tel:+919930986260" className="text-decoration-none text-black">
                                        +91 9930986260
                                    </a>,{" "}
                                    <a href="tel:+917992260293" className="text-decoration-none text-black">
                                        7992260293
                                    </a>
                                </p>
                                <p className="mb-0">
                                    <a href="mailto:Support@storivita.com" className="text-decoration-none text-black">
                                        Support@storivita.com
                                    </a>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="office-card shadow-sm">
                            <Card.Body>
                                <h6 className="fw-bold">New Delhi (Office)</h6>
                                <p className="mb-1">A-4, A-Block Raipur Khurd, Chattarpur, 110068, New Delhi</p>
                                <p className="mb-1">
                                    <a href="tel:+919930986260" className="text-decoration-none text-black">
                                        +91 9930986260
                                    </a>,{" "}
                                    <a href="tel:+917992260293" className="text-decoration-none text-black">
                                        7992260293
                                    </a>
                                </p>
                                <p className="mb-0">
                                    <a href="mailto:Support@storivita.com" className="text-decoration-none text-black">
                                        Support@storivita.com
                                    </a>
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container>
                <h5 className="fw-bold text-center mb-4">Contact us</h5>
                <Row className="justify-content-center">
                    <Card className="form-card shadow-sm">
                        <Card.Body>
                            <Form onSubmit={sendEmail}>
                                <Form.Control
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`${errors.name ? "is-invalid" : ""}`}
                                    placeholder="Full Name"
                                />
                                {errors.name && <div className="text-danger mb-2">{errors.name}</div>}

                                <Form.Control
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className={`${errors.subject ? "is-invalid" : ""}`}
                                    placeholder="Subject"
                                />
                                {errors.subject && <div className="text-danger mb-2">{errors.subject}</div>}

                                <Form.Control
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`${errors.email ? "is-invalid" : ""}`}
                                    placeholder="Your Email ID"
                                />
                                {errors.email && <div className="text-danger mb-2">{errors.email}</div>}

                                <Form.Control
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    className={`${errors.mobile ? "is-invalid" : ""}`}
                                    placeholder="Mobile"
                                />
                                {errors.mobile && <div className="text-danger mb-2">{errors.mobile}</div>}

                                <Form.Control
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    as="textarea"
                                    rows={8}
                                    className={`${errors.message ? "is-invalid" : ""}`}
                                    placeholder="Write Here Your Message"
                                />
                                {errors.message && <div className="text-danger mb-2">{errors.message}</div>}
                                <button type="submit" className="w-100 mt-3 btn-red">
                                    SEND
                                </button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <br />
            <Container>
                <h5 className="fw-bold text-center mb-4">Feedback</h5>
                <Row className="justify-content-center">
                    <Card className="form-card shadow-sm">
                        <Card.Body>
                            <Form onSubmit={sendFeedback}>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    isInvalid={!!error.email}
                                />
                                <Form.Control.Feedback type="invalid" className='mb-3'>
                                    {error.email}
                                </Form.Control.Feedback>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="feedback"
                                    placeholder="Write Feedback Here..."
                                    value={formData.feedback}
                                    onChange={handleInputChange}
                                    isInvalid={!!error.feedback}
                                />
                                <Form.Control.Feedback type="invalid" className='mb-3'>
                                    {error.feedback}
                                </Form.Control.Feedback>
                                <button
                                    type="submit"
                                    className="w-100 mt-3 btn-red"
                                    disabled={isSending}
                                >
                                    {isSending ? "Sending..." : "SEND"}
                                </button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Download />
        </div>
    );
};

export default ContactUs;
