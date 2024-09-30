const { Schema,model } = require('mongoose')
const GeneroSchema = Schema({


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
        type: Date,
        default: new Date ()

    },
    fechaActualizacion:{
        type: Date 

    },
    descripcion:{
        type: String
    }

})
module.exports = model('Genero', GeneroSchema)