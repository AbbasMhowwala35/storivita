import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/Home.css'
import heroImg from '../assets/images/hero.png'
import h1 from '../assets/images/1.svg'
import h2 from '../assets/images/2.svg'
import h3 from '../assets/images/3.svg'
import h4 from '../assets/images/4.svg'
import arrow from '../assets/images/arrow.svg'
import gplay from '../assets/images/google-play.svg'
import apple from '../assets/images/apple.svg'
const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const steps = [
        {
            icon: h1,
            title: "Register Your Business",
            text: "Start by registering on Storivita. Enter required details to set up your account.",
        },
        {
            icon: h2,
            title: "Profile Generated",
            text: "As soon as you register, Storivita automatically creates a public business profile for you. You can then upload your products and services with product details, images, pricing and descriptions.",
        },
        {
            icon: h3,
            title: "Product Display",
            text: "All your listed products appear on the platform’s home feed - based on your location and business type. This ensures high visibility among relevant customers.",
        },
        {
            icon: h4,
            title: "Easy customer Access",
            text: "Registered users on Storivita can easily explore verified local businesses in their area. They can browse offerings, contact businesses, or make purchases both online & offline - helping you expand your reach without extra marketing efforts.",
        },
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home-page">
            <Container className="hero-section">
                <Row className="align-items-center">
                    <Col
                        md={{ span: 6, order: 2 }}
                        xs={{ span: 12, order: 1 }}
                        className="text-center"
                    >
                        <img src={heroImg} alt="Illustration" className="img-fluid" />
                    </Col>
                    <Col
                        md={{ span: 6, order: 1 }}
                        xs={{ span: 12, order: 2 }}
                    >
                        <h1>Build Your Brand & Digital Presence - Without Building an App or Website</h1>
                        <p>
                            Storivita simplifies the way businesses build their online presence.
                            Whether you’re a single-store brand or a multi-location business, get
                            started today...
                        </p>
                        <div className="hero-buttons">
                            <div className="d-flex gap-3 align-items-center">
                                <Button className="theme-primary-filled">Download Now</Button>
                                <Button className="play-store-button">
                                    <img src={gplay} className="gplay" alt="Google Play" />
                                </Button>
                            </div>
                            <div className="d-flex gap-3 align-items-center">
                                <Button className="theme-primary-white">Coming Soon</Button>
                                <Button className="play-store-button">
                                    <img src={apple} className="gplay" alt="Apple Store" />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='bg-section'>
                <Row className="align-items-center text-white">
                    <Col md={12}>
                        <h3>How Storivita Works</h3>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center align-items-stretch">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <Col md={2} sm={6} className="step-col d-flex">
                                <div className={`step-card ${!isMobile ? 'flex-grow-1' : ''}`}>
                                    <div className='img'>
                                        <img src={step.icon} alt={step.title} className="step-icon" />
                                    </div>
                                    <h5>{step.title}</h5>
                                    <p>{step.text}</p>
                                </div>
                            </Col>
                            {index < steps.length - 1 && (
                                <Col md={1} className="d-flex justify-content-center align-items-center">
                                    <img src={arrow} alt="arrow" className="img-fluid arrow-col" />
                                </Col>
                            )}
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
            <Container fluid className="blue-bg-section text-black">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3 className='text-blue-bg'>Your Business, One Platform – Local to Limitless</h3>
                            <p>
                                At Storivita, we are building a unified digital platform to help local
                                businesses take charge of their digital presence. Our goal is simple — to
                                make your business more visible, accessible, and successful through a smart,
                                easy-to-use app. Whether you're running a grocery store or managing a
                                restaurant, Storivita is designed to support you from the ground up — so you
                                can grow, without worrying about complex technology or high digital costs.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default Home;
