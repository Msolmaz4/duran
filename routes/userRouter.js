const router =require('express').Router()

const registerControll = require('../controller/usercontroller/registerControll')
const loginController =require('../controller/usercontroller/logincontroller')

// POST =>/REGISTER =>REQ.BODY
//POST => /LOGIN =>req.body
//post =>/favori/:id =>req.params
//delete=>/favori/:id =>req.params
//kullanici sayfayi yenilaediginde y]toiken var mi yok mu bunu yapacagir
//on tarafda context yapida da kontrol edecegiy
//get=>/check/ =>req.header

router.post('/register',registerControll)
router.post('/login',loginController)

module.exports =router