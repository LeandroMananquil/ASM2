// Leandro Mananquil | 301346791 | 02-25-2024
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Men", "Women", "Teens"], // Enforce the category options
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
