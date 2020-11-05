import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Typography } from '@material-ui/core';
import { Heading } from './styledComponents';

const Content = ({ heading, level, showDivider, mt, children }) => {
  const headingVariant = () => {
    if (level === 3) {
      return 'sm';
    }
    if (level === 2) {
      return 'md';
    }
    return 'lg';
  };

  return (
    <>
      <Box mt={level === 2 ? mt : 7} mb={7}>
        <Heading variant={headingVariant()}>{heading}</Heading>
        <Box mt={level === 1 ? 4 : 1}>
          {children && <Typography variant="body1">{children}</Typography>}
        </Box>
      </Box>
      {(level === 1 || showDivider) && <Divider variant="middle" />}
    </>
  );
};

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  level: PropTypes.number,
  mt: PropTypes.number,
  showDivider: PropTypes.bool,
  children: PropTypes.node,
};

Content.defaultProps = {
  level: 1,
  showDivider: false,
  mt: 0,
  children: undefined,
};

export default Content;
