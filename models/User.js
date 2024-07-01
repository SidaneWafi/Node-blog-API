const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name :{type :String ,required: true} ,
    email :{ type:String ,required :true ,unique :true},
    password :{type:String ,required:true ,minilength:6},
    //role :1 ->super admin role 2 :->normal admin ,role :3 normal user
    role :{ type:Number ,default :3},
    verificationCode :String ,
    forgotPasswordCode:String ,
    isVerified : {type :Boolean ,default :false},

},{timestamp: true});

const User =mongoose.model("user",userSchema);
module.exports =User ;