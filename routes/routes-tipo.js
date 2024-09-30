const { Router} = require ('express')

const {
    crearTipo,
    consultarTipos,
    consultarTipoPorID } = require('../controllers/tipoCtrl')

const router  = Router()
 
router.post('/',crearTipo)

router.get('/',consultarTipos)

router.get('/:id',consultarTipoPorID)


module.exports = router  