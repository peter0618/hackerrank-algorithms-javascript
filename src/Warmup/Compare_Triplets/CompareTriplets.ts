export function compareTriplets(a: number[], b: number[]): number[] {
  // Write your code here
  const result = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      result[0]++;
    } else if (a[i] < b[i]) {
      result[1]++;
    }
  }
  return result;
}
