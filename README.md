
# 🚀 Primeiro Servidor Back-End

Este repositório contém o meu primeiro projeto prático de desenvolvimento Back-End. O objetivo principal foi entender como um servidor processa requisições e como funcionam os métodos fundamentais da web: **GET** e **POST**.

## 📝 Sobre o Projeto

O projeto consiste em um servidor local simples que simula o gerenciamento de dados. Através dele, pratiquei a criação de rotas e o manuseio de objetos de requisição utilizando o ambiente Node.js.

### 🎯 Objetivos de Aprendizado:
* Configurar um ambiente de servidor básico.
* Entender o fluxo de uma **Request** (Requisição) e **Response** (Resposta).
* Implementar o método **GET** para leitura de dados.
* Implementar o método **POST** para envio e criação de novos dados.
* Utilizar ferramentas de teste de API (como Postman ou Insomnia).

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução Javascript no servidor.
* **Express**: Framework minimalista para gerenciar rotas e requisições.
* **JavaScript**: Linguagem principal do projeto.

---

## 🛣️ Rotas Estudadas

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/` | Retorna uma mensagem de boas-vindas ao servidor. |
| **GET** | `/users` | Lista todos os usuários cadastrados (Simulação). |
| **POST** | `/users` | Recebe dados através do corpo da requisição e cria um "Novo Usuário". |

---

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/PRIMEIRO-SERVIDOR-Back-End.git
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd PRIMEIRO-SERVIDOR-Back-End
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    *O servidor estará rodando em `http://localhost:3000` (ou na porta configurada).*

---

## 🧠 Conceitos Aprendidos

### O que é uma Request?
Toda vez que você acessa um site ou clica em um botão, você está enviando uma **New Request**. No Back-End, nós aprendemos a "escutar" essa chamada e decidir o que devolver para o usuário.

### GET vs POST
* **GET**: É como pedir um livro em uma biblioteca. Você solicita uma informação e o servidor te entrega.
* **POST**: É como preencher uma ficha de cadastro e entregar no balcão. Você está enviando dados novos para que o servidor processe e salve.

---




*Este é um projeto de estudos para fins didáticos.*
