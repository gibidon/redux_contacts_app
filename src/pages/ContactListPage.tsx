import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { useGetContactsQuery } from 'src/redux/contacts';
import { useEffect, useState } from 'react';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useGetContactGroupsQuery } from 'src/redux/contactGroups';
import { setFilteredContacts } from 'src/redux/contacts';


export const ContactListPage = () => {
  const {data:contacts,isLoading} = useGetContactsQuery()
  const {data:contactGroups} = useGetContactGroupsQuery() 
  const dispatch = useAppDispatch()
    
  const [filteredContacts,setFilteredContacts] = useState<Array<ContactDto> | undefined>(contacts)
  // const {filteredContacts} = useAppSelector(state=> state.contacts)
  console.log('filteredContacts: ',filteredContacts)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
  let foundContacts: ContactDto[] | undefined = contacts 
  console.log('found:',foundContacts)



  if (fv.name) {
    console.log('fvname',fv.name)
    const fvName = fv.name.toLowerCase();
    foundContacts = foundContacts?.filter(({name}) => (
      name.toLowerCase().indexOf(fvName) > -1
    ))
  }
  console.log('found contacts after filtering:',foundContacts)

  if (fv.groupId) {
    const groupContacts = contactGroups?.find(({id}) => id === fv.groupId);

    if (groupContacts) {
      foundContacts = foundContacts?.filter(({id}) => (
        groupContacts.contactIds.includes(id)
      ))
    }
  }

  setFilteredContacts(foundContacts)
    // if (foundContacts) dispatch(setFilteredContacts(foundContacts))
  }


  useEffect(() => {setFilteredContacts(contacts)},[contacts])

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={contactGroups ?? []} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
      {isLoading ? <div>Loading data..</div> : 
       <Row xxl={4} className="g-4">
          {filteredContacts?.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      }
      </Col>
    </Row>
  );
}
