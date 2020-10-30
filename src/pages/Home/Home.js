import React from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import background from './images/background.png';
import CaseStudy from './CaseStudy';
import { Header } from './styledComponents';
import { CASE_STUDY_PAGES, DETAILS } from '../../common/constants';

const Home = () => {
  return (
    <>
      <Header background={background} display="flex" alignItems="center" mb={10}>
        <Box m={7} mr={10} width="100%">
          <Typography variant="subtitle2" gutterBottom>
            <i>Hello there, I am</i>
          </Typography>
          <Typography variant="h3" gutterBottom>
            SAANCHLA TRIPATHI
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            a Toronto based UX/UI designer.
          </Typography>
          <Button variant="outlined" mt={10}>
            Let&apos;s connect!
          </Button>
        </Box>
      </Header>
      <Container>
        {CASE_STUDY_PAGES.map((caseStudy) => (
          <CaseStudy
            key={caseStudy.replace(/\s+/g, '')}
            title={caseStudy}
            to={DETAILS[caseStudy].pathname}
            description={DETAILS[caseStudy].description}
            imageSrc={DETAILS[caseStudy].imageSrc}
            backgroundColor={DETAILS[caseStudy].backgroundColor}
            inProgress={DETAILS[caseStudy].inProgress}
          />
        ))}
      </Container>
    </>
  );
};

export default Home;
