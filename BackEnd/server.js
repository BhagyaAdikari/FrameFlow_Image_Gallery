const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{

  useUnifiedTopology: true

})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongo DB connection is succes.")
})


const userRouter=require("./routes/users.js");

app.use("/user",userRouter)

const imageRouter=require("./routes/images.js");

app.use("/image",imageRouter)

const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT,()=>{
    console.log(`Server is up and runnning on ${PORT}`)
})