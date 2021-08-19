const { Schema } = require("mongoose");

const IntegrationOutbox = new Schema({
    _id: Schema.ObjectId,
    targetCollection: String,
    targetObjectId: Schema.ObjectId, 
    targetCode: Number,
    expireTime: Date,
    deliveryAttempCount:Number, 
    action:String,
    category: Number,
    isDone: Boolean,
    registerDate: Date,
});

module.exports = IntegrationOutbox;