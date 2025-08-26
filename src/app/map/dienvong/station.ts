// src/app/map/dienvong/layout-editor/data.ts

export interface StationInfo {
  id: number;
  title: string;
  position: [number, number];
  offset: [number, number];
  waterLevel?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
}

export const stations: StationInfo[] = [
  {
    id: 1,
    title: 'HỒ CAO VÂN',
    position: [21.06468, 107.20831],
    offset: [80, -80],
    waterLevel: 35.5,
    alertLevel: 24.5,
    overflowLevel: 35,
    dangerLevel: 38.8
  },
  {
    id: 2,
    title: 'Q tổng [17:22]',
    position: [21.02458488794087, 107.19223022460939],
    offset: [80, -80],
    waterLevel: 2889.426
  },
  {
    id: 3,
    title: 'Điểm 3',
    position: [21.026667906159307, 107.1870803833008],
    offset: [-100, -80]
  },
  {
    id: 4,
    title: 'Điểm 4',
    position: [21.021219950870982, 107.18639373779298],
    offset: [80, -100]
  },
  {
    id: 5,
    title: 'Điểm 5',
    position: [21.003112081172876, 107.19514846801759],
    offset: [-100, -100]
  },
  {
    id: 6,
    title: 'Điểm 6',
    position: [20.99782352760084, 107.21523284912111],
    offset: [80, 60]
  },
  {
    id: 7,
    title: 'Điểm 7',
    position: [20.98388007924893, 107.19343185424805],
    offset: [-100, 60]
  },
  {
    id: 8,
    title: 'Điểm 8',
    position: [20.98948966901873, 107.19480514526369],
    offset: [80, 100]
  },
  {
    id: 9,
    title: 'Điểm 9',
    position: [21.00231079722247, 107.21162796020508],
    offset: [-100, 100]
  },
  {
    id: 10,
    title: 'Điểm 10',
    position: [21.008720948355194, 107.21986770629884],
    offset: [0, 120]
  },
  {
    id: 11,
    title: 'Điểm 11',
    position: [21.07152584446602, 107.27188110351564],
    offset: [80, -120]
  },
  {
    id: 12,
    title: 'Điểm 12',
    position: [20.985482840680387, 107.20029830932619],
    offset: [-80, -120]
  },
  {
    id: 13,
    title: 'Điểm 13',
    position: [21.024424654564555, 107.18004226684572],
    offset: [0, -150]
  }
];
