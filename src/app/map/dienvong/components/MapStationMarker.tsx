'use client';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

export default function MapStationMarker({
  station
}: {
  station: { id: number; position: [number, number] };
}) {
  const icon = L.divIcon({
    html: `<div class="rounded-full w-6 h-6 bg-blue-500 text-white flex items-center justify-center font-bold">${station.id}</div>`,
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  return <Marker position={station.position} icon={icon} />;
}
