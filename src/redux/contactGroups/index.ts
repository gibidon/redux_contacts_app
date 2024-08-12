import {contactGroupsApiSlice} from './api'

const reducer = contactGroupsApiSlice.reducer
export default reducer

export const {useGetContactGroupsQuery} = contactGroupsApiSlice

export const contactGroupsReducerPath   = contactGroupsApiSlice.reducerPath
export const contactGroupsMiddleware = contactGroupsApiSlice.middleware