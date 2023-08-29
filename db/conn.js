const mongoose = require('mongoose');
const uri = "mongodb+srv://likhith096:" + encodeURIComponent("Likhith@mongo#") + "@cluster0.c2bkayl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{
}).then(() => {
    console.log("Connection Successful!")
}).catch((e) =>{
    console.log('No connection established',e);
})