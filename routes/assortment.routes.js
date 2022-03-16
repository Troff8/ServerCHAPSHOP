const Router = require('express')
const router = new Router()
const assortmentController = require('../controller/assortment.controller')

router.post('/setAlco',assortmentController.setAlco)
router.get('/getAlco',assortmentController.getAlco)
router.put('/updateAlcoFullInfo',assortmentController.updateAlcoFullInfo)
router.put('/updateAlcoAvailability',assortmentController.updateAlcoAvailability)
router.delete('/deleteAlco/:id',assortmentController.deleteAlco)

module.exports=router