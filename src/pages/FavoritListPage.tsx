import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import { useAppSelector } from 'src/redux/hooks';
import { useGetContactsQuery } from 'src/redux/contacts';

export const FavoritListPage = () => {
  console.log('fav render')
  const {data:contacts} = useGetContactsQuery()
  const {favouriteContacts} = useAppSelector(state => state.contacts)
  const filteredContacts = contacts?.filter(contact => favouriteContacts.includes(contact.id))
  
  console.log('contacts:',contacts)
  console.log('favs:',favouriteContacts)

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
