const { AuthenticationError } = require('apollo-server-express');
const { Product, Tag, User, Color, Occasion, Type, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                    });

                    users.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
                    return user;
            }
            throw new AuthenticationError('Not logged in');
        },
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

        products: async () => {
            return await Product.find({}).populate('tags');
        },
        product: async (parent, {productId }) => {
            return Product.findOne({_id: productId});
        },

        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                    });
                return user.orders.id(_id);
            }
            throw new AuthenticationError('Not logged in');
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;    
            const order = new Order({ products: args.products });
            const line_items = [];
            const { products } = await order.populate('products');
            for (let i = 0; i < products.length; i++) {
                const product = await stripe.products.create({
                    name: products[i].name,
                    description: products[i].description,
                    images: products[i].images,
                });
                const price = await stripe.prices.create({
                    product: product.id,
                    unit_amount: products[i].price * 100,
                    currency: 'usd',
                });
                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/cancel`,
            });
            return { session: session.id };
        }

    },
    Mutation: {
        addUser: async (parent, args, context) => {
            const user = new User.create(args);
            const token = signToken(user);
            return { user, token };
        },
        addOrder: async (parent, { products }, context) => {
            if (context.user) {
                const order = new Order({ products });
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
                return order;
            }
            throw new AuthenticationError('Not logged in');
        },
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
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Invalid credentials');
            }
            const isValid = await user.validatePassword(password);
            if (!isValid) {
                throw new AuthenticationError('Invalid credentials');
            }
            const token = signToken(user);
            return { user, token };
        }
    }
};


module.exports = resolvers;