import { reverseArray, reverseArrayInPlace} from '../reversing-an-array';

test('returns new array in inverse order from array given as a parameter', () => {
    expect(reverseArray([1,2,3,4,5])).toEqual([5,4,3,2,1]);
});

test('mutates given array in inverse order from array given as a parameter', () => {
   expect(reverseArrayInPlace([1,2,3,4,5])).toEqual([5,4,3,2,1]);
});
