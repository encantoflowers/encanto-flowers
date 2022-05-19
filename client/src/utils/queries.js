import { gql } from '@apollo/client';

// export const ADD_USER = gql`
//     mutation addUser($user: UserInput) {
//         addUser(user: $user) {
//             name
//             email
//             password
//         }
//     }
// `;
// not logged in
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
// good minus the categories
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
// good
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
            
        }
    }
`
// good
export const QUERY_CATEGORIES = gql`
    query categories {
        categories {
            _id
            Name
        }
    }
`
// maybe in queries
// export const LOGIN = gql`
//     mutation login($email: String!, $password: String!) {
//         login(email: $email, password: $password) {
//             name
//             email
//             password
//         }
//     }
// `;