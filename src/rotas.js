const express = require('express');
const usuario = require('./controladores/usuario');
const schemas = require('./validacoes/schemas');

const rotas = express();

rotas.post('/usuario', schemas.schemaUsuario, usuario.cadastrarUsuario);
rotas.post('/login', schemas.schemaLogin, usuario.login);

module.exports = rotas;
