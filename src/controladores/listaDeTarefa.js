const knex = require('knex');
const jwt = require('jsonwebtoken');
const mensagem = require('../utilis/mensagem');

const cadastrarLista = async (req, res) => {
    const { titulo, descricao } = req.body;

    try {
        const criarLista = await knex('usuarios').insert({ usuario_id: req.usuario.id, titulo, descricao });
        return res.status(201).json(criarLista.rows[0]);
    } catch (error) {
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

const listaDoUsuario = async (req, res) => {
    try {
        const listas = await knex('usuarios').where({ usuario_id: req.usuario.id });
        return res.status(200).json(listas.rows[0]);
    } catch (error) {
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

const detalharLista = async (req, res) => {
    const { id } = req.params;

    try {
        const lista = await knex('usuarios').where({ id, usuario_id: req.usuario.id });
        if (lista.rowCount < 1) {
            return res.status(404).json({ mensagem: 'Lista não encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

module.exports = {
    cadastrarLista,
    listaDoUsuario,
    detalharLista

}