import { timeConversion } from './TImeConversion';

// https://www.hackerrank.com/challenges/time-conversion/problem
describe('TimeConversion', () => {
  it('test case 1', () => {
    const s = '12:01:00PM';
    expect(timeConversion(s)).toEqual('12:01:00');
  });

  it('test case 2', () => {
    const s = '12:01:00AM';
    expect(timeConversion(s)).toEqual('00:01:00');
  });

  it('test case 3', () => {
    const s = '07:05:45PM';
    expect(timeConversion(s)).toEqual('19:05:45');
  });
});
