export const range = (start, end) => {
    let list = [];
    for (let i = start; i <= end; i++) {
        list.push(i);
    }
    return list;
};

export const sum = (array) => {
   return array.reduce((sum, n) => (sum += n), 0);
};