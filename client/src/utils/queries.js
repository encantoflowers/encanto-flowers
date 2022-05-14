import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($user: UserInput) {
        addUser(user: $user) {
            name
            email
            password
        }
    }
`;

export const ADD_ORDER = gql`
    mutation addOrder($products: [ProductInput]) {
        addOrder(products: $products) {
            _id
            purchaseDate
            products {
                _id
                name
                price
                image
                description
            }
        }
    }
`

export const QUERY_PRODUCT = gql`
    query getProduct($productId: ID) {
        product (productId: $product) {
            _id
            name
            description
            price
            image {
                name
                description
                img
            }
            category {
                name
            }
        }
    }
`

export const QUERY_ALL_PRODUCTS = gql`
     query products {
        products {
            _id
            name
            description
            price
            image {
                name
                description
                img
            }
            category {
                name
            }
        }
        }
`

export const QUERY_TAGS = gql`
    query categories {
        categories {
            _id
            Name
        }
    }
`

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            name
            email
            password
        }
    }
`;