import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { QUERY_PRODUCT } from '../utils/queries';
import { QuantityPicker } from 'react-qty-picker';
import {
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    UPDATE_PRODUCTS
} from '../utils/actions';
import { Container , Row, Col, Button } from 'react-bootstrap'


export default function ProductItem(item) {
    const getQuantity = (value) => {
        console.log(value)
    }
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const [currentProduct, setCurrentProduct] = useState({});
    const { loading, data } = useQuery(QUERY_PRODUCT);
    const { products, cart } = state;

    useEffect(() => {
        // already in global store
        if (products.length) {
          setCurrentProduct(products.find((product) => product._id === id));
        }
        // retrieved from server
        else if (data) {
          dispatch({
            type: UPDATE_PRODUCTS,
            products: data.products,
          });
    
          data.products.forEach((product) => {
            idbPromise('products', 'put', product);
          });
        }
        // get cache from idb
        else if (!loading) {
          idbPromise('products', 'get').then((indexedProducts) => {
            dispatch({
              type: UPDATE_PRODUCTS,
              products: indexedProducts,
            });
          });
        }
      }, [products, data, loading, dispatch, id]);

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1 },
            });
            idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        }
    };

    return (
        <Container fluid >
            {/* item image
            item name
            item description
            item price
            quantity picker
            add to cart
            call to order */}
            <Row>
                <Col>
                    <img
                        src={`/images/${currentProduct.image.img}`}
                    />
                </Col>
                <Col>
                    {currentProduct.name}
                    {currentProduct.description}
                    {currentProduct.price}
                    <QuantityPicker min={1} onChange={getQuantity} />
                    <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
                    <a href="tel:123456789"><Button variant="primary">Call to Order</Button></a>
                </Col>
            </Row>
        </Container>
    )
}
