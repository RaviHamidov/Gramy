import mongoose from "mongoose";
const { Schema } = mongoose;

const categorys = new Schema({
  image: String,
  name: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const category = mongoose.model("category", categorys);
export default category;
