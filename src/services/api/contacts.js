import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://640196baab6b7399d0a7eacd.mockapi.io/contacts/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};