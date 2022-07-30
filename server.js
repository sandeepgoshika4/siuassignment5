const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const url = `mongodb+srv://sandeepgoshika3:Ojas1525@siuassignment.muklr0t.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then( () => {
    console.log('Connected to database ')
  }).catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
});

  const formSchema = new mongoose.Schema(
    {
      data: Object,
    },
    { collection: `feedback` }
  );

  
const Form = mongoose.model("Form", formSchema);

const formData = (bodyData) => {
    Form({ data: bodyData }).save((err) => {
      if (err) {
        throw err;
      }
      else {
        console.log("done");
      }
    });
  };

const Count = async () => {
  return await Form.countDocuments({}).exec();
}



app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})



app.post('/', async (req, res)=>{

    let count = 0;
    try {
      await formData(req.body);
      count = await Count();
      
      console.log(count);
    } catch (error) {
      console.log(error);
    }

    console.log(req.body)
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sandeepgoshika4@gmail.com',
            pass: 'sejdfufbqrmzjfjw' 
           }});
   
           let mailOptions = {
               
               from: 'Sandeep Goshika <sandeepgoshika4@gmail.com>', // sender address
               to: req.body.email, // list of receivers
               subject: 'Form Submission', // Subject line
               text: `Hello ${req.body.name}, Thank you for your feedback! you are my ${count} honored guest who left feedback-From Sandeep Goshika`, // plain text body
           };
           console.log("hello")
           transporter.sendMail(mailOptions, (error, info) => {
               if (error) {
                       return console.log(error);
               }
               console.log('Message %s sent: %s', info.messageId, info.response);
                   res.render('index');
           });
})
app.listen(PORT, ()=>{
    console.log("server running on port ")
})