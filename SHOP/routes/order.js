const express = require("express");
const Order = require("../models/Order");
const Router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
//create cart
Router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const order = new Order(req.body);
  try {
    const savedOrder = await order.save();

    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update cart data

Router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete single cart
Router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndRemove(req.params.id);
    res.status(200).json("Order has been deleted......");
  } catch (error) {
    res.status(500).json(err);
  }
});

//get single cart
Router.get("/find/:userId", async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all carts

Router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get monthly income
Router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();

  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date(date.setMonth(date.getMonth() - 1)));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && { products: { $elemMatch: { productId } } }),
        },
      },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);
    console.log(income);

    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = Router;
