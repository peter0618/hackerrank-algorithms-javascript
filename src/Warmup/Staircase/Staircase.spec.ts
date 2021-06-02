import { staircase } from './Staircase';

// jest 로 console.log output Test 하기
// https://stackoverflow.com/questions/44890836/how-to-test-console-log-output-using-jest-or-other-javascript-testing-framework
// https://www.hackerrank.com/challenges/staircase/problem
describe('Staircase', () => {
  let outputData = '';
  const storeLog = (inputs) => (outputData += inputs);
  it('test case 1', () => {
    console['log'] = jest.fn(storeLog);
    const n = 4;
    staircase(n);
    expect(outputData).toBe('   #' + '  ##' + ' ###' + '####');
  });
});
