import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { PageHeader } from '../components/PageHeader'
import * as emailjs from 'emailjs-com'
import styled from 'styled-components'

const ejsUserId = process.env.REACT_APP_EJS_ID;

const Styles = styled.div`
  .form-control {
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 400;
    font-style: normal;
    border: none;
  }

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

  .alert {
    font-family: din-2014, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #05386b;
  }
`;

export const Contact = () => {
  const [senderData, setSenderData] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: ''
  });

  const [alert, setAlert] = useState({
    hasAlert: false,
    variant: '',
    message: ''
  })

  const updateField = e => {
    setSenderData({
      ...senderData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      from_name: senderData.senderName,
      from_email: senderData.senderEmail,
      message_html: senderData.senderMessage
    }
    emailjs.send('gmail', 'template_8DMYxcnH', templateParams, ejsUserId)
      .then((result) => {
        setAlert({
          hasAlert: true,
          variant: "success",
          message: "Message sent."
        })
      }, (error) => {
        setAlert({
          hasAlert: true,
          variant: "danger",
          message: "Something went wrong."
        })
      });
  }

  return (
    <Styles>
      <PageHeader heading="Nathaniel Shuster" sub="Full Stack Web Developer" />
      <Container>
        { !alert.hasAlert ? null :
          <Row>
            <Col>
              <Alert className="text-center" variant={alert.variant}>
                {alert.message}
              </Alert>
            </Col>
          </Row>
        }
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="senderName">
              <Form.Control
                type="text"
                className="shadow-none"
                placeholder="Name"
                value={senderData.senderName}
                onChange={updateField} />
            </Form.Group>

            <Form.Group as={Col} controlId="senderEmail">
              <Form.Control
                type="text"
                className="shadow-none"
                placeholder="Email"
                value={senderData.senderEmail}
                onChange={updateField} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="senderMessage">
              <Form.Control
                as="textarea"
                className="shadow-none"
                placeholder="Message"
                onChange={updateField} />
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Button
              className="button-custom shadow-none"
              type="submit">
              Send
            </Button>
          </Form.Row>
        </Form>
      </Container>
    </Styles>
  )
}
