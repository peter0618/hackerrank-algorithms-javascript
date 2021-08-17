import { countApplesAndOranges } from './AppleAndOrange';

// https://www.hackerrank.com/challenges/apple-and-orange/problem
describe('ApplesAndOranges', () => {
  const storeLog = (inputs) => (outputData += inputs);
  console['log'] = jest.fn(storeLog);

  let outputData = '';
  beforeEach(() => {
    outputData = '';
  });

  it('test case 1', () => {
    const s = 7;
    const t = 11;
    const a = 5;
    const b = 15;
    const apples = [-2, 2, 1];
    const oranges = [5, -6];

    countApplesAndOranges(s, t, a, b, apples, oranges);
    expect(outputData).toEqual('1\n1');
  });

  it('test case 2', () => {
    const s = 7;
    const t = 10;
    const a = 4;
    const b = 12;
    const apples = [2, 3, -4];
    const oranges = [3, -2, -4];

    countApplesAndOranges(s, t, a, b, apples, oranges);
    expect(outputData).toEqual('1\n2');
  });
});
