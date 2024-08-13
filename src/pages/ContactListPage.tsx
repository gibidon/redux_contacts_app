import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import { useGetContactsQuery } from 'src/redux/contacts';
import { useState } from 'react';
import { useGetContactGroupsQuery } from 'src/redux/contactGroups';
import {  filterContacts } from 'src/utils/filterContacts';


export const ContactListPage = () => {
  const {data:contacts,isLoading} = useGetContactsQuery()
  const {data:contactGroups} = useGetContactGroupsQuery() 
  const [filterValues,setFilterValues] = useState({name:'',groupId:''})
  const filteredContacts = filterContacts(filterValues,contacts,contactGroups)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    setFilterValues({...filterValues,['name']:fv.name ??'',['groupId']:fv.groupId ?? ''})
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={contactGroups ?? []} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
      {isLoading ? <div>Loading data..</div> : 
       <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
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
