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
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          
        },
        coordinates: {
          type: [Number],
          
        }
    }
});
const order = mongoose.model('order', orders);
export default order;
