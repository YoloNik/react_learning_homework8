import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  postContact,
  deleteContact,
  patchContact,
} from './contactsOperation';

type test = {
	contacts: {
    data: { items:Array<any>, loading:boolean },
    filter: string,
  },
}

const initialState: test = {
  contacts: {
    data: { items: [], loading: false },
    filter: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    filterChange: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
  extraReducers: builder => {
    //GET CONTACTS
    builder
      .addCase(getContacts.pending, state => {
        state.contacts.data.loading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts.data.items = action.payload;
        state.contacts.data.loading = false;
      })
      .addCase(getContacts.rejected, state => {
        state.contacts.data.loading = false;
      })
      //POST CONTACTS
      .addCase(postContact.pending, state => {
        state.contacts.data.loading = true;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.contacts.data.items = [
          action.payload,
          ...state.contacts.data.items,
        ];
        state.contacts.data.loading = false;
      })
      .addCase(postContact.rejected, state => {
        state.contacts.data.loading = false;
      })
      //DELETE CONTACTS
      .addCase(deleteContact.pending, state => {
        state.contacts.data.loading = true;
      })
      .addCase(deleteContact.fulfilled, state => {
        state.contacts.data.loading = false;
      })
      .addCase(deleteContact.rejected, state => {
        state.contacts.data.loading = false;
      })
      //PATCH CONTACTS
      .addCase(patchContact.pending, state => {
        state.contacts.data.loading = true;
      })
      .addCase(patchContact.fulfilled, (state, action) => {
        const idx = state.contacts.data.items.findIndex(
          contact => contact.id === action.payload.id,
        );
        state.contacts.data.items.splice(idx, 1, action.payload);
        state.contacts.data.loading = false;
      })
      .addCase(patchContact.rejected, state => {
        state.contacts.data.loading = false;
      })
      .addDefaultCase(() => {});
  },
});
export const { filterChange }:any = contactsSlice.actions;
export default contactsSlice.reducer;
