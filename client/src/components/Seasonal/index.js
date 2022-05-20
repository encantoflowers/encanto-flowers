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
                    <Card.Img variant="top" src="https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Product Name</Card.Title>
                        <Card.Text className="price">Price</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Product Name</Card.Title>
                        <Card.Text className="price">Price</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Product Name</Card.Title>
                        <Card.Text className="price">Price</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }}>
                    <Card.Img variant="top" src="https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg" style={{ paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title className="product-name">Product Name</Card.Title>
                        <Card.Text className="price">Price</Card.Text>
                    </Card.Body>
                </Card>
                <Button className='button-shopnow mx-auto'>Shop Now</Button>
</Row>
        </Container>


    )
}