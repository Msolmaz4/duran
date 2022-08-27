//burada biy kontrol yapariy
//login olduktan sonra burada kontrol geciririz
//middlerwarsse next zayzilir

const jwt = require('jsonwebtoken')


const isLogin = (req,res,next)=>{


    try {
    
        const {token} = req.headers
        //burada jwt .verify  anahtar var  bundan callback foksiyonu yazariz
        jwt.verify(token,process.env.AUTH_SEC_KEY,(err,decode)=>{
            if(err) return res.status(403).send('isloginde hata')
            req.token = token
            next()
        })

        
    } catch (error) {
        res.send(error)
        
    }
  

}

module.exports = isLogin