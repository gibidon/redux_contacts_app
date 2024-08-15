import {contactsApiSlice} from './api'
import {contactSlice} from './slice'

const reducer = contactsApiSlice.reducer
export default reducer

export const {useGetContactsQuery} = contactsApiSlice
export const contactsReducerPath   = contactsApiSlice.reducerPath
export const contactsMiddleware = contactsApiSlice.middleware

export const contactSliceReducer = contactSlice.reducer
export const {getContacts} = contactsApiSlice.endpoints

export const {setFilteredContacts} = contactSlice.actions