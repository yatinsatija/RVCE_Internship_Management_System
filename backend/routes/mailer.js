var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");
var path = require("path");

/* GET users listing. */
router.post("/", function (req, res, next) {
  console.log(req.body);
  const { jobTitle, salary, jobDescription, students } = req.body.user;
  // Put your mail ID
  const x = "your Email Id";
  // Put your mail ID and password
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Your Email Id",
      pass: "Your Password",
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve(__dirname, "templateViews"),
      defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, "templateViews"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));

  var mailOptions = {
    from: "Placement RVCE",
    to: students,
    subject: "RVCEx official mail service",
    template: "main",
    context: {
      jobTitle,
      salary,
      jobDescription,
      students,
    },
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send({ message: error.message, error: true });
      console.log(error);
      //   alert(error.message)
    } else {
      res.send({ message: info.message, error: false });
      //   alert(info.response);
      console.log("Email sent: " + info.response);
    }
  });

  //   res.send('respond with a resource');
});

module.exports = router;
