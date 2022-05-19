import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

export default function Hero() {

    return (
        <div>
            <img src="/images/Hero_Image.jpg" className='hero-img' />
            <Row className='d-flex'>
                <Col><img src="/images/romance.jpg" className='category-img d-flex' /></Col>
                <Col><img src="/images/get_well.jpg" className='category-img d-flex' /></Col>
                <Col><img src="/images/simpathy.jpg" className='category-img d-flex' /></Col>

            </Row>
        </div>
    )

}
