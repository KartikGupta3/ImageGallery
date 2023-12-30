const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  image: String,
});

const galleryModel = mongoose.model("gallery", gallerySchema);

module.exports = galleryModel;
