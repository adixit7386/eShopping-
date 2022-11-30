const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Router = require("./routes/user");
const authRouter = require("./routes/auth");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected successfully....");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/users", Router);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port " + process.env.PORT);
});
