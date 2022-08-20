const router = require('express').Router()
const loginController =require('../controller/usercontroller/logincontroller')


router.post('/login',loginController)




module.exports = router