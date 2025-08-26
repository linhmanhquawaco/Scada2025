export type Datalogger = ChiTiet[];

export interface ChiTiet {
  location: Location;
  pressure: number;
  timestamp: string;
  name: string;
  SUBNAME: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}
