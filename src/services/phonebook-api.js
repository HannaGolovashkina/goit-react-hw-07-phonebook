import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://640196baab6b7399d0a7eacd.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};