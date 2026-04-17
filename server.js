// NPM => NODE PACKAGE MANAGER (GERENCIADOR DE PACOTES DO NODE)

/* CADASTRO DE USUÁRIOS
 - Criar um usuario -Receber (email , nome e telefone)
 - Deletar um usuário
 -Ver os usuários

 require / requisitando, pegando uma biblioteca
 Endereço: http://localhost:3333/usuarios

 JSON/ JAVASCRIPT OBJECT NOTATION
 JSON é o Padrão de dados de internet
 Front End -> Back End (JSON)
*/

const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let id = 1

//Rota que o FRONT END VAI ACESSAR
app.post("/usuarios", (request, response) => {
  const { name, email, telefone } = request.body;

  const user = {
    id: id++,
    name: name,
    email: email,
    telefone: telefone,
    criadoEm: new Date(),
  };

  usuarios.push(user);
  // push -> colocar algo dentro do array

  response.status(200).send(user);
})

app.get('/usuarios', (request, response) => {

})




app.listen(3333, () => {   
    console.log("Servidor Rodando")

})