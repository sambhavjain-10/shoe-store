const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

const CartSchema = new Schema({
  _id: ObjectId,
  Product_Id: {
    type: ObjectId,
    ref: "Product",
  },
  User_id: {
    type: ObjectId,
    ref: "User",
  },
});

module.exports = Cart = mongoose.model("Cart", CartSchema);
