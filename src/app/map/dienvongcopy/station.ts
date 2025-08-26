// src/app/map/dienvongcopy/station.ts

export interface StationInfo {
  id: number;
  title: string;
  position: [number, number];
  offset: [number, number];
  waterLevel?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
  flow?: number;
  pressure?: number;
}
export const stations: StationInfo[] = [
  {
    id: 1,
    title: 'ĐO MỨC NƯỚC HỒ CAO VÂN',
    position: [21.05406489666362, 107.22862243652345],
    offset: [366, -237],
    waterLevel: 35.61,
    alertLevel: 24.5,
    overflowLevel: 35,
    dangerLevel: 38.8
  },
  {
    id: 2,
    title: 'Tuyến D800 thép, D630 HDPE trạm 2',
    position: [21.01448984890617, 107.14519500732423],
    offset: [-162, 35],
    pressure: 6.51,
    flow: 6.76
  },
  {
    id: 3,
    title: 'Dương Huy - Mông Dương',
    position: [21.056467900982707, 107.27119445800783],
    offset: [722, -238],
    pressure: 5.61,
    flow: 294.23
  },
  {
    id: 4,
    title: 'Dương Huy cấp nội bộ',
    position: [21.039646056144857, 107.27153778076173],
    offset: [727, -127],
    pressure: 3.11,
    flow: 18
  },
  {
    id: 5,
    title: 'ĐO MỨC BỂ 3000M3',
    position: [20.99878509673332, 107.19497680664064],
    offset: [84, 108],
    waterLevel: 2.4,
    alertLevel: 0.5,
    overflowLevel: 3.7
  },
  {
    id: 6,
    title: 'DV04-D225 T.Hồng - Đ.Chồng',
    position: [21.020258526330064, 107.26381301879884],
    offset: [605, 81],
    pressure: 4.76,
    flow: 47
  },
  {
    id: 7,
    title: 'DV03-D225 Q.Hanh-T.Hồng',
    position: [21.007599191785754, 107.2420120239258],
    offset: [518, 213],
    pressure: 3.71,
    flow: 95
  },
  {
    id: 8,
    title: 'DV01-01-D160 Q.Hanh-Đ.Bụt',
    position: [20.995099048089518, 107.15463638305665],
    offset: [-236, 207],
    pressure: 2.72,
    flow: 25
  },
  {
    id: 9,
    title: 'DV02-D600 Cấp Cẩm Phả',
    position: [20.995099048089518, 107.23445892333986],
    offset: [514, 290],
    pressure: 5.7,
    flow: 1105
  },
  {
    id: 10,
    title: 'DV01-D600 Cấp Hạ Long',
    position: [20.965927976622375, 107.189998626709],
    offset: [-140, 307],
    pressure: 6.31,
    flow: 777
  },
  {
    id: 11,
    title: 'P nước thô Cao Vân tại trạm Van GA',
    position: [21.040927787394494, 107.16390609741212],
    offset: [-168, -42],
    pressure: 3.06
  },
  {
    id: 12,
    title: 'Tuyến DV00-02-D160 Osen',
    position: [20.9822773006213, 107.20767974853517],
    offset: [90, 449],
    pressure: 2.77,
    flow: 27
  },
  {
    id: 13,
    title: 'D630 HDPE cấp Hạ Long',
    position: [20.97971281905171, 107.16562271118165],
    offset: [174, 367],
    pressure: 5.9,
    flow: 711
  },
  {
    id: 14,
    title: 'Tổng Q',
    position: [21.057268893800302, 107.18828201293947],
    offset: [-76, -131],
    flow: 2734.515
  },
  {
    id: 15,
    title: 'ĐO MỨC BỂ 4000M3, 3000M3',
    position: [21.023463250689836, 107.20184326171875],
    offset: [201, -90],
    waterLevel: 3.28,
    alertLevel: 2.5,
    overflowLevel: 3.62
  }
];
