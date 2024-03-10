import { expect, jest, test, describe } from '@jest/globals';
import { putNamesTogether, capitaliseFirstString, capitaliseString, convertToCamelCase } from "./string-utils";


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



