import { diagonalDifference } from './DiagonalDifference';

// https://www.hackerrank.com/challenges/diagonal-difference/problem
describe('DiagonalDifference', () => {
  it('test case 1', () => {
    const array = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    expect(diagonalDifference(array)).toEqual(15);
  });
});
