import { birthdayCakeCandles } from './BirthdayCakeCandles';

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
describe('BirthdayCakeCandles', () => {
  it('test case 1', () => {
    const candles: number[] = [3, 2, 1, 3];
    expect(birthdayCakeCandles(candles)).toEqual(2);
  });
});
