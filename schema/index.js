const mongoose=require("mongoose");
const validator=require("validator");


const formSchema=new mongoose.Schema({
     name: {
        type: String,
        required: true,
     },
     email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validator(value){
            // if the email is not valid throw an error
           if(!validator.isEmail(value)){
              throw new Error("Invalid Email")
           }  
        }
     },
     phoneNumber:{
        type: Number,
        required: true,
        unique: true
     },
     address:{
        type: String,
        required: true
     }


});
// Now we need to create a new collection in  MongoDB
const formData=new mongoose.model("FormData",formSchema)

module.exports=formData;


