export interface NhaMayNuocData {
  features: Feature[];
}

export interface Feature {
  attributes: Attributes;
  geometry: Geometry;
}

export interface Attributes {
  OBJECTID: number;
  MA_PHUONG: string | null;
  TUYEN: any;
  MA: string;
  TEN: string;
  DUNG_TICH: number;
  KIEU: any;
  SO_ONG_VAO: any;
  SO_ONG_RA: any;
  TINH_TRANG?: string | null;
  ROTATE: any;
  AP_LUC_DAU_BOM: number;
  NGUOI_HC?: string | null;
  THOI_GIAN_HC?: number | null;
  NGUOI_KT: string;
  THOI_GIAN_KT: number;
  THUNG_HO_SO: any;
  MA_HUYEN: any;
  GHI_CHU: any;
  LUUVET?: string | null;
  ID_FILEANH: string;
  CONG_SUAT_TK: number;
  CONG_SUAT_VH: number;
}

export interface Geometry {
  x: number;
  y: number;
}
