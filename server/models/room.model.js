const mongoose = require("mongoose");
const Room = mongoose.model(
  "Room",
  new mongoose.Schema({
    RoomID: String,
    price: String,
    location: String,
    url : String,
    description : String,
    type : String
  })
);
module.exports = Room;