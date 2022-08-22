const mongoose = require('mongoose')
const Product =require('../../models/productModel')

const oneProductController = async ( req,res) =>{
    try {
    const {id} = req.params
    if(id){
        //basta boyle yazdik ama hatayi yakalamyamayiy bu yuzden then yazdik
        //const prod = await Product.findById(id)
        //console.log(id)
        Product.findById(id)
        .then((response)=>
        res.status(200).json({
            message:'succes',
            data:response
        })
        )
        .catch((err)=>res.send(err.message))
    }
        
        
    } catch (error) {
        
    }
}
module.exports= oneProductController