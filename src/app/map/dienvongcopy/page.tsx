'use client';

import MapHeader from './components/MapHeader';
import MapDienVongCenterPanel from './components/MapDienVongCenterPanel';

export default function WaterMonitoringDashboard() {
  return (
    <div className='h-screen w-full overflow-x-auto bg-gray-50'>
      {/* Wrapper scale toàn bộ cụm Map + Header + Overlay */}
      <div className='/* độ rộng tối thiểu để hiển thị đầy đủ map */ xs:scale-50 /* < 640px */ /* 640px - 767px */ /* 768px - 1023px */ /* 1024px - 1279px */ /* 1280px - 1365px */ /* >= 1366px */ relative h-screen min-w-[1366px] origin-top-left transform sm:scale-65 md:scale-75 lg:scale-90 xl:scale-95 2xl:scale-100'>
        <MapDienVongCenterPanel />
      </div>
      {/* Header (nằm trong wrapper để scale theo) */}
      <MapHeader />
    </div>
  );
}
