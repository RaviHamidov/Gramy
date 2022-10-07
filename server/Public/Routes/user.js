import express from "express";
import path from "path";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { env, nextTick } from "process";
import sgMail from '@sendgrid/mail'
const router = express.Router();
const app = express();
import userdb from "../Models/user.js";
import multer from "multer";
const filefilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("Public", "image", "user"));
  },
  filename: function (req, file, cb) {
    const filenamepart = file.originalname.split(".");
    const ext = filenamepart[filenamepart.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + ext);
  },
});
const upload = multer({ storage: storage });
router.get("/user", (req, res) => {
  const data = userdb.find({});
  res.send(data);
});
router.post("/user", upload.single("userimage"), async (req, res) => {
  const { path } = req.file;
  const { username, password, email } = req.body;
  const m = new userdb({ image: path, username, email, password });
  m.save();
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 100) + 60 * 60,
      data: email,
      password,
    },
    jwtSecretKey
  );
  console.log(username);
  res.send(token);
});
router.get("/user/:id", (req, res) => {
  const data = userdb.findById({ id: req.params.id }).exec();
  res.send(data);
});
router.post("/user/forgot-password", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  console.log(email);
  const resettoken = "";
  const data = await userdb.findOne({ email });
  if (!data) {
    res.status(400).send({ message: "User is not exist" });
  }
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
javascript

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: `${email}`, // Change to your recipient
  from: 'qocubaba@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  });
  res.send("ok")
}});
router.post("/user/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { email, password } = req.body;
  const data = await userdb.findById({ _id: id });
  if (!data) {
    res.status(400).send({ message: "User is not exist" });
  }
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const tokennew = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: email,
      password,
    },
    jwtSecretKey
  );
  const newdata = userdb.findByIdAndUpdate(id, { password: password });
});
router.delete("/user/:id", (req, res) => {
  const data = userdb.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/user/:id", (req, res) => {
  const data = userdb.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
