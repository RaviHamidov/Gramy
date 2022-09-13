import mongoose from 'mongoose';
const {Schema} = mongoose;

const objectcategorys = new Schema({
    object_id: {
        type: mongoose.Types.ObjectId,
        ref: 'object'
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: 'category'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('objectcategory', objectcategorys);
export default model;
