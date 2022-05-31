import React from 'react';

import { IconButton } from '../IconButton';

import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {

  return (
    <Container>
      <Greeting>
        <Title>HelpDesk</Title>
        <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      </Greeting>

      <IconButton icon="logout" />
    </Container>
  );
}
