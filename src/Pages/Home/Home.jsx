import React from 'react';
import { Subtitle, Title } from '../../styles/General.styled';
import { Container } from './Home.styled';
import ModeSelect from './ModeSelect/ModeSelect';

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Tic Tac Toe!</Title>
      <Subtitle>Play the classic game of Tic Tac Toe with a modern twist. Challenge your friends or play against the computer. Enjoy hours of fun and strategy in this timeless game!</Subtitle>
      <ModeSelect />
    </Container>
  );
};

export default Home;