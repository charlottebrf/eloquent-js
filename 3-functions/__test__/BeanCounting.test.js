import { countBS } from '../BeanCounting';

test('returns true when even', () => {
    expect(countBS('Bean')).toBe(1);
});

