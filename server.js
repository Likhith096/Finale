//Installing express library
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
require("./db/conn");
const Register = require("./db/models/register");

// const users = []

app.use(bodyParser.urlencoded({extended : false}))

app.set('view engine', 'ejs');

app.post("/register" , async(req, res) =>{
    try{
        const formType = req.body.formType;
        // if(formType === "login"){
        const userData = ({
            id : Date.now().toString() ,
            UserName: req.body.sname ,
            USN: req.body.susn,
            Email: req.body.semail,
            Password: req.body.spass
        })
        const registered = await Register.create(userData); //Register -- is collection name
        res.status(201).render('login');
        alert("Connection Sucessful");
    }
    //}
    catch(e){
        console.log(e)
        console.log("IT IS NOT WORKING")
        res.redirect("/login")
    }
})

//Ensuring Routing
app.use(express.static('public'));

app.get('/' ,(req,res) =>{
    res.render("home.ejs")
})

app.get('/login', (req,res) =>{
    res.render("login.ejs")
})


app.post("/login" , async(req, res) =>{
    try{

        const name = req.body.fname;
        const password = req.body.fpass;

        const username = await Register.findOne({UserName:name}); //UserName -- database field , name - login email

        if(username.Password === password)
        {
            res.status(201).render("home.ejs");
        }
        else
        {
            res.send("Password are not matching");
        }
    }
    catch(e)
    {
        res.status(400).send("Invalid UserName");
    }
})
//End of Routes

app.listen(3000 , () =>{
    console.log("I am listening")
})

