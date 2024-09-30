const  dotenv= require("dotenv")
const express  = require('express')
const app = express()
dotenv.config()
const {mongoConn} = require ('./databases/configuration')
mongoConn()

const cors = require('cors')

app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use (cors({
    origin: '*'
}))

const genero = require ('./routes/routes-genero')
app.use('/api/v1/generos',genero)

const director = require ('./routes/routes-director')
app.use('/api/v1/directores',director)

const media = require ('./routes/routes-media')
app.use('/api/v1/medias',media)

const productora = require ('./routes/routes-productora')
app.use('/api/v1/productoras',productora)

const tipo = require ('./routes/routes-tipo')
app.use('/api/v1/tipos',tipo)

module.exports = app