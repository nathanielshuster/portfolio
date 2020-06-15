import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  h2 {
    font-family: din-2014, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #05386b;
  }

  h6 {
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #edf5e1;
  }

  .jumbotron {
    background-color: #5cdb95
  }
`;

export const PageHeader = (props) => (
  <Styles>
    <Jumbotron className="m-0" fluid>
      <Container className="text">
        <h2 className='heading text-center'>{props.heading}</h2>
        <h6 className='sub text-center'>{props.sub}</h6>
      </Container>
    </Jumbotron>
  </Styles>
);
