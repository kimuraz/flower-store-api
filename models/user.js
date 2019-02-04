const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name:{
        type: String,
        required:true
        
    },
    password:{
        type: String,
        required: true,
        bcrypt: true
    },
    email:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    socialNumber:{
        type:Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    deliveryAdress:{
        type: String,
        required: true
    }
});

UserSchema.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('User', UserSchema);