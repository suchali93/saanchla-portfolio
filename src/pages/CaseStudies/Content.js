import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Typography } from '@material-ui/core';
import { Heading } from './styledComponents';

const headingVariant = (level) => {
  if (level === 3) {
    return 'sm';
  }
  if (level === 2) {
    return 'md';
  }
  return 'lg';
};

const contentBox = (children, level, heading, showDivider) => {
  return (
    <>
      <Box mt={level === 1 ? 7 : 3} mb={7}>
        {heading && <Heading variant={headingVariant(level)}>{heading}</Heading>}
        <Typography variant="body1">
          {React.Children.map(children, (child) => {
            if (child.type?.name === 'Content') {
              return contentBox(
                child.props.children,
                child.props.level,
                child.props.heading,
                child.props.showDivider,
              );
            }
            return child;
          })}
        </Typography>
      </Box>
      {(level === 1 || showDivider) && <Divider variant="middle" />}
    </>
  );
};

const Content = ({ heading, level, showDivider, children }) => {
  return contentBox(children, level, heading, showDivider);
};

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  level: PropTypes.number,
  showDivider: PropTypes.bool,
  children: PropTypes.node,
};

Content.defaultProps = {
  level: 1,
  showDivider: false,
  children: undefined,
};

export default Content;
