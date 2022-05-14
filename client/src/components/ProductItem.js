import React, { useEffect, useState } from 'react'
import { QUERY_PRODUCT } from '../utils/queries';

export default function ProductItem(item) {

    const {
        name,
        _id,
        image,
        description,
        price,
    } = item;

    return (
        <Container>
            {/* item image
            item name
            item description
            item price
            quantity picker
            add to cart
            call to order */}
            <Row>
                <Col lg={6} md={6} sm={1}>
                    <img
                        src={`image/${image}`}
                    // placeholder address, need to update
                    />
                </Col>
                <Col lg={6} md={6} sm={1}>
                    <h3>${item.name}</h3>

                </Col>
            </Row>


        </Container>
    )
}
