import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import categorydb from "../Models/category.js";
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
        cb(null, path.join("Public", "image", "category"));
    },
    filename: function (req, file, cb) {
        const filenamepart = file.originalname.split(".");
        const ext = filenamepart[filenamepart.length - 1];
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "." + ext);
    },
});

const upload = multer({ storage: storage });
router.get("/category", async (req, res) => {
    const data = await categorydb.find({});
    res.send(data);
});
router.post("/category", upload.single("categoryimage"), async (req, res) => {
    const { path } = req.file;
    const { name } = req.body;
    const m = new categorydb({ image: path, name });
    m.save();
    res.end("ok");
});
router.get("/category:id", async (req, res) => {
    const data = categorydb.findById({ id: req.params.id });
    res.send(data);
});
router.delete("/category:id", async (req, res) => {
    const data = await categorydb.findByIdAndUpdate(req.params.id, {
        IsDeactive: true,
    });
    res.send(data);
});
router.put("/category:id", async (req, res) => {
    console.log(req.params.id);
    const data = await categorydb.findByIdAndUpdate(req.params.id, req.body);
    res.send(ok);
});
export default router;
