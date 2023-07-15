const mongoose =require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONODB_URL).then(() =>{
    console.log("MongoDB is connected");
}).catch((e) =>{
    console.log("Not Connected");
})