import { BehaviorSubject } from 'rxjs';

import { handleResponse } from '../utils';

const baseUrl = 'https://localhost:44359';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

function login (username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${baseUrl}/api/account/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            console.log(user);

            return user;
        });
}

function logout () {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value; }
};
