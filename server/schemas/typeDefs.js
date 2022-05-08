const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Tag {
        _id: ID
        occasions: [String]
        colors: [String]
        types: [String]
    }

    type Query {
        tags: [Tag]!
    }

    type Mutation {
        addTag(occasion: String, color: String, type: String)
    }
`

module.exports = typeDefs;