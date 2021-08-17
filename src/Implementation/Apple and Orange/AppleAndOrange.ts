/**
 *
 * @param s
 * @param t
 * @param a
 * @param b
 * @param apples
 * @param oranges
 */
export function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[],
): void {
  const countFruitsInHouse = (fruits: number[], treeLocation: number) => {
    return fruits.reduce((acc, cur) => {
      const shiftedLocation = cur + treeLocation;
      if (s <= shiftedLocation && shiftedLocation <= t) {
        return ++acc;
      }
      return acc;
    }, 0);
  };
  console.log(
    [countFruitsInHouse(apples, a), countFruitsInHouse(oranges, b)].join('\n'),
  );
}
