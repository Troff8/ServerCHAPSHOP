const Router = require('express')
const router = new Router()
const assortmentController = require('../controller/assortment.controller')

router.post('/setAlco',assortmentController.setAlco)
router.get('/getFullAlco',assortmentController.getFullAlco)
router.get('/getWineAlco',assortmentController.getWineAlco)
router.get('/getVodkaAlco',assortmentController.getVodkaAlco)
router.get('/getWhiskeyAlco',assortmentController.getWhiskeyAlco)
router.get('/getBeerAlco',assortmentController.getBeerAlco)
router.get('/getNonAlcoholicAlco',assortmentController.getNonalcoholicAlco)
router.get('/getSnacksAlco',assortmentController.getSnacksAlco)
router.get('/getOtherAlco',assortmentController.getOtherAlco)
router.put('/updateAlcoFullInfo',assortmentController.updateAlcoFullInfo)
router.put('/updateAlcoAvailability',assortmentController.updateAlcoAvailability)
router.delete('/deleteAlco/:id',assortmentController.deleteAlco)

module.exports=router