// Figure out if a positive whole number is odd or even:
// * Zero is even
// * One is odd
// * For any other number N, its evenness is the same as N-2
// Create function isEven, function should accept a number parameter & return a boolean

export const isEven = (positiveInteger) => {
    let maybeEven = positiveInteger - 2;
    if (positiveInteger % 2 === 0)
        return true;
    else if (positiveInteger % 2 != 0)
        return false;
    else
        return isEven(maybeEven);
};