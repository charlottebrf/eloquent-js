// Figure out if a positive whole number is odd or even:
// * Zero is even
// * One is odd
// * For any other number N, its evenness is the same as N-2
// Create function isEven, function should accept a number parameter & return a boolean

export const isEven = (positiveInteger) => {
    return positiveInteger % 2 === 0;
};