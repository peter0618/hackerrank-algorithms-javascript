export function timeConversion(s: string): string {
  // Write your code here
  const timeParams = s.substring(8, 10);
  const hour = Number(s.substring(0, 2));
  const timeExceptHour = s.substring(2, 8);
  if (timeParams === 'AM') {
    const adjustedHour = hour + 12 === 24 ? 0 : hour;
    return String(adjustedHour).padStart(2, '0') + timeExceptHour;
  } else {
    const adjustedHour = hour < 12 ? hour + 12 : hour;
    return adjustedHour + timeExceptHour;
  }
}
