const router =require('express').Router()
const allProductController = require('../controller/productcontroller/allProductController')
const oneProductController =require('../controller/productcontroller/oneProductController')

router.post('/',allProductController)
router.get('/detail/:id',oneProductController)


module.exports =router