export interface BomTangApData {
  features: Feature[];
}

export interface Feature {
  attributes: Attributes;
  geometry: Geometry;
}

export interface Attributes {
  OBJECTID: number;
  MA_PHUONG: string;
  DUONG?: string | null;
  Enabled: number;
  DUNG_TICH: any;
  SO_ONG_VAO: any;
  SO_ONG_RA: any;
  TINH_TRANG?: string | null;
  COT_AP: any;
  NGUOI_HC?: string | null;
  THOI_GIAN_HC?: number | null;
  NGUOI_KT: string;
  THUNG_HO_SO: any;
  MA_HUYEN: any;
  GHI_CHU: any;
  LUUVET?: string | null;
  TRAM_BOM?: string | null;
  CS_DANH_NGHIA: number;
  CS_DONG_CO: number;
  NAM_LAP_DAT: number;
  KIEU?: string | null;
  HANG_SX?: string | null;
  AP_LUC_TONG: number;
  THOI_GIAN_KT: number;
  DIACHI: any;
  OBJECTID_CU: any;
  ID_FILEANH: string;
}

export interface Geometry {
  x: number;
  y: number;
}
