import {arrayToList, listToArray, addElementToFrontOfList, nth} from '../lists';

describe('arrays', () => {
    test('transforms an array to an embedded list', () => {
        let list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };
        expect(arrayToList([1, 2, 3])).toEqual(list);
    });

    test('transforms an embedded list to an array', () => {
        let array = [1, 2, 3];
        let list = {
            value: 1,
            rest:
                {
                    value: 2,
                    rest:
                        {value: 3}
                }
        };
        expect(listToArray(list)).toEqual(array);
    });

    test('adds an element to the front of the list', () => {
        let element = 0;

        let list = {
            element: element,
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        let list2 = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(addElementToFrontOfList(element, list2)).toEqual(list);
    });

    test('returns the element of the number given from the list', () => {
       let number = 1;

        let list2 = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        let element = {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        };

        expect(nth(number, list2)).toEqual(element);
    });

    test('returns undefined if the element of the number does not exist', () => {
        let number = 3;

        let list2 = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(nth(number, list2)).toEqual(undefined);
    });
});
