import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
  .nav-item {
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 400;
    font-style: italic;
    color: #05386b;
  }
`;

export const Footer = () => (
  <Styles className="fixed-bottom">
    <Navbar expand="sm">
      <Nav className="text-center">
        <Nav.Item href="/projects">&copy; 2020 Nathaniel Shuster</Nav.Item>
      </Nav>
    </Navbar>
  </Styles>
)
