'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png'
});

// Marker tròn số
const customDivIcon = (number: number) =>
  L.divIcon({
    html: `<div class="rounded-full w-8 h-8 bg-blue-500 text-white flex items-center justify-center font-bold">${number}</div>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

export interface StationInfo {
  id: number;
  title: string;
  position: LatLngExpression;
  offset: [number, number];
  waterLevel?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
  flow?: number;
  pressure?: number;
}

export const initialStations: StationInfo[] = [
  {
    id: 1,
    title: 'ĐO MỨC NƯỚC HỒ CAO VÂN',
    position: [21.06468, 107.20831],
    offset: [1049 - 1366 / 2, 147 - 768 / 2],
    waterLevel: 35.61,
    alertLevel: 24.5,
    overflowLevel: 35,
    dangerLevel: 38.8
  },
  {
    id: 2,
    title: 'Tuyến D800 thép, D630 HDPE trạm 2',
    position: [21.07, 107.215],
    offset: [521 - 1366 / 2, 419 - 768 / 2],
    pressure: 6.51,
    flow: 6.76
  },
  {
    id: 3,
    title: 'Dương Huy - Mông Dương',
    position: [21.01, 107.21],
    offset: [1405 - 1366 / 2, 146 - 768 / 2],
    pressure: 5.61,
    flow: 294.23
  },
  {
    id: 4,
    title: 'Dương Huy cấp nội bộ',
    position: [21.015, 107.213],
    offset: [1410 - 1366 / 2, 257 - 768 / 2],
    pressure: 3.11,
    flow: 18
  },
  {
    id: 5,
    title: 'ĐO MỨC BỂ 3000M3',
    position: [21.018, 107.22],
    offset: [767 - 1366 / 2, 492 - 768 / 2],
    waterLevel: 2.4,
    alertLevel: 0.5,
    overflowLevel: 3.7
  },
  {
    id: 6,
    title: 'DV04-D225 T.Hồng - Đ.Chồng',
    position: [21.02, 107.223],
    offset: [1288 - 1366 / 2, 465 - 768 / 2],
    pressure: 4.76,
    flow: 47
  },
  {
    id: 7,
    title: 'DV03-D225 Q.Hanh-T.Hồng',
    position: [21.025, 107.225],
    offset: [1201 - 1366 / 2, 597 - 768 / 2],
    pressure: 3.71,
    flow: 95
  },
  {
    id: 8,
    title: 'DV01-01-D160 Q.Hanh-Đ.Bụt',
    position: [21.022, 107.218],
    offset: [447 - 1366 / 2, 591 - 768 / 2],
    pressure: 2.72,
    flow: 25
  },
  {
    id: 9,
    title: 'DV02-D600 Cấp Cẩm Phả',
    position: [21.028, 107.21],
    offset: [1197 - 1366 / 2, 674 - 768 / 2],
    pressure: 5.7,
    flow: 1105
  },
  {
    id: 10,
    title: 'DV01-D600 Cấp Hạ Long',
    position: [21.03, 107.22],
    offset: [543 - 1366 / 2, 691 - 768 / 2],
    pressure: 6.31,
    flow: 777
  }
];

export default function LayoutEditorMap() {
  const [stations, setStations] = useState<StationInfo[]>(initialStations);

  return (
    <div className='relative h-screen w-screen'>
      <MapContainer
        center={[21.01417, 107.20167]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; OpenStreetMap contributors'
        />

        {stations.map((station, idx) => (
          <Marker
            key={station.id}
            position={station.position}
            icon={customDivIcon(station.id)}
            draggable={true}
            eventHandlers={{
              dragend: (e) => {
                const latLng = e.target.getLatLng();
                setStations((prev) => {
                  const newStations = [...prev];
                  newStations[idx].position = [latLng.lat, latLng.lng];
                  return newStations;
                });
              }
            }}
          >
            <Tooltip direction='top' offset={[0, -40]} permanent>
              <div className='rounded bg-white p-1 text-xs shadow-md md:text-sm'>
                <strong>{station.title}</strong>
                {station.waterLevel !== undefined && (
                  <div>Mực nước: {station.waterLevel}</div>
                )}
                {station.alertLevel !== undefined && (
                  <div>Cảnh báo: {station.alertLevel}</div>
                )}
                {station.overflowLevel !== undefined && (
                  <div>Tràn: {station.overflowLevel}</div>
                )}
                {station.dangerLevel !== undefined && (
                  <div>Nguy hiểm: {station.dangerLevel}</div>
                )}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      <button
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1000,
          backgroundColor: '#2563EB',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '4px'
        }}
        onClick={() => {
          navigator.clipboard
            .writeText(JSON.stringify(stations, null, 2))
            .then(() => alert('Đã copy JSON vào clipboard!'))
            .catch(() => alert('Copy thất bại, xem console'));
          console.log(stations);
        }}
      >
        Xuất JSON
      </button>
    </div>
  );
}
