const mongoose = require("momgoose");

export const MongoConnect = async () => {
  const res = await mongoose.connect("mongodb://localhost:27017/ImageGallery");
  if (res) {
    console.log("Connected Succesffuly");
  }
};
