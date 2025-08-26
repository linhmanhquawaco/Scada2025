'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { stations as initialStations, StationInfo } from '../station';

// Fix icon mặc định của Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png'
});

export default function MapDienVongCenterPanel() {
  const [stations, setStations] = useState<StationInfo[]>(initialStations);

  return (
    <MapContainer
      center={[21.01417, 107.20167]}
      zoom={13}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      className='h-full w-full'
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {stations.map((station) => (
        <Marker key={station.id} position={station.position} opacity={0}>
          <Tooltip direction='top' offset={[0, -20]} opacity={1} permanent>
            <div className='rounded border border-blue-400 bg-white p-2 text-xs shadow-md'>
              <div className='font-bold text-blue-600'>{station.title}</div>
              {station.waterLevel !== undefined && (
                <div>Mực nước: {station.waterLevel} m</div>
              )}
              {station.alertLevel !== undefined && (
                <div>Mực nước cảnh báo: {station.alertLevel} m</div>
              )}
              {station.overflowLevel !== undefined && (
                <div>Mực nước tràn: {station.overflowLevel} m</div>
              )}
              {station.dangerLevel !== undefined && (
                <div>Mực nước nguy hiểm: {station.dangerLevel} m</div>
              )}
              {station.pressure !== undefined && (
                <div>Áp suất: {station.pressure} bar</div>
              )}
              {station.flow !== undefined && (
                <div>Lưu lượng: {station.flow} m³/h</div>
              )}
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
