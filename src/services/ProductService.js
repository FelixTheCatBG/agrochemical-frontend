import axios from 'axios';
const baseUrl = 'https://localhost:44359';

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

    },
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