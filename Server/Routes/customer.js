import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import customerdb from "../Models/customer.js";

router.get("/customer", (req, res) => {
  const data = customerdb.find({});
  res.send(data);
});
router.post("/customer", async (req, res) => {
  const { path } = req.file;
  const { name, surname, long, lat } = req.body;
  const m = new customerdb({
    name,
    surname,
    location: {
      long,
      lat,
    },
  });
  m.save();
  res.end("ok");
});
router.get("/customer/:id", (req, res) => {
  const data =customerdb.findById({ id: req.params.id });
  res.send(data);
});
router.delete("/customer/:id", (req, res) => {
  const data = customerdb.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/customer/:id", (req, res) => {
  const data = customerdb.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
