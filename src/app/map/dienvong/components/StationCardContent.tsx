'use client';
import { FC } from 'react';

interface StationCardContentProps {
  title: string;
  waterLevel?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
}

const StationCardContent: FC<StationCardContentProps> = ({
  title,
  waterLevel,
  alertLevel,
  overflowLevel,
  dangerLevel
}) => {
  return (
    <div className='flex flex-col gap-0.5 text-xs leading-snug'>
      <div className='font-bold text-blue-800'>{title}</div>
      {waterLevel !== undefined && (
        <div>
          Mực nước hiện tại: H ={' '}
          <span className='bg-red-600 px-1 text-white'>{waterLevel}</span> (m)
        </div>
      )}
      {alertLevel !== undefined && (
        <div>Mực nước cảnh báo: H = {alertLevel} (m)</div>
      )}
      {overflowLevel !== undefined && (
        <div>Mực nước tràn: H = {overflowLevel} (m)</div>
      )}
      {dangerLevel !== undefined && (
        <div>Mực nước nguy hiểm: H = {dangerLevel} (m)</div>
      )}
    </div>
  );
};

export default StationCardContent;

// <Card
//     className='absolute w-64 border-blue-500 bg-blue-100 p-2 text-xs leading-tight'
//     style={{ left: '50%', top: '8%' }}
//   >
//     {/* Title */}
//     <div className='mb-0.5 leading-snug font-bold text-blue-800'>
//       ĐO MỰC NƯỚC HỒ CAO VAN [17:21]
//     </div>

//     {/* Content */}
//     <div className='flex flex-col gap-1 text-xs leading-snug'>
//       <div>
//         Mực nước hiện tại: H ={' '}
//         <span className='bg-red-600 px-1 text-white'>35.50</span> (m)
//       </div>
//       <div>Mực nước cảnh báo: H = 24.5 (m)</div>
//       <div>Mực nước tràn: H = 35 (m)</div>
//       <div>Mực nước nguy hiểm: H = 38.8 (m)</div>
//     </div>
//   </Card>
