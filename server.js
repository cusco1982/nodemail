const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

const nodemailer = require("nodemailer");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.post('api/form', (req,res) => {
//   console.log(req.body)
// });

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WJBest", {useNewUrlParser: true}).then(() => {
  console.log("Mongo connected")
  console.log(process.env.MONGODB_URI)
}).catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
