import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const deleteProductById = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}