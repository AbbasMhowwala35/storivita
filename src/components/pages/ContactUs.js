import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import emailjs from "emailjs-com";
import '../assets/css/ContactUs.css';
import Download from '../common/Download';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        subject: "",
        email: "",
        mobile: "",
        message: ""
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

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
        if (error) setError("");
    }

    const validateFeedbackForm = () => {
        if (!feedback.trim()) {
            setError("Please enter your feedback.");
            return false;
        }
        return true;
    };

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

    const sendFeedback = (e) => {
        e.preventDefault();
        if (!validateFeedbackForm()) return;
        if (!feedback.trim()) {
            setError("Please write your feedback before sending.");
            return;
        }
        emailjs
            .send(
                "service_2jfcon2",
                "template_dnp2tv2",
                { feedback },
                "mEBZ00b_Q6xHgGRV5"
            )
            .then(() => {
                alert("Feedback sent!");
                setFeedback("");
                setError("");
            })
            .catch((err) => console.error(err));
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
                                <p className="mb-1">A-6, Chatai Ganj, Ajmer, 306001, Rajasthan</p>
                                <p className="mb-1">+91 9930986260, 7992260293</p>
                                <p className="mb-0">Support@storivita.com</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="office-card shadow-sm">
                            <Card.Body>
                                <h6 className="fw-bold">New Delhi (Office)</h6>
                                <p className="mb-1">A-4, A-Block Raipur Khurd, Chattarpur, 110068, New Delhi</p>
                                <p className="mb-1">+91 9930986260, 7992260293</p>
                                <p className="mb-0">Support@storivita.com</p>
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
                                    className={`mb-3 ${errors.name ? "is-invalid" : ""}`}
                                    placeholder="Full Name"
                                />
                                {errors.name && <div className="text-danger mb-2">{errors.name}</div>}

                                <Form.Control
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className={`mb-3 ${errors.subject ? "is-invalid" : ""}`}
                                    placeholder="Subject"
                                />
                                {errors.subject && <div className="text-danger mb-2">{errors.subject}</div>}

                                <Form.Control
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`mb-3 ${errors.email ? "is-invalid" : ""}`}
                                    placeholder="Your Email ID"
                                />
                                {errors.email && <div className="text-danger mb-2">{errors.email}</div>}

                                <Form.Control
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    className={`mb-3 ${errors.mobile ? "is-invalid" : ""}`}
                                    placeholder="Mobile"
                                />
                                {errors.mobile && <div className="text-danger mb-2">{errors.mobile}</div>}

                                <Form.Control
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    as="textarea"
                                    rows={4}
                                    className={`mb-3 ${errors.message ? "is-invalid" : ""}`}
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
                                    as="textarea"
                                    rows={4}
                                    placeholder="Write Feedback Here..."
                                    value={feedback}
                                    onChange={handleFeedbackChange}
                                    isInvalid={!!error}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {error}
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
