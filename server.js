const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const sendEmail = require("./sendEmail");

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5000;

//send email route
app.post("/sendemail", async (request, response) => {
  //receive data from form
  const { recipient, subject, message } = request.body;
  try {
    const emailSender = process.env.USER;
    const emailRecipient = recipient;
    const emailSubject = subject;
    const emailMessage = message;

    await sendEmail(emailSender, emailRecipient, emailSubject, emailMessage);
    response
      .status(200)
      .json({ success: true, message: "Email Sent Successfully !" });
  } catch (error) {
    response.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
