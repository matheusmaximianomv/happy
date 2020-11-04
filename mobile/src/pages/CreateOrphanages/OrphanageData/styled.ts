import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import IText from '../../../models/IText';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text<IText>`
  color: #5c8599;
  font-size: 24px;
  font-family: ${(props) => String(props.font)};
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-bottom-color: #d3e2e6;
`;

export const Label = styled.Text<IText>`
  font-family: ${(props) => String(props.font)};
  color: #8fa7b3;
  margin-bottom: 8px;
`;

export const Comment = styled.Text`
  font-size: 11px;
  color: #8fa7b3;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
  height: 56px;
  padding: 18px 24px;
  margin-bottom: 46px;
  /* vertical-align: center; */
`;

export const TextArea = styled.TextInput.attrs(() => ({
  multiline: true,
}))`
  background: #fff;
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
  height: 110px;
  padding: 18px 24px;
  margin-bottom: 46px;
  /* vertical-align: center; */
`;

export const ImagesInput = styled(TouchableOpacity)`
  background: rgba(255, 255, 255, 0.8);
  border-style: dashed;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const NextButton = styled(RectButton)`
  background: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 32px;
`;

export const NextButtonText = styled.Text<IText>`
  font-family: ${(props) => String(props.font)};
  font-size: 16px;
  color: #fff;
`;
