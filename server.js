//Installing express library
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
require("./db/conn");
const multer = require('multer');
const Register = require("./db/models/register");
const ImageModel = require("./db/models/Upload");
// const users = []

app.use(bodyParser.urlencoded({extended : false}))

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.post("/register" , async(req, res) =>{
    try{
        const plainTextPassword = req.body.spass;
        const userData = ({
            id : Date.now().toString() ,
            UserName: req.body.sname ,
            USN: req.body.susn,
            Email: req.body.semail,
            Password: plainTextPassword
        })
        const registered = await Register.create(userData); //Register -- is collection name
        res.status(201).render('login');
    }
    //}
    catch(e){
        console.log(e)
        console.log("IT IS NOT WORKING")
        res.redirect("/login")
    }
})

//Ensuring Routing

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

//Storage
const Storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
})
const upload = multer({
    storage:Storage
}).single('testImage')

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new ImageModel({
                name : req.body.FileName,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
            newImage.save()
            .then(()=>res.send("Successfully uploaded"))
            .catch(err=>console.log(err));
        }
    }) 
})

const PORT = 3000; // Change this to the port you want to use

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
