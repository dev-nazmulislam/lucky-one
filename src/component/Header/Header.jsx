import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { BsCartCheck } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar className="menu-container" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Nr Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#cart">
              {<BsCartCheck className="text-white fs-5" />}
              <span class="badge text-danger bg-secondary">4</span>
            </Nav.Link>
            <Nav.Link href="#login">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
