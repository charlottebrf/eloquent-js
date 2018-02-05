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
    // let arrayOfValues = Object.keys(list).map(e => list[e]);
    // return [...new Set(arrayOfValues)];
    let element = list;
    let results = [];
    while (element.rest !== null) {
        element = element.rest;
        results.push(element.value);
    }
    return results.unshift(list.value);
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
