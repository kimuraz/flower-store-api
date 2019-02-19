const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  userID: {
    type: String,
    required: true
  },

  commentDate: {
    type: Date,
    required: true
  },
  commentMessage: {
    type: String,
    required: true
  },
  commentRate: {
    type: Number,
    required: true
  }
});
