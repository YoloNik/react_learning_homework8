const getFilter = (state:any) => state.phonebook.contacts.filter;
const getContacts = (state:any) => state.phonebook.contacts.data.items;
const getLoading = (state:any) => state.phonebook.contacts.data.loading;

export { getFilter, getContacts, getLoading };
