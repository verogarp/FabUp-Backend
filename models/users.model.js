const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        );
      }
    },
    unique: [true, "This is email is registered"]
  },
  password: {
    type: String,
    required: true
  },
  birthDate: {
    type: Number,
    required: true
  },
  photo_url: {
    Type: String
  },
  description: {
    type: String
  },
  interest: {
    type: Schema.Types.ObjectId,
    ref: "interest"
  },
  location: {
    type: Geo
  },
  favoriteAds: {
    type: Schema.Types.ObjectId,
    ref: "ad"
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

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
