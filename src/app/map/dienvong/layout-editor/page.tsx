'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Tooltip, Marker } from 'react-leaflet';
import { LatLngExpression, LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Rnd } from 'react-rnd';

interface CardInfo {
  id: number;
  title: string;
  timestamp: string;
  lines: string[];
  x: number;
  y: number;
}

interface StationInfo {
  id: number;
  position: LatLngExpression; // tọa độ marker
  title: string;
  waterLevel?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
  offset: [number, number]; // offset px card so với marker
}

const stations: StationInfo[] = [
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
    position: [21.02458488794087, 107.19223022460939],
    offset: [80, -80],
    waterLevel: 2889.426
  },
  {
    id: 3,
    title: 'Điểm 3',
    position: [21.026667906159307, 107.1870803833008],
    offset: [-100, -80]
  },
  {
    id: 4,
    title: 'Điểm 4',
    position: [21.021219950870982, 107.18639373779298],
    offset: [80, -100]
  },
  {
    id: 5,
    title: 'Điểm 5',
    position: [21.003112081172876, 107.19514846801759],
    offset: [-100, -100]
  },
  {
    id: 6,
    title: 'Điểm 6',
    position: [20.99782352760084, 107.21523284912111],
    offset: [80, 60]
  },
  {
    id: 7,
    title: 'Điểm 7',
    position: [20.98388007924893, 107.19343185424805],
    offset: [-100, 60]
  },
  {
    id: 8,
    title: 'Điểm 8',
    position: [20.98948966901873, 107.19480514526369],
    offset: [80, 100]
  },
  {
    id: 9,
    title: 'Điểm 9',
    position: [21.00231079722247, 107.21162796020508],
    offset: [-100, 100]
  },
  {
    id: 10,
    title: 'Điểm 10',
    position: [21.008720948355194, 107.21986770629884],
    offset: [0, 120]
  },
  {
    id: 11,
    title: 'Điểm 11',
    position: [21.07152584446602, 107.27188110351564],
    offset: [80, -120]
  },
  {
    id: 12,
    title: 'Điểm 12',
    position: [20.985482840680387, 107.20029830932619],
    offset: [-80, -120]
  },
  {
    id: 13,
    title: 'Điểm 13',
    position: [21.024424654564555, 107.18004226684572],
    offset: [0, -150]
  }
];

