import React, { useState } from 'react';
import GastoApi from '../api/gasto.api.js';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await GastoApi.post('/token/', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.access);
        } catch (error) {
            console.error('Error al iniciar sesión', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};