const express = require('express');

//Instancio a rota do express
const routes = express.Router();

//Importo o cidadeController
const cidadeController = require('../controllers/cidade-controller');

//Rotas raís (/)
routes.route('/')
    .get(cidadeController.index)       //Retorna todos os registro
    .post(cidadeController.create);    //Insere um registro

//Rotas identificadas por um ID
routes.route('/:id')
    .get(cidadeController.show)        //Retorna registro com o ID do parâmetro
    .put(cidadeController.update)      //Altera o registro com o ID do parâmetro
    .delete(cidadeController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;