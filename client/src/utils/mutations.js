import { gql } from '@apollo/client';

// good
// export const ADD_USER = gql`
//     mutation addUser($user: UserInput) {
//         addUser(user: $user) {
//             name
//             email
//             password
//         }   
//     }
// `;
export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
    $role: Int!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
      role: $role
    ) {
      token
      user {
        _id
      }
    }
  }
`;
// not logged in
export const ADD_ORDER = gql`
    mutation addOrder($products: [ID]!, $total: Float!) {
        addOrder(products: $products, total: $total) {
            _id
            purchaseDate
            products {
                _id
                name
                price
                description
                image {
                  _id
                  description
                  img
                }
            }
            total
        }
    }
`;
// good
export const ADD_CATEGORY = gql`
    mutation addCategory($Name: String ) {
        addCategory(Name: $Name) {
            _id
            Name
        }
    }
`;
// good
export const REMOVE_CATEGORY = gql`
    mutation removeCategory($Name: String! ) {
        removeCategory(Name: $Name) {
            _id
            Name
        }
    }
`;

// export const ADD_COLOR = gql`
//     mutation addColor($Name: String! ) {
//         addColor(Name: $Name) {
//             _id
//             Name
//         }
//     }
// `;

// export const ADD_TYPE = gql`
    
// `;
// good maybe in queries?
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

