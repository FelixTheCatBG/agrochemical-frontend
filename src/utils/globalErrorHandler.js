import history from './history';
import { authenticationService } from '../services';

const UNAUTHRIZED_CODE = 401;
const DENIED_CODE = 403;

const handleGlobalError = (error) => {
    if (error.response && error.response.status === UNAUTHRIZED_CODE) {
        authenticationService.logout();
        history.push('/login');
    } else if (error.response && error.response.status === DENIED_CODE) {
        history.push('/');
    } else {
        console.error(`Response Error: ${error}`);
    }
};

export default handleGlobalError;