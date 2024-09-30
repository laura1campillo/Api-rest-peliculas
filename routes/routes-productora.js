const { Router} = require ('express')

const {
    crearProductora,
    consultarProductoras,
    consultarProductoraPorID,
    editarProductoraPorID,} = require('../controllers/productoraCtrl')

const router  = Router()
 
router.post('/',crearProductora)

router.get('/',consultarProductoras)

router.get('/:id',consultarProductoraPorID)

router.put('/:id',editarProductoraPorID)

module.exports = router 


