import { makeAutoObservable } from "mobx";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

interface FilterStore {
    name:ContactDto['name']
    contactGroup:GroupContactsDto['id']
}

export const filterStore = makeAutoObservable<FilterStore>({
    name:'',
    contactGroup:''    
})