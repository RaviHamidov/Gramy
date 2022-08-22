import mongoose from 'mongoose';
const {Schema} = mongoose;
import bcrypt from "bcrypt";
const SALT = 10;


const users = new Schema({
    username: String,
    password: String,
    email:String,
    role: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    IsDeactive: Boolean
});
users.pre("save", function (next) {
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(SALT, (err, salt) => {
        if (err) 
            return next(err);
        


        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) 
                return next(err);
            


            this.password = hash;
            next();
        });
    });
});
const user = mongoose.model('user', users);
export default user;
