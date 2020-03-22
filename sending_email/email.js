var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adhoadhigal@gmail.com',
    pass: '38487764'
  }
});


module.exports = function sendMail(email, subject, text) {
    var mailOptions = {
        from: 'adhoadhigal@gmail.com',
        to: email,
        subject: subject,
        text: text
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}