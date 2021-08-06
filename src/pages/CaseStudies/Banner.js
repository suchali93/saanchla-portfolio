import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { DETAILS } from '../../common/constants';
import { BannerBox } from './styledComponents';

const Banner = ({ caseStudy, children, height, fluid, ...rest }) => {
  return (
    <BannerBox
      backgroundColor={DETAILS[caseStudy]?.caseStudy?.backgroundColor}
      className="mb-7"
      height={height}
      {...rest}
    >
      <Box>
        <Container fluid={fluid} className="d-block">
          {children}
        </Container>
      </Box>
    </BannerBox>
  );
};

Banner.propTypes = {
  caseStudy: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  fluid: PropTypes.bool,
};

Banner.defaultProps = {
  height: '15rem',
  fluid: false,
};

export default Banner;
