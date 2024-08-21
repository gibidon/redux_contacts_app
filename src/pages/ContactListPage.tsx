import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import { contactStore } from 'src/store/contactStore';
import { contactGroupStore } from 'src/store/contactGroupStore';
import { filterStore } from 'src/store/filterStore';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

export const ContactListPage = observer(() => {
  const contactGroups= contactGroupStore.contactGroups 
  const filteredContacts = contactStore.filteredContacts

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    filterStore.name = fv.name || ''
    filterStore.contactGroup = fv.groupId || ''
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
      
      </Col>
    </Row>
  );
})
