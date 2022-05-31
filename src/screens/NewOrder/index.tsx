import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { getRealm } from '../../databases/realm';

import { Container, Header, Title, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { IconButton } from '../../components/IconButton';
import { Alert } from 'react-native';

export function NewOrder() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('');
  const [equipment, setEquipment] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  async function handleNewOrderRegister() {
    const realm = await getRealm();

    try {
      setIsLoading(true);

      realm.write(() => {
        const created = realm.create("Order", {
          _id: uuid.v4(),
          patrimony,
          equipment,
          description,
          status: 'open',
          created_at: new Date(),
        });

        console.log("CADASTRADO ==>", created);
      });

      Alert.alert("Chamado", "Chamado cadastro com sucesso!");
    } catch {
      Alert.alert("Chamado", "Não foi possível abrir o chamado!");
    } finally {
      realm.close();
      setIsLoading(false);
    }
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
        onPress={handleNewOrderRegister}
      />
    </Container>
  );
}