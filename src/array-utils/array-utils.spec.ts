import { expect, jest, test, describe } from '@jest/globals';
import {removeDuplicates } from "./array-utils"


describe('removeDuplicates', () => {
    it('if we pass empty arry in the array return input ', () => {
        expect(removeDuplicates([])).toEqual([]);
    });
    it('if we pass empty string in the array return input ', () => {
        expect(removeDuplicates([''])).toEqual(['']);
    });
    it('remove duplicate string in thre arry of strings', () => {
        expect(removeDuplicates(['hello', 'hello'])).toEqual(['hello']);
        expect(removeDuplicates(["hello", "world", "hello", "Hello"])).toEqual(["hello", "world", "Hello"]);
        expect(removeDuplicates(["apple", "banana", "apple", "orange", "banana"])).toEqual(["apple", "banana", "orange"]);
    });
   
});