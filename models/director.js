const { Schema,model } = require('mongoose')
const directorSchema = Schema({
    
    nombre:{
        type: String,
        required: [true,'Nombre requerido']
    },
    estado:{
        type: Boolean,
        default: true     
    },

    fechaCreacion:{
        type: Date,
        required: [true,'Fecha requerida'],
    },

    fechaActualizacion:{
        type: Date 

    },
    
})
module.exports = model('Director', directorSchema)


