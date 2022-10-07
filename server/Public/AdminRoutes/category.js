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
    cb(null, path.join("Public","image", "category"));
  },
  filename: function (req, file, cb) {
    const filenamepart = file.originalname.split(".");
    const ext = filenamepart[filenamepart.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + ext);
  },
});

const upload = multer({ storage: storage });

router.get("/Admin/category", (req, res) => {
  const data = categorydb.find({});
  res.send(data);
});
router.post(
  "/Admin/category",
  upload.single("categoryimage"),
  async (req, res) => {
    const { path } = req.file;
    const { name, image, created_at } = req.body;
    const m = new categorydb({
      image: path,
      name,
      image,
      created_at,
    });
    m.save();
    res.end("ok");
  }
);
router.get("/Admin/category:id", (req, res) => {
  const data = categorydb.findById({ id: req.params.id });
  res.send(data);
});
router.delete("/Admin/category:id", (req, res) => {
  const data = categorydb.findByIdAndUpdate(req.params.id, {
    IsDeactive: true,
  });
  res.send(data);
});
router.put("/Admin/category:id", async (req, res) => {
  const data = await categorydb.findByIdAndUpdate(
    { id: req.params.id },
    req.body
  );
  res.send(data);
});
export default router;
