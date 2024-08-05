import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

import { Link,NavLink } from 'react-router-dom';

export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" ><h1>Книга контактов</h1></Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="/groups">Группы</Nav.Link> */}
          <NavLink to="/groups">Группы</NavLink>
          <Nav.Link href="/favorit">Избранное</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
