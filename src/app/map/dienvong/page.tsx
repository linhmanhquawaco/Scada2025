'use client';

import MapHeader from './components/MapHeader';
import MapDienVongCenterPanel from './components/MapDienVongCenterPanel';

export default function WaterMonitoringDashboard() {
  return (
    <div className='flex h-screen w-screen flex-col bg-gray-50'>
      {/* Header cố định trên */}
      <div className='shrink-0'>
        <MapHeader />
      </div>

      {/* Map chiếm phần còn lại */}
      <div className='flex-1 overflow-auto'>
        <MapDienVongCenterPanel />
      </div>
    </div>
  );
}
