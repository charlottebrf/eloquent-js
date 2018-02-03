export const arrayToList = (array) => {
    return  {
        value: array[0],
        rest: {
            value: array[1],
            rest: {
                value: array[2],
                rest: null
            }
        }
    }
};

export const listToArray = (list) => {
    let first = { ...list }.value;
    let second = { ...list }.rest.value;
    let third = { ...list }.rest.rest.value;
    return [first, second, third];
};

export const addElementToFrontOfList = (element, list) => {
   return { element, ...list }
};

export const nth = (number, list) => {
    let values = Object.values(list);
    if (values[number] === null || undefined ) {
        return undefined;
    } else {
        return values[number];
    }
};
