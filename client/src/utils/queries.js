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
    mutation addOrder($products: [ID]) {
        addOrder(products: $products) {
            _id
            purchaseDate
            products {
                _id
                name
                price
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
            categories {
                Name
            }
        }
    }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

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