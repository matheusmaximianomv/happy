import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import MV, { PROVIDER_GOOGLE } from 'react-native-maps';

import IText from '../../models/IText';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const MapView = styled(MV).attrs({
  provider: PROVIDER_GOOGLE,
})`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const CalloutContainer = styled.View`
  width: 160px;
  height: 56px;
  padding: 0px 16px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  justify-content: center;
`;

export const CalloutText = styled.Text<IText>`
  color: #0089a5;
  font-size: 14px;
  font-family: ${(props) => String(props.font)};
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 22px;

  background: #fff;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  elevation: 3;
`;

export const FooterText = styled.Text<IText>`
  color: #8fa7b3;
  font-family: ${(props) => String(props.font)};
`;

export const CreateOrphanageButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  background: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
