const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    productIds: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    status: {type: String, default:'pending'}
},{timestamps: true}
);

module.exports = mongoose.model('Order', orderSchema);