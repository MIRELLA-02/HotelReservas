# 🏨 Hotel Reservas

Sistema web full-stack para gerenciamento de quartos e reservas de hotel, desenvolvido como atividade prática da disciplina de Desenvolvimento Web.

---

# 📖 Sobre o Projeto

O sistema foi desenvolvido para facilitar o controle de quartos e reservas de um hotel, permitindo o gerenciamento completo através de uma aplicação integrada entre front-end, back-end e banco de dados.

A aplicação permite:

- Cadastro de quartos
- Listagem de quartos disponíveis
- Exclusão de quartos
- Cadastro de reservas vinculadas aos quartos
- Visualização de reservas por quarto
- Exclusão de reservas

---

# 🎯 Objetivo

Aplicar na prática conceitos de desenvolvimento web full-stack, incluindo:

- Desenvolvimento Front-End
- Desenvolvimento Back-End
- Criação e consumo de APIs REST
- Integração com banco de dados relacional
- Organização de estrutura de projeto

---

# 🛠 Tecnologias Utilizadas

## 💻 IDE
- Visual Studio Code

## 🌐 Front-End
- HTML5
- CSS3
- JavaScript

## ⚙ Back-End
- Node.js
- Express.js

## 🗄 Banco de Dados
- MySQL 8.0

## 🔧 ORM
- Prisma ORM
---

# 🗄 Modelo de Banco de Dados

## 📌 Tabela: quartos

| Campo  | Tipo         |
|--------|-------------|
| id     | INT         |
| numero | VARCHAR(10) |
| tipo   | VARCHAR(50) |

---

## 📌 Tabela: reservas

| Campo         | Tipo         |
|---------------|-------------|
| id            | INT         |
| hospede       | VARCHAR(100)|
| data_entrada  | DATE        |
| data_saida    | DATE        |
| quarto_id     | INT         |

---

## 🔗 Relacionamento

- Um quarto pode possuir várias reservas
- Uma reserva pertence a apenas um quarto

---

# ⚙ Funcionalidades

## 🛏 Gerenciamento de Quartos

- Cadastro de quartos
- Listagem de quartos cadastrados
- Exclusão de quartos com confirmação
- Visualização de reservas por quarto

---

## 📅 Gerenciamento de Reservas

- Cadastro de reservas
- Associação automática com o quarto selecionado
- Listagem de reservas
- Exclusão de reservas com confirmação

---

# 🚀 Passo a Passo para Execução do Projeto

## 1. Clonar o repositório 

git clone (https://github.com/MIRELLA-02/HotelReservas.git)

----

## 2. Instalar dependências
npm install

----

## Criar Banco de Dados
CREATE DATABASE hotelreserva;

----

## 4. Configurar o arquivo .env
PORT=3000
DATABASE_URL="mysql://root:SUA_SENHA@localhost:3306/hotelreserva"

-----

## 5. Gerar Prisma Client e Prisma Generate
npm install @prisma/client
npx prisma generate

-----

## 6. Criar tabelas no banco
npx prisma db push

-----

## 7. Iniciar o servidor
npm run dev

-----

## 8. Abrir o front-end

Abra o arquivo:
web/index.html

-----

# 📷 Prints do Sistema

## 🏠 Listagem e Cadastro de Quartos

<img width="1900" height="890" alt="tela1" src="https://github.com/user-attachments/assets/8f96aae6-bfad-40b4-a999-2a397a2fc172" />

-------

## 📋  Reservas

<img width="1882" height="902" alt="tela2" src="https://github.com/user-attachments/assets/518554dc-898a-480f-abe3-0151abc3d5a2" />

-----

## 📅 Reservas Cadastradas

<img width="1892" height="867" alt="tela4" src="https://github.com/user-attachments/assets/2f8505bf-37e1-4898-80ef-5e1e507bec52" />


------
## 📌 Exclusão dos Quartos

<img width="1902" height="901" alt="tela3" src="https://github.com/user-attachments/assets/1d8d7920-6ccd-4e30-b961-de18a66a509c" />

------

## 👩‍💻 Desenvolvido por
Mirella Brolezi



