const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FlowerSchema = new Schema({
    name:{ 
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
   // picture:{data: Buffer, contentType: String },
    description:{ 
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Flower', FlowerSchema);