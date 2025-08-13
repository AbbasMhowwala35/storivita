import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={12} className='text-center mb-5'>
            <h3>Storivita</h3>
          </Col>
        </Row>
        <Row className='footer-link'>
          <Col md={12} xs={5}>
            <h5><b>About Us</b></h5>
            <ul className='footer-links'>
              <li><a href="/about">Our Company</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/help-page">Help</a></li>
              <li><a href="/contact">Feedback</a></li>
            </ul>
          </Col>
          <Col xs={7} md={6} className="footer-right text-center text-md-end d-block d-md-none">
            <p>
              <a href="/help-page">Legal</a> • <a href="/terms-and-conditions">Privacy Security</a>
            </p>
          </Col>
        </Row>
        <hr />
        <br />
        <Row className='mt-3 align-items-center copyright-block'>
          <Col xs={12} md={6} className="footer-left text-center text-md-start mb-2 mb-md-0">
            <p>Copyright © 2025 NAUMS Private Limited. All rights reserved</p>
          </Col>
          <Col xs={12} md={6} className="footer-right text-center text-md-end d-none d-md-block">
            <p>
              <a href="/help-page">Legal</a> • <a href="/terms-and-conditions">Privacy Security</a>
            </p>
          </Col>
        </Row>
      </Container>

    </footer>
  );
};

export default Footer;
