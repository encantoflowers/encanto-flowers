// Import useEffect from React.
import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './style.css'

export default function QuantityPicker() {
    // Change the default state of temp to 75 degrees.
    const [qty, setQty] = useState(0);

    // Use useEffect hook to set the document.title to the current temp
    //   useEffect(() => {
    //     document.title = `${temp}° Fahrenheit`;
    //   });

    // Handler for increasing the temp by 1
    const increaseQty = () => {
        setQty(qty + 1);
    };

    // Handler for decreasing the temp by 1
    const decreaseQty = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    };

    return (
   <Container className='button-container'>
            <Row>
                <Col>
                    <Button onClick={increaseQty} className="button-qty button-sel">
                        +
                    </Button>
                </Col>
                {qty}
                <Col>
                    <Button onClick={decreaseQty} className="button-qty button-sel">
                        -
                    </Button></Col>

            </Row>

            </Container>



    );
}

