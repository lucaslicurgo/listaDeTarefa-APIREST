const knex = require('../infra/conexao');
const mensagem = require('../utilis/mensagem');

const cadastrarTarefa = async (req, res) => {
    const { titulo, descricao, status, data_conclusao } = req.body;
    const { lista_id } = req.params;
    usuario = req.usuario;

    try {
        const validarLista = await knex('listas').where({ id: lista_id, usuario_id: usuario.id });
        if (validarLista.length < 1) {
            return res.status(404).json({ mensagem: mensagem.listaNao });
        }

        const tarefa = await knex('tarefas')
            .insert({ usuario_id: usuario.id, lista_id, titulo, descricao, status, data_conclusao }).returning('*');

        return res.status(201).json(tarefa[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ erro: mensagem.erroInterno });
    }

}

const tarefasDoUsuario = async (req, res) => {
    const { lista_id } = req.params;
    usuario_id = req.usuario.id;

    try {
        const tarefas = await knex('tarefas').where({ usuario_id, lista_id });

        if (tarefas.length < 1) {
            return res.status(404).json({ mensagem: mensagem.tarefaNao })
        }

        return res.status(200).json(tarefas);
    } catch (error) {
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

const detalharTarefa = async (req, res) => {
    const { id, lista_id } = req.params;
    usuario_id = req.usuario.id;

    try {
        const tarefa = await knex('tarefas').where({ id, usuario_id, lista_id });

        if (tarefa.length < 1) {
            return res.status(404).json({ mensagem: mensagem.tarefaNao });
        }

        return res.status(200).json(tarefa[0]);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}

const atualizarTarefa = async (req, res) => {
    const { id, lista_id } = req.params;
    const { titulo, descricao, status, data_conclusao } = req.body;
    usuario_id = req.usuario.id

    try {
        const tarefa = await knex('tarefas').where({ id, lista_id, usuario_id });

        if (tarefa.length < 1) {
            return res.status(404).json({ mensagem: mensagem.tarefaNao })
        }

        await knex('tarefas').where({ id }).update({ titulo, descricao, status, data_conclusao, lista_id });

        return res.status(201).json();
    } catch (error) {
        return res.status(500).json({ erro: mensagem.erroInterno });
    }
}
module.exports = {
    cadastrarTarefa,
    tarefasDoUsuario,
    detalharTarefa,
    atualizarTarefa

}