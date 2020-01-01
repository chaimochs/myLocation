import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return(
        <div>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/">Categories</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/AddCategory">Add Category</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default NavBar;
