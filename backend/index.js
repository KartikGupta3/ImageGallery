const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const galleryModel = require("./models/Gallery");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/ImageGallery");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("file"), (req, res) => {
  galleryModel
    .create({
      image: req.file.filename,
    })
    .then((ans) => res.json(ans))
    .catch((err) => console.log(err));
});

app.get("/getImage", (req, res) => {
  galleryModel
    .find()
    .then((us) => res.json(us))
    .catch((err) => console.log(err));
});

app.listen(3001, () => {
  console.log("Server is running");
});
