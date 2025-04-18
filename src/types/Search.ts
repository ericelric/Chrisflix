export interface SearchMultiResponse {
  page: number;
  results: (MovieResult | TvResult | PersonResult)[];
  total_pages: number;
  total_results: number;
}

export interface MovieResult {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: 'movie';
}

export interface TvResult {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  media_type: 'tv';
}

export interface PersonResult {
  adult: boolean;
  gender: number;
  id: number;
  known_for: (MovieResult | TvResult)[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string | null;
  media_type: 'person';
}
