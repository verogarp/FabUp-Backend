import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  image: {
    type: String
    // required: [true, "Image is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
    // required: [true, "Category is required"]
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment"
    }
  ],
  location: { type: [Number], index: "2dsphere" },
  numLikes: {
    type: Number
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

export default mongoose.model("ad", adSchema);
