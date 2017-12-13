import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Redirect } from 'react-router-dom';

class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user
    }
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    console.log(this.props.user)
    if(this.props.user === undefined) {
      return (<Redirect to="/login"></Redirect>)
    }
    return (
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">IberRally</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/home">
          <NavItem>Inicio</NavItem>
        </LinkContainer>
        <LinkContainer exact to="/">
          <NavItem>Casas</NavItem>
        </LinkContainer>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <MenuItem>Action</MenuItem>
          <MenuItem>Another action</MenuItem>
          <MenuItem>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem onClick={() => this.props.logout()}>Cerrar sesión</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

    )
  }
}

export default Navigator;
