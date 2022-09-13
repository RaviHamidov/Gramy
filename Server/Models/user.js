import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";
const SALT = 10;

const users = new Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      //   required: [true, "Location isn required"]
    },
    coordinates: {
      type: [Number],
      //   required:  [true, "Location isn required"]
    },
  },
  IsDeactive: Boolean,
});
users.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(SALT, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password,salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});
const user = mongoose.model("user", users);
export default user;
