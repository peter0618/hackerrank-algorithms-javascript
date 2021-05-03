export function timeConversion(s: string): string {
  // Write your code here
  let hh: number = Number.parseInt(s.substring(0, 2));
  if (s.indexOf('AM') === 8 && hh >= 12) {
    hh -= 12;
  } else if (s.indexOf('PM') === 8 && hh < 12) {
    hh += 12;
  }
  return `${String(hh).padStart(2, '0')}${s.substring(2, 8)}`;
}
