const express = require("express");
import MongoConnect from "./config/Mdb";
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const UserModel = require("./models/User");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET,POST"],
    credentials: true,
  })
);
app.use(cookieparser());

MongoConnect();

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username: username }).then((users) => {
    if (users) {
      bcrypt.compare(password, users.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { username: users.username },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json("Success");
        } else {
          return res.json("Incorrect password");
        }
      });
    } else {
      res.json("Record didn't exist");
    }
  });
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    UserModel.create({
      username: username,
      password: hash,
    })
      .then((user) => res.json({ status: "Success" }))
      .catch((err) => res.json(err));
  });
});

app.listen(4170, () => {
  console.log("Server is running");
});
