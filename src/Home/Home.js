import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="/case/bos">Bos</Link>
      <Link to="/case/culture-fit">CultureFit</Link>
    </>
  );
};

export default Home;
