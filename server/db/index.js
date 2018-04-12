const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/shamazon-products';

const db = mongoose.connect(mongoUri);

module.exports = db;