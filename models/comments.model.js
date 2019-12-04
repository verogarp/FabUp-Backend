const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, "Comment is required"]
  },
  userId: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  createdAt: {
    type: Date,
    // default: Date.now() // Get a timestamp :),
    default: function() {
      return Date.now();
    } // revisar si esta no genera problemas y la de arriba si
  }
});

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel;
