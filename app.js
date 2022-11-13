const { request } = require("express");
const express=require("express");
const nodemailer = require('nodemailer');
const app=express();

app.use(express.static("./public"));

app.use(express.urlencoded({
    extended:true
}));

var emailTransport = nodemailer.createTransport({
    service:'outlook',
    auth: {
        user: 'website.aayush@outlook.com',
        pass: 'Khatiwada$004'
    }
});

app.get("/",(req,res)=>{
    res.sendFile("/views/index.html",{root:__dirname});
});

app.get("/resume",(req,res)=>{
    res.sendFile("/views/resume.html",{root:__dirname});
});

app.post("/mail",(req,res)=>{
    var incomingform = req.body
    var options = {
        from: 'website.aayush@outlook.com',
        to: 'khatiwadaprince1@gmail.com',
        subject: 'Email from your website',
        text: `Name: ${incomingform.fullname}\nAddress: ${incomingform.email}\nMessage: ${incomingform.feedback}`
    }
    
    emailTransport.sendMail(options, (err,msg)=>{
        if(err) throw err
        console.log(msg);
    });
    res.redirect("/");
});

app.listen(process.env.PORT || "8080");