import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import mongo from "../Models/user.js";

router.get("/Admin/user", (req, res) => {
  const data = mongo.find({});
  res.send(data);
});
router.post("/Admin/user", async (req, res) => {
  const { name, created_at } = req.body;
  const m = new mongo({ name, created_at });
  m.save();
  res.end("ok");
});
app.post('Admin/user/reset-password/:id/:token',(req,res)=>{
  const {id,token}=req.params
 const {email,password}=req.body;
 const data =await userdb.findById({_id:id});
if(!data){
  res.status(400).send({message:"User is not exist"})
}
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const tokennew=jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: email,password
    },
    jwtSecretKey
  );
})
router.get("/Admin/user:id", (req, res) => {
  const data = mongo.findById({ id: req.params.id });
  res.send(data);
});
router.delete("/Admin/user:id", (req, res) => {
  const data = mongo.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/Admin/user:id", (req, res) => {
  const data = mongo.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
