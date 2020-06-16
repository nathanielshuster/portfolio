import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { PageHeader } from '../components/PageHeader'
import styled from 'styled-components'

import bt_events_lt from '../assets/bt_events_lt.png'
import bt_odds_lt from '../assets/bt_odds_lt.png'

import wm_home_lt from '../assets/wm_home_lt.png'
import wm_search_lt from '../assets/wm_search_lt.png'

const Styles = styled.div`
  .carousel-indicators li {
    visibility: hidden;
  }
`;

export const Projects = () => {
  return (
    <Styles>
      <PageHeader heading="Nathaniel Shuster" sub="Full Stack Web Developer" />
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bt_events_lt}
                  alt="WeatherMan"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bt_odds_lt}
                  alt="WeatherMan"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={wm_home_lt}
                  alt="WeatherMan"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={wm_search_lt}
                  alt="WeatherMan"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}
