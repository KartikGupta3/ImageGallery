const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const galleryModel = mongoose.model("gallery", gallerySchema);

export default galleryModel;
