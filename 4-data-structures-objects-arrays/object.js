export const object = {
  value: "content1",
  rest:
    { value:
        "content2",
      rest: "content3",
    },
};

export const returnObjectValues = (object) => {
  return Object.values(object);
};

export const returnOnlyValues = (object) => {
  let result = [];
    let restValues = (Object.values(object.rest));
    let valueValues = (Object.values(object.value));
    valueValues = valueValues.join("");
    result.push(restValues, valueValues);

  let flattened = result.reduce(
    ( rest, values ) => rest.concat(values),
    []
  );
  return flattened;
};

