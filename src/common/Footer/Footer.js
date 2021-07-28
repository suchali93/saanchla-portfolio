import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Col, Container, Row } from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import { FooterWrapper } from './styledComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="d-block h-100">
        <Row className="d-flex h-100 align-items-center">
          <Col xs={9} md={10}>
            I am currently looking for full-time opportunities. Let’s work together!
          </Col>
          <Col xs={3} md={2} className="p-0 d-flex justify-content-end">
            <IconButton
              href="https://www.linkedin.com/in/sanchala-tripathi"
              disableRipple
              aria-label="linked in"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:sanch.tripathi@gmail.com"
              disableRipple
              aria-label="email"
            >
              <EmailIcon />
            </IconButton>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
