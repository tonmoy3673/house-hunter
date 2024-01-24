import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_SERVER_URL;

export const postHouse = async (houseData) => {
    const url = `${API_URL}/houses`;

    try {
        const response = await axios.post(url, houseData);
        return response.data; 
    } catch (error) {
        console.error('Error posting house:', error);
        throw error; 
    }
};


export const getAllHouses = async () => {
    const url = `${API_URL}/houses`;
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error('Error posting house:', error);
        throw error; 
    }
};


export const updateHouse = async (id, houseData) => {
    const url = `${API_URL}/houses/${id}`;
    try {
        const response = await axios.put(url, houseData);
        return response.data; 
    } catch (error) {
        console.error('Error posting house:', error);
        throw error; 
    }
};


export const deleteHouse = async (id) => {
    const url = `${API_URL}/houses/${id}`;
    try {
        const response = await axios.delete(url);
        return response.data; 
    } catch (error) {
        console.error('Error posting house:', error);
        throw error; 
    }
};
