import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_SERVER_URL;

export const register = async (data) => {
    const url = `${API_URL}/register`; 

    try {
        const response = await axios.post(url, data); 
        return response.data; 
    } catch (error) {
        console.error('Error posting signup:', error); 
    }
};

export const login = async (data) => {
    const url = `${API_URL}/login`; 
    console.log(data); 

    try {
        const response = await axios.post(url, data);
        return response.data; 
    } catch (error) {
        console.error('Error posting signup:', error); 
        throw error; 
    }
};
