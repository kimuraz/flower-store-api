const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FlowerSchema = new Schema({
    name: String,
    value: Number,
    quantity: Number,
   // picture:{data: Buffer, contentType: String },
    description: String
});

module.exports = mongoose.model('Flower', FlowerSchema);