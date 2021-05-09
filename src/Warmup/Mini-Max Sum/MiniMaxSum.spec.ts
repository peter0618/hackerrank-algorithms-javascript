import { miniMaxSum, miniMaxSum2 } from './MiniMaxSum';

// https://www.hackerrank.com/challenges/mini-max-sum/problem
describe('miniMaxSum', () => {
  const storeLog = (inputs) => (outputData += inputs);
  console['log'] = jest.fn(storeLog);

  let outputData = '';
  beforeEach(() => {
    outputData = '';
  });

  it('miniMaxSum1', () => {
    const arr = [1, 2, 3, 4, 5];
    miniMaxSum(arr);
    expect(outputData).toBe('10 14');
  });

  it('miniMaxSum2', () => {
    const arr = [1, 2, 3, 4, 5];
    miniMaxSum2(arr);
    expect(outputData).toBe('10 14');
  });
});
