/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('fetchContactsRequest');
const fetcContactsSuccess = createAction('fetcContactsSuccess');
const fetcContactsError = createAction('fetcContactsError');

const addContactRequest = createAction('addContactRequest');
const addContactSuccess = createAction('addContactSuccess');
const addContactError = createAction('addContactError');

const deleteContactRequest = createAction('deleteContactRequest');
const deleteContactSuccess = createAction('deleteContactSuccess');
const deleteContactError = createAction('deleteContactError');

const changeFilter = createAction('changeFilter');
export default {
    fetchContactsRequest,
    fetcContactsSuccess,
    fetcContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter
};