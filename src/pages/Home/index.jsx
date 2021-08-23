import React from 'react';
import Pomodoro from '../../components/Pomodoro';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Pomodoro
        defaultTime={1500}
        longRestTime={900}
        shortRestTime={300}
        numberOfCycles={4}
      />
    </Container>
  );
}

export default Home;
