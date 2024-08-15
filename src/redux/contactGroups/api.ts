import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const contactGroupsApiSlice = createApi({
    reducerPath:'contactGroupsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://mocki.io/v1/'}),
    endpoints(builder){
        return {getContactGroups:builder.query<Array<GroupContactsDto>,void>({
            query:() => ({url:'/9537a935-a0d9-48e3-806c-b5de95b8ce35'})
        })}
    }
}) 