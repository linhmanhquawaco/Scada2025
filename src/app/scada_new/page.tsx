'use client';

import Link from 'next/link';

const areas = [
  {
    id: 'bai-chay',
    name: 'Bãi Cháy',
    top: '76.35%',
    left: '32.23%'
  },
  {
    id: 'hon-gai',
    name: 'Hòn Gai',
    top: '77.50%',
    left: '40.59%'
  },
  {
    id: 'mien-dong',
    name: 'Miền Đông',
    top: '41.69%',
    left: '58.93%'
  },
  {
    id: 'quang-yen',
    name: 'Quảng Yên',
    top: '81.21%',
    left: '24.87%'
  },
  {
    id: 'dong-trieu',
    name: 'Đông Triều',
    top: '64.07%',
    left: '10.98%'
  },
  {
    id: 'uong-bi',
    name: 'Uông Bí',
    top: '70.85%',
    left: '22.51%'
  },
  {
    id: 'cam-pha',
    name: 'Cẩm Phả',
    top: '71.49%',
    left: '53.30%'
  },
  {
    id: 'van-don',
    name: 'Vân Đồn',
    top: '60.23%',
    left: '62.66%'
  },
  {
    id: 'mong-cai',
    name: 'Móng Cái',
    top: '26.22%',
    left: '77.92%'
  },
  {
    id: 'dienvong',
    name: 'Diễn Vọng',
    top: '26.22%',
    left: '77.92%'
  }
];

export default function MapPage() {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-gray-100'>
      <div className='relative w-full max-w-[1101px]'>
        <img
          src='/map-background.jpg'
          alt='Bản đồ'
          className='block h-auto w-full object-contain'
        />
        {areas.map((area) => (
          <Link
            key={area.id}
            href={`/scada_new/${area.id}`}
            className='absolute rounded bg-blue-500 px-2 py-1 text-xs text-white'
            style={{
              top: area.top,
              left: area.left,
              transform: 'translate(-50%, -50%)'
            }}
            title={area.name}
          >
            {area.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
