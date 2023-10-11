const Joi = require('joi');

const schemaUsuario = Joi.object({
    nome: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'any.required': 'É necessário informar o nome.',
            'string.min': 'O nome não pode ter menos que 3 caracteres.',
            'strin.max': 'O nome não pode ter mais que 100 caracteres.'
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Por favor, insira um e-mail válido!',
            'any.required': 'É necessário informar um e-mail'
        }),

    senha: Joi.string()
        .min(3)
        .required()
        .messages({
            'any.required': 'É necessário informar uma senha.',
            'string.min': 'A senha informada deve ter mais que 3 caracteres.'
        }),

})

const schemaLogin = Joi.object({

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Por favor, insira um e-mail válido!',
            'any.required': 'É necessário informar um e-mail'
        }),

    senha: Joi.string()
        .min(3)
        .required()
        .messages({
            'any.required': 'É necessário informar uma senha.',
            'string.min': 'A senha informada deve ter mais que 3 caracteres.'
        }),

})

const schemaLista = Joi.object({
    titulo: Joi.string()
        .min(3)
        .max(1000)
        .required()
        .messages({
            'any.required': 'É necessário informar o título.',
            'string.min': 'O título não pode ter menos que 3 caracteres.',
            'strin.max': 'O título não pode ter mais que 1000 caracteres.'
        }),
    descricao: Joi.string()
        .max(2000)
        .messages({
            'strin.max': 'A descrição não pode ter mais de 2000 caracteres'
        })
})

const schemaTarefas = Joi.object({
    titulo: Joi.string()
        .min(3)
        .max(1000).
        required()
        .messages({
            'any.required': 'É necessário informar o título.',
            'string.min': 'O título não pode ter menos de 3 caracteres.',
            'strin.max': 'O título não pode ter mais de 1000 caracteres.'
        }),
    descricao: Joi.string()
        .min(5)
        .messages({
            'string.min': 'A descrição não pode ter menos de 5 caracteres.'
        }),
    status: Joi.boolean()
        .required()
        .messages({
            'any.required': 'É necessário informar o status da tarefa'
        }),
    data_conclusao: Joi.date()
        .iso()
        .required()
        .messages({
            'date-iso': 'A data de conclusão deve estar no formato ISO(AAAA-MM-DD).',
            'any.required': 'É necessário informar a data de conclusão.'
        })

})

const schemaAttTarefas = Joi.object({
    titulo: Joi.string()
        .min(3)
        .max(1000)
        .messages({
            'string.min': 'O título não pode ter menos de 3 caracteres.',
            'strin.max': 'O título não pode ter mais de 1000 caracteres.'
        }),
    descricao: Joi.string()
        .min(5)
        .messages({
            'string.min': 'A descrição não pode ter menos de 5 caracteres.'
        }),
    status: Joi.boolean()
        .required()
        .messages({
            'any.required': 'É necessário informar o status da tarefa'
        }),
    data_conclusao: Joi.date()
        .iso()
        .messages({
            'date-iso': 'A data de conclusão deve estar no formato ISO(AAAA-MM-DD).'
        })

})

module.exports = {
    schemaUsuario,
    schemaLogin,
    schemaLista,
    schemaTarefas,
    schemaAttTarefas
}