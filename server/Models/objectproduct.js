import mongoose from "mongoose";
const { Schema } = mongoose;

const objectproducts = new Schema({
  object_id: {
    type: mongoose.Types.ObjectId,
    ref: "object",
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: "product",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const objectproduct = mongoose.model("objectproduct", objectproducts);
export default objectproduct;
