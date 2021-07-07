import { compareTriplets } from './CompareTriplets';

// https://www.hackerrank.com/challenges/compare-the-triplets/problem
describe('CompareTriplets', () => {
  it('test case 1', () => {
    const a = [5, 6, 7];
    const b = [3, 6, 10];
    expect(compareTriplets(a, b)).toEqual([1, 1]);
  });
});
