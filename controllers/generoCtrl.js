const { request, response } = require('express')
const Genero = require ('../models/genero')

const crearGenero = async ( req = request, res = response)=> {
     
    try{ 
        const {nombre, descripcion} = req.body
        let data = {
            nombre,
            descripcion
        }
        const genero = new Genero (data)

        await genero.save ()
        return res.status(201).json(genero)


    } catch(e){
        console.log(e)
        return res.status(500).json({mjs: 'Error al guardad'+ e})
    }
}
const consultarGeneros = async (req = request, res = response) => {
    
    try{
        const generos = await Genero.find()
        return res.json(generos)

    } catch(e){
        console.log(e)
        return res.status(500).json({ 
            mjs: e})
        
    }
}
const consultarGeneroPorID = async (req = request, res = response) => {

    try{
        const id = req.params.id

        const genero = await Genero.findById(id)
        return res.json(genero)
    
        } catch(e){
            console.log(e)
            return res.status(500).json({
                mjs: e})
    
        }
    }
    
const editarGeneroPorID = async (req = request, res = response) => {
    try{ 
        const id = req.params.id 
        const {nombre, descripcion} = req.body
        let data = {
            nombre,
            descripcion
        }
        data.fechaActualizacion = new Date()
        const genero = await Genero.updateOne({_id:id}, {$set:data})


        return res.status(201).json(genero)

    } catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e})
    }
}
module.exports = { 
    crearGenero,
    consultarGeneros,
    consultarGeneroPorID,
    editarGeneroPorID   
}