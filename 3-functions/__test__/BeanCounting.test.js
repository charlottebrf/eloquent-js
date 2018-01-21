import { countBS, countChar } from '../BeanCounting';

test('returns number of uppercase B chars in a string', () => {
    expect(countBS('Bean')).toBe(1);
});

test('returns number of specified chars in a string', () => {
   expect(countChar('Bean', 'a')).toBe(1);
});

