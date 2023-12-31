const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, 'kamradekho/build')));
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/admin.routes')(app); 



const db = require("./models");
const dbconfig = require("./config/db.config");
const Role = db.role;
const url = "mongodb+srv://ravi:ravi1234@cluster1.sl185.mongodb.net/kamradekho?retryWrites=true&w=majority";
db.mongoose
  .connect(url, {
//.connect(`mongodb://${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`, {
   useNewUrlParser: true,
   useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection errorrrr", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
   // res.send("Hello");
  res.json({ message: "server is Running" });
});
// set port, listen for requests
// const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'user' to roles collection");
        });
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });
      }
    });
}