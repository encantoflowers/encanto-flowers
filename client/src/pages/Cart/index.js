import React, { useEffect , useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Button , Table, Container  } from 'react-bootstrap';
import './style.css'
// import QuantityPicker from '../../components/QuantityPicker';
import QuantityPicker from '../../components/QuantityPicker';

const stripePromise = loadStripe('pk_test_51L0VV3LPz0RFKIjd3EYrAXUdRZuvg8UiM7umz4piCUvWVKswkNXlX16hNBy4W4beVZo2xcCLNyXOffGD7MRzTMrv00ynQ9o8ej');

function Cart() {
  const [qty, setQty] = useState(1);
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
      console.log(item.name)
      console.log(item.price)
      console.log(item.purchaseQuantity)
    });
    return sum.toFixed(2);
  }

  function calculateItemTotal(item) {
    return item.price * item.purchaseQuantity
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
    <div className='shopping-cart my-5 pb-5'>
      <Container> 
      <h3>Your Cart Items</h3>
      <a href="#">Back to shopping</a>

      <Table striped>
        <thead className='table-header'>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
   

        {state.cart.map((item) => (
          <tr> 
            <td>
            <img src={item.image[0].img} alt={item.name} style={{width: "50px"}} className="thumbnail-img"></img>
            </td>
            <td>
              {item.name}
            </td>
            <td>
              ${item.price}
            </td>
            <td>{item.purchaseQuantity}</td>
            {/* <td><QuantityPicker
            qty = {qty}
            setQty =  {setQty} /> </td> */}
            <td>${calculateItemTotal(item)}</td>
          </tr>
        ))}
  

        </tbody>
      </Table>
      {/* <Col>
        {state.cart.map((item) => (
          <CartItems item={item} />
        ))}
      </Col> */}
      <p style={{textAlign: "right"}}>Subtotal: ${calculateTotal()}</p>
      <p className='fineprint'>Tax and shipping cost will be calulated later.</p>
      <Button variant="success" onClick={submitCheckout}>Checkout</Button>
      </Container>
    </div>
  )
}

export default Cart;