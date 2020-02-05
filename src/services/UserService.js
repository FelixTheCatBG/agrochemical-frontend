import { authHeader, handleResponse } from '../utils';

import { settings } from '../utils/settings';

const baseUrl = settings.BASE_URL;

function getAll () {
    const requestOptions = { method: 'GET', headers: authHeader() };

    return fetch(`${baseUrl}/api/product`, requestOptions).then(handleResponse);
}

function getById (id) {
    const requestOptions = { method: 'GET', headers: authHeader() };

    return fetch(`${baseUrl}/users/${id}`, requestOptions).then(handleResponse);
}

export const userService = {
    getAll,
    getById
};