import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Map, TileLayer, Marker } from 'react-leaflet';

import { FiClock, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import IOrphanage from '../../models/IOrphanage';
import IImage from '../../models/IImage';

import api from '../../services/api';

import Aside from '../../components/Aside';
import { Content } from '../../components/Content';

import MapIcon from '../../utils/MapIcon';

import {
  Container,
  Details,
  PictureBox,
  Picture,
  OrphanageInfo,
  MapContainer,
  OpeningHours,
  ContactButton,
} from './styled';

const mapIcon = MapIcon();

interface OrphanageRouteParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<OrphanageRouteParams>();

  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [imageActive, setImageActive] = useState<IImage>();

  useEffect(() => {
    async function getOrphanage() {
      const { data } = await api.get<IOrphanage>(`/orphanages/${params.id}`);

      if (data.images) {
        setImageActive(data.images[0]);
      }

      setOrphanage(data);
    }

    getOrphanage();
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Aside />
      <Content>
        <Details>
          <img src={imageActive?.url} alt={orphanage?.name} />
          <PictureBox>
            {orphanage?.images?.map((image) => (
              <Picture
                active={image.id === imageActive?.id}
                type="button"
                key={image.url}
                onClick={() => setImageActive(image)}
              >
                <img src={image.url} alt={orphanage.name} />
              </Picture>
            ))}
          </PictureBox>
          <OrphanageInfo>
            <h1>{orphanage?.name}</h1>
            <p>{orphanage?.about}</p>
            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{
                  width: '100%',
                  height: 280,
                }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />
            <h2>Instruções para visita</h2>
            <p>{orphanage?.instructions}</p>

            <OpeningHours openOnWeekends={orphanage.open_on_weekends}>
              <div>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage?.opening_hours}
              </div>
              <div>
                <FiInfo
                  size={32}
                  color={orphanage?.open_on_weekends ? '#39CC83' : '#ff669d'}
                />
                {orphanage?.open_on_weekends
                  ? `Atendemos fim de semana`
                  : `Não atendemos fim de semana`}
              </div>
            </OpeningHours>

            <ContactButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </OrphanageInfo>
        </Details>
      </Content>
    </Container>
  );
}
