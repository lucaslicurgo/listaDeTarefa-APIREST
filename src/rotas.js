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

rotas.post('/lista', validarDadosReq(schemas.schemaLista), lista.cadastrarLista);
rotas.get('/lista', lista.listaDoUsuario);
rotas.get('/lista/:id', lista.detalharLista);
rotas.put('/lista/:id', validarDadosReq(schemas.schemaLista), lista.atualizarLista);
rotas.delete('/lista/:id', lista.deletarLista);

rotas.post('/lista/:lista_id/tarefas', validarDadosReq(schemas.schemaTarefas), tarefa.cadastrarTarefa);
rotas.get('/lista/:lista_id/tarefas', tarefa.tarefasDoUsuario);
rotas.get('/lista/:lista_id/tarefas/:id', tarefa.detalharTarefa);
rotas.put('/lista/:lista_id/tarefas/:id', validarDadosReq(schemas.schemaAttTarefas), tarefa.atualizarTarefa);

module.exports = rotas;
