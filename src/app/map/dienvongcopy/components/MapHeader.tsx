interface MapHeaderProps {
  scale?: number;
}

export default function MapHeader({ scale = 1 }: MapHeaderProps) {
  return (
    <div
      className='absolute top-0 left-0 z-20 rounded-lg bg-white p-2 shadow-md'
      style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
    >
      <div className='flex items-center gap-4'>
        <div className='h-12 w-12'>
          <img
            src='/logo.webp'
            alt='Logo'
            className='h-full w-full object-contain'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xs font-bold whitespace-nowrap text-blue-800 uppercase md:text-sm'>
            HỆ THỐNG GIÁM SÁT ÁP LỰC, LƯU LƯỢNG
          </h1>
          <h2 className='text-xs font-bold whitespace-nowrap text-blue-800 uppercase md:text-sm'>
            MẠNG LƯỚI CẤP NƯỚC NMN DIỄN VỌNG
          </h2>
        </div>
      </div>
    </div>
  );
}
