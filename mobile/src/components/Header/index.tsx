import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styled';

interface HeaderRouteProps {
  title: string;
  showCancel: boolean;
}

export default function Header({ title, showCancel }: HeaderRouteProps) {
  const navigation = useNavigation();

  function handleGoBackToAppHomePage() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>

      <Title font="Nunito_600SemiBold">{title}</Title>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomePage}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </Container>
  );
}
