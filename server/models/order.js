const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    
    sessionId: {
        type: String
    },
    user_id: {
        type: String   
    },
    status: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    receipt: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Order', orderSchema);