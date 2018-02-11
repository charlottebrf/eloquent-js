import { listProperties, deleteProperty, printObject } from '../w3-object-exercises';

describe("managing objects", () => {
  const student = {
    name: "David Rayy",
    sclass: "VI",
    rollino: 12,
  };

  test("lists properties of an object", () => {
    expect(listProperties(student)).toEqual(["name", "sclass", "rollino"])
  });

  test("deletes a property of an object & prints the new structure", () => {
    const student1 = {
      name: "David Rayy",
      sclass: "VI",
    };

    let updatedObject = deleteProperty(student);
    expect(printObject(updatedObject)).toEqual(console.log(student1));
  });
});
