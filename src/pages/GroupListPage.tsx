import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import { useGetContactGroupsQuery } from 'src/redux/contactGroups';

export const GroupListPage = () => {
  const {data:contactGroups} = useGetContactGroupsQuery()
  
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

