export function plusMinus(arr: number[]) {
  // Write your code here
  let countPositive = 0;
  let countNegative = 0;
  let countZero = 0;
  arr.forEach((num) => {
    if (num > 0) {
      countPositive++;
    } else if (num < 0) {
      countNegative++;
    } else {
      countZero++;
    }
  });
  // hackrank 제출용
  // console.log(countPositive / arr.length);
  // console.log(countNegative / arr.length);
  // console.log(countZero / arr.length);
  return [
    countPositive / arr.length,
    countNegative / arr.length,
    countZero / arr.length,
  ];
}
