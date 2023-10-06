const knex = require('../infra/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mensagem = {
    erroInterno: 'Erro interno do servidor',
    emailExistente: 'Esse e-mail já está cadastrado. Tente outro e-mail ou faça o login',
    dadosInvalidos: 'Dados Inválidos'
}

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
        return res.status(500).json({ mensagem: mensagem.erroInterno });
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

module.exports = {
    cadastrarUsuario,
    login
}