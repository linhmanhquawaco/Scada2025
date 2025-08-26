'use client';

import { Card } from '@/components/ui/card';
import MapHeader from './components/MapHeader';
import MapDienVongCenterPanel from './components/MapDienVongCenterPanel';

// export default function WaterMonitoringDashboard() {
//   return (
//     <div className='h-screen w-full overflow-x-auto bg-gray-50'>
//       {/* Wrapper để scale */}
//       <div className='xs:scale-50 // < 640px // 640px - 767px // 768px - 1023px // 1024px - 1279px // 1280px - 1365px // >= 1366px relative h-screen min-w-[1024px] origin-top-left transform sm:scale-65 md:scale-75 lg:scale-90 xl:scale-95 2xl:scale-100'>
//         {/* Map Background */}
//         <div className='absolute inset-0 z-0'>
//           <MapDienVongCenterPanel />
//         </div>

//         {/* Header (nằm trong wrapper để scale theo) */}
//         <MapHeader />

//         {/* TODO: Stations & Cards */}
//       </div>
//     </div>
//   );
// }

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
