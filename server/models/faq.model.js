const mongoose = require("mongoose");
const FAQ = mongoose.model(
    "FAQ",
    new mongoose.Schema({
      Faq_id : String,  
      Faq_category : String,
      Question : String,
      Answer : String
    })
  );
  module.exports = FAQ;