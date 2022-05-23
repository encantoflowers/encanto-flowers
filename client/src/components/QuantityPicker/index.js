// Import useEffect from React.
import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './style.css'

export default function QuantityPicker() {
    const [qty, setQty] = useState();

    const increaseQty = () => {
        setQty(qty + 1);
    };

    const decreaseQty = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    };

    return (
   <Container className='button-container'>
            <Row>
                <Col lg={3}>
                    <Button onClick={decreaseQty} className="button-qty button-sel">
                        -
                    </Button>
                </Col>
               <Col lg={3}>{qty}</Col> 
                <Col lg={3}>
                    <Button onClick={increaseQty} className="button-qty button-sel">
                        +
                    </Button></Col>

            </Row>
            </Container>

    );
}