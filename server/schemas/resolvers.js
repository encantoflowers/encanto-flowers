const { AuthenticationError } = require('apollo-server-express');
const { Flower, Tags, User } = require('../models');

const resolvers = {
    Query: {
        tags: async () => {
            return Tags.find();
        },
    },
    Mutation: {
        // Add tags by type to the single overarching Tag model
        addTag: async (parent, {tagId, occasion, color, type}) => {
            Tags.findOneAndUpdate(
                {_id: tagId},
                { $addToSet: {
                    occasons: occasion,
                    colors: color,
                    types: type
                }},
                { runValidators: true, new: true }
            )
        }
    }
}

module.exports = resolvers;