const BASE_URL = process.env.REACT_APP_BASE_URL

export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}products`);
    const data = await response.json();
    return data;
};

export const getProductById = async (id) => {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
};
