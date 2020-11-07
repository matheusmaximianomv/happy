import React, { useState } from 'react';
import { Switch, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import api from '../../../services/api';

import {
  Container,
  Title,
  Label,
  Input,
  TextArea,
  ImagesInput,
  UploadedImagesContainer,
  UploadedImage,
  SwitchContainer,
  NextButton,
  NextButtonText,
} from './styled';
import IOrphanage from '../../../models/IOrphanage';

interface IRouteProps {
  position: { latitude: number; longitude: number };
}

export default function OrphanageData() {
  const route = useRoute();
  const { position } = route.params as IRouteProps;

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [images, setImages] = useState<Array<string>>([]);
  const [instructions, setInstructions] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [openOnWeekends, setOpenOnWeekends] = useState(false);

  const navigation = useNavigation();

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.cancelled) {
        const { uri: image } = result;

        setImages([...images, image]);
      }
    } else {
      Alert.alert('Eita, precisamos de acesso as suas fotos...');
    }
  }

  async function handleSubmit() {
    const formData = new FormData();
    const { latitude, longitude } = position;

    formData.append('name', name);
    formData.append('about', about);
    formData.append('latitude', String(latitude));
    formData.append('longitude', String(longitude));
    formData.append('instructions', instructions);
    formData.append('opening_hours', openingHours);
    formData.append('open_on_weekends', String(openOnWeekends));

    images.forEach((image) =>
      formData.append('images', {
        name: `${Date.now()}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    );

    const response = await api.post<IOrphanage>('/orphanages', formData);

    if (response.status === 201) {
      navigation.navigate('OrphanagesMap');
    } else {
      Alert.alert('Não foi possível realizar o cadastro');
    }
  }

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title font="Nunito_700Bold">Dados</Title>

      <Label font="Nunito_600SemiBold">Nome</Label>
      <Input value={name} onChangeText={setName} />

      <Label font="Nunito_600SemiBold">Sobre</Label>
      <TextArea value={about} onChangeText={setAbout} />

      {/* <Label font="Nunito_600SemiBold">Whatsapp</Label>
      <Input /> */}

      <Label font="Nunito_600SemiBold">Fotos</Label>
      <UploadedImagesContainer>
        {images.map((image) => (
          <UploadedImage key={image} source={{ uri: image }} />
        ))}
      </UploadedImagesContainer>

      <ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} />
      </ImagesInput>

      <Title font="Nunito_700Bold">Visitação</Title>

      <Label font="Nunito_600SemiBold">Instruções</Label>
      <TextArea value={instructions} onChangeText={setInstructions} />

      <Label font="Nunito_600SemiBold">Horário de visitas</Label>
      <Input value={openingHours} onChangeText={setOpeningHours} />

      <SwitchContainer>
        <Label font="Nunito_600SemiBold">Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
          value={openOnWeekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>

      <NextButton onPress={handleSubmit}>
        <NextButtonText font="Nunito_800ExtraBold">Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  );
}
