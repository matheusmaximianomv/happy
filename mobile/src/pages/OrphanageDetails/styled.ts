import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import MV from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

import IText from '../../models/IText';

interface IScheduleItemProps {
  color: string;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const Image = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 240px;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const DetailsTitle = styled.Text<IText>`
  color: #4d6f80;
  font-size: 30px;
  font-family: ${(props) => String(props.font)};
`;

export const DetailsAbout = styled.Text<IText>`
  font-family: ${(props) => String(props.font)};
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #b3dae2;
  margin-top: 40px;
  background: #e6f7fb;
`;

export const MapView = styled(MV)`
  width: 100%;
  height: 150px;
`;

export const RoutesContainer = styled.View`
  padding: 16px;
  align-items: center;
  color: #0089a5;
`;

export const RoutesText = styled.Text<IText>`
  font-family: ${(props) => String(props.font)};
  color: #0089a5;
`;

export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background: #d3e2e6;
  margin: 40px 0px;
`;

export const Title = styled.Text<IText>`
  color: #4d6f80;
  font-size: 30px;
  font-family: ${(props) => String(props.font)};
`;

export const Description = styled.Text<IText>`
  font-family: ${(props) => String(props.font)};
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleItem = styled.View<IScheduleItemProps>`
  width: 150px;
  padding: 20px;
  border-width: 1px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.color === 'blue' ? '#e6f7fb' : '#edfff6'};
  border-color: ${(props) => (props.color === 'blue' ? '#B3DAE2' : '#A1E9C5')};
`;

export const ScheduleText = styled.Text<IText>`
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  font-family: ${(props) => props.font};
`;

export const ContactButton = styled(RectButton)`
  background-color: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text<IText>`
  font-family: ${(props) => props.font};
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
