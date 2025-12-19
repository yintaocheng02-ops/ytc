
export interface FatalityData {
  year: number;
  fatalities: number;
  accidents: number;
}

export interface CauseData {
  name: string;
  value: number;
}

export interface RegionRisk {
  name: string;
  count: number;
  dangerLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
