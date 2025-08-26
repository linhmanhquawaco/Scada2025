'use client';
import { Marker, Tooltip } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import StationCardContent from './StationCardContent';

interface MapMarkerCardProps {
  position: LatLngExpression;
  title: string;
  waterLevel?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
}

export default function MapMarkerCard({
  position,
  title,
  waterLevel,
  alertLevel,
  overflowLevel,
  dangerLevel
}: MapMarkerCardProps) {
  return (
    <Marker position={position}>
      <Tooltip direction='top' offset={[0, -10]} permanent className='p-0'>
        <div className='relative'>
          {/* Card */}
          <div className='w-40 rounded border border-blue-500 bg-white p-2 text-xs shadow-md'>
            <StationCardContent
              title={title}
              waterLevel={waterLevel}
              alertLevel={alertLevel}
              overflowLevel={overflowLevel}
              dangerLevel={dangerLevel}
            />
          </div>
          {/* Arrow */}
          <div
            className='absolute -bottom-2 left-1/2 h-0 w-0 border-t-4 border-r-4 border-l-4 border-t-blue-500 border-r-transparent border-l-transparent'
            style={{ transform: 'translateX(-50%)' }}
          />
        </div>
      </Tooltip>
    </Marker>
  );
}
