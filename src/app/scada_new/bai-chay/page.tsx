'use client';

import { useState, useEffect } from 'react';
import { monitoringData as mockData, MonitoringPoint } from './mockData';
import MapCenterPanel from './MapCenterPanel';

export default function HTMangBCPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [monitoringData, setMonitoringData] = useState<MonitoringPoint[]>([]);
  const [scale, setScale] = useState(1);

  // Xử lý thời gian
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  // Nạp dữ liệu mock
  useEffect(() => {
    setMonitoringData(mockData); // <-- nạp dữ liệu mock chuẩn
  }, []);

  // Scale khi thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1920; // thiết kế gốc
      const newScale = window.innerWidth / baseWidth;
      setScale(newScale > 1 ? 1 : newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='h-screen w-screen overflow-auto bg-gray-100'>
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: '1920px' // giữ kích thước gốc
        }}
      >
        {/* HEADER */}
        {/* HEADER */}
        <div className='bg-blue-500 text-center text-white'>
          <div className='h-6 text-base leading-6 font-bold'>
            CÔNG TY CỔ PHẦN NƯỚC SẠCH QUẢNG NINH
          </div>
          <div className='flex h-8 items-center justify-center space-x-4 text-sm font-bold'>
            <span>
              HỆ THỐNG QUẢN LÝ LƯU LƯỢNG VÀ ÁP LỰC TỪ XA MẠNG LƯỚI CẤP NƯỚC
            </span>
            <span className='rounded bg-white/10 px-2 text-white'>
              {currentTime}
            </span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className='flex h-[calc(100vh-32px)]'>
          {/* Left Panel */}
          <div className='h-full w-[21%] space-y-3 overflow-y-auto bg-cyan-50 p-2'>
            {monitoringData.slice(0, 15).map((item) => (
              <div
                key={item.id}
                className='rounded-lg border border-blue-400 bg-white text-[11px] shadow-sm'
              >
                <div className='grid grid-cols-[1fr_auto_auto] items-center divide-x divide-blue-400 border-b border-blue-400 px-2 py-1'>
                  <span className='truncate px-2 text-left font-bold'>
                    {item.name}
                  </span>
                  <span className='w-14 px-2 text-center font-bold'>
                    {item.time}
                  </span>
                  <span className='w-8 px-2 text-center font-bold text-red-600'>
                    {item.status}
                  </span>
                </div>
                <div className='border-t border-gray-100 px-2 py-1 text-left leading-snug'>
                  <span className='font-medium'>Tức thời:</span>
                  {item.level && <span> H bể: {item.level} (m)</span>}
                  {item.pressure && <span> P: {item.pressure} (bar)</span>}
                  {item.flow && <span> ; Q: {item.flow} (m³/h)</span>}
                  {item.note && (
                    <div className='mt-1 text-gray-500 italic'>{item.note}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Center Panel */}
          <div className='w-[58%] bg-cyan-50 text-center'>
            {/* <div
              className='relative mx-auto h-full bg-cover bg-center'
              style={{
                backgroundImage:
                  'url(/placeholder.svg?height=579&width=540&query=water+distribution+network+map)'
              }}
            /> */}

            {/* <div className='relative mx-auto h-full w-full overflow-hidden'>
              <img
                src='/baichay.jpg'
                alt='Sơ đồ mạng cấp nước'
                className='h-full w-full object-cover'
              />
            </div> */}

            <MapCenterPanel />
          </div>

          {/* Right Panel */}
          <div className='h-full w-[21%] space-y-3 overflow-y-auto bg-cyan-50 p-2'>
            {monitoringData.slice(15).map((item) => (
              <div
                key={item.id}
                className='rounded-lg border border-blue-500 bg-white text-[11px] shadow-sm'
              >
                <div className='grid grid-cols-[1fr_auto_auto] items-center border-b border-gray-200 px-2 py-1'>
                  <span className='truncate font-bold'>{item.name}</span>
                  <span className='mx-2 w-12 text-center font-bold'>
                    {item.time}
                  </span>
                  <span className='w-8 text-center font-bold text-red-600'>
                    {item.status}
                  </span>
                </div>
                <div className='border-t border-gray-100 px-2 py-1 text-left leading-snug'>
                  <span className='font-semibold'>Tức thời:</span>
                  {item.level && <span> H bể: {item.level} (m)</span>}
                  {item.pressure && <span> P: {item.pressure} (bar)</span>}
                  {item.flow && <span> ; Q: {item.flow} (m³/h)</span>}
                  {item.note && <span> ; Q: {item.note} (m³/h)</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className='h-2 bg-blue-500'></div>
      </div>
    </div>
  );
}
