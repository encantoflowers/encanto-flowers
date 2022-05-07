const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Tag {
        _id: ID
        Occasion: String
        Color: String
        Type: String
    }

    type Query {
        tags: [Tag]!
    }

    type Mutation {
        addTag(occasion: String, color: String, type: String)
    }
`

module.exports = typeDefs;