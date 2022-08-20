const express = require('express')
const mongoose =require('mongoose')
const app = express()
const PORT = 8000
const userRouter =require('./routes/userRouter')


app.use(express.urlencoded({extended:false}))
//require('./db/db')

//buradan da direk mongo atlasa baglaniriz
mongoose.connect('mongodb+srv://youtube:Azxs12345@cluster0.wpuxx.mongodb.net/digi?retryWrites=true&w=majority',
{useNewUrlParser :true , useUnifiedTopology: true})
.then(()=>app.listen(PORT ,()=>console.log(`listenig port ${PORT}`)))

app.get('/',(req,res)=>{
    res.send('deneme')
})




app.use('/users',userRouter)
 
app.listen(8000,()=>{
    console.log('geldik')
})






