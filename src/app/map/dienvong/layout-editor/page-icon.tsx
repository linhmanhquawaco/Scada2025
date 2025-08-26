'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Rnd } from 'react-rnd';

// Marker icon fix
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

interface StationInfo {
  id: number;
  title: string;
  position: LatLngExpression;
  offset: [number, number]; // offset của card so với center
  waterLevel?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
}

const initialStations: StationInfo[] = [
  {
    id: 1,
    title: 'HỒ CAO VÂN',
    position: [21.06468, 107.20831],
    offset: [80, -80],
    waterLevel: 35.5,
    alertLevel: 24.5,
    overflowLevel: 35,
    dangerLevel: 38.8
  },
  {
    id: 2,
    title: 'Q tổng [17:22]',
    position: [21.012, 107.205],
    offset: [80, -80],
    waterLevel: 2889.426
  },
  { id: 3, title: 'Điểm 3', position: [21.01, 107.21], offset: [-100, -80] },
  { id: 4, title: 'Điểm 4', position: [21.008, 107.208], offset: [80, -100] },
  { id: 5, title: 'Điểm 5', position: [21.005, 107.215], offset: [-100, -100] },
  { id: 6, title: 'Điểm 6', position: [21.018, 107.22], offset: [80, 60] },
  { id: 7, title: 'Điểm 7', position: [21.02, 107.212], offset: [-100, 60] },
  { id: 8, title: 'Điểm 8', position: [21.022, 107.218], offset: [80, 100] },
  { id: 9, title: 'Điểm 9', position: [21.025, 107.205], offset: [-100, 100] },
  { id: 10, title: 'Điểm 10', position: [21.028, 107.21], offset: [0, 120] },
  { id: 11, title: 'Điểm 11', position: [21.03, 107.22], offset: [80, -120] },
  {
    id: 12,
    title: 'Điểm 12',
    position: [21.015, 107.225],
    offset: [-80, -120]
  },
  { id: 13, title: 'Điểm 13', position: [21.02, 107.23], offset: [0, -150] }
];

export default function LayoutEditorMap() {
  const [stations, setStations] = useState<StationInfo[]>(initialStations);

  return (
    <div className='relative h-screen w-screen'>
      <MapContainer
        center={[21.01417, 107.20167]}
        zoom={13}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
        className='h-full w-full'
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
          />
        ))}
      </MapContainer>

      {/* Overlay card + Polyline */}
      {stations.map((station, idx) => {
        const [x, y] = station.offset;

        return (
          <Rnd
            key={station.id}
            default={{
              x: window.innerWidth / 2 + x,
              y: window.innerHeight / 2 + y,
              width: 180,
              height: 'auto'
            }}
            bounds='parent'
            onDragStop={(e, d) => {
              setStations((prev) => {
                const newStations = [...prev];
                newStations[idx].offset = [
                  d.x - window.innerWidth / 2,
                  d.y - window.innerHeight / 2
                ];
                return newStations;
              });
            }}
            dragHandleClassName='drag-handle'
          >
            <div className='relative'>
              {/* Card */}
              <div className='drag-handle rounded border border-blue-500 bg-white p-2 text-xs shadow-md'>
                <div className='mb-1 font-bold text-blue-800'>
                  {station.title}
                </div>
                {station.waterLevel !== undefined && (
                  <div>
                    Mực nước hiện tại:{' '}
                    <span className='bg-red-600 px-1 text-white'>
                      {station.waterLevel}
                    </span>
                  </div>
                )}
                {station.alertLevel !== undefined && (
                  <div>Mực nước cảnh báo: {station.alertLevel}</div>
                )}
                {station.overflowLevel !== undefined && (
                  <div>Mực nước tràn: {station.overflowLevel}</div>
                )}
                {station.dangerLevel !== undefined && (
                  <div>Mực nước nguy hiểm: {station.dangerLevel}</div>
                )}
              </div>

              {/* Arrow */}
              <div
                className='absolute -bottom-2 left-1/2 h-0 w-0 border-t-4 border-r-4 border-l-4 border-t-blue-500 border-r-transparent border-l-transparent'
                style={{ transform: 'translateX(-50%)' }}
              />

              {/* Polyline */}
              <svg
                className='pointer-events-none absolute top-0 left-0 h-full w-full'
                style={{ zIndex: -1 }}
              >
                <line
                  x1={window.innerWidth / 2}
                  y1={window.innerHeight / 2}
                  x2={window.innerWidth / 2 + station.offset[0]}
                  y2={window.innerHeight / 2 + station.offset[1]}
                  stroke='blue'
                  strokeWidth={1.5}
                />
              </svg>
            </div>
          </Rnd>
        );
      })}

      {/* Nút xuất JSON */}
      {/* <button
        className='absolute top-4 left-4 z-50 rounded bg-blue-600 px-3 py-2 text-white shadow-md'
        onClick={() => {
          console.log(JSON.stringify(stations, null, 2));
          alert('Đã xuất JSON ra console, copy vào code chính');
        }}
      >
        Xuất JSON
      </button> */}
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
          console.log(stations); // luôn luôn thấy dữ liệu mới
        }}
      >
        Xuất JSON
      </button>
    </div>
  );
}
