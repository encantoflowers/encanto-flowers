// Import useEffect from React.
import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './style.css'

export default function CartQtyPicker () {
    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty(qty + 1);
    };

    const decreaseQty = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    };

    return (
   <Container className='button-container-cart'>
            <Row>
                <Col>
                    <Button onClick={increaseQty} className="button-qty-cart button-sel-cart">
                        +
                    </Button>
                </Col>
                {qty}
                <Col>
                    <Button onClick={decreaseQty} className="button-qty-cart button-sel-cart">
                        -
                    </Button></Col>

            </Row>

            </Container>



    );
}