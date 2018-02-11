export const listProperties = (object) => {
  return Object.keys(object);
};

export const deleteProperty = (object) => {
  let finalKey = object[listProperties(object)[listProperties(object).length - 1]];
  delete object.finalKey;
  return object;
};

export const printObject = (object) => {
  return console.log(object);
};

export const measureObject = (object) => {
  return listProperties(object).length;
};
