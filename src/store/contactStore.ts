import { makeAutoObservable } from "mobx";
import { ContactDto } from "src/types/dto/ContactDto";
import { api } from "src/api";
import { filterContacts } from "src/utils/filterContacts";
import { contactGroupStore } from "./contactGroupStore";
import { filterStore } from "./filterStore";

interface ContactStore {
    contacts:Array<ContactDto> | undefined,
    favouriteContacts:Array<ContactDto['id']>
    get():Generator<Promise<ContactDto[]>,void,ContactDto[]>
    filteredContacts:Array<ContactDto>
      
}

export const contactStore = makeAutoObservable<ContactStore>({
    contacts:[],
    favouriteContacts:["ecd667da-0513-4dd5-ba50-e7cc69f6573c","84465d40-ef7b-41c7-8de4-29e7fb4ddd21","0fc3c0ea-0e30-439b-bf2d-393e044788b2","08b8735f-c1b6-4029-a96b-3d3e91869727"],
    *get(){
        const result:Array<ContactDto> = yield api.getContacts()

        if(result){
            contactStore.contacts = result
        }
    },
    get filteredContacts(){
        return filterContacts({name:filterStore.name,groupId:filterStore.contactGroup},this.contacts,contactGroupStore.contactGroups)
    }
})