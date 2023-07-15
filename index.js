const express=require("express");
require("./db/index");
const cors=require("cors");
const FormData=require("./schema/index");
const app=express();

app.use(cors());
app.use(express.json());
app.get("/",(req, res) =>{
    console.log("hello");
    res.end();
});
app.post("/form", (req, res) =>{
    console.log(req.body);
//    console.log("The form Data we are getting"); 
    const users=new FormData(req.body);
    users.save().then(() =>{
        res.status(200).send("Data Saved")
    }).catch(e =>{
        res.status(400).send(e)
    })
});

let PORT=5001;
app.listen(PORT, () =>{
    console.log(`This port is runing on ${PORT}`);
});