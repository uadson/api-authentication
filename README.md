# Autenticação JWT com Django e FastAPI - Frontend React

## Objetivo

Este projeto tem como objetivo demonstrar a implementação de autenticação baseada em **JWT (JSON Web Token)** tanto no **Django** quanto no **FastAPI** no backend, com o frontend desenvolvido em **React**. O sistema permite o login de um usuário, a geração de tokens JWT (`access_token` e `refresh_token`) e a autenticação de rotas protegidas, além de permitir a renovação do token de acesso.

---

## Arquitetura do Projeto

- **Backend**:
  - **Django** com `djangorestframework-simplejwt` para autenticação com JWT.
  - **FastAPI** com `fastapi-jwt-auth` para autenticação com JWT.
  
- **Frontend**:
  - **React** para interação com a API.
  - **Axios** para comunicação com o backend.

---

## Funcionalidades

1. **Login**: O usuário envia as credenciais (nome de usuário e senha) para obter um token de acesso e um token de atualização (refresh token).
   
2. **Acesso a rotas protegidas**: O usuário pode acessar rotas protegidas, enviando o token de acesso no cabeçalho da requisição HTTP.

3. **Renovação do Token**: O `refresh_token` é utilizado para renovar o `access_token` quando ele expira.

---

## Como Rodar o Projeto

### 1. Backend (Django / FastAPI)

- **Django**:
  1. Navegue até o diretório do Django.
  2. Instale as dependências:
     ```bash
     pip install -r requirements.txt
     ```
  3. Execute as migrações:
     ```bash
     python manage.py migrate
     ```
  4. Inicie o servidor Django:
     ```bash
     python manage.py runserver
     ```

- **FastAPI**:
  1. Navegue até o diretório do FastAPI.
  2. Instale as dependências:
     ```bash
     pip install -r requirements.txt
     ```
  3. Inicie o servidor FastAPI:
     ```bash
     uvicorn main:app --reload
     ```

### 2. Frontend (React)

1. Navegue até o diretório do frontend:
   ```bash
   cd frontend

2. Instale as dependências:
   ```bash
    npm install

3. Inicie o servidor React:
   ```bash
   npm start

O frontend estará disponível em http://localhost:3000, e o backend em http://localhost:8000 para Django e FastAPI.

---

## Tecnologias Utilizadas

Backend: Django, FastAPI, djangorestframework, djangorestframework-simplejwt, fastapi-jwt-auth
Frontend: React, Axios
JWT: JSON Web Tokens para autenticação

## Estrutura do Projeto
    ├── backend
    │   ├── django
    │   │   ├── api
    │   │   ├── poetry.lock
    │   │   └── pyproject.toml
    │   ├── fastapi_project
    │   └── requirements.txt
    └── frontend
        ├── public
        ├── src
        ├── package.json
        └── node_modules

---

## Autor

Este projeto foi desenvolvido para demonstrar a implementação de autenticação JWT em aplicações Django, FastAPI e React.

---

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

---

