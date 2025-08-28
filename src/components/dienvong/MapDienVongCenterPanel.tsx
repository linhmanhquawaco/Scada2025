'use client';

import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  Polyline,
  useMap
} from 'react-leaflet';
import L, { LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { stations as initialStations, StationInfo, stations } from './station';
// import { iconPosition } from '../icon';
import { iconPositions, iconPosition } from './icon';
import NhaMayComponent from '@/app/dashboard/hethongcapnuoc/NhaMayComponent';
import BomTangApComponent from '@/app/dashboard/hethongcapnuoc/BomTangApComponent';
import BeChuaComponent from '@/app/dashboard/hethongcapnuoc/BeChuaComponent';
import StationDetailModal from '../modal/StationDetailModal';
// Fix icon mặc định của Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/next.svg',
  iconUrl: '/next.svg',
  shadowUrl: '/next.svg'
});

function ForceResize() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  }, [map]);
  return null;
}

// Hàm tính bounds từ danh sách station
function getStationsBounds(padding = 0.01): LatLngBoundsExpression {
  const lats = stations.map((s) => s.position[0]);
  const lngs = stations.map((s) => s.position[1]);

  const minLat = Math.min(...lats) - padding;
  const maxLat = Math.max(...lats) + padding;
  const minLng = Math.min(...lngs) - padding;
  const maxLng = Math.max(...lngs) + padding;

  return [
    [minLat, minLng], // Tây Nam
    [maxLat, maxLng] // Đông Bắc
  ];
}

// Component helper để auto fit map
function FitStationsBounds() {
  const map = useMap();
  const bounds = getStationsBounds(0.02); // padding 0.02
  map.fitBounds(bounds); // tự căn giữa + zoom vừa khít
  return null;
}

export default function MapDienVongCenterPanel() {
  const [stations, setStations] = useState<StationInfo[]>(initialStations);
  const [selectedStation, setSelectedStation] = useState<StationInfo | null>(
    null
  ); // ✅ Thêm state modal
  return (
    <div className='relative h-full w-full'>
      <MapContainer
        center={[21.01417, 107.20167 + 0.01]}
        zoom={13}
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={false}
        doubleClickZoom={false}
        // maxBounds={[
        //   [21.0, 106.8], // Tây Nam (lat thấp nhất gần = center.lat)
        //   [21.05, 107.6] // Đông Bắc (lat cao nhất gần = center.lat)
        // ]}

        maxBounds={getStationsBounds(0.05)} // ngăn pan ra ngoài
        // giới hạn tọa độ: [SouthWest, NorthEast]
        maxBoundsViscosity={1.0}
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
            draggable={false}
            opacity={0}
          >
            <Tooltip
              direction='top'
              offset={[0, 50]}
              permanent
              interactive={true} // 🔥 Bật chế độ tương tác
              className='rounded bg-white p-2 text-xs whitespace-pre-line shadow-md md:text-sm'
            >
              <div
                className='pointer-events-auto cursor-pointer font-bold text-blue-600 hover:underline'
                onClick={() => setSelectedStation(station)} // mở modal
              >
                {station.title}
              </div>
              {station.waterLevel !== undefined && (
                <div>Mực nước: {station.waterLevel} m</div>
              )}
              {station.waterLevel2 !== undefined && (
                <div>Mực nước: {station.waterLevel2} m</div>
              )}

              {(station.pressure !== undefined ||
                station.flow !== undefined) && (
                <div className='flex gap-4'>
                  {station.pressure !== undefined && (
                    <div>
                      P: <span className='font-bold'>{station.pressure}</span>{' '}
                      bar
                    </div>
                  )}
                  {station.flow !== undefined && (
                    <div>
                      Q: <span className='font-bold'>{station.flow}</span> m³/h
                    </div>
                  )}
                </div>
              )}

              {station.notes && station.notes.length > 0 && (
                <div className='mt-1 text-[10px] text-gray-500'>
                  {station.notes.map((note, idx) => (
                    <div key={idx}>{note}</div>
                  ))}
                </div>
              )}
            </Tooltip>
            {/* Vẽ đường nối tới icon tương ứng */}
            {(() => {
              const icon = iconPositions.find((p) => p.id === station.id); // 🔴 SỬA CHỖ NÀY
              if (!icon) return null;
              return (
                <Polyline
                  positions={[station.position, icon.position]}
                  pathOptions={{
                    color: 'blue',
                    weight: 2,
                    dashArray: '6, 6' // 6px vẽ, 6px trống
                  }}
                />
              );
            })()}
          </Marker>
        ))}
        {/* Hiển thị các iconposition dạng vòng tròn số */}
        {iconPositions.map((pos: iconPosition) => {
          const icon = L.divIcon({
            html: `<div class="rounded-full w-6 h-6 bg-red-500 text-white flex items-center justify-center font-bold text-sm">${pos.id}</div>`,
            className: '',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          });

          return (
            <Marker
              key={`icon-${pos.id}`}
              position={pos.position}
              icon={icon}
            />
          );
        })}
        <ForceResize />
        {/* <FitStationsBounds />  */}
        {/* <- tự căn map theo stations */}
        <BeChuaComponent />
        <BomTangApComponent />
        <NhaMayComponent />
      </MapContainer>

      {/* ✅ Modal nằm ngoài MapContainer */}
      {selectedStation && (
        <StationDetailModal
          station={selectedStation}
          onClose={() => setSelectedStation(null)}
        />
      )}
    </div>
  );
}
