import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import { useAppSelector } from 'src/redux/hooks';
import { useGetContactsQuery } from 'src/redux/contacts';
import { contactStore } from 'src/store/contactStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const FavoritListPage = observer(() => {
  // const {data:contacts} = useGetContactsQuery()
  const contacts = contactStore.contacts
  // const {favouriteContacts} = useAppSelector(state => state.contacts)
  const favouriteContacts = contactStore.favouriteContacts
  const filteredContacts = contacts?.filter(contact => favouriteContacts.includes(contact.id))
  
  console.log('f',contacts,favouriteContacts)


  useEffect(() => {contactStore.get()},[])
  
  return (
    <Row xxl={4} className="g-4">
      {filteredContacts?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
