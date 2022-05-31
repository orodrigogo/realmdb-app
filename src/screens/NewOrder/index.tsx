import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, Title, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { IconButton } from '../../components/IconButton';

export function NewOrder() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('');
  const [equipment, setEquipment] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <Title>Novo chamado</Title>
        <IconButton icon="chevron-left" onPress={handleBack} />
      </Header>

      <Form>
        <Input
          placeholder="Número do Patrimônio"
          onChangeText={setPatrimony}
        />

        <Input
          placeholder="Equipamento"
          onChangeText={setEquipment}
        />

        <TextArea
          placeholder="Descrição"
          autoCorrect={false}
          onChangeText={setDescription}
        />
      </Form>

      <Button
        title="Enviar chamado"
        isLoading={isLoading}
      />
    </Container>
  );
}