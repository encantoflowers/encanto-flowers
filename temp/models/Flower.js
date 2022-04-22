const {Schema, model} = require('mongoose');

const flowerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        images: [imageSchema],
        tags: [
            {
                ref: 'tags',
            }
        ],

    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const imageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img:
        {
            data: Buffer,
            contentType: String
        },

    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// Price
// Tags
// Image

module.exports = model ('Flower', flowerSchema);