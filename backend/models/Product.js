const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

const ProductSchema = new Schema({
  _id: ObjectId,
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  photos: [
    {
      type: Buffer,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model("Product", ProductSchema);
