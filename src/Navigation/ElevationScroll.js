import React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger } from '@material-ui/core';

const ElevationScroll = ({ children, ...rest }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    ...rest,
  });
};

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ElevationScroll;
