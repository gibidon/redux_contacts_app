import { FilterFormValues } from "src/components/FilterForm"
import { ContactDto } from "src/types/dto/ContactDto"
import { GroupContactsDto } from "src/types/dto/GroupContactsDto"

export function filterContacts(fv: Partial<FilterFormValues>,contacts:ContactDto[]= [],contactGroups:GroupContactsDto[] =[]):ContactDto[]{
    let foundContacts:ContactDto[] = contacts

    if (fv.name) {
    const fvName = fv.name.toLowerCase();
    foundContacts = contacts?.filter(({name}) => (
      name.toLowerCase().indexOf(fvName) > -1
    ))
  }

  if (fv.groupId) {
    const groupContacts = contactGroups?.find(({id}) => id === fv.groupId);

    if (groupContacts) {
      foundContacts = foundContacts?.filter(({id}) => (
        groupContacts.contactIds.includes(id)
      ))
    }
  }

  return foundContacts 
}