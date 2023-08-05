const mongoose = require("mongoose");
const Location = mongoose.model(
    "Location",
    new mongoose.Schema({
      LocationID: String,
      Location: String,
    })
  );
  module.exports = Location;