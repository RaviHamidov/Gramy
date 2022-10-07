import mongoose from "mongoose";
const {Schema} = mongoose;


const flials = new Schema({
    name: String,
    objectid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'object'
    },
    geometry: {
        type: "Point" ,
        coordinates: [ long ,lat ]
     },
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    IsDeactive: Boolean
});
const flial = mongoose.model("flial", flials);
export default flial;
