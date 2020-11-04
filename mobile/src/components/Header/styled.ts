import styled from 'styled-components/native';

import IText from '../../models/IText';

export const Container = styled.View`
  padding: 44px 24px 24px;
  background: #f9fafc;
  border-bottom-width: 1px;
  border-bottom-color: #dde3f0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text<IText>`
  font-family: ${(props) => String(props.font)};
  color: #8fa7b3;
  font-size: 16px;
`;
