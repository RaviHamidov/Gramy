import mongoose from 'mongoose';
import GeoJSON from 'geojson';
const {Schema} = mongoose;

const customers = new Schema({
    name: String,
    surname: String,
    location: {
        lat: Number,
        long: Number
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    IsDeactive: Boolean
});
const customer = mongoose.model('customer', customers);
export default customer;
