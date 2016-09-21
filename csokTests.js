const assert = require('chai').assert;
const csok = require('./csok');

const inlineStyles = {
  one: {
    color: 'red',
    float: 'left',
  },
  two: {
    color: 'blue',
    textDecoration: 'underline',
  },
}

const classNames = {
  one: 'one_class',
  two: 'two_class',
}

const res = csok(inlineStyles.one, inlineStyles.two);

console.log(Object.keys(res).length);

describe('Cascading Style Object Keys', () => {
  describe('When provided inline style object keys as params', () => {
    it('should return an object', () => {
      assert.typeOf(csok(inlineStyles.one, inlineStyles.two), 'object');
    });
    it('should cascade the styles', () => {
      assert.equal(csok(inlineStyles.one, inlineStyles.two).color, 'blue');
    });
    it('should combine the keys', () => {
      assert.equal(Object.keys(csok(inlineStyles.one, inlineStyles.two)).length, 3);
    });
  });
  describe('When provided class name strings as params', () => {
    it('should retun a string', () => {
      assert.typeOf(csok(classNames.one, classNames.two), 'string');
    });
    it('should concatenate the classnames with spaces', () => {
      assert.equal(csok(classNames.one, classNames.two), 'one_class two_class');
    });
  });
});
