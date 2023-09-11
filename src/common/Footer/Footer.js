import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { IconButton, useMediaQuery, useTheme } from '@material-ui/core';

import { LINKEDIN } from '../constants';
import { FooterWrapper } from './styledComponents';

const Footer = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm')); // upto 576
  return (
    <FooterWrapper>
      <Container className="d-block h-100">
        <Row className="d-flex h-100 align-items-center">
          <Col xs={9} md={10} className={isSmScreen ? 'font-normal' : ''}>
            I am currently looking for full-time opportunities. Let’s work together!
          </Col>
          <Col xs={3} md={2} className="p-0 d-flex justify-content-end">
            <IconButton
              href={LINKEDIN}
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
