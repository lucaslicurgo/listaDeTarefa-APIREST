CREATE DATABASE lista_tarefa;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(1000) NOT NULL,
    email VARCHAR(1000) NOT NULL,
    senha VARCHAR(1000)NOT NULL
);

CREATE TABLE listas (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuario(id),
    titulo VARCHAR(1000) NOT NULL,
    descricao VARCHAR(2000),
    data TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuario(id),
    lista_id INTEGER NOT NULL REFERENCES lista(id),
    titulo VARCHAR(1000) NOT NULL,
    descricao TEXT,
    status BOOLEAN NOT NULL DEFAULT false,
    data_conclusao DATE NOT NULL,
    data_criacao TIMESTAMP DEFAULT NOW()
);    