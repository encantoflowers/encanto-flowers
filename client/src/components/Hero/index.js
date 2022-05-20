import React from 'react'
import { Container, Row, Col ,} from 'react-bootstrap'
import './style.css'

export default function Hero() {

    return (
        <div>
            <figure className='position-relative'>
            <img src="/images/Hero_Image.jpg" className='img-fluid' />
                <figcaption>
                    <h2>Flower Delivery</h2>
                    <h4>Flowers for every occassion</h4>
                </figcaption>
            </figure>
           

            <Row className='d-flex'>
                <Col><img src="/images/romance.jpg" className='category-img d-flex' /></Col>
                <Col><img src="/images/get_well.jpg" className='category-img d-flex' /></Col>
                <Col><img src="/images/simpathy.jpg" className='category-img d-flex' /></Col>

            </Row>
        </div>
    )

}
