import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MAIN_URL = 'https://connections-api.herokuapp.com';

const getContacts = createAsyncThunk(
  'contacts/getStatus',
  async (_, thunkApi) => {
    const persistedToken = thunkApi.getState().auth.userData.token;
    if (!persistedToken) return;
    const { data } = await axios.get(`${MAIN_URL}/contacts`);
    return data;
  },
);
const postContact = createAsyncThunk(
  'contacts/postStatus',
  async (newContact, thunkApi) => {
    //const contact = () => {
    //  if (newContact.name && newContact.number)
    //    return { name: newContact.name, number: newContact.number };
    //  if (!newContact.name && newContact.number)
    //    return {
    //      name: thunkApi.getState().auth.userData.user.name,
    //      number: newContact.number,
    //    };
    //  if (newContact.name && !newContact.number)
    //    return {
    //      name: newContact.name,
    //      number: thunkApi.getState().auth.userData.user.number,
    //    };
    //  return;
    //};
    //const test = contact();
    const { data } = await axios.post(`${MAIN_URL}/contacts`, newContact);
    return data;
  },
);
const deleteContact = createAsyncThunk('contacts/deleteStatus', async id => {
  const { data } = await axios.delete(`${MAIN_URL}/contacts/${id}`);
  return data;
});
const patchContact = createAsyncThunk(
  'contacts/patchStatus',
  async userParams => {
    const { data } = await axios.patch(
      `${MAIN_URL}/contacts/${userParams.userId}`,
      userParams.newContsct,
    );
    return data;
  },
);

export { getContacts, postContact, deleteContact, patchContact };
