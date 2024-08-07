import { DATA_CONTACT } from "src/__data__"
import { DATA_GROUP_CONTACT } from "src/__data__"
import { ContactDto } from "src/types/dto/ContactDto"
import { GroupContactsDto } from "src/types/dto/GroupContactsDto"
import { ProjectActions } from "./actions"

interface IContactsState {
    isLoading:boolean
    contacts:Array<ContactDto>
    filteredContacts:Array<ContactDto>
    favouriteContacts:Array<ContactDto['id']>
    contactGroups: Array<GroupContactsDto>
}

const initialState:IContactsState = {
    contacts:DATA_CONTACT,
    filteredContacts:DATA_CONTACT,
    favouriteContacts:[DATA_CONTACT[0].id,DATA_CONTACT[1].id,DATA_CONTACT[2].id,DATA_CONTACT[3].id],
    contactGroups:DATA_GROUP_CONTACT,
    isLoading:false
}

export const contactsReducer = (state:IContactsState = initialState,action:ProjectActions) => {
    switch (action.type){
        case 'START_LOADING':
            return {...state,isLoading:true}

        case 'STOP_LOADING':
            return {...state,isLoading:false}
       
        case 'SET_FILTERED_CONTACTS':
            return {...state,filteredContacts:action.payload}

           
        case 'RESET_FILTERED_CONTACTS':
            return {...state,filteredContacts:initialState.contacts}
    
         default: break
        
    }
    return state

}