import axios from ".";

export const create = async ({...values}) => {
  
  const { data } = await axios.post(`members/`, {
    ...values
  });

  return data;
};

export const update = async (
  id,
  { name, parents, birth, death, biography }
) => {
  const { data } = await axios.post(`members/${id}`, {
    name,
    parents,
    birth,
    death,
    biography,
  });

  return data;
};

export const getAllMembers = async () => {
  const { data } = await axios.get("members/");

  return data;
};

export const getChildren = async (id) => {
  const { data } = await axios.get(`members/allChildren/${id}`);

  return data;
};

export const getMemberById = async (id) => {
  const { data } = await axios.get(`members/${id}`);
  return data;
};

export const deleteMemberById = async (id) => {
  const { data } = await axios.delete(`members/${id}`);
  return data;
};


export const getParentsById = async (id) => {
  const { data } = await axios.get(`members/parents/${id}`);
  return data;
};

export const getChildrenById = async (id) => {
  const { data } = await axios.get(`members/children/${id}`);
  return data;
};
