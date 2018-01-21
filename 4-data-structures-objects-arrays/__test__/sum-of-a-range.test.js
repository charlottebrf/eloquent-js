import { range, sum } from '../sum';

test('returns all the numbers from an array containing all the numbers from start up to & including end', () => {
    expect(range(1, 5)).toEqual([1,2,3,4,5]);
});

test('returns the sum of an array of numbers', () => {
   expect(sum([1,2,3,4,5])).toBe(15);
});

test('when given an optional third parameter, returns array from start up to end & including end using step', () => {
    expect(range(1, 10, 2)).toEqual([1,3,5,7,9]);
});

test.skip('when given an optional negative third parameter, returns array from start up to end & including end using step', () => {
    expect(range(5, 2, -1)).toEqual([5,4,3,2]);
});