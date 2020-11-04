import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Container from './styled';

import mapMarkerImg from '../../assets/map-maker.svg';

export default function Aside() {
  const { goBack } = useHistory();

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />
      <footer>
        <button type="button" onClick={() => goBack()}>
          <FiArrowLeft size={34} color="#FFF" />
        </button>
      </footer>
    </Container>
  );
}
