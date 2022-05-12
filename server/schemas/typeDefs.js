const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

type Product {
    _id: ID
    name: String
    price: Float
    tags: [Tag]
    images: [imageSchema]
    // Q: look into image schema  
}

type Query {
    occasions: [Occasion]!
    colors: [Color]!
    types: [Type]!
    tags: [Tag]! 
}

type Mutation {
    addOccasion(Name: String!): Occasion
    addColor(Name: String!): Color
    addType(Name: String!): Type
    addTag(Name: String): Tag
}
`;

module.exports = typeDefs;