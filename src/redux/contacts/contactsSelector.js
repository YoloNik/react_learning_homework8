const getFilter = state => state.phonebook.contacts.filter;
const getContacts = state => state.phonebook.contacts.data.items;
const getLoading = state => state.phonebook.contacts.data.loading;

export { getFilter, getContacts, getLoading };
