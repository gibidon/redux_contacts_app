import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import { useGetContactsQuery } from 'src/redux/contacts';
import { useEffect, useState } from 'react';
import { useGetContactGroupsQuery } from 'src/redux/contactGroups';
import {  filterContacts } from 'src/utils/filterContacts';
import { observer } from 'mobx-react-lite';
import { contactStore } from 'src/store/contactStore';
import { contactGroupStore } from 'src/store/contactGroupStore';

export const ContactListPage = observer(() => {
  const contacts = contactStore.contacts
  const contactGroups= contactGroupStore.contactGroups 
  console.log('data:',contacts,contactGroups)

  const [filterValues,setFilterValues] = useState({name:'',groupId:''})
  const filteredContacts = filterContacts(filterValues,contacts,contactGroups)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    setFilterValues({...filterValues,'name':fv.name ??'','groupId':fv.groupId ?? ''})
  }

  useEffect(() => {contactStore.get();contactGroupStore.get()},[])

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={contactGroups ?? []} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
      {
       <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      }
       
       {/* <Row xxl={4} className="g-4">
          {contacts?.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row> */}
      
      </Col>
    </Row>
  );
})
