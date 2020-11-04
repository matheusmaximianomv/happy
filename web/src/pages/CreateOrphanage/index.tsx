import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus, FiX } from 'react-icons/fi';

import api from '../../services/api';

import MapIcon from '../../utils/MapIcon';

import {
  Container,
  Form,
  InputBlock,
  ImageContainer,
  ButtonNewImage,
  Select,
  SubmitButton,
} from './styled';

import Aside from '../../components/Aside';
import { Content } from '../../components/Content';

const mapIcon = MapIcon();

interface IPreviewImage {
  file: File;
  blob: string;
}

export default function CreateOrphanage() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  const [images, setImages] = useState<Array<File>>();
  const [urlPreviewImages, setUrlPreviewImages] = useState<
    Array<IPreviewImage>
  >([]);

  const { push } = useHistory();

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat: latitude, lng: longitude } = event.latlng;
    setPosition({ latitude, longitude });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const imagesFiles = Array.from(event.target.files);

      setImages(imagesFiles);

      const selectedImagesPreview = imagesFiles.map((image) => ({
        file: image,
        blob: URL.createObjectURL(image),
      }));

      setUrlPreviewImages(selectedImagesPreview);
    }
  }

  function handleRemoveImage(imageSelectd: IPreviewImage) {
    const newImages = images?.filter((image) => image !== imageSelectd.file);
    const newUrlPreviewImages = urlPreviewImages.filter(
      (urls) => urls.blob !== imageSelectd.blob
    );

    setImages(newImages);
    setUrlPreviewImages(newUrlPreviewImages);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('about', about);
    formData.append('instructions', instructions);
    formData.append('latitude', String(latitude));
    formData.append('longitude', String(longitude));
    formData.append('opening_hours', openingHours);
    formData.append('open_on_weekends', String(openOnWeekends));

    images?.forEach((image) => {
      formData.append('images', image);
    });

    try {
      await api.post('/orphanages', formData);
      alert('Cadastro realizado com sucesso.');

      push('/app');
    } catch (error) {
      alert('Não foi possível realizar o cadastro desse orfanato');
    }
  }

  return (
    <Container>
      <Aside />
      <Content>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-7.2299731, -39.3166411]}
              style={{ width: '100%', height: 280, zIndex: 5 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImageContainer>
                {urlPreviewImages.map((preview) => (
                  <div key={preview.blob}>
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(preview)}
                    >
                      <FiX size={20} color="red" />
                    </button>
                    <img src={preview.blob} alt="Preview" />
                  </div>
                ))}

                <ButtonNewImage id="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                  <input
                    multiple
                    type="file"
                    id="image[]"
                    onChange={handleSelectImages}
                  />
                </ButtonNewImage>
              </ImageContainer>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horários de visitas</label>
              <input
                type="text"
                id="opening_hours"
                value={openingHours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>
              <Select selected={openOnWeekends}>
                <button type="button" onClick={() => setOpenOnWeekends(true)}>
                  Sim
                </button>
                <button type="button" onClick={() => setOpenOnWeekends(false)}>
                  Não
                </button>
              </Select>
            </InputBlock>
          </fieldset>

          <SubmitButton type="submit">Confirmar</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
