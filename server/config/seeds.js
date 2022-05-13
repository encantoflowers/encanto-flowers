const db = require('./connection');
const { Category } = require('../models');

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
});