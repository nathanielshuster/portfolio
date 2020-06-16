import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageHeader } from '../components/PageHeader'
import styled from 'styled-components';
import resume from '../assets/ns_resume.pdf'

const Styles = styled.div`
  .button-custom {
    font-family: din-2014, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #edf5e1;
    background-color: #05386b;
    border: none;
  }

  .button-custom:active:focus, .button-custom:hover {
    color: #05386b;
    background-color: #edf5e1;
  }
`;

export const Home = () => {
  return (
    <Styles>
      <PageHeader heading="Nathaniel Shuster" sub="Full Stack Web Developer" />
      <Container>
        <Row>
          <Col className="text-center mt-2">
            <Button
              className="shadow-none button-custom mr-2"
              href="https://github.com/nathanielshuster"
              target="_blank">
              GitHub
            </Button>
            <Button
              className="shadow-none button-custom ml-1 mr-1"
              href="https://www.linkedin.com/in/nathanielshuster/"
              target="_blank">
              LinkedIn
            </Button>
            <Button
              className="shadow-none button-custom ml-2"
              href={resume}
              target="_blank" download>
              Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}
