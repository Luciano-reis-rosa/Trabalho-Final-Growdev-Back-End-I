# Projeto CRUD de recados

Este projeto consiste em uma aplicação desenvolvida em Node.js com o uso do servidor Express e consumo de APIs pelo Posteman, na qual um usuário pode, após cadastro e login, realizar a criação, listagem, atualização e remoção de recados. 

Este trabalho foi desenvolvido para a conclusão do módulo Back-end I do Programa Starter Web Full Stack Developer - Growdev.

# Utilizando as rotas no Posteman

Acesse a aplicação no endereço "localhost:1428".

## Rota POST para cadastro de usuário:

Através da rota "/usuarios", informe nome, email e senha. 

![POST Cadastro](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/49084ae3-7e2b-4df5-aa4f-6b9d195306d0)

## Rota POST para login de usuário:

Através da rota "/usuarios/login", informe email e senha. Após efetuar o login, será informado seu ID para utilizar na criação de recados.

![Ex Rota POST login de usuários](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/f0615178-bdae-4e12-9409-7089d3b343c7)

## Rota POST para criação de recados:

Através da rota "/usuarios/:id/recados", informe seu ID de usuário como Route Param, assim como o título e a descrição do recado que desejas criar.

![Ex Rota POST criação de recados](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/8e7faaa6-8b17-401a-8802-5ef0b11ac3a2)

## Rota GET para listagem de recados:

Através da rota "/usuarios/:id/recados", informe seu ID de usuário como Route Param para listar todos os seus recados.

![Ex Rota GET listagem de recados](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/ef1ee1a9-5854-4d54-ab65-7e3976707387)

Após a listagem geral, é possível utilizar essa mesma rota para listar apenas um único recado a sua escolha. Para isso, na aba Query Param informe "id" como valor do item 'Key' e o ID do recado a ser listado como valor do item 'Value'. 

![Ex Rota GET listagem de recado por QueryParam](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/4d769527-01ad-4240-8286-704fb0fe5040)

## Rota PUT para atualização de usuário:

Através da rota "/usuarios/:id/recados/:idrecado", informe seu ID de usuário e o ID do recado que desejas atualizar como Route Params, assim como o novo título e a nova descrição para o recado atualizado.

![Ex Rota PUT atualização de recado](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/8faf2705-304c-43b8-9290-3eef799af842)

## Rota DELETE para remoção de usuário:

Através da rota "/usuarios/:id/recados/:idrecado", informe seu ID de usuário e o ID do recado que desejas remover como Route Params.

![Ex Rota DELETE remoção de recado](https://github.com/LucianReal/Trabalho-Final-Growdev-Back-End-I/assets/107893316/68e88b6c-8d01-4c96-ab12-6d24e5ec1259)
