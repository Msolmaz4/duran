const jwt_decode = require('jwt-decode')
const Users = require('../../models/userModel')


const checkAuth = async (req,res)=>{

    try {
        const token= req.token
        if(!token) return res.status(400).send('auth token')
        const user = jwt_decode(token)
        const userId =user.userId
        if(!userId) return res.status(400).send('user Yok')
        const userInfo =await Users.findById(userId)
        res.status(200).json({
            message:'succes',
            data:userInfo
        })


        
    } catch (error) {
        res.send('Auth')
    }

}
module.exports = checkAuth