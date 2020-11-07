import React, { useState, useEffect } from 'react';
import { View, Text, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import api from '../../services/api';

import IOrphanage from '../../models/IOrphanage';

import mapMarkerImg from '../../assets/map-marker.png';

import {
  Container,
  ImagesContainer,
  Image,
  DetailsContainer,
  MapContainer,
  MapView,
  RoutesContainer,
  RoutesText,
  Separator,
  Title,
  Description,
  ScheduleContainer,
  ScheduleItem,
  ScheduleText,
  ContactButton,
  ContactButtonText,
} from './styled';

interface IRouteProps {
  id: number;
}

export default function OrphanageDetails() {
  const route = useRoute();
  const params = route.params as IRouteProps;

  const [orphanage, setOrphanage] = useState<IOrphanage>();

  useEffect(() => {
    async function getOrphanage() {
      const response = await api.get<IOrphanage>(`/orphanages/${params.id}`);

      /*
       *"http://localhost:3333/uploads/1604067521639-orfanatos.jpg"
       */

      const {
        id,
        about,
        instructions,
        latitude,
        longitude,
        name,
        open_on_weekends,
        opening_hours,
      } = response.data;

      const images = response.data.images?.map((image) => ({
        id: image.id,
        url: `http://192.168.1.4:3333${image.url.split(':3333')[1]}`,
      }));

      const data = {
        id,
        name,
        about,
        latitude,
        longitude,
        instructions,
        opening_hours,
        open_on_weekends,
        images,
      };

      console.log(data);

      setOrphanage(data);
    }

    getOrphanage();
  }, [params.id]);

  function handleOpenGoogleMapRoutes() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`
    );
  }

  if (!orphanage) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage?.images?.map((image) => (
            <Image
              key={image.id}
              source={{
                uri: image.url,
              }}
            />
          ))}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title font="Nunito_700Bold">{orphanage?.name}</Title>
        <Description font="Nunito_600SemiBold">{orphanage?.about}</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: orphanage?.latitude || -27.2092052,
              longitude: orphanage?.longitude || -49.6401092,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage?.latitude || -27.2092052,
                longitude: orphanage?.longitude || -49.6401092,
              }}
            />
          </MapView>

          <RoutesContainer onPress={handleOpenGoogleMapRoutes}>
            <RoutesText font="Nunito_700Bold">
              Ver rotas no Google Maps
            </RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title font="Nunito_700Bold">Instrunções para visita</Title>
        <Description font="Nunito_600SemiBold">
          {orphanage?.instructions}
        </Description>

        <ScheduleContainer>
          <ScheduleItem bgColor="#e6f7fb" bdColor="#B3DAE2">
            <Feather name="clock" size={40} color="#2ab5d1" />
            <ScheduleText font="Nunito_600SemiBold">
              Segunda à Sexta {orphanage?.opening_hours}
            </ScheduleText>
          </ScheduleItem>

          <ScheduleItem
            bgColor={orphanage?.open_on_weekends ? '#edfff6' : '#fef6f9'}
            bdColor={orphanage?.open_on_weekends ? '#A1E9C5' : '#ffbcd4'}
          >
            <Feather
              name="info"
              size={40}
              color={orphanage?.open_on_weekends ? '#39cc83' : '#ff6690'}
            />
            <ScheduleText font="Nunito_600SemiBold">
              {orphanage?.open_on_weekends
                ? 'Atendemos fim de semana'
                : 'Não atendemos fim de semana'}
            </ScheduleText>
          </ScheduleItem>
        </ScheduleContainer>

        <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#fff" />
          <ContactButtonText font="Nunito_800ExtraBold">
            Entrar em contato
          </ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
}
