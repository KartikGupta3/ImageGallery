const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ImageGallery");

app.listen(4170, () => {
  console.log("Server is running");
});
