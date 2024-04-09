export interface RootObject {
  info: Info;
  results: Result[];
}
export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface Origin {
  name: string;
  url: string;
}
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface EpisodeSchema {
  id: number;
  name: string;
  air_date: string | Date;
  episode: string;
}
