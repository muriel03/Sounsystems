const BASE_URL = process.env.REACT_APP_BASE_URL

export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}users`);
    const data = await response.json();
    return data;
};

export const getUserById = async (id) => {
    const response = await fetch(`${BASE_URL}users/${id}`);
    const data = await response.json();
    return data;
};