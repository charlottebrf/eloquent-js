// Figure out if a positive whole number is odd or even:
// * Zero is even
// * One is odd
// * For any other number N, its evenness is the same as N-2
// Create function isEven, function should accept a number parameter & return a boolean

export const isEven = (positiveInteger) => {
    if (positiveInteger === 0 ) {
        return true;
    } else if (positiveInteger === 1) {
        return false;
    } else {
        return isEven(positiveInteger - 2);
    }
};