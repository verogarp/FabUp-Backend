const mongoose = require("mongoose");

const interestSchema = new mongoose.Schema({
  interest: {
    type: String
  }
});

const interestModel = mongoose.model("interest", interestSchema);

module.exports = interestModel;
