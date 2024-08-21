import { makeAutoObservable } from "mobx";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

interface FilterStore {
    name:ContactDto['name']
    contactGroup:GroupContactsDto['id']
    setName:(name:string) => void
    setContactGroup:(contactGroup:string) => void
}

export const filterStore = makeAutoObservable<FilterStore>({
    name:'',
    contactGroup:'' ,
    setName(name:string){
        this.name = name
    },
    setContactGroup(contactGroup:string){
        this.contactGroup = contactGroup
    }
})