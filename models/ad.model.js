const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    required: true
  },
  imgUrl: {
    Type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now() // Get a timestamp :)
  },
  updatedAt: {
    type: Date,
    default: Date.now() // Get a timestamp :)
  }
});

const adModel = mongoose.model("ad", adSchema);

module.exports = adModel;
