const nodemailer = require("nodemailer");
const ejs = require("ejs")
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "serviceuse66@gmail.com",
    pass: "tbdp mylq tojz omfx",
  },
});

const sendEmail = async (to, subject, html) => {
  const msg = { from: "serviceuse66@gmail.com", to, subject, html };
  await transporter.sendMail(msg);
};

const sendEnquiryForm = async (datas) => {
  const { email, contact, name, message } = datas;
  const subject = "V+ Enquiry";
  let htmlfile = await ejs.renderFile(__dirname + "/enquiry.ejs", {
    email: email,
    name: name,
    contact: contact,
    message: message,
  });
  await sendEmail(email, subject, htmlfile);
};

module.exports = {
  sendEnquiryForm
}