import { expect, jest, test, describe } from '@jest/globals';
import { modulo, squareRoot, raiseToPower, formatMoney, calculateCircleArea, calculateFullTurns, isFromThe60s } from './number-utils';

describe('types', () => {
  describe('Basic Maths', () => {
    it('modulo returns the remainder of dividing a by b', () => {
      expect(modulo(4, 2)).toBe(0);
      expect(modulo(7, 2)).toBe(1);
      expect(modulo(12, 7)).toBe(5);
    });
    it('squareRoot returns the square root of the outcome', () => {
      expect(squareRoot(4)).toEqual(2);
      expect(squareRoot(16)).toEqual(4);
      expect(squareRoot(0)).toEqual(0);
      expect(squareRoot(-6)).toEqual(NaN);
    });

    it('raiseToPower returns m to the nth power§', () => {
      expect(raiseToPower(2, 3)).toEqual(8);
      expect(raiseToPower(3, 4)).toEqual(81);
      expect(raiseToPower(8, 0)).toEqual(1);
    });
  })

  describe('formatMoney', () => {
    it('adds zeroes up to 2 decimal numbers', () => {
      expect(formatMoney(1)).toEqual('£1.00');
    });
    it('rounds to 2 decimal numbers', () => {
      expect(formatMoney(3.457)).toEqual('£3.46');
    });
  });

  describe('calculateCircleArea', () => {
    it('returns the area of a circle', () => {
      expect(calculateCircleArea(1)).toEqual(3.142);
      expect(calculateCircleArea(2)).toEqual(12.566);
      expect(calculateCircleArea(3)).toEqual(28.274);
    });
  });

  describe('calculateFullTurns', () => {
    it('returns the amount of full turns you can make with the passed degrees', () => {
      expect(calculateFullTurns(90)).toEqual(0);
      expect(calculateFullTurns(363)).toEqual(1);
      expect(calculateFullTurns(800)).toEqual(2);
      expect(calculateFullTurns(2000)).toEqual(5);
    });
  });

  describe('isFromThe60s', () => {
    it('returns true if the passed value is between 1960 and 1969 (inclusive)', () => {
      expect(isFromThe60s(1960)).toEqual(true);
      expect(isFromThe60s(1965)).toEqual(true);
      expect(isFromThe60s(1969)).toEqual(true);
    });
    it('returns false if the passed value is not between 1960 and 1969 (inclusive)', () => {
      expect(isFromThe60s(1959)).toEqual(false);
      expect(isFromThe60s(1860)).toEqual(false);
      expect(isFromThe60s(1970)).toEqual(false);
    });
  });





})