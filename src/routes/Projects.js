import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PageHeader } from '../components/PageHeader'

export const Projects = () => {
  return (
    <>
      <PageHeader heading="Nathaniel Shuster" sub="Full Stack Web Developer" />
      <Container>
        <Row>
          <Col>
            Projects
          </Col>
        </Row>
      </Container>
    </>
  )
}
