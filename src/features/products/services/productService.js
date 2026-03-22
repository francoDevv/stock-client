import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/products`;

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const deleteProductById = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}

export const createProduct = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
}

export const updateProduct = async (id, data) => {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
}

export const getProductById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}