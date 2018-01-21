// Write a function countBS that takes a string as its argument & returns a number that indicates how many uppercase 'B' characters are in the string
//
// Next write a function called countChar that behaves like countBS, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase 'B' characters).
// Rewrite countBS to make a new function.

export const countBS = (String) => {
    let matches = String.match(/[B]/g);
    return matches.length;
};

export const countChar = (String, Char) => {
    let charToBeMatched = Char;
    let matches = String.match(charToBeMatched);
    return matches.length;
};
