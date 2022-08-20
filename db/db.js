const mongoose =require('mongoose')
const main =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/eCommerce')
    .then(()=>console.log('mongo baglandi'))
    .catch((err)=>console.log(err))
}
main()