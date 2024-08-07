import { ContactDto } from "src/types/dto/ContactDto"
import { GroupContactsDto } from "src/types/dto/GroupContactsDto"
import { ThunkAction } from "redux-thunk"
import { RootState } from "./store"
import { FilterFormValues } from "src/components/FilterForm"

const START_LOADING = 'START_LOADING'
const STOP_LOADING = 'STOP_LOADING'

const ADD_CONTACT = 'ADD_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const EDIT_CONTACT = 'EDIT_CONTACT'

const LOAD_DATA= 'LOAD_DATA'
const ADD_FAVOURITE_CONTACT = 'ADD_FAVOURITE_CONTACT'
const DELETE_FAVOURITE_CONTACT = 'DELETE_FAVOURITE_CONTACT'

const ADD_CONTACT_GROUP = 'ADD_CONTACT_GROUP'
const DELETE_CONTACT_GROUP = 'DELETE_CONTACT_GROUP'
const EDIT_CONTACT_GROUP = 'EDIT_CONTACT_GROUP'
const SET_FILTERED_CONTACTS = 'SET_FILTERED_CONTACTS'
const RESET_FILTERED_CONTACTS = 'RESET_FILTERED_CONTACTS'

interface ISetFilteredContactsAction {
    type:typeof SET_FILTERED_CONTACTS,payload:ContactDto[]
}

interface IResetFilteredContactsAction {
    type:typeof RESET_FILTERED_CONTACTS
}
interface IAddContactAction {
    type:typeof ADD_CONTACT,payload:ContactDto
}
interface IDeleteContactAction {
    type:typeof DELETE_CONTACT,payload:ContactDto['id']
}

interface IStartLoadingAction {
    type: typeof START_LOADING
}
interface IStopLoadingAction {
    type: typeof STOP_LOADING
}

interface loadData {
    type:typeof LOAD_DATA
}

export function loadDataAction(fv:Partial<FilterFormValues>,filteredContacts:ContactDto[],contactGroups:GroupContactsDto[]): ThunkAction<void, RootState, void, ProjectActions> {
    return async (dispatch) => {
        try {
            if (fv.name?.length === 0){
            dispatch({type:RESET_FILTERED_CONTACTS})
            return
        }
        else {

        dispatch({ type: START_LOADING });
        let foundContacts: ContactDto[] = filteredContacts;

        if (fv.name) {
            const fvName = fv.name.toLowerCase();
            foundContacts = foundContacts.filter(({name}) => (
            name.toLowerCase().indexOf(fvName) > -1
      ))
    }

    if (fv.groupId) {
      const groupContacts = contactGroups.find(({id}) => id === fv.groupId);

      if (groupContacts) {
        foundContacts = foundContacts.filter(({id}) => (
          groupContacts.contactIds.includes(id)
        ))
      }
    }

        const res = await fetch('https://mocki.io/v1/5e618750-81d8-4d38-93c7-c3be9cdbb09c')
        const data = await res.json();

        dispatch({ type: STOP_LOADING });
        dispatch({ type:SET_FILTERED_CONTACTS,payload:foundContacts})
        }
        } catch (e:unknown) {
            if (e instanceof Error){
                throw new Error('Error in loading data')
            }
        }
        
}
}
export function resetFilteredContacts():IResetFilteredContactsAction{
    return {type:RESET_FILTERED_CONTACTS}
} 

export function addContactAction(contact:ContactDto):IAddContactAction{
    return {type:ADD_CONTACT,payload:contact}
}


export function deleteContactAction(id:ContactDto['id']):IDeleteContactAction{
    return {type:DELETE_CONTACT,payload:id}
}

export function startLoading():IStartLoadingAction{
    return {type:'START_LOADING'}
}
export function stopLoading():IStopLoadingAction{
    return {type:'STOP_LOADING'}
}

export type ProjectActions = IAddContactAction | IDeleteContactAction | IStartLoadingAction | IStopLoadingAction |ISetFilteredContactsAction | IResetFilteredContactsAction