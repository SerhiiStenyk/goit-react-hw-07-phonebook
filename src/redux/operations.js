/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactsRequest());
    axios
        .get('/contacts')
        .then(({ data }) => dispatch(actions.fetcContactsSuccess(data)))
        .catch(error => dispatch(actions.fetcContactsError(error)));
};
const addContact = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number
    };
        dispatch(actions.addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error)));
};
const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactRequest());
    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
        .catch(error => dispatch(actions.deleteContactError(error)));
};
export default {
    addContact,
    deleteContact,
    fetchContacts
};