import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  Container,
  ContentWrapper,
  SectionText,
  SectionTextTitle,
  SectionTextParagraph,
  Location,
  LocationCity,
  ButtonEnter,
} from './styled';

import logo from '../../assets/Logo.svg';

export default function Landing() {
  return (
    <Container>
      <ContentWrapper>
        <img src={logo} alt="Happy" />

        <SectionText>
          <SectionTextTitle>Leve a felicidade para o mundo</SectionTextTitle>
          <SectionTextParagraph>
            Visite os orfanatos e mude o dia de muitas crianças.
          </SectionTextParagraph>
        </SectionText>

        <Location>
          <LocationCity>Juazeiro do Norte</LocationCity>
          <span>Ceará</span>
        </Location>

        <ButtonEnter to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </ButtonEnter>
      </ContentWrapper>
    </Container>
  );
}
