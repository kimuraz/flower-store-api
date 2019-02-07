const mongoose = require('mongoose');
const Flower = require('../routes/flowerRoute');
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    product:[{
       type: Object,
       ref: "flower"
    
    }] ,

    orderDate: {
        type: Date,
        required: true
    }
    
});

module.exports = mongoose.model('Order', OrderSchema);