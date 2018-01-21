import { range } from '../sum';

test('returns all the numbers from an array containing all the numbers from start up to & including end', () => {
    expect(range(1, 5)).toEqual([1,2,3,4,5]);
});