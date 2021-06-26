/**
 * 문제에서 주어진 조건이 숫자 최대 10개이고 최대값이 10^10이어서,
 * 최대로 큰 숫자를 만들어봤자 10 * 10^10 = 10^11 입니다.
 * javascript number 는 16자리까지 지원해서 BigInt 를 사용하지 않아도 이 요구사항은 충족시킵니다.
 * 하지만, 이런식으로 요구조건을 만족하는지 확인은 항상 해야 할 것 같습니다.
 *
 * @param ar
 */
export function aVeryBigSum(ar: number[]): number {
  // Write your code here
  return ar.reduce((prev, curr) => {
    return prev + curr;
  });
}
