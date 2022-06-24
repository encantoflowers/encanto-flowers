import { gql } from '@apollo/client';

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

export const DELETE_USER = gql`
  mutation deleteUser(
    $id: ID!
  ) {
    deleteUser(
      id: $id
    ) {
        _id
    }
  }
`;

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

export const ADD_CATEGORY = gql`
    mutation addCategory($Name: String ) {
        addCategory(Name: $Name) {
            _id
            Name
        }
    }
`;

export const REMOVE_CATEGORY = gql`
    mutation removeCategory($Name: String! ) {
        removeCategory(Name: $Name) {
            _id
            Name
        }
    }
`;

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

// testing 