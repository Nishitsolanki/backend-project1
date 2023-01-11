const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/route.js");
const mongoose = require("mongoose");
 mongoose.set('strictQuery', true)
const app = express();
//const multer =require("multer");


app.use(bodyParser.json()); // bodyParser means translator.
//app.use(multer().any());

mongoose.connect(
    "mongodb+srv://nisitsolanki:9978793231@cluster0.te1decq.mongodb.net/nisitsolanki9",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch( err => console.log(err));


app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});