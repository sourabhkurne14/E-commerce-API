const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    role: {type: String, default:'user'},
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'},


});

module.exports = mongoose.model('User', userSchema);