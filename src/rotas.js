const express = require('express');
const usuario = require('./controladores/usuario');
const schemas = require('./validacoes/schemas');
const autenticador = require('./intermediarios/autenticador');

const rotas = express();

rotas.post('/usuario', schemas.schemaUsuario, usuario.cadastrarUsuario);
rotas.post('/login', schemas.schemaLogin, usuario.login);

rotas.use(autenticador.autenticar);

rotas.put('/usuario', schemas.schemaUsuario, usuario.atualizarUsuario);

module.exports = rotas;
