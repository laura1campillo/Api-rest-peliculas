const { Schema,model } = require('mongoose')
const mediaSchema = Schema({


    serial:{
        type: String,
        unique:[true,'Serial ya existe'],
        required: [true, 'serial requerido ']
    },

    titulo:{
        type: String, 
        required: [true, 'nombre requerido ']

    },
    sinopsis:{
        type: String,
        
    },

    url: {
        type: String,
        unique:[true,'Url ya existe'],
        required: [true, 'Url requerido ']

    },

    imagen: {
        type: String
        
    },

    fechaCreacion:{
        type: Date

    },

    fechaActualizacion:{
        type: Date 

    },
    fechaEstreno:{
        type: Date

    },
    genero:{
        type: Schema.Types.ObjectId,
        ref:'media',
        required: true
    },

    director:{
        type: Schema.Types.ObjectId,
        ref:'media',
        required: true
    },
    
    productora:{
        type: Schema.Types.ObjectId,
        ref:'media',
        required: true
    },
    tipo:{
        type: Schema.Types.ObjectId,
        ref:'media',
        required: true
    }
})
module.exports = model('Media', mediaSchema)