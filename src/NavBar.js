import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './components/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { CustomContext} from "../src/Context/CustomContext"

function NavBar() {
const {cart} = CustomContext();

  return (
    <>
     
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >Vintage Golden Shop</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/electronics">
              <Nav.Link>Electronics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/jewelery">
            <Nav.Link>Jewelery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/men's clothing">
            <Nav.Link>Men's clothing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categoria/women's clothing">
            <Nav.Link>Women's clothing</Nav.Link>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/cart">
            <Nav.Link>
              <CartWidget count={cart.length}/>
            </Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;