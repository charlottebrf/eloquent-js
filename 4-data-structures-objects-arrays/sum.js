export const range = (start, end, step = 1) => {
    let list = [];
        for (let i = start; i <= end; i += step) {
            list.push(i);
        }
    return list;
};

export const sum = (array) => {
   return array.reduce((sum, n) => (sum + n), 0);
};