// export default function MapHeader() {
//   return (
//     <div className='absolute top-4 left-4 z-20 w-auto max-w-2xl origin-top-left transform rounded-lg bg-white p-4 shadow-md sm:scale-75 md:scale-90 lg:scale-100'>
//       <div className='flex items-center gap-4'>
//         {/* Logo */}
//         <div className='h-18 w-18'>
//           <img
//             src='/logo.webp'
//             alt='QUAWACO Logo'
//             className='h-full w-full object-contain'
//           />
//         </div>
//         {/* Title */}
//         <div>
//           <h1 className='text-lg font-bold whitespace-nowrap text-blue-800 uppercase'>
//             HỆ THỐNG GIÁM SÁT ÁP LỰC, LƯU LƯỢNG
//           </h1>
//           <h2 className='text-lg font-bold whitespace-nowrap text-blue-800 uppercase'>
//             MẠNG LƯỚI CẤP NƯỚC NMN DIỄN VỌNG
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }
// components/MapHeader.tsx
interface MapHeaderProps {
  scale?: number;
}

export default function MapHeader({ scale = 1 }: MapHeaderProps) {
  return (
    <div
      className='absolute top-4 left-4 z-20 rounded-lg bg-white p-4 shadow-md'
      style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
    >
      <div className='flex items-center gap-2'>
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
