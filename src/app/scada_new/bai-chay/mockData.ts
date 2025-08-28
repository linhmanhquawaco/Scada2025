// app/map/bai-chay/mockData.ts

export interface MonitoringPoint {
  id: string;
  name: string;
  time: string;
  level?: number; // chỉ có cho bể
  pressure?: number; // chỉ có cho tuyến ống
  flow?: number; // có khi là cho trạm/bể
  status: number; // trạng thái vận hành
  note?: string; // ghi chú tùy điểm
}

// const currentTime = new Date().toISOString();
const currentTime = new Date().toLocaleTimeString('vi-VN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
});

export const monitoringData: MonitoringPoint[] = [
  {
    id: '0',
    name: 'Bể nước sạch NMN Đồng Ho',
    time: currentTime,
    level: 2.6,
    status: 0,
    note: 'Thông số cơ bản: H bể tràn : 4,5 (m)'
  },
  {
    id: '1',
    name: 'Nước thô D600 Đồng Đăng',
    time: currentTime,
    level: 3.2,
    flow: 150,
    status: 1,
    note: 'Thông số cơ bản: H bể tràn : 4 (m) ;'
  },
  {
    id: '2',
    name: 'BC01-D500 - Nguồn Đồng Ho',
    time: currentTime,
    pressure: 4.2,
    flow: 180,
    status: 2
  },
  {
    id: '4',
    name: 'D500-Gang Yên Lập cấp B.Cháy',
    time: currentTime,
    pressure: 3.8,
    flow: 220,
    level: 3.5,
    status: 4
  },
  {
    id: '5',
    name: 'BC23-D315 - Yên Lập - CN Đông Mai',
    time: currentTime,
    pressure: 2.9,
    flow: 95,
    status: 5
  },
  {
    id: '6',
    name: 'BC21-D400 - NM Yên Lập - Lâm Sinh',
    time: currentTime,
    pressure: 3.1,
    flow: 110,
    status: 6
  },
  {
    id: '7',
    name: 'Tăng áp Tuần Châu',
    time: currentTime,
    pressure: 2.7,
    flow: 85,
    status: 7
  },
  {
    id: '8.1',
    name: 'Mức bể TA Lâm Sinh',
    time: currentTime,
    level: 2.8,
    status: 8
  },
  {
    id: '8.2',
    name: 'Áp lực BC06-D300 - TA Lâm Sinh',
    time: currentTime,
    pressure: 3.4,
    status: 8
  },
  {
    id: '9',
    name: 'Tuyến BC01-D500 cấp Đồng Đăng',
    time: currentTime,
    pressure: 4.1,
    flow: 165,
    status: 9
  },
  {
    id: '10',
    name: 'BC02-D450 - BV, HU Hoành Bồ',
    time: currentTime,
    pressure: 3.6,
    flow: 125,
    status: 10
  },
  {
    id: '11',
    name: 'BC03-D300 - Đồng Đăng - Việt Hưng',
    time: currentTime,
    pressure: 2.8,
    flow: 90,
    status: 11
  },
  {
    id: '12',
    name: 'BC27-D500 (BC04-D500 cũ)',
    time: currentTime,
    pressure: 3.9,
    flow: 145,
    status: 12
  },
  {
    id: '13',
    name: 'BC04-D500 mới',
    time: currentTime,
    pressure: 4.0,
    flow: 155,
    status: 13
  },
  {
    id: '14',
    name: 'BC05-D200 ĐH EuroMag Hà Khẩu - BV Bãi Cháy',
    time: currentTime,
    pressure: 3.2,
    status: 14
  },
  {
    id: '16',
    name: 'BC12-D200 - Khu Đông Hùng Thắng',
    time: currentTime,
    pressure: 2.9,
    flow: 75,
    status: 16
  },
  {
    id: '17',
    name: 'BC13 - Ngã tư Ao cá',
    time: currentTime,
    pressure: 3.1,
    status: 17
  },
  {
    id: '19',
    name: 'BC14-03/04/02-D160 - TA Du Lịch',
    time: currentTime,
    pressure: 5.2,
    status: 19
  },
  {
    id: '20',
    name: 'BC14-D200 - P đầu đẩy TA Vườn Đào - Suối Mơ',
    time: currentTime,
    pressure: 4.8,
    status: 20
  },
  {
    id: '22',
    name: 'BC13-D280 KS Bạch Đằng',
    time: currentTime,
    pressure: 1.2,
    status: 22
  },
  {
    id: '23.1',
    name: 'T.A Bến Phà',
    time: currentTime,
    pressure: 1.1,
    status: 23
  },
  {
    id: '23.2',
    name: 'Mức bể TA Bến Phà',
    time: currentTime,
    level: 2.9,
    status: 23
  },
  {
    id: '25',
    name: 'BC08-D300 - Áp lực đầu hút C Lân',
    time: currentTime,
    pressure: 2.4,
    status: 25
  },
  {
    id: '26',
    name: 'D150 - TA Cái Lân 1',
    time: currentTime,
    pressure: 3.0,
    flow: 65,
    status: 26
  },
  {
    id: '27',
    name: 'D150 - TA Cái Lân 2',
    time: currentTime,
    pressure: 2.8,
    flow: 70,
    status: 27
  },
  {
    id: '28',
    name: 'Bể nước sạch Hải Quân',
    time: currentTime,
    level: 1.5,
    status: 28
  },
  {
    id: '29',
    name: 'Bể 500m3 Tuần Châu',
    time: currentTime,
    level: 3.8,
    status: 29
  },
  {
    id: '30',
    name: 'Bể 2000m3 Tuần Châu',
    time: currentTime,
    level: 3.2,
    status: 30
  },
  {
    id: '31',
    name: 'Giám sát Áp lực Ngã 3 Hải Quân',
    time: currentTime,
    pressure: 2.6,
    status: 31
  },
  {
    id: '32',
    name: 'GS áp lực xi măng Thăng Long',
    time: currentTime,
    pressure: 3.5,
    status: 32
  },
  {
    id: '33',
    name: 'GS áp lực Điểm đấu cầu 368',
    time: currentTime,
    pressure: 2.9,
    status: 33
  }
];
