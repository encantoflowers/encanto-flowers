const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    Name: String
}

type User {
    _id: ID
    name: String
    email: String
    password: String
    # orders: [Order]
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
    description: String
    price: Float
    categories: [Category]
    image: [Image]
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
    categories: [Category]! 
    products: [Product]!
    product(productId: ID!): Product
    order: [Order]!
    checkout: [Order]!
}

type Mutation {
    addUser (
        name: String!
        email: String!
        password: String!
        # role: Int!
        ): User
    addOrder (products: [ID]!): Order
    addCategory(Name: String!): Category
    removeCategory(categoryId: ID!): Category
    login(email: String!, password: String!): User!
}
`;

module.exports = typeDefs;