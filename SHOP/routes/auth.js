const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const router = express.Router();
dotenv.config();

router.post("/register", async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
    console.log(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/login", async (req, res, next) => {
  let user;

  try {
    user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("wrong credentials");
    }

    const valid = await bcrypt.compare(req.body.password, user.password);

    if (!valid) {
      return res.status(401).json("wrong credentials");
      return;
    }
    const accessToken = await jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    return res.status(200).json({ others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
