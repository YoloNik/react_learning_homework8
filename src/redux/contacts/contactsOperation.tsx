import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MAIN_URL = 'https://connections-api.herokuapp.com';

const getContacts = createAsyncThunk(
  'contacts/getStatus',
  async (_, thunkApi:any) => {
    const persistedToken = thunkApi.getState().auth.userData.token;
    if (!persistedToken) return;
    const { data } = await axios.get(`${MAIN_URL}/contacts`);
    return data;
  },
);
const postContact = createAsyncThunk(
  'contacts/postStatus',
	async (newContact: object, thunkApi:any ) => {
		const persistedToken = thunkApi.getState().auth.userData.token;
    if (!persistedToken) return;
		const { data } = await axios.post(`${MAIN_URL}/contacts`, newContact);
    return data;
  },
);
const deleteContact = createAsyncThunk('contacts/deleteStatus', async (id: string, thunkApi:any) => {
	const persistedToken = thunkApi.getState().auth.userData.token;
    if (!persistedToken) return;
  const { data } = await axios.delete(`${MAIN_URL}/contacts/${id}`);
  return data;
});
const patchContact = createAsyncThunk(
	'contacts/patchStatus',
	async (userParams: any, thunkApi:any) => {
		const persistedToken = thunkApi.getState().auth.userData.token;
    if (!persistedToken) return;
    const { data } = await axios.patch(
      `${MAIN_URL}/contacts/${userParams.userId}`,
      userParams.newContsct,
    );
    return data;
  },
);

export { getContacts, postContact, deleteContact, patchContact };
