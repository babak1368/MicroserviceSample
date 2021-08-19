const { Schema } = require("mongoose");

const Customer = new Schema({
    _id: Schema.ObjectId,
    firstName: String,
    lastName: String,
    code: Number,
    registerDate: Date,
    isDeleted: Boolean,
});

module.exports = Customer;