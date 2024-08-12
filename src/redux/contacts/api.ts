import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContactDto } from 'src/types/dto/ContactDto';

export const contactsApiSlice = createApi({
    reducerPath:'contactsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://mocki.io/v1'}),
    endpoints(builder){
        return {getContacts:builder.query<Array<ContactDto>,void>({
            query:() => ({url:'/0bad626f-bb05-42e7-9915-baaf710f8ba5'})
    
        })}
    }
}) 