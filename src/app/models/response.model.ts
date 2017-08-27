import { Movie } from "./movie.model";

export class SearchResponse {
    entities: Movie[];
    count: number;    
}