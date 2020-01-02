import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = (props) => {
    return(
        <div>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/">Categories</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {props.showAction ? 
              <div>
                <Nav variant="pills"   onClick={() => props.setShowAction(false)}>
                 <Nav.Item>
                    <Nav.Link>edit</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>view</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>delete</Nav.Link>
                  </Nav.Item>
                  </Nav>
              </div>:
              null
            }
            <Nav className="mr-auto">
                <Nav.Link href="/AddCategory">Add Category</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default NavBar;
