const { Schema } = require('mongoose');

const Invoice = new Schema({
  _id: Schema.ObjectId,
  product: Number,
  quantity: Number,
  code: Number,
  customer: Number,
  registerDate: Date,
  isDeleted: Boolean,
});

module.exports = Invoice;
