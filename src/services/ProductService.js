import axios from '../utils/axios';
import { settings } from '../utils/settings';

const baseUrl = settings.BASE_URL;

const welcomeNotesService = {

    getAllProducts: () => {
        return axios
            .get(`${baseUrl}/api/product`)
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
            .get(`${baseUrl}/api/product/${productId}`)
            .then(response => {
                console.log(response.data);

                return response.data;
            })
            .catch(error => {
                throw error;
            });

    }
    // getActiveNote: () => {

    //     return axios
    //         .get('/welcomenotes?activeNote=true')
    //         .then(response => {
    //             return response.data;
    //         })
    //         .catch(error => {
    //             globalErrorHandler(error);

    //             throw error.response;
    //         });

    // },

};

export default welcomeNotesService;