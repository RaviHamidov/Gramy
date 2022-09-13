import mongoose from 'mongoose';
const {Schema} = mongoose;


const comments = new Schema({
    text: String,
    star: Number,
    created_at: {
        type: Date,
        default: Date.now
    }
});
const comment = mongoose.model('comment', comments);
export default comment;
