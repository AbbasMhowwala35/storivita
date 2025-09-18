import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import p1 from '../assets/images/p1.svg'
import pc1 from '../assets/images/pc1.svg'
import pc2 from '../assets/images/pc2.svg'
import pc3 from '../assets/images/pc3.svg'
import gplay from '../assets/images/google-play.svg'

import '../assets/css/Pricing.css';

export default function Pricing() {
    const playStoreLink = "https://play.google.com/store/apps/details?id=com.store.storivita"

    const handleDownloadClick = () => {
        window.open(playStoreLink, "_blank", "noopener,noreferrer")
    }
    
    const [activeKey, setActiveKey] = useState('city');
    return (
        <>
            <div className='pricing-page'>
                <Container>
                    <Row className="align-items-center pricing-content">
                        <Col xs={12} md={6} className="order-1 order-md-2 text-center">
                            <img
                                src={p1}
                                alt="Pricing illustration"
                                className="img-fluid"
                            />
                        </Col>
                        <Col xs={12} md={6} className="order-2 order-md-1">
                            <h4>Simple Pricing. No Hidden Fees.</h4>
                            <p className="text-orange">
                                Enjoy a 90-day free trial – no commitment required.
                            </p>
                            <p>
                                Storivita offers simple and flexible subscription plans designed to help
                                local businesses build their digital presence and grow. You can choose to
                                promote your business at:
                            </p>
                            <ul>
                                <li>Local Level – Within a single city</li>
                                <li>Regional Level – Across multiple cities</li>
                            </ul>
                            <p>
                                No matter which plan you select, you get full access to all platform features.
                                Your chosen area (local or regional) only defines where your listings and
                                promotions will be visible to customers.
                            </p>
                            <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                                <Nav variant="pills" className="mb-5 pricing-tabs-nav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="city" className="pricing-tab">City Level</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="regional" className="pricing-tab">Regional</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="national" className="pricing-tab" disabled>National</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="global" className="pricing-tab" disabled>Global</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className=''>
                                    <Tab.Pane eventKey="city">
                                        <Row className='mb-5'>
                                            <Col md={4} xs={5}>
                                                <div className='pricing-card'>
                                                    <div className='d-flex gap-2'>
                                                        <img src={pc1} className='img-fluid' />
                                                        <span>Monthly [+18 tax]</span>
                                                    </div>
                                                    <div className='price'>
                                                        <p>₹ <b>499.00</b></p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4} xs={5}>
                                                <div className='pricing-card'>
                                                    <div className='d-flex gap-2'>
                                                        <img src={pc2} className='img-fluid' />
                                                        <span>Quarterly [+18 tax]</span>
                                                    </div>
                                                    <div className='price'>
                                                        <p>₹ <b>1299.00</b></p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4} xs={5}>
                                                <div className='pricing-card'>
                                                    <div className='d-flex gap-2'>
                                                        <img src={pc3} className='img-fluid' />
                                                        <span>Yearly [+18 tax]</span>
                                                    </div>
                                                    <div className='price'>
                                                        <p>₹ <b>4699.00</b></p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="short-content">
                                            <h6>City Level Plans:</h6>
                                            <ul>
                                                <li>Appear in local search results</li>
                                                <li>Attract nearby customers</li>
                                                <li>Increase walk-ins, calls, or online orders in your area</li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="regional">
                                        <Row className='mb-5'>
                                            <Col md={4} xs={5}>
                                                <div className='pricing-card'>
                                                    <div className='d-flex gap-2'>
                                                        <img src={pc1} className='img-fluid' />
                                                        <span>Monthly [+18 tax]</span>
                                                    </div>
                                                    <div className='price'>
                                                        <p>₹ <b>1199.00</b></p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4} xs={5}>
                                                <div className='pricing-card'>
                                                    <div className='d-flex gap-2'>
                                                        <img src={pc2} className='img-fluid' />
                                                        <span>Quarterly [+18 tax]</span>
                                                    </div>
                                                    <div className='price'>
                                                        <p>₹ <b>2999.00</b></p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4} xs={5}>
                                                <div className='pricing-card'>
                                                    <div className='d-flex gap-2'>
                                                        <img src={pc3} className='img-fluid' />
                                                        <span>Yearly [+18 tax]</span>
                                                    </div>
                                                    <div className='price'>
                                                        <p>₹ <b>9999.00</b></p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="short-content">
                                            <h6>Regional Level Plans:</h6>
                                            <p className='text-black'>If you're expanding across cities, choose a Regional Plan to reach a wider audience. These plans are ideal for businesses with a presence in multiple cities and are designed to help you:</p>
                                            <ul>
                                                <li>Showcase your business across multiple city markets</li>
                                                <li>Reach and engage customers in different locations</li>
                                                <li>Strengthen your regional presence and drive growth across areas</li>
                                                <li>Promote consistently across all the cities you operate in</li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="national">
                                        <p>National plan details will go here...</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="global">
                                        <p>Global plan details will go here...</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="blue-bg-section text-black mt-5">
                    <Container><Row className="align-items-center text-center">
                        <h3>Download the app and get started!</h3>
                        <div className="buttons mt-3">
                            <div className='d-flex justify-content-center gap-3 align-items-center'>
                                <Button onClick={handleDownloadClick} className="theme-primary-filled">Download Now</Button>
                                <Button onClick={handleDownloadClick} className="play-store-button">
                                    <img src={gplay} className='gplay' />
                                </Button>
                            </div>
                        </div>
                    </Row></Container>
                </Container>
            </div>
        </>
    );
}
