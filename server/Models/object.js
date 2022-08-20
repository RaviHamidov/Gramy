import mongoose from "mongoose";
const {Schema} = mongoose;


const objects = new Schema({
    name: String,
    type: String,
    location: {
        lat: Number,
        long: Number
    },
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    IsDeactive: {
        type: Boolean,
        default: () => false
    }
});
const object = mongoose.model("object", objects);
export default object;
