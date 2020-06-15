import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: #5cdb95;
  }

  .navbar-brand, .navbar-nav .nav-link {
    font-family: din-2014, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #edf5e1;

    &:hover {
      color: #05386b;
    }
  }

  .navbar-toggler {
    border: none;
    padding: 4px 0px
  }

  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
  }

  .nav-link {
    text-align: right;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">NS</Navbar.Brand>
      <Navbar.Toggle className="custom-toggler shadow-none" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Projects</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
