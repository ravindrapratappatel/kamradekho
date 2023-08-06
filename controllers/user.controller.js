const db = require("../models");
const Room = db.room;
const Location = db.location;
const FAQ = db.faq;
exports.allAccess = (req, res) => {
   res.status(200).send("public");
  };

  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  ///// 
  exports.getrooms = (req, res) => {
     Room.find({}).then((data)=>{
      //console.log(data)
      res.status(200).send({
        data: data
      })
     }).catch((err)=>{
      console.log(err)
      res.send({message : "Error---"})
     })
  };

  //////////////

  exports.getlocation = (req, res) => {
    Location.find({}).then((data)=>{
     //console.log(data)
     res.status(200).send({
       data: data
     })
    }).catch((err)=>{
     console.log(err)
     res.send({message : "Error---"})
    })
 };

/////

 exports.getfaq = (req, res) => {
  FAQ.find({}).then((data)=>{
   res.status(200).send({
     data: data
   })
  }).catch((err)=>{
   console.log(err)
   res.send({message : "Error"})
  })
};

/////

exports.getfaqbyfaq_category = (req, res) => {
  const category = req.query.category;
  FAQ.find({Faq_category : { $regex: category, $options: 'i'}}).then((data)=>{
   res.status(200).send({
     data: data
   })
  }).catch((err)=>{
   console.log(err)
   res.send({message : "Error"})
  })
};

 /////////
  exports.getroomsbylocation = (req, res) => {
    const roomloation = req.query.location;
    Room.find({location : { $regex: roomloation, $options: 'i'}}).then((data)=>{
     console.log(roomloation)
     res.status(200).send({data : data})
    }).catch((err)=>{
     console.log(err)
     res.send({message : "Error---"})
    })
 };