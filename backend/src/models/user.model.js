const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username already exists"],
        required:true,
    },
    email:{
        type:String,
        unique:[true,"email already exists"],
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const Usermodel=mongoose.model("User",userSchema)
module.exports=Usermodel