import mongoose from 'mongoose';
const {Schema} = mongoose;


const orders = new Schema({
    customer_id: {
        type: mongoose.Types.ObjectId,
        ref: 'customer'
    },
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: 'product'
    },
    total: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    location: {
        lat: Number,
        long: Number
    }
});
const order = mongoose.model('order', orders);
export default order;
