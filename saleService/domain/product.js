const { Schema } = require('mongoose');

const Product = new Schema({
  _id: Schema.ObjectId,
  title: String,
  brand: String,
  code: Number,
  category: Number,
  registerDate: Date,
  isDeleted: Boolean,
});

module.exports = Product;
