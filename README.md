# Sistema de Lista de Tarefas com API RESTful :desktop_computer:
:construction: Status: Em atualização

Este Sistema de Lista de Tarefas é uma API RESTful que permite que os usuários criem, atualizem e excluam suas listas de tarefas. Esta aplicação é ideal para organização de tarefas do seu dia.
## :bangbang: Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- Node.js
- npm (Node Package Manager)
- PostgreSQL
- Visual Studio
## :joystick: Funcionalidades
- Registro e autenticação de usuário
- Registro de Listas de Tarefas
- Exclusão de Listas de Tarefas
- Listagem de Listas de Tarefas
- E muito mais !!

Explore as rotas disponíveis para aproveitar ao máximo as funcionalidades.
## :crossed_swords: Como usar
1. Clone o repositório:
```
git@github.com:lucaslicurgo/listaDeTarefa-APIREST.git
```
2.Instale as dependências do projeto:
```
npm install
```
3. Inicie o servidor (somente após concluída todas as etapas seguintes):
```
npm run dev
```
> Use o Insomnia, Postman (ou outro cliente HTTP) para criar as rotas para acessar as funcionalidades da API.

> Para autenticação, adicione o token de acesso (Recebido após requisição de login) na propriedade autorizhation do cabeçalho (Header).

> Certifique-se de enviar dados no formato JSON ao fazer requisiç~es que exigem corpo (request body).

## :compass: Sobre as Rotas
### Cadastro do usuário
`(POST) http://localhost:3000/usuario`

:arrow_right: Descrição: Esta rota permite criar um novo usuário na aplicação. Os dados do usuário devem ser fornecidos no body da requisição no formato JSON

⬇️ Exemplo de body no formato JSON ⬇️
```JSON
{
    "nome": "Lucas",
    "email": "lucas@email.com",
    "senha": "123abc"
}
```
### Login
`(POST) http://localhost:3000/login`

➡️ Descrição: Está rota é usada para autenticar um usuário existente. Um token de autenticação é gerado se as credenciais forem válidas, permitindo o acesso às funcionalidades protegidas da API.

⬇️ Exemplo de body no formato JSON ⬇️

```JSON
{
    "email": "lucas@email.com",
    "senha": "123abc"
}
```
### Atualizar Cadastro
`(PUT) http://localhost:3000/usuario`

➡️ Descrição: Está rota permite ao usuário logado, possa alterar seu registro. 

⬇️ Exemplo de body no formato JSON ⬇️

```JSON
{
    "nome": "Lucas Licurgo",
    "email": "lucaslicurgo@email.com",
    "senha": "1234abcd"
}
```
### Cadastrar Lista de Tarefa
`(POST) http://localhost:3000/listas`

➡️ Descrição: Está rota é usada para que o usuário possa registrar listas de tarefas.

⬇️ Exemplo de body no formato JSON ⬇️

```JSON
{
    "titulo": "Estudos",
    "descricao": "Listas de bibliotecas para estudar"
}
```
### Obter Listas de Tarefa
`(GET) http://localhost:3000/listas`

➡️ Descrição: Esta solicitação é usada para recuperar todas as listas de tarefas cadastradas pelo usuário.

### Detalhar Lista de Tarefa
`(GET) http://localhost:3000/listas/:id`

➡️ Descrição: Esta solicitação é usada para recuperar uma lista específica de um usuário com base no ID fornecido como parâmetro na requisição.

### Atualizar Lista de Tarefa
`(POST) http://localhost:3000/listas/:id`

➡️ Descrição: Está rota é usada para que o usuário possa atualizar os dados da sua lista de tarefa.

⬇️ Exemplo de body no formato JSON ⬇️

```JSON
{
    "titulo": "Compras",
    "descricao": "Listas de compra para o supermercado"
}
```
### Deletar Lista de Tarefas
`(DELETE) http://localhost:3000/listas/:id`

➡️ Descrição: Esta rota permite que o usuário exclua uma lista de tarefas específica com base no seu ID.

‼️ ATENÇÃO: É importante observar que, ao excluir uma lista de tarefas, todas as tarefas incluídas nela também serão excluídas. 

### Cadastrar Tarefas
`(POST) http://localhost:3000/listas/lista_id/tarefas`
➡️ Descrição: Esta solicitação é usada para cadastrar tarefas na lista de tarefa

⬇️ Exemplo de body no formato JSON ⬇️

```JSON
{
    "titulo": "Estudar Typescript",
    "descricao": "Estudar parte de Types",
    "status": false,
    "data_conclusao": "2023-12-25"
}
```


