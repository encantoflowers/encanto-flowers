const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    name: String
    email: String
    password: String
    orders: [Order]
}
type Occasion {
    _id: ID
    Name: String
}

type Color {
    _id: ID
    Name: String
}

type Type {
    _id: ID
    Name: String
}

type Tag {
    _id: ID
    Name: String!
    occasions: [Occasion]!
    colors: [Color]!
    types: [Type]!
}

type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
}

type Checkout {
    _id: ID
    purchaseDate: String
    products: [Product]
}

type Query {
    user: [User]!
    occasions: [Occasion]!
    colors: [Color]!
    types: [Type]!
    tags: [Tag]! 
    order: [Order]!
    checkout: [Order]!
}

type Mutation {
    addUser: (user: UserInput)
    addOrder: (products: [ProductInput])
    addOccasion(Name: String!): Occasion
    addColor(Name: String!): Color
    addType(Name: String!): Type
    addTag(Name: String): Tag
    login(email: String!, password: String!): User
}
`;

module.exports = typeDefs;