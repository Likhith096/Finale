//Installing express library
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
require("./db/conn");

const users = []

app.use(bodyParser.urlencoded({extended : false}))

app.post("/login" , async(req, res) =>{
    try{
        users.push({
            id : Date.now().toString() ,
            name: req.body.sname ,
            email: req.body.semail,
            usn: req.body.susn,
            password: req.body.spass
        })
        console.log(users)
    }
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
//End of Routes

app.listen(3000 , () =>{
    console.log("I am listening")
});



// Using axios :- (Http server request)
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const bcrypt = require("bcrypt");
// const axios = require("axios");

// const users = [];

// app.use(bodyParser.urlencoded({ extended: false }));

// app.post("/login", async (req, res) => {
//   console.log("fdf");
//   try {
//     // const hashpass = await bcrypt.hash(req.body.spass)
//     users.push({
//       id: Date.now().toString(),
//       name: req.body.sname,
//       email: req.body.semail,
//       usn: req.body.susn,
//       password: req.body.spass,
//     });
//     console.log(users);

//     // Send the data to the server using HTTP POST request
//     await axios.post("http://localhost:3000/signupData", {
//       id: Date.now().toString(),
//       name: req.body.sname,
//       email: req.body.semail,
//       usn: req.body.susn,
//       password: req.body.spass,
//     });

//     res.redirect("/login"); // Redirect to login page
//   } catch (e) {
//     console.log(e);
//     console.log("IT IS NOT WORKING");
//     res.redirect("/home");
//   }
// });

// // Ensuring Routing
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("home.ejs");
// });

// app.get("/login", (req, res) => {
//   res.render("login.ejs");
// });

// app.post("/signupData", (req, res) => {
//     console.log(req.body);
// });
// // End of Routes

// app.listen(3000, () => {
//   console.log("I am listening");
// });
