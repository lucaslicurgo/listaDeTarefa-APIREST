const knex = require('../infra/conexao');
const jwt = require('jsonwebtoken');
const mensagem = require('../utilis/mensagem');

const cadastrarLista = async (req, res) => {
    const { titulo, descricao } = req.body;
    usuario = req.usuario

    try {
        const criarLista = await knex('listas').insert({ usuario_id: usuario.id, titulo, descricao }).returning('*');

        return res.status(201).json(criarLista[0]);
    } catch (error) {
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

const listaDoUsuario = async (req, res) => {
    try {
        const listas = await knex('listas').where({ usuario_id: req.usuario.id })

        return res.status(200).json(listas);
    } catch (error) {
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

const detalharLista = async (req, res) => {
    const { id } = req.params;
    usuario = req.usuario.id

    try {
        const lista = await knex('listas').where({ id, usuario_id: usuario.id });

        if (lista.length < 1) {
            return res.status(404).json({ mensagem: mensagem.listaNao });
        }

        return res.status(200).json(lista[0]);
    } catch (error) {
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

const atualizarLista = async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao } = req.body;
    usuario = req.usuario;

    try {
        const lista = await knex('listas').where({ id, usuario_id: usuario.id })

        if (lista.length < 1) {
            return res.status(404).json({ mensagem: mensagem.listaNao })
        }

        await knex('listas').where({ id }).insert({ titulo, descricao });

        return res.status(201).json();
    } catch (error) {
        return res.status(500).json(mensagem.erroInterno)
    }
}

module.exports = {
    cadastrarLista,
    listaDoUsuario,
    detalharLista,
    atualizarLista

}