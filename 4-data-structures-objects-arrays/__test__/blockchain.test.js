function block(value) {
  return {
    content: value,
    rest: null,
    push: function(value) {
      if(this.rest == null) {
        this.rest = block(value);
      } else {
        this.rest.push(value);
      }
    },
    toArray: function() {
      if(this.rest == null) {
        return [this.content]
      } else {
        return [this.content].concat(this.rest.toArray());
      }
    }
  }
}

function length(block) {
  if (block.rest != null) {
    return 1 + length(block.rest)
  } else {
    return 1;
  }
}

describe("a blockchain", () => {
  it("starts with a content and a length of 1", () => {
    let newChain = block(23);

    expect(length(newChain)).toEqual(1);
  });


  it("push a new value into the chain", () => {
    let newChain = block(23);
    newChain.push(77);

    expect(length(newChain)).toEqual(2);
  });

  it("push many things into the chain", () => {
    let newChain = block(23);
    newChain.push(77);
    newChain.push(42);
    newChain.push(42);
    newChain.push(42);
    newChain.push(42);
    newChain.push(42);
    newChain.push(42);
    newChain.push(42);


    expect(length(newChain)).toEqual(9);
  });

  it("push more things into the chain", () => {
    let newChain = block(23);
    newChain.push(77);
    newChain.push(42);

    expect(newChain.toArray()).toEqual([23, 77, 42]);
  });

});
