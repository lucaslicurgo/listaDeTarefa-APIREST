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
`(POST) http://localhost:3000/listas/:lista_id/tarefas`

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
### Tarefas 
`(GET) http://localhost:3000/listas/:lista_id/tarefas`

➡️ Descrição: Esta solicitação é usada para que o usuário visualize todas as suas tarefas daquela lista.

### Detalhar Tarefa
`(GET) http://localhost:3000/listas/:lista_id/tarefas/:id`

➡️ Descrição: Esta solicitação é usada para detalhar uma tarefa específica com base no seu ID.

### Atualizar Tarefa
`(PUT) http://localhost:3000/listas/:lista_id/tarefas/:id`

➡️ Descrição: Esta rota permite ao usuário atualizar sua tarefa com base no seu ID

⬇️ Exemplo de body no formato JSON ⬇️

```JSON
{
    "titulo": "Estudar Ruby",
    "descricao": "Estudar seus tipos de dados",
    "status": false,
    "data_conclusao": "2023-12-25"
}
```
### Excluir Tarefa 
`(DELETE) http://localhost:3000/listas/:lista_id/tarefas/:id`

➡️ Descrição: Esta solicitação é usada para excluir a tarefa específica com base no seu ID.

## :stop_sign:  IMPORTANTE :stop_sign:
Para garantir a segurança das suas informações e o acesso às funcionalidades protegidas, é necessário fornecer um token de autenticação válido em todas as rotas que estão abaixo da rota de login.

- **Token de Autenticação:** O token de autenticação é fornecido como resposta à rota de login. Exemplo de token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjk4NTE4ODAzLCJleHAiOjE2OTg1NDc2MDN9.LybHBeyUbEfITbQdIrlrTy0geVkE42fRGdCHSzvwSQw`
- **Duração do Token:** O token de autenticação é válido por um período de 8 horas a partir do momento em que é gerado. Após esse período, o token expirará e você precisará fazer login novamente para obter um novo token.
- **Inclusão do Token:** Para acessar as rotas protegidas, você deve incluir o token de autenticação no cabeçalho (Header) de suas requisições HTTP, na propriedade "Authorization" do objeto Headers.

## :man_technologist: Estrutura do Projeto
- `controladores`
- `intermediarios`
- `rotas.js`
- `index.js`
- `infra`
- `utils`
- `validacoes`
- `.env`

## :bowtie: Informações adicionais
Além da funcionalidade principal de gerenciamento de listas de tarefas por meio de uma API REST, este projeto incorpora diversas práticas e conceitos avançados de desenvolvimento de software:

- Autenticação de Usuário
- Criptografia de Senhas com Hash
- Manipulação de Banco de Dados
- Segurança em Geral

## :electron: Tecnologias 
JAVASCRIPT | NODE.JS | POSTGRES | EXPRESS.JS | API REST 
:------:  | :------: | :------: | :------: | :------:
<img align="center" alt="JavaScript" height="40em" width="40em" src="https://github.com/andressa-silvaa/BankAPI-Node/assets/120581625/0e01b699-bb38-4fe4-803a-d8927926ecd6" /> | <img align="center" alt="Node" height="45em" width="50em" src="https://github.com/andressa-silvaa/BankAPI-Node/assets/120581625/32d12d0d-f886-4973-875c-db5202606b63" /> | <img align="center" alt="Postegres" height="40em" width="40em" src="https://github.com/andressa-silvaa/BankAPI-Node/assets/120581625/9f1ce95b-f8a7-46a2-9827-7c3f8bb47ca8" /> | <img align="center" alt="Express" height="35em" width="60em" src="https://github.com/andressa-silvaa/BankAPI-Node/assets/120581625/5a00fb36-21dc-410c-9282-f11d577dbec6" /> | <img align="center" alt="Api-Rest" height="35em" width="40em" src="https://github.com/andressa-silvaa/BankAPI-Node/assets/120581625/a2a32005-bccc-4a78-a8fc-a7e18152a362" />

## :bearded_person: Autor
> Lucas Licurgo
