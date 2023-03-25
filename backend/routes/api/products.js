const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//product model
const Product = require("../../models/Product");

// @route   GET api/products
// @desc    Get all products
// @access  Public

router.post("/filtered", async (req, res) => {
  const { category, color, price, sort } = req.body;

  let query = {};
  let sortQuery = { date: 1 };

  if (category && category.length) {
    query = {
      ...query,
      category: { $in: category },
    };
  }

  if (color && color.length) {
    query = {
      ...query,
      color: { $in: color },
    };
  }

  if (price && price.gt && price.lt) {
    query = {
      ...query,
      price: { $gte: price.gt, $lte: price.lt },
    };
  }

  if (sort) {
    switch (sort) {
      case "lth":
        sortQuery = { price: 1 };
        break;
      case "htl":
        sortQuery = { price: -1 };
        break;
      case "new":
        sortQuery = { date: -1 };
        break;
    }
  }

  const products = await Product.find(query).sort(sortQuery);
  if (!products)
    return res.status(200).json({ msg: "no products based on this filter" });
  res.status(200).json(products);
});

// @route   POST api/items
// @desc    Insert a Item
// @access  Public

router.post("/", (req, res) => {
  const { name, category, price, color } = req.body;

  if (!name || !category || !price || !color)
    return res.status(400).json({ msg: "all fields required" });

  const newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    name,
    category,
    price,
    color,
  });

  newProduct.save().then(product => res.status(200).json(product));
});

// @route   DELETE api/product
// @desc    Delete a Product
// @access  Public

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(400).json({ msg: "product does not exist" });

    const deleted = product.remove();
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
