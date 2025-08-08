const nodemailer = require('nodemailer');

// Create transporter with your email service config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',       // <-- Replace with your email
    pass: 'your_email_password_or_app_password' // <-- Replace with your password or app password
  }
});

const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'your_email@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello from Node.js email sender!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent: ' + info.response);
});
