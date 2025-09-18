import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import gplay from '../assets/images/google-play.svg'

const Download = () => {
    const playStoreLink = "https://play.google.com/store/apps/details?id=com.store.storivita"

    const handleDownloadClick = () => {
        window.open(playStoreLink, "_blank", "noopener,noreferrer")
    }

    return (
        <Container className='my-5'>
            <Row className="align-items-center text-center">
                <h3>Download the app and get started!</h3>
                <div className="buttons mt-3">
                    <div className='d-flex justify-content-center gap-3 align-items-center'>
                        <Button 
                            className="theme-primary-filled" 
                            onClick={handleDownloadClick}
                        >
                            Download Now
                        </Button>
                        <Button 
                            className="play-store-button" 
                            onClick={handleDownloadClick}
                        >
                            <img src={gplay} className='gplay' alt="Google Play" />
                        </Button>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Download
