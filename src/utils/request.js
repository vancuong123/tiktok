import axios from 'axios';

const reguest = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export const get = async (path, option = {}) => {
    const response = await reguest.get(path, option);
    return response.data;
};

export default reguest;
