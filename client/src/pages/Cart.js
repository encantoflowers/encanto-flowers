import React, { useEffect } from 'react';
import CartItems from '../components/CartItems';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { Row, Col } from 'react-bootstrap';

const stripePromise = loadStripe('pk_test_51L0VV3LPz0RFKIjd3EYrAXUdRZuvg8UiM7umz4piCUvWVKswkNXlX16hNBy4W4beVZo2xcCLNyXOffGD7MRzTMrv00ynQ9o8ej');

function Cart() {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }
    return (
        <div>
            <h2>Your Cart Items</h2>
            <a href="#">Back to shopping</a>
            <Row>
                <div className="col-6">Product</div>
                <div className="col-2">Price</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Subtotal</div>
            </Row>
            <Col>
              {state.cart.map((item) => (
                  <CartItems item={item} />
              ))}
            </Col>
        </div>
    )
}

export default Cart;