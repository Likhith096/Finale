const mongoose = require('mongoose');

const empschema = new mongoose.Schema({
    UserName : {
        type:String,
        required:true},
    USN : {
        type:String,
        required:true,
        unique:true
    },
    Email : {
        type:String,
        required:true,
        unique:true
    },
    Password : {
        type:String,
        required:true
    }
})

//Creating collection

const Register = mongoose.model("Register",empschema)

module.exports = Register;