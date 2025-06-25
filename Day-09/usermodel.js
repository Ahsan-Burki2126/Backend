const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/${"koibhinam"}`); //we can write localhost instead of 127.0.0.1

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
