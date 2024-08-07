
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import { useAppSelector } from 'src/redux/hooks';

export const GroupListPage = () => {
  const {contactGroups} = useAppSelector(state => state.contacts)
  
  return (
    <Row xxl={4}>
      {contactGroups.map((group) => (
        <Col key={group.id}>
          <GroupContactsCard groupContacts={group} withLink />
        </Col>
      ))}
    </Row>
  )
}

