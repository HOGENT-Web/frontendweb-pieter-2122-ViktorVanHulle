import axios from ".";

export const login = async (username, password) => {
  console.log(username, password);
  const { data } = await axios.post(`users/login`, {
    username,
    password,
  });

  return data;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`users/${id}`);
  return data;
};
