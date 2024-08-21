import { makeAutoObservable } from "mobx";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { api } from "src/api";

interface ContactGroupStore {
    contactGroups:Array<GroupContactsDto> | undefined,
    get():Generator<Promise<GroupContactsDto[]>,void,GroupContactsDto[]>
}

export const contactGroupStore = makeAutoObservable<ContactGroupStore>({
    contactGroups:[],
    *get(){
        const result:Array<GroupContactsDto> = yield api.getContactGroups()

        if(result){
            contactGroupStore.contactGroups = result
        }
    }
})