const { request, response } = require('express')
const Media = require ('../models/media')

const crearMedia = async ( req = request, res = response)=> {
     
    try{ 
        const {serial,titulo,
            sinopsis,
            url,
            imagen, 
            fechaCreacion,
            fechaEstreno,
            genero,
            director,
            productora,
            tipo} = req.body
        let data = {

            serial,
            titulo,
            sinopsis,
            url,
            imagen, 
            fechaCreacion,
            fechaEstreno,
            genero,
            director,
            productora,
            tipo

        }
        const media = new Media (data)

        await media.save ()
        return res.status(201).json(media)


    } catch(e){
        console.log(e)
        return res.status(500).json({mjs: 'Error al guardad'+ e})
    }
}
const consultarMedias = async (req = request, res = response) => {
    
    try{
        const medias = await Media.find()
        return res.json(medias)

    } catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e})
        
    }
}
const consultarMediaPorID = async (req = request, res = response) => {

    try{
        const id = req.params.id

        const media = await Media.findById(id)
        return res.json(media)
    
        } catch(e){
            console.log(e)
            return res.status(500).json({
                mjs: e})

        }
    }
    
const editarMediaPorID = async (req = request, res = response) => {
    try{ 

        const id = req.params.id 
        const {serial,titulo, sinopsis,url,imagen,fechaCreacion,fechaEstreno,genero,director,productora,tipo
       } = req.body

        let data = {
            serial,titulo,sinopsis,url,imagen,fechaCreacion,fechaEstreno,genero,director,productora,tipo
        }
        data.fechaActualizacion = new Date()
        const media = await Media.updateOne({_id:id}, {$set:data})


        return res.status(201).json(media)

    } catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e})
    }
}
const elimnarMediaPorID = async (req = request, res = response) => {

    
        try{
            const id = req.params.id
            const medias = await Media.deleteOne({_id:id})
            return res.json(medias)
    
        } catch(e){
            console.log(e)
            return res.status(500).json({
                mjs: e})
            
        }
    }

module.exports = { 
    crearMedia,
    consultarMedias,
    consultarMediaPorID,
    editarMediaPorID,
    elimnarMediaPorID  
}