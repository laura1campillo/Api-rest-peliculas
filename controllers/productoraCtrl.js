const { request, response } = require('express')
const Productora = require ('../models/productora')

const crearProductora = async ( req = request, res = response)=> {
     
    try{ 
        const {nombre, fechaCreacion} = req.body
        let data = {
            nombre,
            fechaCreacion
        }
        const productora = new Productora (data) 

        await productora.save ()
        return res.status(201).json(productora)


    } catch(e){
        console.log(e)
        return res.status(500).json({mjs: 'Error al guardad'+ e})

    }
}

const consultarProductoras = async (req = request, res = response) => {
    
    try{
        const consultarProductoras = await Productora.find()
        return res.json(consultarProductoras)

    } catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e})
        
    }
}


const consultarProductoraPorID = async (req = request, res = response) => {

    try{
        const id = req.params.id

        const productora = await Productora.findById(id)
        return res.json(productora)
    
        } catch(e){
            console.log(e)
            return res.status(500).json({
                mjs: e})
    
        }
    }
    


const editarProductoraPorID = async (req = request, res = response) => {
    try{ 
        const id = req.params.id 
        const {nombre, fechaCreacion} = req.body
        let data = {
            nombre,
            fechaCreacion
        }
        data.fechaCreacion = new Date()
        const productora = await Productora.updateOne({_id:id}, {$set:data})


        return res.status(201).json(productora)


    } catch(e){
        console.log(e)
        return res.status(500).json({
            mjs: e})

    }
}

module.exports = { 
    crearProductora,
    consultarProductoras,
    consultarProductoraPorID,
    editarProductoraPorID,
}