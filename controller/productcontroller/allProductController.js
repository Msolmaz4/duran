const mongoose =require('mongoose')
const Product =require('../../models/productModel')

const allProductController = async (req,res) => {

    try {
        

        /* kontrol amacli once bunnu zapariy boylece datax ulasip ulasimadugumuyo goreriy
        const products =await Product.find()
        console.log(products.length)
        res.send(products.length)
localhost:8000/products/ postmande n gonderdik consolda dortu goreduk

        */ 
//burada limit vermek icin 
//filtreme zapmak icin gelen degerleri req,body yukledeim
const { keyword ,min_price ,max_price,category,page} = req.body;
//console.log(keyword) burada undefinid geliyor normalde olmazy arastri
//burada arama islemini find zapacagiy ama find obje alir bu yuzden yukarida azarlama yapavcagiy 
//bir obje atayim devam edecegiz
//hata bulundu res.send(products)



if(page<=0) page=1
    
let query = {}
//keyword zayildigindaki degerleri getri biyt bunu title aratiyoruy
//bununla ilgili RegEXP VAR GIYEEL


 keyword ? query.title = new RegExp(keyword,'i') :null
 //const products =await Product.find(query).limit(20) burada quey yazdik keyword gorduk tosh keyword yay
 //yukadide komut zayinca res.send(products ) yaptik gorduk
 

 // burda max ve min price halledecgiy
 // girilen degeri alir
 min_price ? query.min_price = {['$gte']:min_price} :null
 max_price ? query.max_price= {['$lte']:max_price} :null

 //sonra burada kontrol yaapriy yoks aezerler 
 min_price && max_price ? query.price ={['$gte']:min_price,['$lte']:max_price}:null


 category ? query.category = category :null



//skipi kac tane geceyim icin yazariy saygfa gecisleri
const products =await Product.find(query).limit(20).skip((page-1)*20)
//console.log(products.length)
//res.send(products)
res.status(200).json({
    message:'succes',
    data:products
})


        
    } catch (error) {
         console.log(error.message)
    }
}

module.exports =allProductController