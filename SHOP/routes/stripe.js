const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const key = process.env.STRIPE_KEY;
const Stripe = require("stripe");
const Router = express.Router();
const stripe = Stripe(key);

Router.post("/payment", async (req, res) => {
  stripe.paymentIntents.create(
    {
      amount: req.body.amount,
      payment_method_data: { type: "card", card: { token: req.body.tokenId } },
      currency: "inr",
      payment_method_types: ["card"],
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});
module.exports = Router;
