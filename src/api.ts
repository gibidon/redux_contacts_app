import { ContactDto } from "./types/dto/ContactDto"
import { GroupContactsDto } from "./types/dto/GroupContactsDto"

const BASE_URL = 'https://mocki.io/v1'

export class Api {
    async fetch(url:string,config?:RequestInit){
        return fetch(url,{...config,headers:{...config?.headers}}).then(res => res.json())
    }
    async getContacts():Promise<Array<ContactDto>>{
        console.log('loading contacts..')
        const response = await this.fetch(`${BASE_URL}/0bad626f-bb05-42e7-9915-baaf710f8ba5`)

        return response
    }
    async getContactGroups():Promise<Array<GroupContactsDto>>{
        console.log('loading contact groups..')
        const response = await this.fetch(`${BASE_URL}/9537a935-a0d9-48e3-806c-b5de95b8ce35`)

        return response
    }
}

export const api = new Api()