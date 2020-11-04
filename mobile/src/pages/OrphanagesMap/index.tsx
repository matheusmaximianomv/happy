import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import IOrphanage from '../../models/IOrphanage';

import {
  Container,
  MapView,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styled';

import mapMarker from '../../assets/map-marker.png';

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Array<IOrphanage>>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getOrphanages() {
      const response = await api.get('/orphanages');

      setOrphanages(response.data);
    }

    getOrphanages();
  }, []);

  function handleNavigateToOrphanagesDetails(id: number) {
    navigation.navigate('OrphanagesDetails', { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
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
      >
        {orphanages.map((orphanage) => (
          <Marker
            key={orphanage.id}
            icon={mapMarker}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
            calloutAnchor={{
              x: 2.9,
              y: 1,
            }}
          >
            <Callout
              tooltip
              onPress={() => handleNavigateToOrphanagesDetails(orphanage.id)}
            >
              <CalloutContainer>
                <CalloutText font="Nunito_700Bold">
                  {orphanage.name}
                </CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Footer>
        <FooterText font="Nunito_700Bold">
          {orphanages.length} orfanatos encontrados
        </FooterText>
        <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
}
