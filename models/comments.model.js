const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  userId: {
    Type: Object
  },
  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
});

const commentsModel = mongoose.model("comment", commentsSchema);

module.exports = commentsModel;
