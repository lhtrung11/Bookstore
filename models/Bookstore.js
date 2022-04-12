const mongoose = require('mongoose');

const bookstoreSchema = new mongoose.Schema({
    name: {type: String, unique: true, trim: true, required: [true, 'Name must be required']},
    phone: {type: String, unique: true, trim: true, required: [true, 'Phone must be required']},
    address: {type: Object},
    avatar: {type: String},
    email: {type: String, unique: true, trim: true, required: [true, 'Email must be required']},
    username: {type: String, unique: true, trim: true, required: [true, 'Username must be required']},
    password: {type: String, trim: true, required: [true, 'Password must be required'], minlength: [8, 'Password must be at least 8 characters']},
    store: {type: Array},
    favourite: {type: Array},
    history: {type: Array},
    process: {type: Array},
    follower: {type: Array}
}, {timestamps: true})

const Bookstore = mongoose.model('Bookstore', bookstoreSchema);

module.exports = Bookstore;