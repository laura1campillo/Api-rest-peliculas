const { Schema,model } = require('mongoose')
const tipoSchema = Schema({
    
    nombre:{
        type: String,
        required: [true,'Nombre requiero'],
        unique: [true,'Nombre ya esxiste']


    },
    estado:{
        type: Boolean,
        default: true     
    },

    fechaCreacion:{ 
        type: Date
    },

    fechaActualizacion:{
        type: Date 

    },
    
})
module.exports = model('Tipo', tipoSchema)