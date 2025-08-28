'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons
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
  position: [number, number];
  offset: [number, number];
  waterLevel?: number;
  waterLevel2?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
  flow?: number;
  pressure?: number;
  notes?: string[];
}

export const initialStations: StationInfo[] = [
  {
    id: 1,
    title: 'ĐO MỨC NƯỚC HỒ CAO VÂN',
    position: [21.051181240269393, 107.23154067993165],
    offset: [366, -237],
    waterLevel: 35.61,
    notes: [
      'Mực nước chết: Hc = 24,5 m',
      'Mực nước tràn: Ht = 35 m',
      'Mực nước nguy hiểm: H = 38,8 m'
    ]
  },
  {
    id: 2,
    title: 'Tuyến D800 thép, D630 HDPE trạm 2',
    position: [21.007919694523356, 107.15789794921876],
    offset: [-162, 35],
    pressure: 6.51,
    flow: 6.76
  },
  {
    id: 3,
    title: 'Dương Huy - Mông Dương',
    position: [21.05470570160897, 107.27977752685548],
    offset: [722, -238],
    pressure: 5.61,
    flow: 294.23
  },
  {
    id: 4,
    title: 'Dương Huy cấp nội bộ',
    position: [21.039646056144857, 107.27668762207033],
    offset: [727, -127],
    pressure: 3.11,
    flow: 18
  },
  {
    id: 5,
    title: 'ĐO MỨC BỂ 3000M3',
    position: [20.99942613938043, 107.20287322998047],
    offset: [84, 108],
    waterLevel: 2.4,
    alertLevel: 0.5,
    overflowLevel: 3.7,
    notes: [
      'Mực nước cạn là: Hc = 0,5 (m)',
      'Mức nước tràn của bể: H = 3,7 (m)',
      'Tích luỹ ngày DV :0 (m3)'
    ]
  },
  {
    id: 6,
    title: 'DV04-D225 T.Hồng - Đ.Chồng',
    position: [21.008560697933067, 107.26003646850587],
    offset: [605, 81],
    pressure: 4.76,
    flow: 47
  },
  {
    id: 7,
    title: 'DV03-D225 Q.Hanh-T.Hồng',
    position: [20.995099048089518, 107.24098205566408],
    offset: [518, 213],
    pressure: 3.71,
    flow: 95
  },
  {
    id: 8,
    title: 'DV01-01-D160 Q.Hanh-Đ.Bụt',
    position: [20.98243757925786, 107.16407775878908],
    offset: [-236, 207],
    pressure: 2.72,
    flow: 25,
    notes: ['P min: 2,0 (bar) ; P max: 5,2 (bar)']
  },
  {
    id: 9,
    title: 'DV02-D600 Cấp Cẩm Phả',
    position: [20.98355952489907, 107.23737716674806],
    offset: [514, 290],
    pressure: 5.7,
    flow: 1105
  },
  {
    id: 10,
    title: 'DV01-D600 Cấp Hạ Long',
    position: [20.958714471129635, 107.18055725097656],
    offset: [-140, 307],
    pressure: 6.31,
    flow: 777
  },
  {
    id: 11,
    title: 'P nước thô Cao Vân tại trạm Van GA',
    position: [21.024424654564555, 107.15429306030275],
    offset: [-168, -42],
    pressure: 3.06
  },
  {
    id: 12,
    title: 'Tuyến DV00-02-D160 Osen',
    position: [20.968011813429065, 107.222957611084],
    offset: [90, 449],
    pressure: 2.77,
    flow: 27
  },
  {
    id: 13,
    title: 'D630 HDPE cấp Hạ Long',
    position: [20.971377949994018, 107.17987060546875],
    offset: [174, 367],
    pressure: 5.9,
    flow: 711
  },
  {
    id: 14,
    title: 'Tổng Q',
    position: [21.037723438590533, 107.17506408691408],
    offset: [-76, -131],
    flow: 2734.515
  },
  {
    id: 15,
    title: 'ĐO MỨC BỂ 4000M3, 3000M3',
    position: [21.02282231132884, 107.2090530395508],
    offset: [201, -90],
    waterLevel: 3.28,
    waterLevel2: 3.06,
    notes: [
      '(Bể 3000: Hmin 2,5 m; Hmax: 3,35 m )',
      '(Bể 4000: Hmin 2,7 m; Hmax: 3,62 m )'
    ]
  },
  {
    id: 16,
    title: 'T.Bơm 1 Cao Vân',
    position: [21.035159909918548, 107.23583221435548],
    offset: [201, -90],
    pressure: 0.98,
    notes: ['T máy bơm =  (oC) ; Trạng thái TB:']
  }
];

// const initialStations: StationInfo[] = [
//   {
//     id: 1,
//     title: 'ĐO MỨC NƯỚC HỒ CAO VÂN',
//     position: [21.06468, 107.20831],
//     waterLevel: 35.61,
//     alertLevel: 24.5,
//     overflowLevel: 35,
//     dangerLevel: 38.8,
//     lines: [
//       'Mực nước hiện tại: H = 35.61 (m)',
//       'Mực nước chết là: Hc = 24,5 (m)',
//       'Mực nước tràn là: Ht = 35 (m)',
//       'Mực nước nguy hiểm: H = 38,8 (m)'
//     ]
//   },
//   {
//     id: 2,
//     title: 'Tuyến D800 thép, D630 HDPE trạm 2',
//     position: [21.07, 107.215],
//     lines: ['P D800 = 6.51 (bar); P D630 = 6.76 (bar)']
//   },
//   {
//     id: 3,
//     title: 'Dương Huy - Mông Dương',
//     position: [21.01, 107.21],
//     waterLevel: 5.61,
//     lines: [
//       'P = 5.61 (bar); Q = 294,23 (m3/h)',
//       'T máy bơm 1 = 0 (oC); Trạng thái TB:',
//       'P min: 2,5 (bar); P max: 6,3 (bar)'
//     ]
//   }
// ];

export default function WaterMonitoringMap() {
  const [stations, setStations] = useState<StationInfo[]>(initialStations);

  return (
    <div className='relative h-screen w-screen'>
      <MapContainer
        center={[21.01417, 107.20167]}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
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
            <Tooltip
              direction='top'
              offset={[0, -10]}
              permanent
              className='rounded bg-white p-2 text-xs whitespace-pre-line shadow-md md:text-sm'
            >
              <div className='font-bold text-blue-600'>{station.title}</div>
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
                    <div>Áp suất: {station.pressure} bar</div>
                  )}
                  {station.flow !== undefined && (
                    <div>Lưu lượng: {station.flow} m³/h</div>
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
          </Marker>
        ))}
      </MapContainer>

      {/* Xuất JSON */}
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
