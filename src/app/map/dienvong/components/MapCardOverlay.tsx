'use client';
import { useEffect, useState } from 'react';
import { useMap, Marker } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import { CardInfo } from '../cards';

export default function MapCardOverlay({ card }: { card: CardInfo }) {
  const map = useMap();
  const [latlng, setLatlng] = useState<LatLngExpression>();

  useEffect(() => {
    if (!map) return;
    const point = L.point(card.x, card.y);
    const latLng = map.containerPointToLatLng(point);
    setLatlng([latLng.lat, latLng.lng]);
  }, [map, card]);

  if (!latlng) return null;

  return (
    <Marker
      position={latlng}
      icon={L.divIcon({
        html: `
      <div class="bg-white p-1.5 rounded-lg shadow-md w-72">
        <div class="flex items-center justify-between">
          <div class="font-bold text-blue-800 text-[10px]">${card.title}</div>
          <div class="text-gray-500 text-[9px] ml-1">${card.timestamp}</div>
        </div>
        <ul class="text-[11px] mt-0.5 space-y-0.5">
          ${card.lines.map((line) => `<li>${line}</li>`).join('')}
        </ul>
      </div>
    `,
        className: '',
        iconSize: [220, 120],
        iconAnchor: [110, 60]
      })}
    />
  );
}
