import { reducer } from './movies.reducer';
import * as fromMovies from './movies.reducer';
import { SearchRequest } from '../models/request.model';
import { LoadAction } from '../actions/movies.action'



describe('MoviesReducer', () => {

    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = {} as any;

            const result = reducer(undefined, action);
            expect(result).toEqual(fromMovies.initialState);
        });
    });

    describe('LOAD', () => {
        it('should change loading to true', () => {
            const req = new SearchRequest();
            const action = new LoadAction(req);
            let selectedMovieId:number = null;
            const expectedResult = {
                loaded: false,
                loading: true,
                searching: false,
                entities: new Array(),
                count: 0,
                page: 1,
                selectedMovieId:selectedMovieId
            };

            const result = reducer(fromMovies.initialState, action);
            expect(result).toEqual(expectedResult);
        });
    });
});