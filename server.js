const app  = require ('./app')
app.set('port', process.env.PORT)

app.get('/',(req, res) => {
    return res.status.json({msj: 'no encontrada' })
} )

app.listen(app.get('port'), () => {
console.log(`arranque en el puerto:${app.get('port')}`)

})

