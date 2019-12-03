const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    required: true
  },
  imgUrl: {
    Type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: Geo,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "comment"
  },
  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  },
  updatedAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
});

const adModel = mongoose.model("ad  ", adSchema);

module.exports = adModel;
