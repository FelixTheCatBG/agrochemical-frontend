import { authHeader, handleResponse } from '../utils';

const baseUrl = 'https://localhost:44359';

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${baseUrl}/api/product`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${baseUrl}/users/${id}`, requestOptions).then(handleResponse);
}

export const userService = {
    getAll,
    getById
};