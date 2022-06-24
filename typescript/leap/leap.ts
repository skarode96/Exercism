

function isYearDivisibleBy(year: number, n: number) {
  return year % n === 0;
}


export function isLeap(year: number) {
  return isYearDivisibleBy(year, 4) && (!isYearDivisibleBy(year, 100) || isYearDivisibleBy(year, 400));
}
