assert = require('chai').assert;

function sayHi(name) {
  if (!name || typeof name !== 'string') {
    return 'Hi!';
  } else {
    return `Hi, ${name}!`;
  }
}

// Mocha testing

// First we label the part of code we are testing
describe('sayHi()', () => {

  // Then we describe the functionality we are testing
  it('should return a string', () => {
    // Then we make the assertions
    assert.typeOf(sayHi(), 'string');
  });

  // We can test more functionality
  it('should insert name into return string', () => {
    assert.equal(sayHi('Ned'), 'Hi, Ned!');
  });

  it('should return simple response with no or invalid parameter', () => {
    assert.equal(sayHi(), 'Hi!');
    // We can use multiple asserts to test expected output
    assert.notEqual(sayHi(4), 'Hi, 4!');
  });
});
