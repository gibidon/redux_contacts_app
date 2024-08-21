import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
// import { useGetContactsQuery } from 'src/redux/contacts';
// import { useAppSelector } from 'src/redux/hooks';
import { contactStore } from 'src/store/contactStore';

export const ContactPage = () => {
  console.log('contact page render')
  const {contactId} = useParams<{ contactId: string }>();
  // const {data:contacts} = useGetContactsQuery()
  const contacts = contactStore.contacts
  const contact = contacts?.find(contact => contact.id === contactId) 

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
