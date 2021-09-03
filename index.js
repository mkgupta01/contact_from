const express = require("express");
const app = express();
const port = 8000;
const mongoose = require('mongoose');


//DATABASE REALTED STUFF
mongoose.connect('mongodb://localhost/contact1', {useNewUrlParser:true});

//creating schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
  });

//creating our model
const Contact = mongoose.model('Contact', ContactSchema);  


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }))

//HTML SPECIFIC STUFF
app.set('views', __dirname + '/views');//setting views directory
app.engine('html', require('ejs').renderFile);//setting template engine as HTML

// ENDPOINTS
app.get('/',(req, res)=>{
    res.render('index.html');
});

//handling post request
app.post('/',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Your form have been submitted.")
    }).catch(()=>{
        res.status(400).send("Sorry, Your form was not submitted.");
    })
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});