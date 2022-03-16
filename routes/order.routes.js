const Router = require('express')
const router = new Router()
const orderController = require('../controller/order.controller')

router.post('/setOrder',orderController.setOrder)
router.get('/getOrder',orderController.getOrder)
router.delete('/deleteOrder/:id',orderController.deleteOrder)


module.exports=router