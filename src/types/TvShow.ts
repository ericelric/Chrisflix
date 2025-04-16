export interface TvShow {
  id: number;
  name: string;
  poster_path: string | null;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}
