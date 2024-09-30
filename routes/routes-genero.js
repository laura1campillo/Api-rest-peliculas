const { Router} = require ('express')

const {
    crearGenero, 
    consultarGeneros,
    consultarGeneroPorID,
    editarGeneroPorID} = require('../controllers/generoCtrl')

const router  = Router()
 
router.post('/',crearGenero)

router.get('/:id',consultarGeneroPorID)

router.get('/',consultarGeneros)

router.put('/:id',editarGeneroPorID)

module.exports = router 

 