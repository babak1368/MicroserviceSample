const { Schema } = require('mongoose');

const Category = new Schema({
  _id: Schema.ObjectId,
  title: String,
  code: Number,
});

module.exports = Category;
