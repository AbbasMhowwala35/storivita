import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import gplay from '../assets/images/google-play.svg'

const Download = () => {
    return (
        <Container className='my-5'>
            <Row className="align-items-center text-center">
                <h3>Download the app and get started!</h3>
                <div className="buttons mt-3">
                    <div className='d-flex justify-content-center gap-3 align-items-center'>
                        <Button className="theme-primary-filled">Download Now</Button>
                        <Button className="play-store-button">
                            <img src={gplay} className='gplay' />
                        </Button>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Download
