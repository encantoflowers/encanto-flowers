import React from 'react'
import CartItems from '../components/CartItems';

function Cart(props) {
    return (
        <div>
            <h2>Your Cart Items</h2>
            <a href="#">Back to shopping</a>
            <div>
                <div>Product</div>
                <div>Price</div>
                <div>Quantitys</div>
                <div>Subtotal</div>
            </div>
            {props.items.map((item) => (
                <CartItems item={item} />
            ))}
        </div>
    )
}

export default Cart;