import productroute from "../Routes/product.js";
import categoryroute from "../Routes/category.js";
import objectcategory from "../Routes/objectcategory.js";
import objectRoutes from "../Routes/object.js";
import orderRoutes from "../Routes/order.js";
import cors from 'cors'
import userRoutes from "../Routes/user.js";
import flial from "../Routes/flial.js";
import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

config();

var url = "mongodb+srv://Qocali:Psg+1970@cluster0.g9nsa8a.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url,()=>console.log("connected to DB"));

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(categoryroute);
app.use(productroute);
app.use(objectcategory);
app.use(objectRoutes);
app.use(userRoutes);
// app.use("/wolt", (req, res, next) => {
//     token = req.cookies.token
//     if (token) {
//         next()
//     } else {
//         res.redirect("/Login")
//     }
// })
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
