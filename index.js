const express = require('express')
const app = express()
const apiroutes = require('./routes/apiRoutes')
const AuthController = require('./controllers/AuthController')
const middlewareValidaJwt = require('./validarJwt')
require('dotenv').config()

app.use(express.json())

app.post('/api/login', AuthController.login)
app.use('/api', middlewareValidaJwt, apiroutes)

app.listen(process.env.PORT, ()=>{
    console.log('Servidor Ok!')
})