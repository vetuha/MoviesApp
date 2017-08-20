import { MovieLengthPipe } from './toHHmm.pipe';

describe('Pipe: Movie Length', () => {
  let pipe: MovieLengthPipe;

  beforeEach(() => {
    pipe = new MovieLengthPipe();
  });

  it('should transform 123 to "2hr 3mins"', () => {
    expect(pipe.transform(123)).toEqual('2hr 3mins');
  });

  it('should transform 59 to "59mins"', () => {
    expect(pipe.transform(59)).toEqual('59mins');
  });

  it('should transform 60 to "1hr"', () => {
    expect(pipe.transform(60)).toEqual('1hr');
  });

  it('transforms undefined to "Unknown"', () => {
    expect(pipe.transform(undefined)).toEqual('Unknown');
  });

  it('transforms 0 to "Unknown"', () => {
    expect(pipe.transform(0)).toEqual('Unknown');
  });
});