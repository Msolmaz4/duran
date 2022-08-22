const mongoose =require('mongoose')


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        toJSON:false
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']

    }

})

const Users = mongoose.model('User',userSchema)

module.exports =Users