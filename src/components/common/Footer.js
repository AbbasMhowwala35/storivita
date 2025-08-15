import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

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
          <Col md={12} xs={12}>
            <h5><b>About Us</b></h5>
            <ul className='footer-links'>
              <li><a href="/about">Our Company</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/help-page">Help</a></li>
              <li><a href="/contact">Feedback</a></li>
            </ul>

            <br />
            <div className="d-block d-md-none">
              <h5><b>Reach out to us</b></h5>
              <ul className="footer-links">
                <li>
                  <FaEnvelope className="me-2" />
                  <a href="mailto:Support@storivita.com">Support@storivita.com</a>
                </li>
                <li>
                  <FaPhoneAlt className="me-2" />
                  <a href="tel:+919939098620">+91 9930986260</a>,{" "}
                  <a href="tel:+917992260293">7992260293</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="me-2" />
                  412/19, Chatai Ganj, Ajmer, Rajasthan 305001
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr />
        <br />
        <Row className='mt-3 align-items-center copyright-block'>
          <Col xs={12} md={6} className="footer-left text-center text-md-start mb-2 mb-md-0">
            <p>Copyright © 2025 NAUMS Private Limited. All rights reserved</p>
          </Col>
          <Col xs={12} md={6} className="footer-right text-center text-md-end">
            <p>
              <a href="/terms-and-conditions"><span>Legal •</span> Privacy Security</a>
            </p>
          </Col>
        </Row>
      </Container>

    </footer>
  );
};

export default Footer;
