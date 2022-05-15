import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { QUERY_PRODUCT } from '../utils/queries';
import { QuantityPicker } from 'react-qty-picker';


export default function ProductItem(item) {
    const getQuantity = (value) => {
        console.log(value)
    }
    const { loading, data } = useQuery(QUERY_PRODUCT);
    const product = data?.product || [];

    return (
        <Container>
            {/* item image
            item name
            item description
            item price
            quantity picker
            add to cart
            call to order */}
            <img
                src={`/images/${item.image.img}`}
            />
            {item.name}
            {item.description}
            {item.price}
            <QuantityPicker min={1} onChange={getQuantity} />
            

        </Container>
    )
}
