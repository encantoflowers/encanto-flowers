import React, { useEffect } from 'react'
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import {
    UPDATE_PRODUCTS
} from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import ProductItem from '../ProductItem';
import { Container , Card, Col, Row, Button } from 'react-bootstrap';
import './style.css'


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
        <Container className='card-container'>
            {/* loop through each product and generate a card */}
            {/* <div className="flex-row"> */}
            <Row xs={1} s={2} md={3} lg={4} className="g-4">
                <Col>
                <Card className='single-card'>
                    <Card.Img src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
                    <Card.Body>
                        <Card.Title className='product-name' >Product Name</Card.Title>
                        <Card.Text className='price'>$9.99</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            
                
                </Row>
                {/* {filterProducts().map((product) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`/images/${product.image.img}`} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                ))} */}
            {/* </div> */}
        </Container>
    )
}
