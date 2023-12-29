const express = require("express");
import MongoConnect from "./config/Mdb";
const app = express();

MongoConnect();
app.listen(5000, () => {
  console.log("Server is running");
});
