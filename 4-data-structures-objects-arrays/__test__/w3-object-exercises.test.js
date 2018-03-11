import { listProperties, measureObject, deleteProperty, printObject, readingStatus } from '../w3-object-exercises';

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

  test("gets the length of an object", () => {
    expect(measureObject(student)).toEqual(3);
  });
});

describe("managing values of object properties", () => {
  const library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
    }];

  test("prints the reading status of properties", () => {
    const status = ["Bill Gates, The Road Ahead, true",
      "Steve Jobs, Walster Isaacson, true",
      "Suzanne Collins, Mockingjay: The Final Book of The Hunger Games, false"];
    expect(readingStatus(library)).toEqual(status);
  });
});
