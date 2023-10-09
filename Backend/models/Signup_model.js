const mongoose = require('mongoose')
const userSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Age:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    }
})
userSchema.methods.matchPassword=async function(enteredPassword){
    return enteredPassword=== this.password;
}
const User=mongoose.model("User",userSchema);
module.exports=User;