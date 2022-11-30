const express = require("express");
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const Router = express.Router();

//create
Router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const product = new Product(req.body);

  try {
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update product data

Router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete product data
Router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json("product has been deleted......");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Product single
Router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all products

Router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  let products;
  try {
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(2);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = Router;
