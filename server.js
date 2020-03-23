const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// require('dotenv').config();

const nodemailer = require("nodemailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.post('/api/form', (req,res) => {
  // console.log(req.body)
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'danyka.mosciski@ethereal.email',
        pass: 'gTPQ7pzJdnGqf8bjmY'
      }
    })

    let mailOptions = {
      from:'info@wjbest.com',
      to:'danyka.mosciski@ethereal.email',
      replyTo:'info@wjbest.com',
      subject:'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err,info) => {
      if (err) {
        return console.log(err)
      }

      // console.log('Message sent: %s', info.message);
      // console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));

    })
  })
});

// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WJBest", {useNewUrlParser: true}).then(() => {
//   console.log("Mongo connected")
//   console.log(process.env.MONGODB_URI)
// }).catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
