'use client';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { stations } from '../station';
import MapHeader from './MapHeader';

export default function MapDienVongCenterPanel({
  scale = 1
}: {
  scale?: number;
}) {
  return (
    <MapContainer
      center={[21.01417, 107.20167]}
      zoom={13}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      className='h-full w-full'
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
    </MapContainer>
  );
}
