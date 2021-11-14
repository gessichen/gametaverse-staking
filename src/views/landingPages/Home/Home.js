import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import { Features, Hero, Roadmap } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container paddingBottom={'0 !important'}>
          <Roadmap />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
