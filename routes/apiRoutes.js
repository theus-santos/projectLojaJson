const express = require('express')
const routes = express.Router()
const ApiController = require('../controllers/ApiController')

routes.get('/', ApiController.index) // visualizar todas as pessoas

routes.post('/cadastro', ApiController.store) // cadastrar pessoas 

routes.get('/show/:id', ApiController.show) // visualizar uma pessoa especifica

routes.put('/editar/:id', ApiController.update) // atualizar pessoa

routes.delete('/apagar/:id', ApiController.destroy) // apagar uma pessoa

module.exports = routes