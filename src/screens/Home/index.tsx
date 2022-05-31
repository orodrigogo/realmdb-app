import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import { Header } from '../../components/Header';
import { Orders } from '../../components/Orders';
import { Button } from '../../components/Button';

export function Home() {
  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Orders />

      <Button
        title="Novo chamado"
        onPress={handleNewOrder}
      />
    </Container>
  );
}