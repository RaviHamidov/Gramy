import mongoose from "mongoose";
const {Schema} = mongoose;


const objects = new Schema({
    name: String,
    type: String,
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          
        },
        coordinates: {
          type: [Number],
          
        }
    }
    ,
    image: String,
    slogan:String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    IsDeactive: {
        type: Boolean,
        default: () => false
    }
});
objects.index({ geometry: "2dsphere" }); 
const object = mongoose.model("object", objects);
export default object;
