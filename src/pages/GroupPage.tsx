import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import { useAppSelector } from 'src/redux/hooks';
import { useGetContactsQuery } from 'src/redux/contacts';
import { useGetContactGroupsQuery } from 'src/redux/contactGroups';

export const GroupPage = () => {
  const {groupId} = useParams<{ groupId: string }>();
  const {data:contacts} = useGetContactsQuery()
  const {data:contactGroups}= useGetContactGroupsQuery()
  // const {contacts,contactGroups} = useAppSelector(state => state.contacts)
  const foundGroup = contactGroups?.find(({id}) =>id === groupId)

  return (
    <Row className="g-4">
      {foundGroup ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
              
                <GroupContactsCard groupContacts={foundGroup} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts?.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
}
