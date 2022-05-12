const {Schema, model} = require('mongoose');

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


const productSchema = new Schema(
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
                type: Schema.Types.String,
                ref: 'Tags',
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

// Price
// Tags
// Image

module.exports = model ('Product', productSchema);