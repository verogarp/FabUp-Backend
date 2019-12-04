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
    unique: [true, "This email is registered"]
  },
  password: {
    type: String,
    required: [true, "Password is necesary"]
  },
  birthDate: {
    type: Date,
    required: [true, "Birth date is necesary"]
  },
  photo_url: {
    Type: String
  },
  description: {
    type: String
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: [true, "Categories is necesary"]
    }
  ],
  favoriteAds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ad"
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

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
