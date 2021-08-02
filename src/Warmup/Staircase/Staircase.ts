export function staircase(n: number): void {
  // Write your code here
  let blankCount = n - 1;
  const box = Array(n)
    .fill(null)
    .map(() => Array(n).fill(null));
  box.forEach((innerBox: null[]) => {
    let currentRow = '';
    innerBox.forEach((item, index: number) => {
      if (index < blankCount) {
        currentRow += ' ';
      } else {
        currentRow += '#';
      }
    });
    console.log(currentRow);
    blankCount -= 1;
  });
}
