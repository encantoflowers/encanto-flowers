import React from "react";
import Products from '../components/Products'
import CategoryMenu  from "../components/CategoryMenu";
import { Container } from "react-bootstrap";

const Categories = () => {
    return (
        <Container>
            <CategoryMenu/>
            <Products />
        </Container>
    )
}

export default Categories;