import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const TermsandConditions = () => {
    return (
        <div className='terms-page'>
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={12}>
                        <h4>📄 <b> Terms & Conditions – Storivita</b></h4>
                        <p> Effective Date: 13-07-2025 </p>

                        <p>Welcome to Storivita! By accessing or using our app and services, you agree to be bound by the following terms and conditions. Please read them carefully.
                        </p>

                        <br />

                        <h5>1. Platform Usage</h5>
                        <p>Storivita provides a digital platform for businesses to list, promote, and manage their services locally.
                            You must be at least 18 years old to create a business account or make purchases.
                            You agree not to misuse the platform or violate any laws while using our services.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TermsandConditions
