import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  userOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  userTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  message: [{ type: Object }]
});

export default mongoose.model("message", messageSchema);
