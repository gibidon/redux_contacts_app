import { createSlice } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";
import { getContacts } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState:{contacts?:ContactDto[],favouriteContacts:Array<ContactDto['id']>,filteredContacts:Array<ContactDto>} =
{
    filteredContacts:[],
    favouriteContacts: ["ecd667da-0513-4dd5-ba50-e7cc69f6573c","84465d40-ef7b-41c7-8de4-29e7fb4ddd21","0fc3c0ea-0e30-439b-bf2d-393e044788b2","08b8735f-c1b6-4029-a96b-3d3e91869727"]
}

export const contactSlice = createSlice({
    name:'contacts',
    initialState,
    reducers:{
        setFilteredContacts(state, action: PayloadAction<Array<ContactDto>>) {
            console.log('setting: ',action)
                state.filteredContacts = action.payload
        },
    },
    extraReducers(builder){
        builder.addMatcher(getContacts.matchFulfilled,(state,action) => {console.log('done loading,state and action:',state,action);state.filteredContacts = action.payload} )
    }

})