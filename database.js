var Mongoose = require('mongoose');


// CARREGAR A DB
Mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
    console.log('Connection with database succeeded.');
});

exports.db = db;