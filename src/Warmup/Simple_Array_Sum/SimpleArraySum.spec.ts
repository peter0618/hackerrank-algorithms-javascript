import { simpleArraySum } from './SimpleArraySum';

// https://www.hackerrank.com/challenges/simple-array-sum/problem
describe('SimpleArraySum', () => {
  it('test case 1', () => {
    const array = [1, 2, 3, 4, 10, 11];
    expect(simpleArraySum(array)).toEqual(31);
  });
});
