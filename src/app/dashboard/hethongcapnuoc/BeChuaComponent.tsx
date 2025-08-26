import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';

// Import custom icon
import bechuaData from '../../../data/datanuoc/bechua.json';
import { BeChuaData, Feature } from '../../../types/BeChuaTypes';

// Tạo đối tượng L.Icon cho icon tùy chỉnh
const bechuaIcon = new L.Icon({
  iconUrl: '/bechua.png',
  iconSize: [24, 18], // Kích thước của icon
  iconAnchor: [16, 32], // Điểm neo của icon (nơi icon sẽ được gắn vào tọa độ)
  popupAnchor: [0, -32] // Điểm neo của popup liên quan đến icon
});

const BeChuaComponent: React.FC = () => {
  const [data, setData] = useState<BeChuaData | null>(null); // Dữ liệu từ file nhamaynuoc.json

  useEffect(() => {
    // Đặt dữ liệu trực tiếp từ tệp import
    setData(bechuaData);
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
            key={`bechua-${index}`}
            position={convertCoordinatesToLatLng([
              feature.geometry.x,
              feature.geometry.y
            ])}
            icon={bechuaIcon}
          >
            <Popup>
              <div>
                <h2 className='font-semibold text-blue-700'>
                  {feature.attributes.TENDATALOGER}
                </h2>
                <h2>
                  <span>Thể tích: </span>{' '}
                  <span className='font-semibold'>
                    {feature.attributes.DUNG_TICH}
                  </span>
                </h2>
              </div>
            </Popup>
          </Marker>
        ))}
    </>
  );
};

export default BeChuaComponent;
