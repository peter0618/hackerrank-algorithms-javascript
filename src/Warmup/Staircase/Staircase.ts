export function staircase(n: number): void {
  // Write your code here
  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(n - (i + 1)).concat('#'.repeat(i + 1)));
  }
}
