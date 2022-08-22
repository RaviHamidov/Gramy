import express from "express";
import path from "path";
const router = express.Router();
import objectdb from "../Models/object.js";
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
    cb(null, path.join("Public", "image", "object"));
  },
  filename: function (req, file, cb) {
    const filenamepart = file.originalname.split(".");
    const ext = filenamepart[filenamepart.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + ext);
  },
});

const upload = multer({ storage: storage });

router.get("/object/all", (req, res) => {
  const data = mongo.find({});
  res.send(long, lat, data);
});
router.post("/object", upload.single("objectimage"), async (req, res) => {
  const { path } = req.file;
  const { name, long, lat, type } = req.body;
  const m = new objectdb({
    image: path,
    name,
    location: {
      long,
      lat,
    },
    type,
  });
  m.save();
  res.end("ok");
});
router.get("/object:id", (req, res) => {
  const data = objectdb.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.delete("/object:id", (req, res) => {
  const data =objectdb.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/object:id", (req, res) => {
  const data = objectdb.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
