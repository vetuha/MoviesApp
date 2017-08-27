// import { TestBed } from '@angular/core/testing';
// import { HttpModule, Http } from '@angular/http';
// import { MovieService } from './movie.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

// import { SearchRequest } from '../models/request.model';

// describe('Service: MovieService', () => {
//     let service: MovieService;
//     let http: any;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//           providers: [            
//             MovieService,
//             { provide: Http, useValue: jasmine.createSpyObj('Http', ['get']) },
//           ],
//           imports: [
//             HttpModule,
//             InMemoryWebApiModule.forRoot(InMemoryDataService)
//           ]
//         });
    
//         service = TestBed.get(MovieService);
//         http = TestBed.get(Http);
//     });

//     it('should call the in memory web api and return the search results', () => {
//         const req:SearchRequest = new SearchRequest();
    
//         expect(http.get).toHaveBeenCalledWith(
//             `api/movies`
//           );
//       });
// });