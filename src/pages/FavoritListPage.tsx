import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import { useAppSelector } from 'src/redux/hooks';

export const FavoritListPage = () => {
  
  const {contacts,favouriteContacts} = useAppSelector(state => state.contacts)
  const filteredContacts = contacts.filter(contact => favouriteContacts.includes(contact.id))
  
  return (
    <Row xxl={4} className="g-4">
      {filteredContacts?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
}
