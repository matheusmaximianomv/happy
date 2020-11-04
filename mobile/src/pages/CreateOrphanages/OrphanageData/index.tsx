import React from 'react';
import { Switch } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  Title,
  Label,
  Input,
  TextArea,
  ImagesInput,
  SwitchContainer,
  NextButton,
  NextButtonText,
} from './styled';

export default function OrphanageData() {
  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title font="Nunito_700Bold">Dados</Title>

      <Label font="Nunito_600SemiBold">Nome</Label>
      <Input />

      <Label font="Nunito_600SemiBold">Sobre</Label>
      <TextArea />

      <Label font="Nunito_600SemiBold">Whatsapp</Label>
      <Input />

      <Label font="Nunito_600SemiBold">Fotos</Label>
      <ImagesInput onPress={() => {}}>
        <Feather name="plus" size={24} />
      </ImagesInput>

      <Title font="Nunito_700Bold">Visitação</Title>

      <Label font="Nunito_600SemiBold">Instruções</Label>
      <TextArea />

      <Label font="Nunito_600SemiBold">Horário de visitas</Label>
      <Input />

      <SwitchContainer>
        <Label font="Nunito_600SemiBold">Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
        />
      </SwitchContainer>

      <NextButton onPress={() => {}}>
        <NextButtonText font="Nunito_800ExtraBold">Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  );
}
