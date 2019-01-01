import { StarWarsCharacter } from './star-wars-character.model';

export interface ApiResponse {
  count: number;
  next: string;
  previous?: any;
  results: StarWarsCharacter[];
}
