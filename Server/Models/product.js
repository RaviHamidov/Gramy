import mongoose from 'mongoose';
const {Schema} = mongoose;


const products = new Schema({
    type: String,
    icon: String,
    value: Number,
    delivery: String,
    image: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    grocery: Boolean,
    Excelent: Boolean,
    discount: Number,
    open: Date,
    close: Date,
    created_at: {
        type: Date,
        default: Date.now
    },
    Freedeliver: Boolean,
    IsDeactive: Boolean
});
const product = mongoose.model('product', products);
export default product;
