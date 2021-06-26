import { aVeryBigSum } from './AVeryBigSum';

// https://www.hackerrank.com/challenges/a-very-big-sum/problem
describe('AVeryBigSum', () => {
  it('test case 1', () => {
    const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    expect(aVeryBigSum(ar)).toEqual(5000000015);
  });
});
