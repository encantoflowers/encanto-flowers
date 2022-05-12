import { gql } from '@apollo/client';

export const QUERY_TAGS = gql`
    query categories {
        categories {
            _id
            Name
        }
    }
`