/* const router = require("express").Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.send("contacted");
});

router.post("/contact", (req, res) => {
  let data = req.body;

  let smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
      user: "thiernobarry554@gmail.com",
      pass: "04662401B",
    }, 
  });   
  let mailOptions = {
    from: data.email,
    to: "thiernobarry554@gmail.com",
    subject: `Message from ${data.name}`, 
    html: ` 
         <h3>Informations</h3>  
         <ul>
           <li>Name: ${data.name}</li>   
           <li>Email: ${data.email}</li>
           
         </ul>
         <h3>Message</h3>
         <p>${data.message}</p>
        `,
  };
  smtpTransport.sendMail(mailOptions, (err, res) => {
    try {
      if (err) return res.status(400).json({ msg: err });
      else {
        return res.status(200).json({ msg: `Message was sent` });
      }
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  });
});

module.exports = router;
  */