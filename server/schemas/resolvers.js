const { AuthenticationError } = require('apollo-server-express');
const { Product, Category, Order,  User } = require('../models');
const { find } = require('../models/Product');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
        categories: async () => {
            return Category.find();
        },

        products: async () => {
            return await Product.find({}).populate('categories');
        },
        product: async (parent, {productId }) => {
            return Product.findOne({_id: productId}).populate("categories");
        },

        // products: async () => {
        //     return Product.find();
        // },

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
        addUser: async (parent,{name, email, password}) => {
            const user = await User.create({name, email, password});
            const token = signToken(user);
            return user;
        },
        deleteUser: async (parent, {id}) => {
            const user = await User.findByIdAndDelete(id);
            return user;
        },
        updateUser: async (parent, {id, name, email, password}) => {
            const user = await User.findByIdAndUpdate(id, {name, email, password});
            return user;
        },
        // this one
        addOrder: async (parent, { products }, context) => {
            if (context.user) {
                const order = new Order({ products });
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
                return order;
            }
            throw new AuthenticationError('Not logged in');
        },
        addCategory: async (parent, { Name }) => {
            const category = await Category.create({
                Name
            })

            return category;
        },
        addProduct: async (parent, {name, description, price, categories, image}) => {
            const product = await Product.create({name, description, price, categories, image});
            return product.populate('categories');
        },
        deleteProduct: async (parent, { productId }) => {
            const product = await Product.findByIdAndDelete({ _id: productId });
            return product
        },

        updateProduct: async (parent, {productId, name, description, price, categories, image}) => {
            const product = await Product.findByIdAndUpdate(productId, {name, description, price, categories, image});
            return product
        },

        removeCategory: async (parent, { categoryId }) => {
            const category = await Category.findByIdAndDelete({ _id: categoryId });
            return category;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Invalid credentials');
            }
            const isValid = await user.isCorrectPassword(password);
            if (!isValid) {
                throw new AuthenticationError('Invalid credentials');
            }
            const token = signToken(user);
            return { user, token };
        }
    }
};


module.exports = resolvers;