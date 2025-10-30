# Rest-app Next.js

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)

#### Acesse o projeto em produção: (https://rest-app-next-js.vercel.app) 

## Sobre o Projeto

Este projeto é uma aplicação Full-stack desenvolvida como um **desafio acadêmico** durante o curso de Análise e Desenvolvimento de Sistemas, com foco na disciplina de **Backend e Frameworks**.

O objetivo principal foi construir uma aplicação web utilizando o **Next.js** para ambas as camadas (Frontend e Backend através das API Routes), implementando uma **API REST** completa para gerenciar um recurso específico (ex: usuários, tarefas, produtos).

## Funcionalidades

O projeto implementa o ciclo de vida completo de uma aplicação RESTful, seguindo o padrão CRUD (Create, Read, Update, Delete):

- **GET /api/**: Listar todos os registros e exibir na interface.
- **POST /api/**: Criar um novo registro através de um formulário.
- **PUT /api/**: Atualizar dados de um registro existente.
- **DELETE /api/**: Remover um registro da base de dados.
- **Navegação Dinâmica**: Interface de usuário responsiva e intuitiva construída com componentes React.

## Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram usadas na construção do projeto:

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework** | Next.js (React) | Framework principal para Frontend e Backend (API Routes). |
| **Linguagem** | JavaScript | Linguagem de programação utilizada. |
| **Estilização** | CSS Modules | Estilização da interface de usuário. |
| **Ambiente** | Node.js | Para execução do JavaScript no servidor e gerenciamento de pacotes. |
| **Deployment** | Vercel | Plataforma utilizada para o deploy contínuo da aplicação. |
| **Persistência** | Firebase | Banco de dados utilizado para persistir os dados da aplicação. |

## Como Executar Localmente

Siga estas instruções para ter uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SamuelAbreu74/Rest-app-Next.js.git](https://github.com/SamuelAbreu74/Rest-app-Next.js.git)
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd Rest-app-Next.js
    ```

3.  **Instale as dependências:**
    ```bash
    npm install 
    # ou
    yarn install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

O projeto será iniciado em **`http://localhost:3000`**. As alterações no código serão atualizadas automaticamente.

##  Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js, com destaque para a organização do lado do servidor e cliente:

- **`/pages`**: Contém as rotas da aplicação (incluindo as API Routes em `/pages/api`).
- **`/components`**: Componentes React reutilizáveis do Frontend.
- **`/repository`**: Lógica de acesso/manipulação dos dados (camada de persistência).
- **`/lib`**: Funções utilitárias e lógica de negócio.

##  Contribuição

Sinta-se à vontade para sugerir melhorias, reportar bugs ou contribuir com novas funcionalidades!

1.  Faça um Fork do projeto.
2.  Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
3.  Faça commit das suas alterações: `git commit -m 'feat: Adiciona nova feature'`
4.  Faça Push para a branch: `git push origin feature/minha-feature`
5.  Abra um Pull Request.

## 👤 Autor

| [![Samuel Abreu](https://avatars.githubusercontent.com/u/74686419?v=4&s=100)](https://github.com/SamuelAbreu74) |
| :---: |
| **Samuel Abreu** |
| [GitHub](https://github.com/SamuelAbreu74) |


---
*Criado por Samuel Abreu*

