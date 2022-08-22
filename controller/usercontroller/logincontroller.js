const User =require('../../models/userModel')
const Products =require('../../models/productModel')


const loginController = async (req,res)=>{
    const user = await Products.find()
    console.log(user.length)
    res.send(user.length)



}

module.exports = loginController