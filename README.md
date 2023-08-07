# Projeto CRUD de recados

Este projeto consiste em uma aplicação desenvolvida em Node.js com o uso do servidor Express e consumo de APIs pelo Posteman, na qual um usuário pode, após cadastro e login, realizar a criação, listagem, atualização e remoção de recados. 

Este trabalho foi desenvolvido para a conclusão do módulo Back-end I do Programa Starter Web Full Stack Developer - Growdev.

# Utilizando as rotas no Postman e no Render

Acesse a aplicação no endereço "localhost:1428" ou no endereço "https://projeto-final-back-end-i-crud-de-recados.onrender.com" no Posteman para utilizar as rotas exemplificadas abaixo.

## Rota POST para cadastro de usuário:

Através da rota "/usuarios", informe nome, email e senha. 

![POST Cadastro](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/49084ae3-7e2b-4df5-aa4f-6b9d195306d0)

## Rota POST para login de usuário:

Através da rota "/usuarios/login", informe email e senha. Após efetuar o login, será informado seu ID para utilizar na criação de recados.

![Ex Rota POST login de usuários](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/257b27f5-8d2d-4884-a565-93fac751bd8d)

## Rota POST para criação de recados:

Através da rota "/usuarios/:id/recados", informe seu ID de usuário como Route Param, assim como o título e a descrição do recado que desejas criar.

![Ex Rota POST criação de recados](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/59845367-7fc3-4819-a1b9-f254a3ee73ac)

## Rota GET para listagem de recados:

Através da rota "/usuarios/:id/recados", informe seu ID de usuário como Route Param para listar todos os seus recados.

![Ex Rota GET listagem de recados](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/c052b5e6-5db0-47d5-9575-2be120f1ed07)

Após a listagem geral, é possível utilizar essa mesma rota para listar apenas um único recado a sua escolha. Para isso, na aba Query Param informe "id" como valor do item 'Key' e o ID do recado a ser listado como valor do item 'Value'. 

![Ex Rota GET listagem de recado por QueryParam](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/1d9723d0-e954-4a93-8537-d6295d23c8e7)

## Rota PUT para atualização de usuário:

Através da rota "/usuarios/:id/recados/:idrecado", informe seu ID de usuário e o ID do recado que desejas atualizar como Route Params, assim como o novo título e a nova descrição para o recado atualizado.

![Ex Rota PUT atualização de recado](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/2431b619-1c5e-4a8c-8530-c702cb9e1737)

## Rota DELETE para remoção de usuário:

Através da rota "/usuarios/:id/recados/:idrecado", informe seu ID de usuário e o ID do recado que desejas remover como Route Params.

![Ex Rota DELETE remoção de recado](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/86c25527-9d9d-4e26-8aa3-33405cc26908)
