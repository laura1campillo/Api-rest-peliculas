const { request, response } = require('express')
const Tipo = require ('../models/tipo')

const crearTipo = async ( req = request, res = response)=> {
     
    try{ 
        const {nombre, fechaCreacion} = req.body
        let data = {
            nombre,
            fechaCreacion
        }
        const tipo = new Tipo (data)

        await tipo.save ()
        return res.status(201).json(tipo)


    } catch(e){
        console.log(e)
        return res.status(500).json({mjs: 'Error al guardad'+ e})

    }
}

const consultarTipos = async (req = request, res = response) => {
    
    try{
        const tipos = await Tipo.find()
        return res.json(tipos)

    } catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e})
        
    }
}
const consultarTipoPorID = async (req = request, res = response) => {

    try{
        const id = req.params.id

        const tipo = await Tipo.findById(id)
        return res.json(tipo)
    
        } catch(e){
            console.log(e)
            return res.status(500).json({
                mjs: e})
    
        }
    }
    
module.exports = { 
    crearTipo,
    consultarTipos,
    consultarTipoPorID,
    
}