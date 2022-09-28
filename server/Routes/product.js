import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import product from "../Models/product.js";
import objectproduct from "../Models/objectproduct.js";
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
    cb(null, path.join("Public", "image", "product"));
  },
  filename: function (req, file, cb) {
    const filenamepart = file.originalname.split(".");
    const ext = filenamepart[filenamepart.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + ext);
  },
});

const upload = multer({ storage: storage });

router.get("/product/all", async (req, res) => {
  const data = await product.find({});
  res.send(data);
});
router.get("/object:objid/category:catid/product", (req, res) => {
  const data = objectproduct
    .find({})
    .where("objectid", req.params.objid)
    .populate("productid");
  const data2 = data.find({ categoryId: req.params.catid });
  res.send(data2);
});
router.post("/product", upload.single("productimage"), async (req, res) => {
  const { path } = req.file;
  const {
    name,
    categoryId,
    grocery,
    Excelent,
    discount,
    open,
    close,
    Freedeliver,
  } = req.body;
  const m = new product({
    image: path,
    name,
    categoryId,
    grocery,
    Excelent,
    discount,
    open,
    close,
    Freedeliver,
  });
  m.save();
  res.end("ok");
});
router.get("/product:id", (req, res) => {
  const data = product.findById({ id: req.params.id }).populate("category");
  res.send(data);
});
router.delete("/product:id", (req, res) => {
  const data = product.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/product:id", (req, res) => {
  const data = product.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
