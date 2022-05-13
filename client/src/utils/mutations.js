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

export const ADD_TAG = gql`
    mutation addTag($Name: String ) {
        addTag(Name: $Name) {
            _id
            Name
            occasions {
            Name
            }
            colors {
            Name
            }
            types {
            Name
            }
        }
    }
`

export const ADD_OCCASION = gql`
    mutation addOccasion($Name: String! ) {
        addOccasion(Name: $Name) {
            _id
            Name
        }
    }
`

export const ADD_COLOR = gql`
    mutation addColor($Name: String! ) {
        addColor(Name: $Name) {
            _id
            Name
        }
    }
`

export const ADD_TYPE = gql`
    
`

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