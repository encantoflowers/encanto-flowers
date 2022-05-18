import React, { useEffect } from 'react'
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import {
    UPDATE_PRODUCTS
} from '../utils/actions';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../utils/helpers';
import { useStoreContext } from '../utils/GlobalState';
import ProductItem from './ProductItem';
import { Container , Card, Col, Button } from 'react-bootstrap';

export default function AllProducts() {

    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            idbPromise('products', 'get').then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return state.products.filter(
            (product) => product.category._id === currentCategory
        );
    }

    return (
        <Container>
            {/* loop through each product and generate a card */}
            <div className="flex-row">
                {filterProducts().map((product) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`/images/${product.image.img}`} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    )
}
