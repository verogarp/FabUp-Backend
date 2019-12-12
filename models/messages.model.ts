import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  userOne: {
    type: String,
    required: [true, "user one email is required"]
  },
  userTwo: {
    type: String,
    required: [true, "user two email is required"]
  },
  message: [
    {
      text: String,
      date: Date,
      sender: String
    }
  ]
});

export default mongoose.model("message", messageSchema);
