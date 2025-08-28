import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import { BomTangApData, Feature } from '../../../types/BomTangApTypes';

// Import custom icon
import bomtangapData from '../../../data/datanuoc/bomtangap.json';

// Tạo đối tượng L.Icon cho icon tùy chỉnh
const bomtangapIcon = new L.Icon({
  iconUrl: '/bomtangap.png',
  iconSize: [28, 28], // Kích thước của icon
  iconAnchor: [16, 32], // Điểm neo của icon (nơi icon sẽ được gắn vào tọa độ)
  popupAnchor: [0, -32] // Điểm neo của popup liên quan đến icon
});

const BomTangApComponent: React.FC = () => {
  const [data, setData] = useState<BomTangApData | null>(null); // Dữ liệu từ file bomtangap.json

  useEffect(() => {
    // Đặt dữ liệu trực tiếp từ tệp import
    setData(bomtangapData);
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
      {/* Render Marker từ dataBomTa */}
      {data &&
        data.features.map((feature: Feature, index: number) => (
          <Marker
            key={`bomtangap-${index}`}
            position={convertCoordinatesToLatLng([
              feature.geometry.x,
              feature.geometry.y
            ])}
            icon={bomtangapIcon}
          >
            <Popup>
              <div>
                <h2 className='font-semibold text-green-500'>
                  {feature.attributes.TRAM_BOM}
                </h2>
                {/* <h2>
                  <span>CS danh nghĩa:</span>{' '}
                  <span className='font-semibold'>
                    {feature.attributes.CS_DANH_NGHIA}
                  </span>
                </h2>
                <h2>
                  <span>CS động cơ:</span>{' '}
                  <span className='font-semibold'>
                    {feature.attributes.CS_DONG_CO}
                  </span>
                </h2> */}
              </div>
            </Popup>
          </Marker>
        ))}
    </>
  );
};

export default BomTangApComponent;
