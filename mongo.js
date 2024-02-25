// Leandro Mananquil | 301346791 | 02-25-2024
const mongoose = require("mongoose");
require("dotenv").config();

async function mongoConnect() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected..");
}

module.exports = {
  mongoConnect,
};
