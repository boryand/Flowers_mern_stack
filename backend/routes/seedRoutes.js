import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  try {
    await Product.deleteOne({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error seeding products");
  }
});

export default seedRouter;
