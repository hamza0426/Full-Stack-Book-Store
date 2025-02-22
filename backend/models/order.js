const mongoose = require("mongoose");
const order = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    // ref: "user", //that single s cause the major issue that fucked up
    ref: "users",
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "books",
  },
  status: {
    type: String,
    default: "Order Placed",
    enum: ["Order Placed","Out for delivery", "Deliverved", "Canceled"],
  },
},
{timestamps: true}
);

module.exports = mongoose.model("order", order);