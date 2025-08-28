'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import BeChuaComponent from '@/app/dashboard/hethongcapnuoc/BeChuaComponent';
import BomTangApComponent from '@/app/dashboard/hethongcapnuoc/BomTangApComponent';
import NhaMayComponent from '@/app/dashboard/hethongcapnuoc/NhaMayComponent';

export default function MapCenterPanel() {
  return (
    <MapContainer
      center={[20.98019, 106.968]}
      zoom={13}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      doubleClickZoom={false}
      touchZoom={false}
      className='pointer-events-none h-full w-full' // chặn mọi thao tác chuột
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <BeChuaComponent />
      <BomTangApComponent />
      <NhaMayComponent />

      {/* <TuyenOngComponent /> */}
    </MapContainer>
  );
}
// #map=13/20.97875/107.00958
// 20.98019/106.98349
