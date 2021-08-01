export function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  let max = candles[0];
  let countMax = 1;
  for (let i = 1; i < candles.length; i++) {
    if (max < candles[i]) {
      max = candles[i];
      countMax = 1;
    } else if (max == candles[i]) {
      countMax++;
    }
  }
  return countMax;
}
