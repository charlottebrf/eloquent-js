import { deepEqual } from '../deepComparison';

describe('deepComparison', () => {
   test('returns false if two values are the same value', () => {
       expect(deepEqual('2',2)).toEqual(false);
   });

   test('returns true when two values are the same', () => {
       expect(deepEqual(2,2)).toEqual(true);
   });

   test('returns false when object properties are different', () => {
       let listA = {
           value: 1,
           rest: {
               value: 2,
               rest: {
                   value: 3,
                   rest: null
               }
           }
       };

       let listB = {
           value: 0,
           rest: {
               value: 2,
               rest: {
                   value: 3,
                   rest: null
               }
           }
       };
       expect(deepEqual(listA, listB)).toEqual(false);
   });
});