const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Can use other services like SendGrid, etc.
    auth: {
      user: "g8474096@gmail.com", // Your email address
      pass: "stmo tbga boti kfxj", // Your email password or app password
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com", // Sender address
    to, // Recipient's email
    subject, // Subject of the email
    text, // Plain text content
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
