import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import './style.css'

export default function Featured() {
    return (
        <Container className='card-container'>
            <h2>Featured Arrangements </h2>
            <p>Order for your loved ones on that special occassion.</p>

            <Row xs={1} s={2} md={3} lg={4} className='g-4'>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="images/Bouquet01.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Lavender Garden Bouquet</Card.Title>
                        <Card.Text className="price">$29.99,</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="images/Bouquet02.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Healing Blue & White</Card.Title>
                        <Card.Text className="price">$29.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="images/Bouquet03.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Spring Sentiment Bouquet</Card.Title>
                        <Card.Text className="price">$35.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="images/Bouquet04.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Floral Embrace</Card.Title>
                        <Card.Text className="price">$48.99</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>


    )
}