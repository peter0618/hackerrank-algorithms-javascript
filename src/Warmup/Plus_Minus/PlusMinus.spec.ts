import { plusMinus } from './PlusMinus';

// https://www.hackerrank.com/challenges/plus-minus/problem
describe('PlusMinus', () => {
  it('test case 1', () => {
    const array = [-4, 3, -9, 0, 4, 1];
    const result = plusMinus(array);
    expect(Number(result[0].toFixed(6))).toEqual(0.5);
    expect(Number(result[1].toFixed(6))).toEqual(0.333333);
    expect(Number(result[2].toFixed(6))).toEqual(0.166667);
  });
});
