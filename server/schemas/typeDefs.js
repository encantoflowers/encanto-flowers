const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    Name: String
}

type Query {
    categories: [Category]!
}

type Mutation {
    addCategory(): Category
    removeCategory(categoryId: ID!): Category
}
`;

module.exports = typeDefs;