const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Registration",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    autoIndex: true
}).then(() => {
    console.log("Connection Successful!")
}).catch((e) =>{
    console.log('No connection established',e);
})