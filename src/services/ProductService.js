import axios from '../utils/axios';
import { settings } from '../utils/settings';

const baseUrl = settings.BASE_URL;

const welcomeNotesService = {

    getAllProducts: () => {
        return axios
            .get(`${baseUrl}/api/product`)
            .then(response => {
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
                console.log(response.data);

                return response.data;
            })
            .catch(error => {
                throw error;
            });
    },
    getCategory: categoryId => {
        return axios
            .get(`${baseUrl}/api/ProductCategory/${categoryId}`)
            .then(response => {

                return response.data;
            })
            .catch(error => {
                throw error;
            });

    },
    deleteProduct: productId => {
        return axios
            .delete(`api/product/${productId}`)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            });

    }
};

export default welcomeNotesService;