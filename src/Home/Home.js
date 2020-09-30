import { Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Box>
        <Link to="/case/bos">Bos</Link>
      </Box>
      <Box>
        <Link to="/case/culture-fit">CultureFit</Link>
      </Box>
    </>
  );
};

export default Home;
