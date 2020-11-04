import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import MV from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

import IText from '../../../models/IText';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const MapView = styled(MV)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const NextButton = styled(RectButton)`
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;

  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 40px;
`;

export const NextButtonText = styled.Text<IText>`
  font-family: ${(props) => String(props.font)};
  font-size: 16px;
  color: #fff;
`;
