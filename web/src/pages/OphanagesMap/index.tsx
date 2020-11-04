import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import IOrphanage from '../../models/IOrphanage';

import api from '../../services/api';

import MapIcon from '../../utils/MapIcon';

import mapMarkerImg from '../../assets/map-maker.svg';

import {
  Container,
  Aside,
  AsideHeader,
  AsideFooter,
  PopupOrphanage,
  Button,
} from './styled';

import 'leaflet/dist/leaflet.css';

const mapIcon = MapIcon([170, 2]);

export default function OphanagesMap() {
  const [orphanages, setOrphanages] = useState<Array<IOrphanage>>([]);

  useEffect(() => {
    async function getOrphanages() {
      const { data } = await api.get<Array<IOrphanage>>('/orphanages');
      setOrphanages(data);
    }

    getOrphanages();
  }, []);

  return (
    <Container>
      <Aside>
        <AsideHeader>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </AsideHeader>
        <AsideFooter>
          <strong>Juazeiro do Norte</strong>
          <span>Ceará</span>
        </AsideFooter>
      </Aside>
      <Map
        center={[-7.2276618, -39.3493291]}
        zoom={15}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => (
          <Marker
            position={[orphanage.latitude, orphanage.longitude]}
            icon={mapIcon}
            key={orphanage.id}
          >
            <PopupOrphanage closeButton={false} minWidth={240} maxWidth={240}>
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </PopupOrphanage>
          </Marker>
        ))}
      </Map>

      <Button to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </Button>
    </Container>
  );
}
