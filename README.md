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

# JWT Authentication with Django and FastAPI - React Frontend

## Objective

This project aims to demonstrate the implementation of **JWT (JSON Web Token)** authentication in both **Django** and **FastAPI** backends, with the frontend developed in **React**. The system allows user login, the generation of JWT tokens (`access_token` and `refresh_token`), authentication of protected routes, and the ability to refresh the access token.

---

## Project Architecture

- **Backend**:
  - **Django** with `djangorestframework-simplejwt` for JWT-based authentication.
  - **FastAPI** with `fastapi-jwt-auth` for JWT-based authentication.
  
- **Frontend**:
  - **React** for interacting with the API.
  - **Axios** for backend communication.

---

## Features

1. **Login**: The user sends credentials (username and password) to receive an access token and a refresh token.

2. **Access protected routes**: The user can access protected routes by sending the access token in the HTTP request header.

3. **Token Renewal**: The `refresh_token` is used to renew the `access_token` when it expires.

---

## How to Run the Project

### 1. Backend (Django / FastAPI)

- **Django**:
  1. Navigate to the Django project directory.
  2. Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
  3. Run migrations:
     ```bash
     python manage.py migrate
     ```
  4. Start the Django server:
     ```bash
     python manage.py runserver
     ```

- **FastAPI**:
  1. Navigate to the FastAPI project directory.
  2. Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
  3. Start the FastAPI server:
     ```bash
     uvicorn main:app --reload
     ```

### 2. Frontend (React)

1. Navigate to the frontend directory:
   ```bash
   cd frontend

2. Install dependencies:
   ```bash
    npm install

3. Start the React server:
   ```bash
   npm start

The frontend will be available at http://localhost:3000, and the backend will be available at http://localhost:8000 for both Django and FastAPI.

---

Technologies Used

Backend: Django, FastAPI, djangorestframework, djangorestframework-simplejwt, fastapi-jwt-auth
Frontend: React, Axios
JWT: JSON Web Tokens for authentication

## Project Structure
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

## Author

This project was developed to demonstrate the implementation of JWT authentication in Django, FastAPI, and React applications.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

