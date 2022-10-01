import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MAIN_URL = 'https://connections-api.herokuapp.com';

const getContacts = createAsyncThunk(
  'contacts/getStatus',
  async (_, thunkApi) => {
    if (thunkApi.getState().auth.userData.token) {
      const { data } = await axios.get(`${MAIN_URL}/contacts`);
      return data;
    }
  },
);
const postContact = createAsyncThunk('contacts/postStatus', newContact =>
  axios.post(`${MAIN_URL}/contacts`, newContact).then(contact => contact.data),
);
const deleteContact = createAsyncThunk('contacts/deleteStatus', id =>
  axios.delete(`${MAIN_URL}/contacts/${id}`).then(contact => contact.data),
);
const patchContact = createAsyncThunk(
  'contacts/patchStatus',
  (id, newContact) =>
    axios
      .patch(`${MAIN_URL}/contacts/${id}`, newContact)
      .then(contact => contact.data),
);

export { getContacts, postContact, deleteContact, patchContact };
