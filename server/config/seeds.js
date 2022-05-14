const db = require('./connection');
const { Category, Product, User } = require('../models');

db.once('open', async () => {
    // Delete any existing category entries
    await Category.deleteMany();
    // Add the predefined new ones to the dataabase
    const categories = await Category.insertMany([
        { Name: 'Seasonal' },
        { Name: 'Sympathy' },
        { Name: 'Freindship' },
        { Name: 'Funerals' },
        { Name: 'Get Well' }
    ])
    // Notify the user that the categories have been seeded
    console.log('categories seeded');

    await Product.deleteMany();
    const products = await Product.insertMany([
        {
            name: 'Boucuet01',
            price: 9.99,
            // image: [bouquet01.jpg],
        }
    ])
    console.log('products seeded');

    await User.deleteMany();
    const users = await User.insertMany([
        {
            name: 'John Doe',
            email: 'test@gmail.com',
            password: 'password',
        }
    ])
    console.log('users seeded');
    
});