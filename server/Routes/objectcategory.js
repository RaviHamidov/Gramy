import express from "express";
import path from 'path'
const router = express.Router();
import objectModel from "../Models/object.js";
import objectCategoryModel from '../Models/objectcategory.js';

import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('Public','image', 'object'));
    },
    filename: function (req, file, cb) {
        const filenamepart = file.originalname.split(".");
        const ext = filenamepart[filenamepart.length - 1];
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "." + ext);
    }
});

const upload = multer({storage: storage});



router.get("/object/:id/categories", async (req, res) => {
    const data = await objectCategoryModel.find().where('objectId', req.params.id).populate('category_id');
    res.send(data);
});

router.delete("/objecatcategory:id", (req, res) => {
    const data = objectModel.findByIdAndUpdate(req.params.id, {IsDeactive: true});
    res.send(data);
});
router.put("/object:id", (req, res) => {
    const data = objectModel.findByIdAndUpdate({
        id: req.params.id
    }, req.body);
    res.send(data);
});
export default router;
