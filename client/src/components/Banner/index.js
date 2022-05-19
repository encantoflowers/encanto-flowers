import './style.css'
import { Container , Row, Col, Button } from 'react-bootstrap';
import React from 'react'


export default function Banner () {

    return (
        <Container fluid  className='banner-container d-flex align-items-center justify-content-center'>
            <h3>We deliver in San Diego</h3>
        </Container>
    )


}