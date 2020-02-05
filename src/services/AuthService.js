import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import globalErrorHandler from '../utils/globalErrorHandler';
import { settings } from '../utils/settings';

const baseUrl = settings.BASE_URL;
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

function login (username, password) {
    return axios
        .post(`${baseUrl}/api/account/login`, { username, password })
        .then(res => {
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            currentUserSubject.next(res.data);
            console.log(res.data);

            return res.data;
        })
        .catch(error => {
            console.log(error);
            globalErrorHandler(error);
            throw error;
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
