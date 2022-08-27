const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        
        minlength:[5, `biray uzuyn yaz`]
    },
    name:{
        type:String,
        required:true,

    },
    surname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    favs:{
        type:Array,
        default:[]
    }
})



const Users = mongoose.model('User',UserSchema)
module.exports =Users