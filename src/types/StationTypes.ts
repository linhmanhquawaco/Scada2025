export interface StationInfo {
  id: number;
  iddiemdo?: string;
  title: string;
  position: [number, number];
  offset: [number, number];
  waterLevel?: number;
  waterLevel2?: number;
  alertLevel?: number;
  overflowLevel?: number;
  dangerLevel?: number;
  flow?: number;
  pressure?: number;
  notes?: string[];
  time?: string;
}
