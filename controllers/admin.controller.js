const db = require("../models");
const Room = db.room;
const Location = db.location;
const FAQ = db.faq;

exports.addfaq = (req, res) =>{
 const faq = new FAQ({
  Faq_id : req.body.Faq_id,  
  Faq_category : req.body.Faq_category,
  Question : req.body.Question,
  Answer : req.body.Answer
 })

 faq.save((err)=>{
  if(err)
  {
    res.status(500).send({ message: err });
    return;
  }
  else{
    res.status(200).send({ message: "FAQ added" });
    return;
  }
 })

}

exports.addroom = (req, res) => {
    const room = new Room({
    RoomID: req.body.roomid,
    price: req.body.price,
    location: req.body.location,
    url : req.body.url,
    description : req.body.description,
    type : req.body.type
      });

    room.save((err)=>{
       if(err) {
        res.status(500).send({ message: err });
        return;
       } 
       else{
        res.status(200).send({ message: "Room added" });
        return;
       }
    })  
  };

exports.addlocation = (req, res) => {
     const location = new Location({
      LocationID : req.body.locationID,
      Location : req.body.location
     })
     console.log(req.body)
     location.save((err)=>{
      if(err)
      {
        res.status(500).send({
          message : err
        })
        return;
      }
      else{
        res.status(200).send({
          message: "Location added"
        })
        return;
      }
     })
   };  