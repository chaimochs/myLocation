import React from 'react';
import {withRouter} from 'react-router';
import { Nav, Navbar } from 'react-bootstrap';
import queryString from 'query-string'

const NavBar = (props) => {

  const values = queryString.parse(props.location.search)
  const presentCat = values.cat;

    return(
        <div>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand id="cat-home" href="/">{"Home"}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {props.showAction ? 
              <div>
                <Nav variant="pills">
                 <Nav.Item>
                    <Nav.Link onClick={() => {
                      props.setViewLocation(false); 
                      props.setEditable(!props.editable);
                    }}
                    >
                      Edit
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => {
                      props.setViewLocation(false); 
                      props.deleteCategory(presentCat);
                      }}
                    >
                      Delete
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => props.setViewLocation(true)}>
                      View
                    </Nav.Link>
                  </Nav.Item>
                  </Nav>
              </div>:
              null
            }
            <Nav className="mr-auto">
                <Nav.Link href="/AddCategory">
                  Add Category
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default withRouter(NavBar);
