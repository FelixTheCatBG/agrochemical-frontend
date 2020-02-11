import axios from '../utils/axios';
const baseUrl = 'https://localhost:44359';

const manufacturerService = {

    getAllManufacturers: () => {
        return axios
            .get(`${baseUrl}/api/manufacturerr`)
            .then(response => {
                console.log(response);

                return response.data;
            })
            .catch(error => {
                throw error;
            });
    }
};

export default manufacturerService;