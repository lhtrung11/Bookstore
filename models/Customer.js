const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {type: String, unique: true, trim: true, required: [true, 'Name must be required']},
    dob: {type: Object},
    gender: {type: String},
    phone: {type: String, unique: true, trim: true, required: [true, 'Phone must be required']},
    address: {type: Object},
    avatar: {type: String},
    email: {type: String, unique: true, trim: true, required: [true, 'Email must be required']},
    username: {type: String, unique: true, trim: true, required: [true, 'Username must be required']},
    password: {type: String, trim: true, required: [true, 'Password must be required'], minlength: [8, 'Password must be at least 8 characters']},
    cart: {type: Array},
    favourite: {type: Array},
    history: {type: Array},
    process: {type: Array},
    following: {type: Array}
}, {timestamps: true})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;