const initialCards: CardInfo[] = [
  {
    id: 1,
    title: 'ĐO MỨC NƯỚC HỒ CAO VÂN',
    timestamp: '11:03',
    lines: [
      'Mực nước hiện tại: H = 35.61 (m)',
      'Mực nước chết là: Hc = 24,5 (m)',
      'Mực nước tràn là: Ht = 35 (m)',
      'Mực nước nguy hiểm: H = 38,8 (m)'
    ],
    x: 1027,
    y: 67
  },
  {
    id: 2,
    title: 'Tuyến D800 thép, D630 HDPE trạm 2',
    timestamp: '11:05',
    lines: ['P D800 = 6.51 (bar); P D630 = 6.76 (bar)'],
    x: 499,
    y: 386
  },
  {
    id: 3,
    title: 'Dương Huy - Mông Dương',
    timestamp: '11:05',
    lines: [
      'P = 5.61 (bar); Q = 294,23 (m3/h)',
      'T máy bơm 1 = 0 (oC); Trạng thái TB:',
      'P min: 2,5 (bar); P max: 6,3 (bar)'
    ],
    x: 1394,
    y: 24
  },
  {
    id: 4,
    title: 'Dương Huy cấp nội bộ',
    timestamp: '11:03',
    lines: [
      'P = 3,11 (bar); Q = 18 (m3/h)',
      'P min: 2,5 (bar); P max: 4,5 (bar)'
    ],
    x: 1388,
    y: 127
  },
  {
    id: 5,
    title: 'ĐO MỨC BỂ 3000M3',
    timestamp: '11:03',
    lines: [
      'Mực nước hiện tại: H = 2.4 (m)',
      'Mực nước cạn là: Hc = 0,5 (m)',
      'Mức nước tràn của bể: H = 3,7 (m)',
      'Tích luỹ ngày DV: 0 (m3)'
    ],
    x: 796,
    y: 472
  },
  {
    id: 6,
    title: 'DV04-D225 T.Hồng - Đ.Chồng',
    timestamp: '11:03',
    lines: [
      'P: 4.76 (bar); Q: 47 (m3/h)',
      'P min: 2,0 (bar); P max: 4,8 (bar)'
    ],
    x: 1201,
    y: 411
  },
  {
    id: 7,
    title: 'DV03-D225 Q.Hanh-T.Hồng',
    timestamp: '11:03',
    lines: [
      'P: 3.71 (bar); Q: 95 (m3/h)',
      'P min: 2,0 (bar); P max: 6,4 (bar)'
    ],
    x: 1105,
    y: 524
  },
  {
    id: 8,
    title: 'DV01-01-D160 Q.Hanh-Đ.Bụt',
    timestamp: '11:03',
    lines: [
      'P: 2.72 (bar); Q: 25 (m3/h)',
      'P min: 2,0 (bar); P max: 5,2 (bar)'
    ],
    x: 550,
    y: 575
  },
  {
    id: 9,
    title: 'DV02-D600 Cấp Cẩm Phả',
    timestamp: '11:03',
    lines: [
      'P: 5.7 (bar); Q: 1105 (m3/h)',
      'Tích luỹ ngày CP: 10651 (m3)',
      'P min: 4.8 (bar); P max: 6.5 (bar)'
    ],
    x: 1115,
    y: 610
  },
  {
    id: 10,
    title: 'DV01-D600 Cấp Hạ Long',
    timestamp: '11:03',
    lines: [
      'P: 6.31 (bar); Q: 777 (m3/h)',
      'Q tổng HG: 1510 (m3/h)',
      'Tích luỹ ngày HG: 15566 (m3)',
      'P min: 5,6 (bar); P max: 8 (bar)'
    ],
    x: 549,
    y: 674
  },
  {
    id: 11,
    title: 'P nước thô Cao Vân tại trạm Van GA',
    timestamp: '18:02',
    lines: ['P = 3.06 (bar)'],
    x: 556,
    y: 282
  },
  {
    id: 12,
    title: 'Tuyến DV00-02-D160 Osen',
    timestamp: '11:09',
    lines: ['P = 2.77 (bar); Q = 27 (m3/h)'],
    x: 788,
    y: 807
  },
  {
    id: 13,
    title: 'D630 HDPE cấp Hạ Long',
    timestamp: '11:10',
    lines: [
      'P: 5.9 (bar); Q = 711 (m3/h)',
      'P min: 5.0 (bar); P max: 7.5 (bar)'
    ],
    x: 878,
    y: 718
  },
  {
    id: 14,
    title: '',
    timestamp: '11:10',
    lines: ['Q tổng: 2734.515 (m3/h)', 'Tích luỹ ngày :0 (m3)'],
    x: 620,
    y: 190
  },
  {
    id: 15,
    title: 'ĐO MỨC BỂ 4000M3, 3000M3',
    timestamp: '11:30',
    lines: [
      'Mực nước bể 4000 : H = 3.28 (m)',
      'Mực nước bể 3000 : H = 3.06 (m)',
      '(Bể 3000: Hmin 2,5 m; Hmax: 3,35 m)',
      '(Bể 4000: Hmin 2,7 m; Hmax: 3,62 m)'
    ],
    x: 890,
    y: 221
  }
];
// Tạo custom div icon
const customDivIcon = (number: number) =>
  L.divIcon({
    html: `<div class="rounded-full w-8 h-8 bg-blue-500 text-white flex items-center justify-center font-bold">${number}</div>`,
    className: '', // bỏ class mặc định
    iconSize: [32, 32],
    iconAnchor: [16, 16] // tâm icon
  });

export default function LayoutEditorMap() {
  const [cards, setCards] = useState<CardInfo[]>(initialCards);

  return (
    <div className='relative h-screen w-screen'>
      {/* Map nền */}
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

        {/* Hiển thị các station */}
        {stations.map((station) => (
          <Marker
            key={station.id}
            position={station.position}
            icon={customDivIcon(station.id)}
          >
            <Tooltip
              direction='top'
              offset={station.offset}
              permanent
              className='p-0'
            ></Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Cards */}
      {cards.map((card, idx) => (
        <Rnd
          key={card.id}
          default={{
            x: card.x,
            y: card.y,
            width: 220,
            height: 'auto'
          }}
          bounds='parent'
          onDragStop={(e, d) => {
            setCards((prev) => {
              const newCards = [...prev];
              newCards[idx].x = d.x;
              newCards[idx].y = d.y;
              return newCards;
            });
          }}
          style={{ zIndex: 1000 }}
        >
          <div className='rounded border border-blue-500 bg-white p-2 text-xs shadow-md'>
            <div className='mb-1 font-bold text-blue-800'>
              {card.title} [{card.timestamp}]
            </div>
            {card.lines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </Rnd>
      ))}

      <button
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 2000,
          backgroundColor: '#2563EB',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '4px'
        }}
        onClick={() => {
          const cardData = cards.map((c) => ({
            id: c.id,
            title: c.title,
            timestamp: c.timestamp,
            lines: c.lines,
            x: c.x,
            y: c.y
          }));
          console.log(JSON.stringify(cardData, null, 2));
          navigator.clipboard
            .writeText(JSON.stringify(cardData, null, 2))
            .then(() => alert('Đã copy toàn bộ thông tin card vào clipboard!'))
            .catch(() => alert('Copy thất bại, xem console'));
        }}
      >
        Xuất thông tin card
      </button>
    </div>
  );
}
