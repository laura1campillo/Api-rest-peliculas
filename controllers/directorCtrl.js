const { request, response } = require('express')
const Director = require ('../models/director')

const crearDirector = async ( req = request, res = response)=> {
     
    try{ 
        const {nombre, fechaCreacion} = req.body
        let data = {
            nombre,
            fechaCreacion
        }
        const  director = new Director (data) 

        await director.save ()
        return res.status(201).json(director)


    } catch(e){
        console.log(e)
        return res.status(500).json({mjs: 'Error al guardad'+ e})

    }
}

const consultarDirectores = async (req = request, res = response) => {
    
    try{
        const directores = await Director.find()
        return res.json(directores)

    } catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e})
        
    }
}

const consultarDirectorPorID = async (req = request, res = response) => {

    try{
        const id = req.params.id
        console.log(id)
        const director = await Director.findById(id)
        return res.json(director)
    
        } catch(e){
            console.log(e)
            return res.status(500).json({
                mjs: e})
    
        }
    }

const editarDirectorPorID = async (req = request, res = response) => {
    try{ 
        const id = req.params.id 
        const {nombre, descripcion} = req.body
        let data = {
            nombre,
            descripcion
        }
        
            data.fechaCreacion = new Date()
        const director = await Director.updateOne({_id:id}, {$set:data})


        return res.status(201).json(director)


    } catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e})

    }
}

module.exports = { 
    crearDirector,
    consultarDirectores,
    consultarDirectorPorID,
    editarDirectorPorID
    
}