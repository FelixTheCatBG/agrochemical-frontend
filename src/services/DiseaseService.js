import axios from 'axios';
import globalErrorHandler from '../utils/globalErrorHandler';
import { settings } from '../utils/settings';

const baseUrl = settings.BASE_URL;

const welcomeNotesService = {

    getAllDiseases: () => {
        return axios
            .get(`${baseUrl}/api/disease`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                globalErrorHandler(error);
                throw error;
            });
    },

    getDisease: diseaseId => {
        return axios
            .get(`${baseUrl}/api/disease/${diseaseId}`)
            .then(response => {
                console.log(response.data);

                return response.data;
            })
            .catch(error => {
                globalErrorHandler(error);
                throw error;
            });

    }
};

export default welcomeNotesService;