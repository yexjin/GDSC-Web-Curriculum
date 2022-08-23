import React from 'react';
import { Button, Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Link to='/' className="navbar-brand">
              홈
            </Link>
            <Nav className="me-auto">
                <Link to='/joinForm' className="nav-link">
                    회원가입
                </Link>
                <Link to='/loginForm' className="nav-link">
                    로그인
                </Link>
                <Link to='/saveForm' className="nav-link">
                    글쓰기
                </Link>
            </Nav>
            <Button variant="outline-info">Button</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;