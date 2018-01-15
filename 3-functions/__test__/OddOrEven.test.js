const isEven = require('../OddOrEven');

test('returns true when even', () => {
    expect(isEven(2)).toBe(true);
});

test('returns false when odd', () => {
    expect(isEven(1)).toBe(false);
});

test('returns false when odd', () => {
    expect(isEven(50)).toBe(false);
});

test('returns false when odd', () => {
    expect(isEven(75)).toBe(false);
});