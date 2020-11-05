import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Typography } from '@material-ui/core';
import { Heading } from './styledComponents';

const Content = ({ heading, level, showDivider, children }) => {
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
      <Box my={7}>
        <Heading variant={headingVariant()}>{heading}</Heading>
        {children && <Typography variant="body1">{children}</Typography>}
      </Box>
      {showDivider && <Divider variant="middle" />}
    </>
  );
};

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  level: PropTypes.number,
  showDivider: PropTypes.bool,
  children: PropTypes.node,
};

Content.defaultProps = {
  level: 1,
  showDivider: true,
  children: undefined,
};

export default Content;
