const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Tag {
        _id: ID
        Occasion: String
        Color: String
        Type: String
    }
`

module.exports = typeDefs;