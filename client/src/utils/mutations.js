import { gql } from '@apollo/client';

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