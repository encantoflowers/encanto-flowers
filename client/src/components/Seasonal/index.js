import React from 'react'
import { Container, Row, Button, Card } from 'react-bootstrap'
import './style.css'

export default function Seasonal() {
    return (
        <Container className='card-container'>
            <h2>Seasonal</h2>
        <p>Order it for your loved ones.</p>
            <Row xs={1} s={2} md={3} lg={4} className='g-4'>
            <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="images/Bouquet05.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Garden Pathway</Card.Title>
                        <Card.Text className="price">$35.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="images/Bouquet06.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Peace, Prayers & Blessings</Card.Title>
                        <Card.Text className="$59.99">Price</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="images/Bouquet07.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Cherished Memories</Card.Title>
                        <Card.Text className="price">$39.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="images/Bouquet09.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Vibrant Floral Medley</Card.Title>
                        <Card.Text className="price">$35.99</Card.Text>
                    </Card.Body>
                </Card>
                <Button className='button-shopnow mx-auto'>Shop Now</Button>
</Row>
        </Container>


    )
}