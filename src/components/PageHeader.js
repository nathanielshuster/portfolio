import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

const Styles = styled.div`
  .heading {
    font-family: din-2014, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #05386b;
  }

  .text-right {
    font-family: din-2014, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #edf5e1;
  }

  .sub {
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #edf5e1;
  }

  .text-right {
    float: right;
  }

  .jumbotron {
    background-color: #5cdb95
  }
`;

export const PageHeader = (props) => {
  const location = useLocation()
  return (
    <Styles>
      <Jumbotron className="m-0" fluid>
        <Container>
          <Row>
            <Col>
              <h2 className="heading">{props.heading}</h2>
              <h5 className="sub">{props.sub}</h5>
            </Col>
            <Col>
              <h5 className="text-right">{location.pathname === "/" ? "/home" : location.pathname}</h5>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Styles>
  )
}
