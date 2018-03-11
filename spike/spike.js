export const reasonAndEffectiveDateToArray = (object) => {
    let value1 = object['reason'];
    let value2 = object['effectiveDate'];
    return [['reason', value1], ['effectiveDate', value2]];
};

export const transitionsToArray = (object) => {
    let transitions = object['transitions'];
    let keys = Object.keys(transitions);
    let values = Object.values(transitions);

    return keys.map((element, index) => {
        return [element, values[index]];
    });
};

export const concatArrays = (array1, array2) => {
    return array1.concat(array2);
};

export const data = (object) => {
    let array1 = reasonAndEffectiveDateToArray(object);
    let array2 = transitionsToArray(object);
    return concatArrays(array1, array2);
};