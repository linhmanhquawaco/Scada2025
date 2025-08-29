// src/app/map/dienvongcopy/station.ts

import { StationInfo } from '@/types/StationTypes';

export const stationsDV: StationInfo[] = [
  {
    id: 1,
    iddiemdo: 'DV01',
    title: 'ĐO MỨC NƯỚC HỒ CAO VÂN',
    position: [21.05694849719061, 107.23360061645508],
    offset: [366, -237],
    waterLevel: 35.61,
    notes: [
      'Mực nước chết: Hc = 24,5 m',
      'Mực nước tràn: Ht = 35 m',
      'Mực nước nguy hiểm: H = 38,8 m'
    ]
  },
  {
    id: 4,
    iddiemdo: 'DV04',
    title: 'Tuyến D800 thép, D630 HDPE trạm 2',
    position: [21.007919694523356, 107.15789794921876],
    offset: [-162, 35],
    pressure: 6.51,
    flow: 6.76
  },

  {
    id: 5,
    iddiemdo: 'DV05',
    title: 'ĐO MỨC BỂ 3000M3',
    position: [20.99942613938043, 107.20287322998047],
    offset: [84, 108],
    waterLevel: 2.4,
    alertLevel: 0.5,
    overflowLevel: 3.7,
    notes: [
      'Mực nước cạn là: Hc = 0,5 (m)',
      'Mức nước tràn của bể: H = 3,7 (m)',
      'Tích luỹ ngày DV :0 (m3)'
    ]
  },

  {
    id: 6,
    iddiemdo: 'DV06',
    title: 'DV02-D600 Cấp Cẩm Phả',
    position: [20.98355952489907, 107.23737716674806],
    offset: [514, 290],
    pressure: 5.7,
    flow: 1105
  },

  {
    id: 7,
    title: 'DV01-D600 Cấp Hạ Long',
    position: [20.959515988921087, 107.17214584350586],
    offset: [-140, 307],
    pressure: 6.31,
    flow: 777
  },
  {
    id: 8,
    iddiemdo: 'DV08',
    title: 'DV01-01-D160 Q.Hanh-Đ.Bụt',
    position: [20.98243757925786, 107.16407775878908],
    offset: [-236, 207],
    pressure: 2.72,
    flow: 25,
    notes: ['P min: 2,0 (bar) ; P max: 5,2 (bar)']
  },
  {
    id: 9,
    iddiemdo: 'DV09',
    title: 'DV03-D225 Q.Hanh-T.Hồng',
    position: [20.995099048089518, 107.24098205566408],
    offset: [518, 213],
    pressure: 3.71,
    flow: 95
  },
  {
    id: 10,
    iddiemdo: 'DV10',
    title: 'DV04-D225 T.Hồng - Đ.Chồng',
    position: [21.008560697933067, 107.26003646850587],
    offset: [605, 81],
    pressure: 4.76,
    flow: 47
  },

  {
    id: 11,
    iddiemdo: 'DV11',
    title: 'Dương Huy - Mông Dương',
    position: [21.05470570160897, 107.27977752685548],
    offset: [722, -238],
    pressure: 5.61,
    flow: 294.23
  },
  {
    id: 12,
    title: 'D630 HDPE cấp Hạ Long',
    position: [20.97057649578188, 107.17214584350586],
    offset: [174, 367],
    pressure: 5.9,
    flow: 711
  },
  {
    id: 14,
    iddiemdo: 'DV00',
    title: 'Tổng Q',
    position: [21.037723438590533, 107.17506408691408],
    offset: [-76, -131],
    flow: 2734.515
  },
  {
    id: 15,
    iddiemdo: 'DV02',
    title: 'ĐO MỨC BỂ 4000M3, 3000M3',
    position: [21.02282231132884, 107.2090530395508],
    offset: [201, -90],
    waterLevel: 3.28,
    waterLevel2: 3.06,
    notes: [
      '(Bể 3000: Hmin 2,5 m; Hmax: 3,35 m )',
      '(Bể 4000: Hmin 2,7 m; Hmax: 3,62 m )'
    ]
  },
  {
    id: 16,
    iddiemdo: 'DV15',
    title: 'Trạm Bơm 1 Cao Vân',
    position: [21.043331003758137, 107.20819473266603],
    offset: [201, -90],
    pressure: 0.98,
    notes: ['T máy bơm =  (oC) ; Trạng thái TB:']
  },
  {
    id: 17,
    iddiemdo: 'DV03',
    title: 'Tuyến DV00-02-D160 Osen',
    position: [20.968011813429065, 107.222957611084],
    offset: [90, 449],
    pressure: 2.77,
    flow: 27
  },
  {
    id: 18,
    iddiemdo: 'DV14',
    title: 'P nước thô Cao Vân tại trạm Van Giảm áp',
    position: [21.024424654564555, 107.15429306030275],
    offset: [-168, -42],
    pressure: 3.06
  },
  {
    id: 19,
    iddiemdo: 'DV12',
    title: 'Dương Huy cấp nội bộ',
    position: [21.039646056144857, 107.27668762207033],
    offset: [727, -127],
    pressure: 3.11,
    flow: 18
  }
];
