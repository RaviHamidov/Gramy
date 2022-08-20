import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import userdb from "../Models/user.js";
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
    cb(null, path.join("Public", "image", "user"));
  },
  filename: function (req, file, cb) {
    const filenamepart = file.originalname.split(".");
    const ext = filenamepart[filenamepart.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + ext);
  },
});
const upload = multer({ storage: storage });
router.get("/user", (req, res) => {
  const data = userdb.find({});
  res.send(data);
});
router.post("/user", upload.single("userimage"), async (req, res) => {
  const { path } = req.file;
  const { username, password, email } = req.body;
  const m = new userdb({ image: path, username, email, password });
  m.save();
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: email,
    },
    jwtSecretKey
  );

  res.send(token);
});
router.get("/user:id", (req, res) => {
  const data = userdb.findById({ id: req.params.id });
  res.send(data);
});
router.delete("/user:id", (req, res) => {
  const data = userdb.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/user:id", (req, res) => {
  const data = userdb.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
