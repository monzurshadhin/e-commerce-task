import React from "react";
import {
  Container, Nav,
  Navbar
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useHandleCart from "../../Hooks/useHandleCart";
import './Header.css';

const Header = () => {
 const history = useHistory();
  const { productCart } = useHandleCart();
 const redirectToCart = () =>{
    history.push('/cart')
 }

  return (
    <Navbar bg="" variant="dark" expand="lg" className="navbar-section">
      <Container>
        <Navbar.Brand href="#home"><b>S tech</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
           
  
            {/* <Link to="/home">home</Link> */}

            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#products">products</Nav.Link>
            <Nav.Link as={HashLink} to="/home#contacts">Contacts</Nav.Link>
            <button
              
              onClick={redirectToCart}
              className="position-relative cart-btn"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {productCart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default Header;
