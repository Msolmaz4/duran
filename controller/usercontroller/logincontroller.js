const Users =require('../../models/userModel')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')




const loginController =async (req,res)=>{

    try {
        const {email,password} =req.body
        //email kontrol
        if(!email || !password) return res.send('dayiiiiii')
        const emailControl =await Users.findOne({email:email})
        if(!email) return res.status(400).send('email hata')
        // burada  passwordu konrol ederken bc comparae ozelligini kullancagiy
        const passwordMatch = bcrypt.compareSync(password,emailControl.password)
        //kontrol icin consol.log bakariy true donersaglamlik yapilmis olur
        //console.log(passwordMatch)
        if(!passwordMatch) return res.status(400).send('password hata')
        //burada gonderrirken token olusturacagiz
        //sign imyalama olabilir bir tane anahtar olusturacagoy biz burada id ekeldeik login id bunu da fav //////cekecegiz bozlece kisize fav eklenis oluruy
        const userToken =jwt.sign(
            {userId:emailControl._id},process.env.AUTH_SEC_KEY
            )

          //yaptigimiy tokkunu gormek icin
         // console.log(userToken)


   //bir guvemnlik vat 
   // emailControl.password =null
        //duyenleden sonra res ile gonderiyoruz
        res.status(200).json({
            message:'succes',
            data:emailControl,
            token:userToken
        })
/**gelen data
 * {
    "message": "succes",
    "data": {
        "_id": "630a1bd44a080c2e8f741e11",
        "email": "msolmaz@gmail.com",
        "name": "muhammet",
        "surname": "solma",
        "password": "$2b$08$vVh3xdgfYyo7yiBkOTVMceIw.NQpSMILCNl3HJtGhspyitD3fZZmi",
        "favs": [],
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzBhMWJkNDRhMDgwYzJlOGY3NDFlMTEiLCJpYXQiOjE2NjE2MDc1NDR9.1OaW1y7h8s0VN9yVAQ0LaLG4P6b8_8UV61QuebRE880"
}
 * 
 * 
 */
//bundan sonra moderwars olustuturz
//token biy localstoe g;nderroriz burada bindan sonra req g;nderrorz
//burada kontrol icin miderw yapariz
//miderwasse headerle g;nderriririm servere



    } catch (error) {
         console.log(error)
    }

}
module.exports =loginController