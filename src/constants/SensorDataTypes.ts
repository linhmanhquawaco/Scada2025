// types/SensorDataTypes.ts
export interface SensorHistoryData {
  Thoigian: string;
  Apluc?: number;
  LuuLuong?: number;
  MucNuoc?: number;
  MucNuoc2?: number;
}

// Dữ liệu mẫu
export const mockHistoryData: SensorHistoryData[] = [
  {
    Thoigian: '2025-08-28T00:00:00',
    Apluc: 2.0,
    LuuLuong: 45,
    MucNuoc: 34.5,
    MucNuoc2: 20.1
  },
  { Thoigian: '2025-08-28T01:00:00', Apluc: 2.1, LuuLuong: 47, MucNuoc: 34.7 },
  { Thoigian: '2025-08-28T02:00:00', Apluc: 2.2, LuuLuong: 49 },
  { Thoigian: '2025-08-28T03:00:00', LuuLuong: 50, MucNuoc: 35.0 },
  {
    Thoigian: '2025-08-28T04:00:00',
    Apluc: 2.3,
    MucNuoc: 35.1,
    MucNuoc2: 20.5
  },
  { Thoigian: '2025-08-28T05:00:00', Apluc: 2.1, LuuLuong: 52, MucNuoc: 35.3 },
  { Thoigian: '2025-08-28T06:00:00', Apluc: 2.4, LuuLuong: 54, MucNuoc: 35.5 },
  { Thoigian: '2025-08-28T07:00:00', LuuLuong: 56, MucNuoc2: 21.0 },
  { Thoigian: '2025-08-28T08:00:00', Apluc: 2.6, LuuLuong: 58, MucNuoc: 35.9 },
  { Thoigian: '2025-08-28T09:00:00', Apluc: 2.5, MucNuoc: 36.0 },
  {
    Thoigian: '2025-08-28T10:00:00',
    Apluc: 2.7,
    LuuLuong: 60,
    MucNuoc: 36.2,
    MucNuoc2: 21.3
  },
  { Thoigian: '2025-08-28T11:00:00', Apluc: 2.6, LuuLuong: 61 },
  { Thoigian: '2025-08-28T12:00:00', LuuLuong: 62, MucNuoc: 36.5 },
  {
    Thoigian: '2025-08-28T13:00:00',
    Apluc: 2.8,
    MucNuoc: 36.7,
    MucNuoc2: 21.8
  },
  { Thoigian: '2025-08-28T14:00:00', Apluc: 2.9, LuuLuong: 63, MucNuoc: 36.9 },
  { Thoigian: '2025-08-28T15:00:00', Apluc: 3.0 },
  { Thoigian: '2025-08-28T16:00:00', LuuLuong: 64, MucNuoc: 37.0 },
  { Thoigian: '2025-08-28T17:00:00', Apluc: 3.1, LuuLuong: 66, MucNuoc2: 22.0 },
  { Thoigian: '2025-08-28T18:00:00', Apluc: 3.2, LuuLuong: 68, MucNuoc: 37.5 },
  { Thoigian: '2025-08-28T19:00:00', LuuLuong: 70 }
];
