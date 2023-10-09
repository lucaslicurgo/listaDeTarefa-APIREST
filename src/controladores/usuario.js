const knex = require('../infra/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mensagem = require('../utilis/mensagem');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const emailExistente = await knex('usuarios').where({ email }).first();

        if (emailExistente) {
            return res.status(400).json({ mensagem: mensagem.emailExistente });
        }

        const senhaCrypt = await bcrypt.hash(senha, 10);

        const usuarioCadastrado = await knex('usuarios').insert({ nome, email, senha: senhaCrypt });

        const { senha: _, ...usuarioReturn } = usuarioCadastrado[0];

        return res.status(201).json(usuarioReturn);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuarioExistente = await knex('usuarios').where({ email }).first();

        if (!usuarioExistente) {
            return res.status(400).json({ mensagem: mensagem.dadosInvalidos });
        }

        if (!(await bcrypt.compare(senha, usuarioExistente.senha))) {
            return res.status(400).json({ mensagem: mensagem.dadosInvalidos });
        }

        const token = jwt.sign({ id: usuarioExistente.id }, process.env.SENHA_HASH, { expiresIn: '8h' });

        return res.json({ token: token });
    } catch (error) {
        return res.status(500).json({ mensagem: mensagem.erroInterno });
    }
}

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const emailExistente = await knex('usuarios').where({ email }).first();

        if (emailExistente) {
            return res.status(400).json({ mensagem: mensagem.emailExistente })
        }

        const senhaCrypt = await bcrypt.hash(senha, 10);

        atualizarPerfil = await knex('usuarios').where('id', req.usuario.id).update({ nome, email, senha: senhaCrypt });

        return res.status(201).json();
    } catch (error) {
        return res.status(500).json({ mensagem: mensagem.erroInterno });
    }
}

module.exports = {
    cadastrarUsuario,
    login,
    atualizarUsuario
}