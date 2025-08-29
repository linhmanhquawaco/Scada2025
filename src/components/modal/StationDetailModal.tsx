'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { StationInfo } from '../../data/station/station_dv';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';
import {
  mockHistoryData,
  SensorHistoryData
} from '@/constants/SensorDataTypes';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface Props {
  station: StationInfo;
  onClose: () => void;
}

type ViewMode = 'table' | 'chart' | 'both';

export default function StationDetailModal({ station, onClose }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [filteredData, setFilteredData] = useState<SensorHistoryData[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('both'); // 👈 chế độ hiển thị

  // Ngày được chọn
  const formattedDate = useMemo(() => {
    return selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '';
  }, [selectedDate]);

  // Tạm dữ liệu mock
  const historyData = mockHistoryData;

  // Format giờ phút
  const formatTime = (dateTimeString: string | null) => {
    if (!dateTimeString) return 'N/A';
    return format(new Date(dateTimeString), 'HH:mm');
  };

  // Lọc dữ liệu theo ngày
  useEffect(() => {
    if (selectedDate) {
      const dateString = format(selectedDate, 'yyyy-MM-dd');
      const data = historyData.filter((item) => {
        const itemDate = item.Thoigian ? parseISO(item.Thoigian) : null;
        return itemDate ? format(itemDate, 'yyyy-MM-dd') === dateString : false;
      });
      setFilteredData(data);
    }
  }, [selectedDate, historyData]);

  return (
    // Overlay mờ đen
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/50'>
      {/* Box modal */}
      <div className='flex h-[90vh] w-[1000px] max-w-full flex-col overflow-hidden rounded-lg bg-white p-4 shadow-lg'>
        {/* Header */}
        <div className='mb-3 flex items-center justify-between border-b pb-2'>
          <h2 className='text-lg font-bold text-blue-600'>{station.title}</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-800'
          >
            ✕
          </button>
        </div>

        {/* Bộ chọn ngày + Toggle view */}
        <div className='mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat='yyyy-MM-dd'
            className='rounded border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
          />

          {/* Nút toggle */}
          <div className='flex gap-2'>
            <button
              onClick={() => setViewMode('table')}
              className={`rounded px-3 py-1 text-sm ${
                viewMode === 'table'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Chỉ bảng
            </button>
            <button
              onClick={() => setViewMode('chart')}
              className={`rounded px-3 py-1 text-sm ${
                viewMode === 'chart'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Chỉ biểu đồ
            </button>
            <button
              onClick={() => setViewMode('both')}
              className={`rounded px-3 py-1 text-sm ${
                viewMode === 'both'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Cả hai
            </button>
          </div>
        </div>

        {/* Nội dung dữ liệu */}
        <div className='flex-1 overflow-hidden'>
          {viewMode === 'table' && (
            <div className='h-full overflow-auto rounded border'>
              {filteredData.length > 0 ? (
                <table className='w-full border-collapse text-sm'>
                  <thead className='sticky top-0 bg-blue-600 text-white'>
                    <tr>
                      <th className='border p-2'>Thời gian</th>
                      <th className='border p-2'>Áp lực</th>
                      <th className='border p-2'>Lưu lượng</th>
                      <th className='border p-2'>Mức bể</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={index} className='hover:bg-gray-50'>
                        <td className='border p-2 text-center'>
                          {formatTime(item.Thoigian)}
                        </td>
                        <td className='border p-2 text-center'>
                          {item.Apluc ?? ''}
                        </td>
                        <td className='border p-2 text-center'>
                          {item.LuuLuong ?? ''}
                        </td>
                        <td className='border p-2 text-center'>
                          {item.MucNuoc ?? ''}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className='mt-4 text-center text-gray-600'>
                  Không có dữ liệu cho ngày này.
                </p>
              )}
            </div>
          )}

          {viewMode === 'chart' && (
            <div className='h-full rounded border p-2'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={filteredData}>
                  <CartesianGrid stroke='#ccc' />
                  <XAxis
                    dataKey='Thoigian'
                    tickFormatter={(t) => format(parseISO(t), 'HH:mm')}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type='monotone'
                    dataKey='Apluc'
                    stroke='#1E3A8A'
                    name='Áp lực (bar)'
                  />
                  <Line
                    type='monotone'
                    dataKey='LuuLuong'
                    stroke='#059669'
                    name='Lưu lượng (m³/h)'
                  />
                  <Line
                    type='monotone'
                    dataKey='MucNuoc'
                    stroke='#DC2626'
                    name='Mức nước (m)'
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {viewMode === 'both' && (
            <div className='flex h-full flex-col gap-4 md:flex-row'>
              {/* Bảng fix nhỏ */}
              <div className='order-1 w-full overflow-auto rounded border md:order-1 md:w-[350px]'>
                {filteredData.length > 0 ? (
                  <table className='w-full border-collapse text-sm'>
                    <thead className='sticky top-0 bg-blue-600 text-white'>
                      <tr>
                        <th className='border p-2'>Thời gian</th>
                        <th className='border p-2'>Áp lực</th>
                        <th className='border p-2'>Lưu lượng</th>
                        <th className='border p-2'>Mức bể</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={index} className='hover:bg-gray-50'>
                          <td className='border p-2 text-center'>
                            {formatTime(item.Thoigian)}
                          </td>
                          <td className='border p-2 text-center'>
                            {item.Apluc ?? ''}
                          </td>
                          <td className='border p-2 text-center'>
                            {item.LuuLuong ?? ''}
                          </td>
                          <td className='border p-2 text-center'>
                            {item.MucNuoc ?? ''}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className='mt-4 text-center text-gray-600'>
                    Không có dữ liệu cho ngày này.
                  </p>
                )}
              </div>

              {/* Biểu đồ ưu tiên thấp hơn ở mobile */}
              <div className='order-2 flex-1 rounded border p-2 md:order-2'>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={filteredData}>
                    <CartesianGrid stroke='#ccc' />
                    <XAxis
                      dataKey='Thoigian'
                      tickFormatter={(t) => format(parseISO(t), 'HH:mm')}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type='monotone'
                      dataKey='Apluc'
                      stroke='#1E3A8A'
                      name='Áp lực (bar)'
                    />
                    <Line
                      type='monotone'
                      dataKey='LuuLuong'
                      stroke='#059669'
                      name='Lưu lượng (m³/h)'
                    />
                    <Line
                      type='monotone'
                      dataKey='MucNuoc'
                      stroke='#DC2626'
                      name='Mức nước (m)'
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
