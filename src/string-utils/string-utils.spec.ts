import { expect, jest, test, describe } from '@jest/globals';
import { putNamesTogether, capitaliseFirstString, capitaliseString, convertToCamelCase, reversString, isPalindrome, charFrequency, firstNonRepeatingChar, firstRepeatingChar } from "./string-utils";


describe('putNamesTogether', () => {
    it('returns the passed names separated by a space', () => {
        expect(putNamesTogether('John', 'Doe')).toEqual('John Doe');
    });
});

describe('capitaliseFirstString', () => {
    it('returns the passed string if the string is empty', () => {
        expect(capitaliseFirstString('')).toMatch('')
    });
    it('returns the passed string with the first letter capitalised', () => {
        expect(capitaliseFirstString('hello')).toMatch('Hello');
        expect(capitaliseFirstString('hello world')).toMatch('Hello world');
    });
});

describe('capitaliseString', () => {
    it('returns the passed string if the string is falsy', () => {
        expect(capitaliseString('')).toMatch('')
    });
    it('returns the passed string with the first letter capitalised', () => {
        expect(capitaliseString('hello')).toMatch('Hello');
        expect(capitaliseString('hello world')).toMatch('Hello World');
        expect(capitaliseString('hello world its ok')).toMatch('Hello World Its Ok');
    });
});

describe('convertToCamelCase', () => {
    it('returns the passed string convertedToCamelCase', () => {
      expect(convertToCamelCase('hello')).toEqual('hello');
      expect(convertToCamelCase('hello world')).toEqual('helloWorld');
      expect(convertToCamelCase('what is going on')).toEqual('whatIsGoingOn');
    });
    it('The very first letter should always be lower case', () => {
      expect(convertToCamelCase('Hello')).toEqual('hello');
      expect(convertToCamelCase('I start lower cased')).toEqual('iStartLowerCased');
    });
});

describe('reversString', () => {
    it('returns string if the input is empty string', () => {
      expect(reversString('')).toEqual('');
      expect(reversString('a')).toEqual('a');
    });
    it('returns message if the input is empty', () => {
        expect(reversString(null)).toBe('Please provide valid input');
    });
    it('returns reversed strong if the input is string', () => {
        expect(reversString('hello')).toBe('olleh');
        expect(reversString('hello world')).toBe('dlrow olleh' );
    });
});

describe('isPalindrome', () => {
    it('returns true if the input is a palindrome', () => {
        expect(isPalindrome('madam')).toBeTruthy();
        expect(isPalindrome('racecar')).toBeTruthy();
        expect(isPalindrome('A man a plan a canal Panama')).toBeTruthy();
    });

    it('returns false if the input is not a palindrome', () => {
        expect(isPalindrome('hello')).toBeFalsy();
        expect(isPalindrome(null)).toBeFalsy();
        expect(isPalindrome(undefined)).toBeFalsy();
    });
});

describe('charFrequency', () => {
    it('returns message if the input is not valid', () => {
        expect(charFrequency('')).toEqual({});
        expect(charFrequency(undefined)).toEqual({"Please insert valid input": 0});
        expect(charFrequency(null)).toEqual({"Please insert valid input": 0});
    });
    it('returns character count if the input is valid string', () => {
        expect(charFrequency('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
        expect(charFrequency('Hello World')).toEqual({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
        expect(charFrequency("AaaBb")).toEqual({ a: 3, b: 2 });
    });
});

describe('firstNonRepeatingChar', () => {
    it('returns input if the input is a empty string', () => {
        expect(firstNonRepeatingChar('')).toEqual(null);
    });
    it('returns first non repeating character if the input is a string', () => {
        expect(firstNonRepeatingChar('aabbc')).toEqual('c');
        expect(firstNonRepeatingChar('abcabc')).toEqual(null);
        expect(firstNonRepeatingChar('swiss')).toEqual('w');
        expect(firstNonRepeatingChar('a a b c c d e')).toEqual('b');
        expect(firstNonRepeatingChar('Abraka Abraka Dabra')).toEqual('D');
    });
});

describe('firstRepeatingChar', () => {
    it('returns input if the input is a empty string', () => {
        expect(firstNonRepeatingChar('')).toEqual(null);
    });
    it('returns firstrepeating character if the input is a string', () => {
        expect(firstRepeatingChar('abcdefa')).toEqual('a');
        expect(firstRepeatingChar('hello')).toEqual('l');
        expect(firstRepeatingChar('swiss')).toEqual('s');
        expect(firstRepeatingChar('unique')).toEqual('u');
        expect(firstRepeatingChar('AbrakA Abraka Dabra')).toEqual('A');
    });
});

