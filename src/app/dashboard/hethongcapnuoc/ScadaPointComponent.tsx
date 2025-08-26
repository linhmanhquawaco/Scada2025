// import React, { useState } from "react";
// import { Marker, Popup, Tooltip } from "react-leaflet";
// import { SensorData } from "../../../types/SensorDataTypes";
// import ChartModal from "../../common/PointChartModal";
// import { mockChartData } from "../../../data/mockChartData";
// import { mockHistoryData } from "../../../data/mockHistoryData";
// import PointHistoryModal from "../../common/PointHistoryModal";
// import PointTooltipComponent from "../../common/PointTooltipComponent";
// import CustomPointIcon from "../../icons/CustomPointIcon";

// interface ScadaPointComponentProps {
//   points: SensorData[];
//   zoomLevel: number;
// }

// const ScadaPointComponent: React.FC<ScadaPointComponentProps> = ({
//   points,
//   zoomLevel,
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
//   const [selectedData, setSelectedData] = useState<any[]>([]);
//   const [historyData, setHistoryData] = useState<any[]>([]);

//   const handleDetailClick = (data: any[]) => {
//     console.log("Dữ liệu truyền vào modal:", data); // Thêm câu lệnh này
//     setSelectedData(data);
//     setIsModalOpen(true);
//   };

//   const handleHistoryClick = () => {
//     setHistoryData(mockHistoryData); // Sử dụng mock data ở đây
//     setIsHistoryModalOpen(true);
//   };

//   return (
//     <>
//       {/* <MarkerClusterGroup> */}
//       {points.map((point, index) => {
//         if (point.latitude && point.longitude) {
//           // Show points based on their level and zoom level
//           if (
//             (zoomLevel >= 10 && zoomLevel < 12 && point.level === 1) ||
//             (zoomLevel >= 12 &&
//               zoomLevel < 14 &&
//               (point.level === 1 || point.level === 2)) ||
//             (zoomLevel >= 14 &&
//               (point.level === 1 || point.level === 2 || point.level === 3))
//           )
//             return (
//               <Marker
//                 key={index}
//                 position={[point.latitude, point.longitude]}
//                 icon={CustomPointIcon(point.hienthimausac, point.makv)} // Sử dụng CustomIcon
//               >
//                 {/* <Tooltip permanent className="px-0 py-0">
//                   <HienThiPointRutGonComponent
//                     timestamp={point.gio}
//                     pointName={point.tenviettat}
//                     pressure={point.apluc.toString()}
//                   />
//                 </Tooltip> */}
//                 <Tooltip sticky>
//                   <PointTooltipComponent
//                     thoigian={point.thoigian}
//                     gio={point.gio}
//                     ten={point.tenviettat}
//                     apluc={point.apluc ? point.apluc.toString() : "N/A"}
//                     makv={point.makv}
//                     luuluong={
//                       point.luuluong ? point.luuluong.toString() : "N/A"
//                     }
//                     mucbe={point.mucbe ? point.mucbe.toString() : "N/A"}
//                   />
//                 </Tooltip>
//                 <Popup>
//                   <div className="flex flex-col">
//                     <div className="flex items-center text-blue-600">
//                       <span className="font-bold">{point.makv}</span>
//                       <span className="font-bold ml-2">{point.thoigian}</span>
//                       <span className="font-bold ml-2">{point.gio}</span>
//                     </div>
//                     <hr className="my-2" />
//                     <span className="font-bold text-blue-600">{point.ten}</span>
//                     <hr className="my-2" />
//                     <div className="text-sm text-gray-600">
//                       <span className="text-red-500">Áp lực: </span>
//                       <span className="font-bold">{point.apluc}</span>
//                       <span className="ml-4 text-red-500">Lưu lượng: </span>
//                       <span className="font-bold">{point.luuluong}</span>
//                       <span className="ml-4 text-red-500">Mức bể: </span>
//                       <span className="font-bold">{point.mucbe}</span>
//                     </div>
//                     <hr className="my-2" />
//                     <button
//                       className="mt-2 py-1 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-600"
//                       onClick={() => handleDetailClick(mockChartData)} // Sử dụng mock data ở đây
//                     >
//                       Biểu đồ
//                     </button>
//                     <button
//                       className="mt-2 py-1 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
//                       onClick={handleHistoryClick}
//                     >
//                       Lịch sử
//                     </button>
//                   </div>
//                 </Popup>
//               </Marker>
//             );
//         } else {
//           console.warn(
//             `Point ${index} is missing location, latitude, or longitude:`,
//             point
//           );
//         }
//         return null;
//       })}
//       <ChartModal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         data={selectedData}
//       />
//       <PointHistoryModal
//         isOpen={isHistoryModalOpen}
//         onRequestClose={() => setIsHistoryModalOpen(false)}
//         historyData={historyData}
//       />
//     </>
//   );
// };

// export default ScadaPointComponent;
