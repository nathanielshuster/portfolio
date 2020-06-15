import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
  .navbar-brand, .navbar-nav .nav-link {
    font-family: din-2014, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #05386b;
    &:hover {
      color: #edf5e1;
    }
  }

  .navbar-toggler {
    border: none;
    padding: 4px 0px
  }

  .navbar-toggler:focus {
    outline: none;
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
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
