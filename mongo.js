const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/register")
.then(()=>{
    console.log("mongoose connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection