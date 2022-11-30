const express = require("express");
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Router = express.Router();

//create cart
Router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const cart = new Cart(req.body);

  try {
    const savedCart = await cart.save();

    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update cart data

Router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete single cart
Router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndRemove(req.params.id);
    res.status(200).json("cart has been deleted......");
  } catch (error) {
    res.status(500).json(err);
  }
});

//get single cart
Router.get("/find/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all carts

Router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const cart = await Cart.find();
    return res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = Router;
