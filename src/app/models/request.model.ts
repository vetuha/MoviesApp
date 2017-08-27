import { MovieFilters } from "../reducers/filter.reducer";
import { GenreType, genreType } from "./genre.model";

export class SearchRequest{
    page: number;
    query: String | null;
    minRating: number;
    genre: GenreType;
    countPerPage: number;

    constructor(){
        this.countPerPage = 10;
        this.minRating = 5;
        this.genre = genreType.all;
        this.page = 1;
    }
}