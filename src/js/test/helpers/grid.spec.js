import { indexToCoords } from '../../helpers/grid';

describe('Grid Helpers', () => {
  it('Calculates coords from index', () => {
    expect(indexToCoords(3, 3, 0)).toEqual([0, 0]);
    expect(indexToCoords(4, 3, 3)).toEqual([3, 0]);
    expect(indexToCoords(3, 3, 6)).toEqual([0, 2]);
    expect(indexToCoords(7, 6, 7)).toEqual([0, 1]);
    expect(indexToCoords(7, 6, 8)).toEqual([1, 1]);
    expect(indexToCoords(7, 6, 18)).toEqual([4, 2]);
    expect(indexToCoords(4, 4, 15)).toEqual([3, 3]);
  });
});
