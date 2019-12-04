const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  images: {
    type: [String],
    required: [true, "Images is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: [true, "Category is required"]
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment"
    }
  ],
  likes: {
    type: [String]
  },
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
