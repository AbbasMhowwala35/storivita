import React from "react";
import help from '../assets/images/help.svg'
import "../assets/css/HelpPage.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const HelpPage = () => {

    const faqs = [
        {
            q: "Que. How can I create an account on Storivita?",
            a: `Ans: Download the Storivita app, go to the Register option, and select whether you want a Consumer or Business account. Fill in the required details and create your account.`,
        },
        {
            q: "Que: Is Storivita free to use?",
            a: `Ans: Yes! We offer a 90-day free trial. After that, you can choose from our City-Level or Regional-Level plans.`,
        },
        {
            q: "Que: Can small businesses without a physical store register on Storivita?",
            a: `Ans: Yes! Storivita is open for small, medium, and large businesses. Even if you run your business from home, you can create a business account and sell your products or services on Storivita.`,
        },
        {
            q: "Que: How do customers see my products?",
            a: `Ans: Products appear on Storivita’s home feed based on location.`,
        },
        {
            q: "Que. Which business sectors can currently register on Storivita?",
            a: `Ans: At present, Storivita is in the testing phase. For now, only Restaurants and Grocery & Household businesses can register.`,
        },
        {
            q: "Que: Will other businesses be able to register in the future?",
            a: `Ans: Not right now, but in the future, we will open Storivita for 10+ more sectors such as Fashion, Cosmetics, Sports, Pet Supplies, Electronics, and more. Updates will be available on our website and app.`,
        },
        {
            q: "Que: Is there a separate app for consumers and businesses?",
            a: `Ans: No. Both consumers and businesses use the same Storivita app.`,
        },
        {
            q: "Que: Does Storivita charge commission from businesses?",
            a: `Ans: No. Storivita does not charge any commission or extra fees from businesses. Businesses only pay for a subscription plan according to their needs.`,
        },
        {
            q: "Que. Is there any fee for consumers?",
            a: `Ans: No. Storivita is completely free for consumers. We do not charge any fees from consumers.`,
        },
        {
            q: "Que: Is Storivita similar to other e-commerce or quick-commerce platforms?",
            a: `Ans: No. Storivita is a SaaS platform designed for businesses to operate both online and offline. We do not interfere in business operations—each business runs according to its own rules.`,
        },
        {
            q: "Que: Do consumers need a subscription plan to use Storivita?",
            a: `Ans: No. Consumers can use Storivita for free unless they switch their account to a Business Account.`,
        },
        {
            q: "Que: Who are the founders of Storivita?",
            a: `Ans: Storivita was founded by Jasbeer Kour and Nihal Anshu.`,
        },
        {
            q: "Que: Is Storivita a company?",
            a: `Ans: No. Storivita is a brand name, and its parent company is NAUMS Private Limited.`,
        },
        {
            q: "Que. When will Storivita launch its main application?",
            a: `Ans: We are working on it and will share updates very soon.`,
        },
        {
            q: "Que: Which sectors will be available on Storivita in the future?",
            a: `Ans: In the future, businesses from Fashion, Cosmetics, Sports, Pet Supplies, Electronics, and 10+ other sectors will be able to register.`,
        },
        {
            q: "Que: What happens if a business plan expires or is not renewed?",
            a: `Ans: If the subscription plan expires or is not renewed, the business account will be disabled, and its products/services will no longer be visible to consumers.`,
        },
        {
            q: "Que: Which country is Storivita based in?",
            a: `Ans: Storivita is based in Bharat (India).`,
        },
        {
            q: "Que: Will Storivita operate only in India?",
            a: `Ans: No. We plan to make Storivita operational at a global level.`,
        },
        {
            q: "Que: How does Storivita help businesses that operate offline?",
            a: `Ans: Whether your business operates offline or online, Storivita helps you reach more consumers. It allows customers to discover your products and services, interact with you directly, and make purchases both offline and online.`,
        },
    ];

    return (
        <div className="help-page">
            <Container className="contact-section">
                <Row className="align-items-center">
                    <Col xs={12} md={8} className="order-1 order-md-2 mb-5">
                        <img
                            src={help}
                            alt="Help"
                            className="img-fluid hero-img"
                        />
                    </Col>
                    <Col xs={12} md={4} className="order-2 order-md-1">
                        <h1 className="hero-title">Welcome to the Storivita Help Center! </h1>
                        <p className="hero-text mb-3">
                            Here you’ll find answers to common questions about using our platform, managing your business profile, and getting the most out of Storivita.
                        </p>
                        <Button className="theme-primary-filled">Chat With Us</Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="contact-bg-section">
                <Row>
                    <h4>FAQs (Frequently Asked Questions)</h4>
                </Row>
            </Container>

            <Container className="faq-section my-5">
                <Row>
                    <Col md={8}>
                        <div className="faq-list">
                            {faqs.map((item, i) => (
                                <div key={i} className="faq-item">
                                    <p className="faq-q">{item.q}</p>
                                    <p className="faq-a text-muted mb-4">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="contact-card text-center">
                            <h5>Still Need Help?</h5>
                            <p>📧 Email: support@storivita.com</p>
                            <p>📞 Phone: +91 9939098620, 7992260293</p>
                            <p>
                                📍 Address: 412/19, Chatai Ganj, Ajmer, Rajasthan 305001.
                                <br />
                                A-4, A-Block, Rajpur Khurd, Chattarpur, 110068, New Delhi, Delhi
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HelpPage;
