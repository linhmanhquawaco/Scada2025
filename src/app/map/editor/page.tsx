'use client';

import { useState } from 'react';

const areas = [
  { id: 'bai-chay', name: 'Bãi Cháy' },
  { id: 'hon-gai', name: 'Hòn Gai' },
  { id: 'tuan-chau', name: 'Tuần Châu' },
  { id: 'quang-yen', name: 'Quảng Yên' },
  { id: 'dong-trieu', name: 'Đông Triều' },
  { id: 'uong-bi', name: 'Uông Bí' },
  { id: 'cam-pha', name: 'Cẩm Phả' },
  { id: 'van-don', name: 'Vân Đồn' },
  { id: 'co-to', name: 'Cô Tô' }
];

export default function MapEditor() {
  const [positions, setPositions] = useState<{
    [key: string]: { top: number; left: number };
  }>({});

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    const parentRect = (
      e.currentTarget.parentElement as HTMLDivElement
    ).getBoundingClientRect();
    const x = ((e.clientX - parentRect.left) / parentRect.width) * 100;
    const y = ((e.clientY - parentRect.top) / parentRect.height) * 100;

    setPositions((prev) => ({ ...prev, [id]: { top: y, left: x } }));
  };

  const handleCopyJSON = () => {
    const jsonData = areas.map((area) => {
      const pos = positions[area.id] || { top: 10, left: 10 };
      return {
        ...area,
        top: `${pos.top.toFixed(2)}%`,
        left: `${pos.left.toFixed(2)}%`
      };
    });
    navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));
    alert('Đã copy JSON tọa độ vào clipboard!');
  };

  return (
    <div className='flex flex-col items-center p-4'>
      <div className='relative w-full max-w-[1101px]'>
        <img
          src='/map-background.jpg'
          alt='Bản đồ'
          className='block h-auto w-full object-contain'
        />

        {areas.map((area) => {
          const pos = positions[area.id] || { top: 10, left: 10 };
          return (
            <div
              key={area.id}
              draggable
              onDragEnd={(e) => handleDragEnd(e, area.id)}
              className='absolute cursor-move rounded bg-blue-500 px-2 py-1 text-xs text-white select-none'
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                transform: 'translate(-50%, -50%)'
              }}
              title={area.name}
            >
              {area.name}
            </div>
          );
        })}
      </div>

      <button
        onClick={handleCopyJSON}
        className='mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600'
      >
        Copy JSON tọa độ
      </button>

      <pre className='mt-2 max-h-40 w-full max-w-[1101px] overflow-auto rounded bg-gray-100 p-2 text-xs'>
        {JSON.stringify(
          areas.map((area) => {
            const pos = positions[area.id] || { top: 10, left: 10 };
            return {
              ...area,
              top: `${pos.top.toFixed(2)}%`,
              left: `${pos.left.toFixed(2)}%`
            };
          }),
          null,
          2
        )}
      </pre>
    </div>
  );
}
