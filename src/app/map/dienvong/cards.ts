// src/app/map/dienvong/layout-editor/data.ts

export interface CardInfo {
  id: number;
  title: string;
  timestamp: string;
  lines: string[];
  x: number;
  y: number;
}

export const initialCards: CardInfo[] = [
  {
    id: 1,
    title: 'ĐO MỨC NƯỚC HỒ CAO VÂN',
    timestamp: '11:03',
    lines: [
      'Mực nước hiện tại: H = 35.61 (m)',
      'Mực nước chết là: Hc = 24,5 (m)',
      'Mực nước tràn là: Ht = 35 (m)',
      'Mực nước nguy hiểm: H = 38,8 (m)'
    ],
    x: 1049,
    y: 147
  },
  {
    id: 2,
    title: 'Tuyến D800 thép, D630 HDPE trạm 2',
    timestamp: '11:05',
    lines: ['P D800 = 6.51 (bar); P D630 = 6.76 (bar)'],
    x: 521,
    y: 419
  },
  {
    id: 3,
    title: 'Dương Huy - Mông Dương',
    timestamp: '11:05',
    lines: [
      'P = 5.61 (bar); Q = 294,23 (m3/h)',
      'T máy bơm 1 = 0 (oC); Trạng thái TB:',
      'P min: 2,5 (bar); P max: 6,3 (bar)'
    ],
    x: 1405,
    y: 146
  },
  {
    id: 4,
    title: 'Dương Huy cấp nội bộ',
    timestamp: '11:03',
    lines: [
      'P = 3,11 (bar); Q = 18 (m3/h)',
      'P min: 2,5 (bar); P max: 4,5 (bar)'
    ],
    x: 1410,
    y: 257
  },
  {
    id: 5,
    title: 'ĐO MỨC BỂ 3000M3',
    timestamp: '11:03',
    lines: [
      'Mực nước hiện tại: H = 2.4 (m)',
      'Mực nước cạn là: Hc = 0,5 (m)',
      'Mức nước tràn của bể: H = 3,7 (m)',
      'Tích luỹ ngày DV: 0 (m3)'
    ],
    x: 767,
    y: 492
  },
  {
    id: 6,
    title: 'DV04-D225 T.Hồng - Đ.Chồng',
    timestamp: '11:03',
    lines: [
      'P: 4.76 (bar); Q: 47 (m3/h)',
      'P min: 2,0 (bar); P max: 4,8 (bar)'
    ],
    x: 1288,
    y: 465
  },
  {
    id: 7,
    title: 'DV03-D225 Q.Hanh-T.Hồng',
    timestamp: '11:03',
    lines: [
      'P: 3.71 (bar); Q: 95 (m3/h)',
      'P min: 2,0 (bar); P max: 6,4 (bar)'
    ],
    x: 1201,
    y: 597
  },
  {
    id: 8,
    title: 'DV01-01-D160 Q.Hanh-Đ.Bụt',
    timestamp: '11:03',
    lines: [
      'P: 2.72 (bar); Q: 25 (m3/h)',
      'P min: 2,0 (bar); P max: 5,2 (bar)'
    ],
    x: 447,
    y: 591
  },
  {
    id: 9,
    title: 'DV02-D600 Cấp Cẩm Phả',
    timestamp: '11:03',
    lines: [
      'P: 5.7 (bar); Q: 1105 (m3/h)',
      'Tích luỹ ngày CP: 10651 (m3)',
      'P min: 4.8 (bar); P max: 6.5 (bar)'
    ],
    x: 1197,
    y: 674
  },
  {
    id: 10,
    title: 'DV01-D600 Cấp Hạ Long',
    timestamp: '11:03',
    lines: [
      'P: 6.31 (bar); Q: 777 (m3/h)',
      'Q tổng HG: 1510 (m3/h)',
      'Tích luỹ ngày HG: 15566 (m3)',
      'P min: 5,6 (bar); P max: 8 (bar)'
    ],
    x: 543,
    y: 691
  },
  {
    id: 11,
    title: 'P nước thô Cao Vân tại trạm Van GA',
    timestamp: '18:02',
    lines: ['P = 3.06 (bar)'],
    x: 515,
    y: 342
  },
  {
    id: 12,
    title: 'Tuyến DV00-02-D160 Osen',
    timestamp: '11:09',
    lines: ['P = 2.77 (bar); Q = 27 (m3/h)'],
    x: 773,
    y: 833
  },
  {
    id: 13,
    title: 'D630 HDPE cấp Hạ Long',
    timestamp: '11:10',
    lines: [
      'P: 5.9 (bar); Q = 711 (m3/h)',
      'P min: 5.0 (bar); P max: 7.5 (bar)'
    ],
    x: 857,
    y: 751
  },
  {
    id: 14,
    title: '',
    timestamp: '11:10',
    lines: ['Q tổng: 2734.515 (m3/h)', 'Tích luỹ ngày :0 (m3)'],
    x: 607,
    y: 253
  },
  {
    id: 15,
    title: 'ĐO MỨC BỂ 4000M3, 3000M3',
    timestamp: '11:30',
    lines: [
      'Mực nước bể 4000 : H = 3.28 (m)',
      'Mực nước bể 3000 : H = 3.06 (m)',
      '(Bể 3000: Hmin 2,5 m; Hmax: 3,35 m)',
      '(Bể 4000: Hmin 2,7 m; Hmax: 3,62 m)'
    ],
    x: 884,
    y: 294
  }
];
