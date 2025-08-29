'use client';

import { useState, useEffect } from 'react';
import MapCenterPanel from '../../../components/baichay/MapCenterPanel';
import { StationInfo } from '@/types/StationTypes';
import { stationsBC } from '@/data/station/station_bc';

export default function HTMangBCPage() {
  const [monitoringData, setMonitoringData] = useState<StationInfo[]>([]);

  // Nạp dữ liệu tĩnh trước
  useEffect(() => {
    setMonitoringData(stationsBC);
  }, []);

  // Giả lập gọi API realtime
  useEffect(() => {
    async function fetchRealtime() {
      try {
        const res = await fetch('/api/monitoring'); // TODO: thay URL thật
        const realtimeData: Partial<StationInfo>[] = await res.json();

        setMonitoringData((prev) =>
          prev.map((station) => {
            const update = realtimeData.find(
              (r) => r.iddiemdo === station.iddiemdo
            );
            return update ? { ...station, ...update } : station;
          })
        );
      } catch (err) {
        console.error('Lỗi khi gọi API:', err);
      }
    }

    fetchRealtime();
    const interval = setInterval(fetchRealtime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen w-screen overflow-hidden bg-gray-100'>
      <div className='flex h-full flex-col'>
        {/* HEADER */}
        <div className='bg-blue-500 text-center text-white'>
          <div className='h-6 text-base leading-6 font-bold'>
            CÔNG TY CỔ PHẦN NƯỚC SẠCH QUẢNG NINH
          </div>
          <div className='flex h-8 items-center justify-center space-x-4 text-sm font-bold'>
            <span>
              HỆ THỐNG QUẢN LÝ LƯU LƯỢNG VÀ ÁP LỰC TỪ XA MẠNG LƯỚI CẤP NƯỚC
            </span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className='flex flex-1'>
          {/* Left Panel */}
          <div className='h-full w-[21%] min-w-[180px] space-y-3 overflow-y-auto bg-cyan-50 p-2'>
            {monitoringData.slice(0, 15).map((item) => (
              <div
                key={item.id}
                className='rounded-lg border border-blue-400 bg-white text-[11px] shadow-sm'
              >
                <div className='grid grid-cols-[1fr_auto_auto] items-center divide-x divide-blue-400 border-b border-blue-400 px-2 py-1'>
                  <span className='truncate font-bold'>{item.title}</span>
                  <span className='w-14 px-2 text-center font-bold'>
                    {item.time ?? '--:--'}
                  </span>
                  <span className='w-10 px-2 text-center font-bold text-blue-600'>
                    {item.iddiemdo}
                  </span>
                </div>
                <div className='border-t border-gray-100 px-2 py-1 text-left leading-snug'>
                  <span className='font-medium'>Tức thời:</span>
                  {item.waterLevel && <span> H bể: {item.waterLevel} (m)</span>}
                  {item.pressure && <span> P: {item.pressure} (bar)</span>}
                  {item.flow && <span> ; Q: {item.flow} (m³/h)</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Center Panel */}
          <div className='h-full flex-1 bg-cyan-50 text-center'>
            <MapCenterPanel />
          </div>

          {/* Right Panel */}
          <div className='h-full w-[21%] min-w-[180px] space-y-3 overflow-y-auto bg-cyan-50 p-2'>
            {monitoringData.slice(15).map((item) => (
              <div
                key={item.id}
                className='rounded-lg border border-blue-500 bg-white text-[11px] shadow-sm'
              >
                <div className='grid grid-cols-[1fr_auto_auto] items-center border-b border-gray-200 px-2 py-1'>
                  <span className='truncate font-bold'>{item.title}</span>
                  <span className='w-14 px-2 text-center font-bold'>
                    {item.time ?? '--:--'}
                  </span>
                  <span className='w-10 px-2 text-center font-bold text-blue-600'>
                    {item.iddiemdo}
                  </span>
                </div>
                <div className='border-t border-gray-100 px-2 py-1 text-left leading-snug'>
                  <span className='font-semibold'>Tức thời:</span>
                  {item.waterLevel && <span> H bể: {item.waterLevel} (m)</span>}
                  {item.pressure && <span> P: {item.pressure} (bar)</span>}
                  {item.flow && <span> ; Q: {item.flow} (m³/h)</span>}
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
