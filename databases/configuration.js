 const { log, error } = require('console')
const mongoose = require ('mongoose')

 const mongoConn = async () => {
    try{
          await mongoose.connect (process.env.MONGO_URI,{
            dbName:'peliculas'
        })
        
        console,log ('conectado correctamente')
    } catch (e){
        console.log('Error',e)
        throw new Error(' Error de conexion')

    }
   
 }

 module.exports={ mongoConn }