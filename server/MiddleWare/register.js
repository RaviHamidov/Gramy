import express from "express";
import path from "path";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import nodemailer from 'nodemailer'
import { nextTick } from "process";
import userdb from "../Models/user.js";
const router = express.Router();
const app = express();
app.post("/SignIn", (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: req.body.email,
    },
    jwtSecretKey
  );

  res.send(token);
});
app.use("/LogIn", (req, res, next) => {
  const token = req.headers.token || req.body.token;
  if (token) {
    // verify a token symmetric
    jwt.verify(token, function (err, decoded) {
      if (error) {
        res.status(401).send({ message: "have a any error" });
        return;
      }
      if (decoded.exp.getTime() < Date.now / 1000) {
        res.status(401).send({ message: "Your Sesion Expired" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({ message: "unauthorized request" });
  }
});
app.post("/forgotPassword", (req, res) => {
  
const {email}=req.body;
const data =await userdb.findOne({ email});
if(!data){
  res.status(400).send({message:"User is not exist"})
}
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.email_user,
    pass: process.env.email_pass
      },
    });
  const link="http://localhost:6941/reset-password"
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <babayevqocheli@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Reset Password ✔", // Subject line
      text: "Hello My User?", // plain text body
      html: `<h1>Password Reset!</h1>
      <a href=></a>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
});
