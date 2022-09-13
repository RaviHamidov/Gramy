import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import orderdb from "../Models/order.js";

router.get("/order", (req, res) => {
  const data = orderdb.find({});
  res.send(data);
});
router.post("/order", async (req, res) => {
  
  const {  total,customer_id,product_id, long, lat } = req.body;
  const m =await new orderdb({
    total,customer_id,product_id,
    location: {
      long,
      lat,
    },
  });
  m.save();
  res.end("ok");
});
router.get("/order/:id",async (req, res) => {
  const data =await orderdb.findById({ id: req.params.id });
  res.send(data);
});
router.delete("/order/:id", (req, res) => {
  const data = orderdb.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/order/:id", (req, res) => {
  const data = orderdb.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
