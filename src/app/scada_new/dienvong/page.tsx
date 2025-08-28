'use client';

import MapHeader from '../../../components/dienvong/MapHeader';
import MapDienVongCenterPanel from '../../../components/dienvong/MapDienVongCenterPanel';

export default function WaterMonitoringDashboard() {
  return (
    <div className='flex h-screen w-screen flex-col bg-gray-50'>
      <MapDienVongCenterPanel />
      <MapHeader />
    </div>
  );
}
