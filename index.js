const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { sendEnquiryForm } = require("./services/emailservice");
let PORT = 5001;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/vplus/enquiry", async (req, res) => {
  console.log(req.body);
  await sendEnquiryForm(req.body);
  res.send({message:"Mail Send"})
});

app.listen(PORT, () => {
  console.log("Server Running On :", PORT);
});
