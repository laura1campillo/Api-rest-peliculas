const { Router} = require ('express')

const {
    crearMedia,
    consultarMedias,
    consultarMediaPorID,
    editarMediaPorID,
    elimnarMediaPorID   } = require('../controllers/mediaCtrl')

const router  = Router()
 
router.post('/',crearMedia)

router.get('/',consultarMedias)

router.get('/:id',consultarMediaPorID)

router.put('/:id',editarMediaPorID)

router.delete ('/:id',elimnarMediaPorID)
 
module.exports = router 

