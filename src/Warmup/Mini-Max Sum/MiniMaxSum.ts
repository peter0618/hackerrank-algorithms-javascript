/**
 * solution 1
 * @param arr
 */
export function miniMaxSum(arr: number[]): void {
  // Write your code here
  const sum = arr.reduce((prev, curr) => prev + curr);
  let min = sum - arr[1];
  let max = sum - arr[1];
  arr.forEach((arrItem) => {
    const tempSum = sum - arrItem;
    if (tempSum > max) {
      max = tempSum;
    }
    if (tempSum < min) {
      min = tempSum;
    }
  });
  console.log(`${min} ${max}`);
}

/**
 * solution 2
 * @param arr
 */
export function miniMaxSum2(arr: number[]): void {
  // Write your code here
  const sum = arr.sort().reduce((prev, curr) => prev + curr);
  console.log(`${sum - arr[4]} ${sum - arr[0]}`);
}
