export function compareTriplets(a: number[], b: number[]): number[] {
  // Write your code here
  let aWonCount = 0;
  let bWonCount = 0;
  
  a.forEach((_a: number, index: number) => {
      if( _a > b[index]) {
          aWonCount+=1;
      } else if ( _a < b[index]){
          bWonCount+=1;
      }
  })

  return [aWonCount, bWonCount];
}
