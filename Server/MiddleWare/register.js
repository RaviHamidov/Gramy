import express from "express";
import path from "path";
import jwt from 'jsonwebtoken'
import { config } from "dotenv";
import nodemailer from 'nodemailer'
import { env, nextTick } from "process";
import userdb from "../Models/user.js";
const router = express.Router();
const app = express();
export const login=(req, res, next) => {
  const token = req.headers.token || req.body.token;
  if (token) {
   
    // verify a token symmetric
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err, decoded)=>{
      if (err) {
       
        res.status(401).send({ message: "have a any error" });
        return;
      }
      console.log(decoded.exp)
      const now = Date.now().valueOf() / 1000

if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
    throw new Error(`token expired: ${JSON.stringify(decoded)}`)
}else {
        next();
      }
    });
  } else {
    res.status(401).send({ message: "unauthorized request" });
  }
};

