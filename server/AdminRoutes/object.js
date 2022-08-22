import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import mongo from "../Models/object.js";
import mongo from "../Admin/robject.js/Admin/";
import multer from "multer";
const filefilter = (req, file, cb) => {
  if (file.mimetype === "image/Admin/jpeg" || file.mimetype === "image/Admin/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("Public","image", "object"));
  },
  filename: function (req, file, cb) {
    const filenamepart = file.originalname.split(".");
    const ext = filenamepart[filenamepart.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + ext);
  },
});

const upload = multer({ storage: storage });

router.get("/Admin/object", (req, res) => {
  const data = mongo.find({});
  res.send(data);
});
router.post("/Admin/object", upload.single("objectimage"), async (req, res) => {
  const { path } = req.file;
  const { name, image, created_at } = req.body;
  const m = new mongo({ image: path, name, image, created_at });
  m.save();
  res.end("ok");
});
router.get("/Admin/object:id", (req, res) => {
  const data = mongo.findById({ id: req.params.id });
  res.send(data);
});
router.delete("/Admin/object:id", (req, res) => {
  const data = mongo.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/Admin/object:id", (req, res) => {
  const data = mongo.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
