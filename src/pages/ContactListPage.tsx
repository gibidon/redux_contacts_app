import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { loadDataAction } from 'src/redux/actions';

export const ContactListPage = () => {
  const {contactGroups, isLoading,filteredContacts} = useAppSelector(state => state.contacts)
  const dispatch = useAppDispatch()
    
  const onSubmit = (filterValues: Partial<FilterFormValues>) => dispatch(loadDataAction(filterValues,filteredContacts,contactGroups))    

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={contactGroups} initialValues={{}} onSubmit={onSubmit} />
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
