const { Schema,model } = require('mongoose')
const productoraSchema = Schema({
    
    nombre:{
        type: String,
        
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
    
    slogan:{
        type: String,
    },

    descrpcion:{
        type: String,
    }
})
module.exports = model('Productora', productoraSchema )