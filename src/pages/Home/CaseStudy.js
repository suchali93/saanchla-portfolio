import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import { Heading } from '../../common/styledComponents';
import {
  CaseStudyTitle,
  CaseStudyContent,
  CaseStudyImage,
  CaseStudyHover,
} from './styledComponents';

const CaseStudy = ({
  to,
  order,
  title,
  type,
  description,
  imageSrc,
  backgroundColor,
  inProgress,
  ...rest
}) => {
  return (
    <Col lg={6} className="gy-2" {...rest}>
      <CaseStudyHover as={Link} to={to}>
        <Box style={{ backgroundColor }}>
          <CaseStudyContent
            p={4}
            display="flex"
            justifyContent="flex-end"
            position="relative"
          >
            <CaseStudyTitle>
              <Heading weight={500}>{title}</Heading>
              <Heading size="14px" weight={300} color="light">
                {type}
              </Heading>
            </CaseStudyTitle>
            <Box display="flex" alignItems="flex-end">
              <CaseStudyImage src={imageSrc} alt={title} />
            </Box>
          </CaseStudyContent>
        </Box>
      </CaseStudyHover>
    </Col>
  );
};

CaseStudy.propTypes = {
  to: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  inProgress: PropTypes.bool,
};

CaseStudy.defaultProps = {
  backgroundColor: '#fff',
  description: '',
  inProgress: false,
};

export default CaseStudy;
