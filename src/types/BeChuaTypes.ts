export interface BeChuaData {
  features: Feature[];
}

export interface Feature {
  attributes: Attributes;
  geometry: Geometry;
}

export interface Attributes {
  OBJECTID: number;
  MA_PHUONG: string;
  TUYEN: any;
  MA: any;
  VI_TRI: any;
  DUONG?: string | null;
  DUNG_TICH?: number | null;
  KIEU: any;
  SO_ONG_VAO?: number | null;
  SO_ONG_RA?: number | null;
  TINH_TRANG?: string | null;
  ROTATE: any;
  COT_AP?: number | null;
  NGUOI_HC?: string | null;
  THOI_GIAN_HC?: number | null;
  NGUOI_KT: string;
  THOI_GIAN_KT: number;
  THUNG_HO_SO: any;
  MA_HUYEN: any;
  GHI_CHU: any;
  LUUVET?: string | null;
  ID_FILEANH: string;
  MADATALOGER?: string | null;
  TENDATALOGER?: string | null;
  MAKV?: string | null;
  APLUCMAX?: number | null;
  APLUCMIN?: number | null;
}

export interface Geometry {
  x: number;
  y: number;
}
