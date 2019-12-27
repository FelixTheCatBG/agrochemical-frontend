import axios from 'axios';
const baseUrl = 'https://localhost:44359';

const welcomeNotesService = {

    getAllCrops: () => {
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

    },
    saveProduct: product => {

        return axios.post(`${baseUrl}/product`, product)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });

    },

    editProduct: (productId, product) => {

        return axios
            .put(`${baseUrl}/product/${productId}`, product)
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            });

    },

    deleteNote: productId => {

        return axios
            .delete(`${baseUrl}/product/${productId}`)
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            });

    }

};

export default welcomeNotesService;