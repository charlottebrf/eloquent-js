export const reverseArray = (arrayToBeInversed) => {
    let output = [];
    for(let i = arrayToBeInversed.length; i > 0; i--) {
        output.push(arrayToBeInversed.pop());
    }
    return output;
};

export const reverseArrayInPlace = (arrayToBeInversed) => {
    return arrayToBeInversed.sort(() => 1);
};