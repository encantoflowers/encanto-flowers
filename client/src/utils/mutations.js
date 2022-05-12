import { gql } from '@apollo/client';

export const ADD_CATEGORY = gql`
    mutation addCategory($Name: String ) {
        addCategory(Name: $Name) {
            _id
            Name
        }
    }
`

export const REMOVE_CATEGORY = gql`
    mutation removeCategory($Name: String! ) {
        removeCategory(Name: $Name) {
            _id
            Name
        }
    }
`