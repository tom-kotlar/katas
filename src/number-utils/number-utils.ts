// The remainder (%) operator returns the remainder left 
  // over when one operand is divided by a second operand. 
  // It always takes the sign of the dividend.
  
function modulo(a: number, b: number): number {
  return a % b;
}

function squareRoot(n: number): number {
  // return the square root of n
  return Math.sqrt(n);
}


function raiseToPower(m: number, n: number) {
  // return the result of raising m to the nth
  return (m ** n);
}

function formatMoney(amount: number) {
  /**
   * return a the amount formatted into pounds sterling
   * Amounts should be a string with the £ symbol in front
   * formatMoney(2.33) => "£2.33"
   * Amounts should be rounded to 2 decimal numbers
   * formatMoney(2.338) => "£2.34"
   * Amounts should always have 2 decimal numbers even if they are zeroes
   * formatMoney(1) => "£1.00"
   */
  return "£" + amount.toFixed(2);
}

function calculateCircleArea(r: number): number {
  // return the area of a circle with radius r
  // round result to 3 decimal numbers
  return Number((Math.PI * (r ** 2)).toFixed(3));
}

function calculateFullTurns(degrees: number) {
  // return the number of full turns you can make with the provided degrees
  // 1 full turn === 360 degrees
  return Math.floor(degrees/360);
}

function isFromThe60s(year: number) {
  // return true if the year is in the 1960's
  return (year >= 1960 && year <=1969) 
}

export { modulo, squareRoot, raiseToPower, formatMoney, calculateCircleArea, calculateFullTurns, isFromThe60s };