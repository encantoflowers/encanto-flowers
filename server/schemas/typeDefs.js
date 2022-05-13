const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    Name: String
}

type User {
    name: String
    email: String
    password: String
    orders: [Order]
}

type Image {
    _id: ID
    name: String
    description: String
    img: String
}

type Product {
    _id: ID
    name: String
    price: Float
    tags: [Tag]
    image: Image

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
    categories: [Category]! 
    order: [Order]!
    checkout: [Order]!
}

type Mutation {
    addUser: (user: UserInput)
    addOrder: (products: [ProductInput])
    addCategory(Name: String!): Category
    removeCategory(categoryId: ID!): Category
    login(email: String!, password: String!): User!
}
`;

module.exports = typeDefs;