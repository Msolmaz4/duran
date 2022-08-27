const { findOne } = require("../../models/userModel")




const loginController =async (req,res)=>{

    try {
         const {email,password } =req.body
         //kontrol amacli
         if(!email || !password) return res.send('doldururn')
         const emailControl = await findOne({email:email})
         if(!emailControl) return res.status(400).send('DAYIIII')#
         //bu biye true veya false dondurur biri bizim gonderdigimiy digeri databasedeki
        const passworMatch =bcrypt.compareSync(password,emailControl.password)
        if(!passworMatch) return res.status(400).send('password hata')
        //token kurulrumu sign iki tane paramette alir
        




    } catch (error) {
         console.log(error)
    }

}
module.exports =loginController