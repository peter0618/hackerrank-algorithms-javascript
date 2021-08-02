export function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  candles.sort((a: number, b: number) => b-a);
  const maxHeight = candles[0];
  let count = 0;
  candles.forEach((candle: number) => {
    if (maxHeight === candle) {
      count++;
    }
  });
  return count;
}
