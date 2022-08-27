const router =require('express').Router()

const registerControll = require('../controller/usercontroller/registerControll')
const loginController =require('../controller/usercontroller/logincontroller')

const isLogin =require('../middlewarse/isLogin')

const {addFavController,deleteFav} = require('../controller/usercontroller/favController')

const checkAuth =require('../controller/usercontroller/checkAuth')

// POST =>/REGISTER =>REQ.BODY .................fertig
//POST => /LOGIN =>req.body    ...................fertig
//post =>/favori/:id =>req.params..............fertig
//delete=>/favori/:id =>req.params.............fertig
//kullanici sayfayi yenilaediginde y]toiken var mi yok mu bunu yapacagir
//on tarafda context yapida da kontrol edecegiy


//burada amac kullanici sayfayi yenilediginde token varsa devam etmesi icn
//get=>/check/ =>req.header

router.post('/register',registerControll)
router.post('/login', loginController)
router.post('/fav/:id',isLogin,addFavController)
router.delete('/fav/:id',isLogin , deleteFav)
router.get('/checkauth' ,checkAuth)

module.exports =router