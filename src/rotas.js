const express = require('express');
const usuario = require('./controladores/usuario');
const schemas = require('./validacoes/schemas');
const { autenticar } = require('./intermediarios/autenticador');
const validarDadosReq = require('./intermediarios/validarDadosRequisicao');
const lista = require('./controladores/listaDeTarefa');

const rotas = express();

rotas.post('/usuario', validarDadosReq(schemas.schemaUsuario), usuario.cadastrarUsuario);
rotas.post('/login', validarDadosReq(schemas.schemaLogin), usuario.login);

rotas.use(autenticar);

rotas.put('/usuario', validarDadosReq(schemas.schemaUsuario), usuario.atualizarUsuario);

rotas.post('/lista', validarDadosReq(schemas.schemaLista), lista.cadastrarLista);
rotas.get('/lista', lista.listaDoUsuario);
rotas.get('/lista/:id', lista.detalharLista);

module.exports = rotas;
