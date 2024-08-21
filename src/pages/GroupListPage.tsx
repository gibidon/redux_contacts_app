import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import { useGetContactGroupsQuery } from 'src/redux/contactGroups';
import { contactGroupStore } from 'src/store/contactGroupStore';

export const GroupListPage = () => {
  const contactGroups = contactGroupStore.contactGroups
  // const {data:contactGroups} = useGetContactGroupsQuery()
  
  return (
    <Row xxl={4}>
      {contactGroups?.map((group) => (
        <Col key={group.id}>
          <GroupContactsCard groupContacts={group} withLink />
        </Col>
      ))}
    </Row>
  )
}

