import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import a1 from '../assets/images/a1.png'
import a2 from '../assets/images/a2.png'
import a3 from '../assets/images/a3.png'
import a4 from '../assets/images/a4.png'
import a5 from '../assets/images/a5.png'
import Download from '../common/Download';

const AboutUs = () => {
    return (
        <div className="about-page">
            <Container>
                {/* Who We Are */}
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="order-1 order-md-2">
                        <img
                            src={a1}
                            alt="Who We Are"
                            className="img-fluid"
                        />
                    </Col>
                    <Col xs={12} md={6} className="order-2 order-md-1">
                        <h4>📘 <b>Who We Are</b></h4>
                        <p>
                            We are a passionate team of creators, marketers, developers, and entrepreneurs on a mission
                            to uplift the backbone of our economy — local businesses.
                        </p>
                        <p>
                            In a world where digital competition is rising, we believe every business deserves an equal
                            chance to grow online, without needing hi-tech experts or expensive infrastructure.
                        </p>
                        <p>
                            Our platform helps you get started with ease and gives you the tools to scale when you’re ready.
                        </p>
                        <p>
                            <b>Storivita is a brand by Naums Private Limited</b> — a parent entity focused on building
                            innovative, accessible, and scalable solutions for India’s growing business ecosystem.
                        </p>
                    </Col>
                </Row>
                {/* Current Focus */}
                <Row className="align-items-center about-us-section">
                    <Col md={6}>
                        <img
                            src={a2}
                            alt="Current Focus"
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6}>
                        <h4>🚀 <b>Current Focus</b></h4>
                        <p>Storivita is currently focused on serving two core sectors that form the foundation of our platform::</p>
                        <ol>
                            <li><b>Grocery & Household Stores 🛒</b></li>
                            <li><b>Restaurants & Food Services 🍽</b></li>
                        </ol>
                        <p>
                            We are helping local vendors in these high-demand industries establish and manage their digital presence, connect with nearby customers, and improve visibility — all through a simple, intuitive interface. Storivita does not interfere with business operations or delivery processes; instead, we provide the tools to help them grow independently.
                        </p>
                        <p>This focused approach allows us to closely monitor user behavior, engagement patterns, and platform impact — enabling us to design a more effective and scalable experience for future sectors.</p>
                    </Col>
                </Row>
                {/* Our Vision */}
                <Row className="align-items-center about-us-section">
                    <Col xs={12} md={6} className="order-1 order-md-2 ">
                        <img
                            src={a3}
                            alt="Our Vision"
                            className="img-fluid"
                        />
                    </Col>
                    <Col xs={12} md={6} className="order-2 order-md-1">
                        <h4 className='extra-margin'>🛤️ <b> Our Vision – The Road Ahead</b></h4>
                        <p>
                            Storivita has begun its journey by supporting local and regional businesses — empowering them to establish a strong digital presence and connect with nearby customers.
                        </p>
                        <p>But this is only the beginning. Our long-term vision is to evolve Storivita into a comprehensive digital platform for all types of businesses, helping them grow from local to global.
                        </p>
                        <p>🏁 <b>Future Sectors Coming Soon</b></p>
                        <ul>
                            <li>💄 Cosmetics</li>
                            <li>💇 Beauty Parlours & Saloon</li>
                            <li>🔌 Electronics & Electricals</li>
                            <li>👗 Fashion & Lifestyle</li>
                            <li>💪 Fitness & Wellness</li>
                            <li>🛠 Hardware & Sanitary</li>
                            <li>🐶 Pet Services ...and many more.</li>
                        </ul>
                        <p>Our goal is to ensure every sector gets the right digital foundation to thrive locally, expand regionally, and ultimately reach a global audience through a single, unified platform — Storivita.</p>
                    </Col>
                </Row>
                {/* Our Journey */}
                <Row className="align-items-center about-us-section">
                    <Col md={6} className=''>
                        <img
                            src={a4}
                            alt="Our Journey"
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6}>
                        <h4 className='extra-margin'>📍 <b>Our Journey So Far</b></h4>
                        <p>Storivita is built on the belief that every business — no matter how small — deserves a powerful digital presence. Here’s a look at how our journey has unfolded and where we’re headed next:</p>
                        <Table responsive className='milestone-table'>
                            <thead>
                                <tr>
                                    <td>Milestone</td>
                                    <td>Year</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>🚀 Platform Launch — </b> Storivita goes live with Grocery and Restaurant  categories in key cities, marking the beginning of our mission to simplify  digital access for local businesses.</td>
                                    <td>2025</td>
                                </tr>
                                <tr>
                                    <td><b>🤖 AI Integration — </b> We integrate Artificial Intelligence to streamline business operations, enable automation, and deliver smarter, data-driven insights to our users.</td>
                                    <td>2026</td>
                                </tr>
                                <tr>
                                    <td> <b>🌐 Sector Expansion — </b>Storivita scales into 15+ new business verticals including Beauty, Education, Electronics, and more — setting the stage for a wider impact. <br /> <br />
                                        This is just the start. With each milestone, we’re getting closer to building a truly universal platform that empowers businesses to thrive — locally, regionally, and globally.</td>
                                    <td>2027</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {/* Why Choose */}
                <Row className="align-items-center about-us-section">
                    <Col xs={12} md={6} className="order-1 order-md-2 text-center">
                        <img
                            src={a5}
                            alt="App Preview"
                            className="img-fluid"
                        />
                    </Col>
                    <Col xs={12} md={6} className="order-2 order-md-1">
                        <h4 className='extra-margin'>💡 <b>Why Choose Storivita?</b></h4>
                        <Table responsive className='milestone-table'>
                            <thead>
                                <tr>
                                    <td>Feature</td>
                                    <td>What It Means</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Local-first model</td>
                                    <td>Build your presence in your city before expanding further</td>
                                </tr>
                                <tr>
                                    <td>Plug & play setup</td>
                                    <td>Get started instantly—no coding, no complexity</td>
                                </tr>
                                <tr>
                                    <td>Cross-category vision</td>
                                    <td>Designed to grow with your business across sectors</td>
                                </tr>
                                <tr>
                                    <td>Business-friendly tools</td>
                                    <td>Promotions, listings, reviews, reports & more—all in one place</td>
                                </tr>
                                <tr>
                                    <td>Trusted Growth Partner</td>
                                    <td>We grow when you grow. Your success is our mission</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {/* Call to Action */}
                <Row className="text-center build-box extra-margin">
                    <Col>
                        <h3>❤️ ️Let’s Build Back Stronger—Together</h3>
                        {/* <p>No commissions. No complex tech. Just you, your business, and your growth.</p>
                        <Button variant="danger" className="mt-3">Download Now</Button> */}
                    </Col>
                </Row>
                <Row className="text-center build-box-content justify-content-center ">
                    <Col>
                        <p>
                            In today's fast-changing world, many local businesses are struggling to survive due to lack of digital exposure, rising online competition, and shifting customer habits.
                        </p>
                        <p>At Storivita, we believe it's time to change that.</p>

                        <p>We're not just offering a platform —
                            We're offering hope. A fresh start. A fighting chance.
                        </p>

                        <p>A way for every small business — from your neighborhood kirana store to your trusted food joint — to stand tall, go digital, and compete at par with big brands.
                            We’re bringing you your very own business app, so that you no longer stay behind in the digital race.
                        </p>

                        <p>📢 No commissions. No complex tech. Just you, your business, and your growth.
                        </p>
                    </Col>
                </Row>
                <Download />
            </Container>
        </div>
    );
};

export default AboutUs;
