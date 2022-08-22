const mongoose =require('mongoose')
const Products = require('./models/productModel')





const main =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/ePatika')
    .then(()=>console.log('mongo baglandi'))
    .catch((err)=>console.log(err))
}
main()

Products.insertMany([
    
  {
      id:1,
      photos: [
        "https://images.unsplash.com/photo-1565339119519-c9eaa1918b9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
      ],
      title: 'Toshiba Notebook',
      description: 'Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. Yo',
      price: 600,
    
      __v: 0
    },
    
    {
     id:2,
      photos: [
        "https://images.unsplash.com/photo-1565339119519-c9eaa1918b9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
      ],
      title: "Dell Notebook",
      description: "Trees live in your fan brush, but you have to scare them out. Just let this happen. We just let this flow right out of our minds. You're meant to have fun in life. Clouds are free. They just float around the sky all day and have fun.\n\nSee there how easy that is. Automatically, all of these beautiful, beautiful things will happen. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. These trees are so much fun. I get started on them and I have a hard time stopping. Life is too short to be alone, too precious. Share it with a friend.",
      price: 300,
   
      __v: 0
    }
   
  
  ])
.then(()=>console.log('prod okez'))
.catch((err)=>console.log(err))
