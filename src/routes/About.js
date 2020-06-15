import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PageHeader } from '../components/PageHeader'
import styled from 'styled-components';

const Styles = styled.div`
  .about-me {
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #05386b;
  }

  .topic {
    font-family: din-2014, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #edf5e1;
  }
`;

export const About = () => {
  return (
    <Styles>
      <PageHeader heading="Nathaniel Shuster" sub="Full Stack Web Developer" />
      <Container>
        <Row>
          <Col>
            <h4 className="topic">Technical:</h4>
            <p className="about-me">
              My tech background is much like the rest of my life, rather untraditional. After beginning my career as a graphic designer, I wanted more of a challenge out of my career. Thanks to ad targeting, I discovered coding bootcamps, and quickly committed. After finishing Full Stack Academy's Bootcamp Prep course, I enrolled in Flatiron School's Web Development course and set out to change my career and life.
            </p>
          </Col>
          <Col>
            <h4 className="topic">Personal:</h4>
            <p className="about-me">
              My name is Nathaniel, but only my grandmother calls me Nathaniel so please, call me Nate. Pittsburgh, Pennsylvania is home but I love to visit new places. I am a dog father to a one year old schicon (shih tzu & bichon frise), named Chewy. When I am not on my computer you can find me biking, fishing, cooking (aglio e olio is my specialty), playing with Chewy, or throwing the football.
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}
