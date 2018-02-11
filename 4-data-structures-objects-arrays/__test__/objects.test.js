import { object, returnObjectValues, returnOnlyValues} from '../object';

describe("returns a block", () => {
  test("returns a block", () => {
    expect(object).toEqual({"rest": {"value": "content2"}, "value": "content1"});
  });

  test("returns content of block", () => {
    expect(object.value).toEqual("content1");
  });

  test("returns content from a nested block", () => {
    expect(object.rest).toEqual({value: "content2"});
  });

  test("returns content from the block and value and nested block", () => {
    expect(returnObjectValues(object)).toEqual(["content1", {"value": "content2"}]);
  });

  test("returns content from the block and nested block", () => {
    expect(returnOnlyValues(object)).toEqual(["content2","content1"]);
  });
});
