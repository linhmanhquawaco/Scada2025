import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import {
  Feature,
  NhaMayNuocData
} from '../../../StationInfoType.ts/NhaMayNuocTypes';

// Import custom icon
import nhamaynuocData from '../../../data/datanuoc/nhamaynuoc.json';

// Tạo đối tượng L.Icon cho icon tùy chỉnh
const nhamaynuocIcon = new L.Icon({
  iconUrl: '/nhamaynuoc.png',
  iconSize: [34, 34], // Kích thước của icon
  iconAnchor: [16, 32], // Điểm neo của icon (nơi icon sẽ được gắn vào tọa độ)
  popupAnchor: [0, -32] // Điểm neo của popup liên quan đến icon
});

const NhaMayComponent: React.FC = () => {
  const [data, setData] = useState<NhaMayNuocData | null>(null); // Dữ liệu từ file nhamaynuoc.json

  useEffect(() => {
    setData(nhamaynuocData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Chuyển đổi từ [longitude, latitude] sang [latitude, longitude]
  const convertCoordinatesToLatLng = (
    coordinates: [number, number]
  ): LatLngExpression => {
    return [coordinates[1], coordinates[0]];
  };

  return (
    <>
      {/* Render Marker từ dataNhaMayNuoc */}
      {data &&
        data.features.map((feature: Feature, index: number) => (
          <Marker
            key={`nhamaynuoc-${index}`}
            position={convertCoordinatesToLatLng([
              feature.geometry.x,
              feature.geometry.y
            ])}
            icon={nhamaynuocIcon}
          >
            <Popup>
              <div>
                <h2>{feature.attributes.TEN}</h2>
                {/* Thêm các thông tin khác của NhaMayNuoc tại đây */}
              </div>
            </Popup>
          </Marker>
        ))}
    </>
  );
};

export default NhaMayComponent;
