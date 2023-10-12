const express = require('express');
const usuario = require('./controladores/usuario');
const schemas = require('./validacoes/schemas');
const { autenticar } = require('./intermediarios/autenticador');
const validarDadosReq = require('./intermediarios/validarDadosRequisicao');
const lista = require('./controladores/listaDeTarefa');
const tarefa = require('./controladores/tarefas');

const rotas = express();

rotas.post('/usuario', validarDadosReq(schemas.schemaUsuario), usuario.cadastrarUsuario);
rotas.post('/login', validarDadosReq(schemas.schemaLogin), usuario.login);

rotas.use(autenticar);

rotas.put('/usuario', validarDadosReq(schemas.schemaUsuario), usuario.atualizarUsuario);

rotas.post('/listas', validarDadosReq(schemas.schemaLista), lista.cadastrarLista);
rotas.get('/listas', lista.listaDoUsuario);
rotas.get('/listas/:id', lista.detalharLista);
rotas.put('/listas/:id', validarDadosReq(schemas.schemaLista), lista.atualizarLista);
rotas.delete('/listas/:id', lista.deletarLista);

rotas.post('/listas/:lista_id/tarefas', validarDadosReq(schemas.schemaTarefas), tarefa.cadastrarTarefa);
rotas.get('/listas/:lista_id/tarefas', tarefa.tarefasDoUsuario);
rotas.get('/listas/:lista_id/tarefas/:id', tarefa.detalharTarefa);
rotas.put('/listas/:lista_id/tarefas/:id', validarDadosReq(schemas.schemaAttTarefas), tarefa.atualizarTarefa);
rotas.delete('/listas/:lista_id/tarefas/:id', tarefa.deletarTarefa);

module.exports = rotas;
