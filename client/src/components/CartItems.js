import React, { useState } from 'react';
import QuantityPicker from './QuantityPicker';

function CartItems(item) {

    const {
        name,
        _id,
        price,
        description,
        purchaseQuantity,
        image, 
      } = item.item;

    const [subtotal, setSubtotal] = useState(price*purchaseQuantity);

    return (
        <div className="cart-item" key={_id}>
            <img src={`${image[0].img}`} />
            <div>{name}</div>
            <div>{price}</div>
            <QuantityPicker />
            <div>{subtotal}</div>
        </div>
    )
}

export default CartItems;