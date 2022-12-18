"use strict";
const nodemailer = require("nodemailer");

const sendEmail = async (sender, recipient, subject, message) => {
  // create email transporter object
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: "587",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  //define email transporter options
  const options = {
    from: sender,
    to: recipient,
    subject: subject,
    text: message,
  };
  //send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
