import express from "express";
import path from "path";
const router = express.Router();
const app = express();
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
    cb(null, path.join("Public",'image', "object"));
  },
  filename: function (req, file, cb) {
    const filenamepart = file.originalname.split(".");
    const ext = filenamepart[filenamepart.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + ext);
  },
});

const upload = multer({ storage: storage });

router.get("/object/flial/all", (req, res) => {
  const data = mongo.find({});
  res.send(data);
});
router.post("/object/flial", upload.single("objectimage"), async (req, res) => {
  const { path } = req.file;
  const { name, long, lat } = req.body;
  const m = new objectdb({
    image: path,
    location: {
      long,
      lat,
    },
    name,
  });
  m.save();
  res.end("ok");
});
router.get("/object/:id/flial", (req, res) => {
  const data = objectdb.find({ objectid: id });
  res.send(data);
});
router.delete("/object/flial/:id", (req, res) => {
  const data = objectdb.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/object/flial/:id", (req, res) => {
  const data = objectdb.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
