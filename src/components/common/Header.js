import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const handleNavClick = () => {
        setExpanded(false);
    }
    return (
        <Navbar expand="lg" className="custom-navbar shadow-sm" expanded={expanded}>
            <Container>
                <Navbar.Brand href="/" className="navbar-logo gap-3 d-flex align-items-center">
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_107_91)">
                            <rect x="4.51599" y="4" width="50" height="50" rx="5" fill="#F5564E" />
                        </g>
                        <circle cx="29.516" cy="29" r="25" fill="#F5564E" />
                        <path d="M14.516 14L37.316 17.4544L44.516 14L40.0622 36.3549L44.516 44L21.716 38.8337L14.516 44L19.316 22.4119L14.516 14Z" fill="white" />
                        <defs>
                            <filter id="filter0_d_107_91" x="0.515991" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_91" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_91" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <span className="brand-text"><b>Storivita</b></span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : true)}
                />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="gap-3">
                        <Nav.Link as={NavLink} onClick={handleNavClick} to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavClick} to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavClick} to="/pricing" className={({ isActive }) => isActive ? "active-link" : ""}>Pricing</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavClick} to="/help-page" className={({ isActive }) => isActive ? "active-link" : ""}>Help</Nav.Link>
                        <Nav.Link as={NavLink} onClick={handleNavClick} to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
