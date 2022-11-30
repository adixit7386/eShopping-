const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Router = express.Router();

//update user data

Router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete user data
Router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    res.status(200).json("use has been deleted......");
  } catch (error) {
    res.status(500).json(err);
  }
});

//get single user
Router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    const { password, ...others } = user._doc;
    return res.status(200).json({ others });
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all users

Router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const query = req.query.new;

    const user = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();

    // const { password, ...others } = user._doc;
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get user stats
Router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();

  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      { $group: { _id: "$month", total: { $sum: 1 } } },
    ]);
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = Router;
