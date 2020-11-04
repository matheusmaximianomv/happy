import { icon, PointTuple } from 'leaflet';

import mapMarkerImg from '../assets/map-maker.svg';

export default (popupAnchor: PointTuple = [0, -60]) => {
  return icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor,
  });
};
