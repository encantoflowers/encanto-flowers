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

export const ADD_COLOR = gql`
    mutation addColor($Name: String! ) {
        addColor(Name: $Name) {
            _id
            Name
        }
    }
`;

export const ADD_TYPE = gql`
    
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

