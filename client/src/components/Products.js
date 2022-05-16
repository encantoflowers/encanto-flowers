import React from 'react'
import { QUERY_PRODUCTS } from '../utils/queries';

export default function AllProducts() {

    const { loading, error, data } = useQuery(QUERY_PRODUCTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    function filterProducts() {
        
    }

    return (
        <Container>
        <div>AllProducts</div>
        {/* loop through each product and generate a card */}

        </Container>
    )
}
