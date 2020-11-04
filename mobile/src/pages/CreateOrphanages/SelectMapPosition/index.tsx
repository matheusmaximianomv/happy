import React from 'react';
import { Marker } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';

import { Container, MapView, NextButton, NextButtonText } from './styled';

import mapMarkerImg from '../../../assets/map-marker.png';

export default function SelectMapPosition() {
  const navigation = useNavigation();

  function handleNextStep() {
    navigation.navigate('OrphanageData');
  }

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
        />
      </MapView>

      <NextButton onPress={handleNextStep}>
        <NextButtonText font="Nunito_800ExtraBold">Próximo</NextButtonText>
      </NextButton>
    </Container>
  );
}
