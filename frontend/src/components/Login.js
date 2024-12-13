import React, { useState } from "react"
import axios from "axios"


function AuthenctionUser(){
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ token, setToken ] = useState("")
    const [ message, setMessage ] = useState("")

    const API_URL = "http://127.0.0.1:8000/api/token/" // Django or Django

    // Login
    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(API_URL, {
                username,
                password
            })
            
            const { access, refresh } = response.data // Django (access e refresh)

            setToken(access)
            localStorage.setItem("access_token", access)
            localStorage.setItem("refresh_token", refresh)
            setMessage("Autenticação realizada com sucesso!")
        } catch (error) {
            setMessage("Erro de autenticação. Verifique suas crendenciais")
        }
    }

    // Requisição para rota protegida
    const handleProtectedRequest = async () => {
        try {
            const access_token = localStorage.getItem("access_token")
            const response = await axios.get("http://127.0.0.1:8000/api/protected/", {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                },
            })
            setMessage(response.data.message)
        } catch (error) {
            setMessage("Token inválido ou expirado.")
        }
    }

    return (
        <div>
            <h1>API Authentication JWT</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleProtectedRequest}>Acessar Url Protegida</button>
            <p>{message}</p>
        </div>
    )
}

export default AuthenctionUser