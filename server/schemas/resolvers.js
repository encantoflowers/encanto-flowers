const { AuthenticationError } = require('apollo-server-express');
const { Product, Tag, User, Color, Occasion, Type } = require('../models');

const resolvers = {
    Query: {
        occasions: async () => {
            return Occasion.find();
        },
        colors: async () => {
            return Color.find();
        },
        types: async () => {
            return Type.find();
        },
        tags: async () => {
            return Tag.find().populate('occasions').populate('colors').populate('types');
        },
        product: async () => {
            return await Product.find().populate('tags');
        }
    },
    Mutation: {
        addOccasion: async (parent, { Name }) => {
            Occasion.create({
                Name
            })
            .then((occasion) => {
                return Tag.findOneAndUpdate(
                    { Name: 'OnlyTag' },
                    { $addToSet: { occasions: occasion._id } }
                );
            })
        },
        addColor: async (parent, { Name }) => {
            Color.create({
                Name
            })
            .then((color) => {
                return Tag.findOneAndUpdate(
                    { Name: 'OnlyTag' },
                    { $addToSet: { colors: color._id } }
                );
            })
        },
        addType: async (parent, { Name }) => {
            Type.create({
                Name
            })
            .then((type) => {
                return Tag.findOneAndUpdate(
                    { Name: 'OnlyTag' },
                    { $addToSet: { types: type._id } }
                );
            })
        },
        // Add tags by type to the single overarching Tag model
        addTag: async (parent, { Name }) => {
            Tag.create(
                { Name }
            );
        },
    },
};

module.exports = resolvers;