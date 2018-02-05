export const deepEqual = (toBeCompared1, toBeCompared2) => {
    let type1 = typeof toBeCompared1;
    let type2 = typeof toBeCompared2;
    if (toBeCompared1 === null && toBeCompared2 === null) {
        return false;
    } else if (toBeCompared1 === toBeCompared2) {
        return true;
    } else if (type1 === 'object' && type2 === 'object') {
        return Object.values(toBeCompared1) === Object.values(toBeCompared2);
    } else {
        return false;
    }
};