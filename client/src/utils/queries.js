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
// good minus the categories
export const QUERY_PRODUCT = gql`
    query getProduct($_id: ID!) {
        product (_id: $_id) {
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
                _id
                Name
            }
        }
    }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!, $total: Float! ) {
    checkout(products: $products, total: $total) {
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
            categories {
                _id
                Name
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
export const QUERY_USER = gql`
    query user {
        user {
            userName
            email
            password
            role
            orders {
                _id
                purchaseDate
                products {
                    _id
                    name
                    description
                    price
                    # quantity
                   image {
                       img 
                   }
                }

            }
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