export function diagonalDifference(arr: number[][]): number {
  // Write your code here
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][i] - arr[i][arr.length - 1 - i];
  }
  return Math.abs(result);
}
