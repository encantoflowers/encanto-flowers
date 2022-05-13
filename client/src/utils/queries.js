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
`;

export const QUERY_TAGS = gql`
    query allTags {
        tags {
            _id
            occasions
            colors
            types
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