const { Router} = require ('express')

const {
    crearDirector,
    consultarDirectores,
    consultarDirectorPorID,
    editarDirectorPorID} = require('../controllers/directorCtrl')

const router  = Router()
 
router.post('/',crearDirector)

router.get('/:id',consultarDirectorPorID)

router.get('/',consultarDirectores)

router.put('/:id',editarDirectorPorID)

module.exports = router 

