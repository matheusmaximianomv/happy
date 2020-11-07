import React, { useState } from 'react';
import { Marker, MapEvent } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';

import { Container, MapView, NextButton, NextButtonText } from './styled';

import mapMarkerImg from '../../../assets/map-marker.png';

export default function SelectMapPosition() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const navigation = useNavigation();

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -7.2129638,
          longitude: -39.3102358,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapView>

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText font="Nunito_800ExtraBold">Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
}
