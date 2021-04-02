# Burger Queen - Back-end

<div align="center">
<img src="https://trello-attachments.s3.amazonaws.com/6058c726179e310da8b9368e/398x241/6060b5b9ef43dfa873e6268cc4dabef8/logotipo-laburger-ok.png" alt="Logo do restaurante"
width="180"
height="150">
</div>

## Índice

* [1. Apresentação](#1-apresentação)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Endpoints da API LaBurger](#3-endpoints-da-API-LaBurger)
* [4. Estrutura dos dados](#4-estrutura-dos-dados)
* [5. Planejamento](#5-planejamento)
* [6. Ferramentas](#6-ferramentas)
* [7. Futuras Implementações](#7-futuras-implementações)
* [8. Desenvolvedora](#8-Desenvolvedora)

## 1. Apresentação ✨

Um pequeno restaurante de hamburgueres, em crescimento, necessitava de um
sistema para realizar pedidos usando um _tablet_, e que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente.

A interface front-end da aplicação LaBurger já foi criada [acesse aqui](https://sap-005-burger-queen-ale-alves.vercel.app/) para conhecer.

E agora foi criado o back-end para manejar os dados. Feito através de uma _API rest_ que é compatível com as requisições vindas do front. [Aqui](https://laburger-api.herokuapp.com/) você consegue acessar API.

## 2. Resumo do projeto 💡

Como back-end, nesse caso nos referimos a um _servidor web_, que é basicamente
um programa que _ouve_ o que acontece na aplicação através de uma porta de rede,
pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_).

Um servidor web deve _manejar_ as requisições que chegam e devolver respostas a elas,
que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_,
isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa
que faz requisições através de uma rede (por exemplo o navegador, o cURL, etc)
e o servidor é o programa que recebe essas requisições e as responde.


## 3. Endpoints da API LaBurger 📁

#### 3.1 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 3.2 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 3.3 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

## 4. Estrutura dos dados 📊
Diagrama para visualizar as tabelas com os todos endpoints, através do aplicativo Dbeaver.

![Estrutura dos dados](https://trello-attachments.s3.amazonaws.com/6058c726179e310da8b9368e/412x447/2bc4b6e9b1084e3f6134575fb6357759/ER-DIAGRAMA-DBEAVER.jpeg.jpg)

## 5. Planejamento 📝

Organização e planejamento do projeto foi todo realizado no trello.

![Planejamento!](https://trello-attachments.s3.amazonaws.com/604fd6bda4b146478ad6a7cc/6058c726179e310da8b9368e/f9d37cbe5d52e20f7b897eae9e0943ce/trello-api-laburger.gif)

## 6. Ferramentas 🛠️

* Node.js
* Express
* Sequelize
* Heroku
* PostgreSQL
* Dbeaver 
* Postman 

## 7. Futuras Implementações 🔮

* Endpoint de autenticação
* Middleware de autenticação
* Middleware de erros
* Outros endpoints
* Criar a documentação da API
* Testes unitários para cada função
* Testes _"end to end"_ ou _e2e_ (de uma ponta a outra)

## 8. Desenvolvedora 👩🏻‍💻

[Alessandra Alves](https://github.com/ale-alves)

