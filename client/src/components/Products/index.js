import React, { useEffect } from 'react'
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import {
    UPDATE_PRODUCTS
} from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
// import ProductItem from '../ProductItem';
import { Container , Card, Row} from 'react-bootstrap';
import './style.css'


function AllProducts() {

    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

    const { products } = state;

    useEffect(() => {
        if (data) {
            console.log(data);
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            idbPromise('products', 'get').then((product) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        }
    }, [data, loading, dispatch]);

    // function filterProducts() {
    //     if (!currentCategory) {
    //         return state.products;
    //     }

    //     return state.products.filter(
    //         (product) => product.category._id === allProducts
    //     );
    // }

    return (
        <Container className='card-container'>
            {/* loop through each product and generate a card */}
                <Row xs={1} s={2} md={3} lg={4} className='g-4'>
                {data ? (
                    data.products.map((product) => (
                        <Card className="single-card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', alignContent: 'center' }} key={product._id}>
                        
                        <Card.Img variant="top" src={product.image[0].img} style={{paddingTop: '10px'}} />
                        <Card.Body>
                            <Card.Title className="product-name">{product.name}</Card.Title>
                            <Card.Text className="price">{product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
                    
            </Row>
        </Container>    
    )
}

export default AllProducts;
