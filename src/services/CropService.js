import axios from '../utils/axios';
const baseUrl = 'https://localhost:44359';

const welcomeNotesService = {

    getAllCrops: () => {
        return axios
            .get(`${baseUrl}/api/crop`)
            .then(response => {
                console.log(response);

                return response.data;
            })
            .catch(error => {
                throw error;
            });
    },
    getProduct: productId => {
        return axios
            .get(`${baseUrl}/api/crop/${productId}`)
            .then(response => {
                console.log(response.data);

                return response.data;
            })
            .catch(error => {
                throw error;
            });
    },
    getAllCategories: () => {
        return axios
            .get(`${baseUrl}/api/cropcategory`)
            .then(response => {
                console.log(response.data);

                return response.data;
            })
            .catch(error => {
                throw error;
            });
    }
};

export default welcomeNotesService;