export function simpleArraySum(ar: number[]): number {
  return ar.reduce((prev, curr) => {
    return prev + curr;
  });
}
