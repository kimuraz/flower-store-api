var Mongoose = require('mongoose');


// CARREGAR A DB
Mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true});
const db = Mongoose.connection;

db.on('error',(error) => {
    console.log('Error connecting to MongoDB', error);
  });
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

exports.db = db;