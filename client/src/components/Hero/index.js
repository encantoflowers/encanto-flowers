import React from 'react'
import { Row, Col ,} from 'react-bootstrap'
import './style.css'

export default function Hero() {

    return (
        <div>
            <figure className='position-relative'>
            <img src="/images/Hero_Image.jpg" alt="hero bouquet" className='img-fluid' />
                <figcaption className='fig-caption'>
                    <h2>Flower Delivery</h2>
                    <h4>Flowers for every occassion</h4>
                </figcaption>
            </figure>
           

            <Row className='d-flex'>
                <Col><img src="/images/romance.jpg" className='category-img d-flex' alt="romatic flowers" /></Col>
                <Col><img src="/images/get_well.jpg" className='category-img d-flex' alt="white and blue flowers"/></Col>
                <Col><img src="/images/simpathy.jpg" className='category-img d-flex' alt="sympathy" /></Col>

            </Row>
        </div>
    )

}
