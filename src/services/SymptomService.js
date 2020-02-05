import axios from 'axios';
import { settings } from '../utils/settings';

const baseUrl = settings.BASE_URL;

const symptomService = {

    getAllSymptoms: () => {
        return axios
            .get(`${baseUrl}/api/symptom`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    }


};

export default symptomService;