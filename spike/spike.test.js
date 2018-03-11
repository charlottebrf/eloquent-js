import {reasonAndEffectiveDateToArray, transitionsToArray, concatArrays, data} from './spike';


//all keys are needed
describe('keys and values to a nested array', () => {
    const history = {
        'transitions': {
            'type': 'APPLY',
            'from': '21-03-18',
            'to': '21-03-19',
        },
        'effectiveDate': '04-09-19',
        'reason': 'GENERAL',
    };

    let reasonAndEffectiveDate = [['reason', 'GENERAL'], ['effectiveDate', '04-09-19']];
    let transitions = [['type', 'APPLY'], ['from', '21-03-18'], ['to', '21-03-19']];
    let concatonated = [['reason', 'GENERAL'], ['effectiveDate', '04-09-19'], ['type', 'APPLY'], ['from', '21-03-18'], ['to', '21-03-19']];

    test('puts the key & value pair of reason & effectiveDate into a nested array', () => {
        expect(reasonAndEffectiveDateToArray(history)).toEqual([['reason', 'GENERAL'], ['effectiveDate', '04-09-19']]);
    });

    test('puts the key & value pair of transitions value object into a nested array', () => {
        expect(transitionsToArray(history)).toEqual([['type', 'APPLY'], ['from', '21-03-18'], ['to', '21-03-19']]);
    });

    test('joins reasonAndEffectiveDate and transitions into a single array', () => {
        expect(concatArrays(reasonAndEffectiveDate, transitions)).toEqual(concatonated);
    });

    test('given an object returns a nested array of reason, effectiveDate & transition key & value pairs', () => {
        expect(data(history)).toEqual(concatonated);
    });
});

// there is only transitions


// there are only transitions + reasons


// there are only transitions + effectiveDate