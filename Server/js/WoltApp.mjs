import productroute from "../Routes/product.js";
import categoryroute from "../Routes/category.js";
import objectcategory from "../Routes/objectcategory.js";
import objectRoutes from "../Routes/object.js";
import orderRoutes from "../Routes/order.js";
import customerRoutes from "../Routes/customer.js";
import userRoutes from "../Routes/user.js";
import useradmin from "../AdminRoutes/category.js"
import flial from "../Routes/flial.js";
import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from 'cors'
import {login} from "../MiddleWare/register.js"
config();
import  Stripe from 'stripe';
const stripe = new Stripe(process.env.payments_secret_key);
var dataurl = process.env.Data_Connection;
mongoose.connect(dataurl);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
}))
app.use(categoryroute);
app.use(productroute);
app.use(objectcategory);
app.use(objectRoutes);
app.use(orderRoutes)
app.use(userRoutes);
app.use(useradmin)
app.use('/Admin',login);
// app.use("/wolt", (req, res, next) => {
//     token = req.cookies.token
//     if (token) {
//         next()
//     } else {
//         res.redirect("/Login")
//     }
// })
app.get("/checkout",async (req,res)=>{
  const YOUR_DOMAIN = 'http://localhost:6931/';
  const session = await stripe.checkout.sessions.create({
   
    mode: 'payment',
    success_url:YOUR_DOMAIN+'succes-payment',
    cancel_url: YOUR_DOMAIN+'cancel-payment',
    line_items: [
      {
       
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price:'price_1LZeCVEvSYVh85Khjp1Z4Djx',
        quantity: 1,
      },
    ],
  })
    console.log(session)
  res.redirect(303, session.url)
})
app.listen(6941, () => {
  console.log("Server is running on port 6941");
});
