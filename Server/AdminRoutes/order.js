import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import mongo from "../Models/order.js";


router.get("/Admin/order", (req, res) => {
    const data = mongo.find({});
    res.send(data);
});
router.post("/Admin/order", async (req, res) => {
    const {path} = req.file;
    const {name, surname, adress, createdAt} = req.body;
    const m = new mongo({name, surname, adress, created_at});
    m.save();
    res.end("ok");
});
router.get("/Admin/order:id", (req, res) => {
    const data = mongo.findById({id: req.params.id});
    res.send(data);
});
router.delete("/Admin/order:id", (req, res) => {
    const data = mongo.findByIdAndUpdate(req.params.id, {IsDeactive: true});
    res.send(data);
});
router.put("/Admin/order:id", (req, res) => {
    const data = mongo.findByIdAndUpdate({
        id: req.params.id
    }, req.body);
    res.send(data);
});
export default router;
