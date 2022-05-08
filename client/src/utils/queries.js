import { gql } from '@apollo/client';

export const QUERY_TAGS = gql`
    query allTags {
        tags {
            _id
            occasions
            colors
            types
        }
    }
`