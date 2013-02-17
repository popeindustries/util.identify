var element, objectUtil, expect;

// Make it work in node..
try {
  objectUtil = require('../index.js');
  expect = require('expect.js');
// .. or browser
} catch (err) {
  objectUtil = require('./util.object');
  expect = window.expect;
}

describe('util.object', function() {
  before(function() {
    element = document.createElement('div');
  });
  describe('isArray()', function() {
    it('should return true when passed an Array', function() {
      expect(objectUtil.isArray([])).to.be(true);
    });
    it('should return false when passed an Object', function() {
      expect(objectUtil.isArray({})).to.be(false);
    });
    it('should return false when passed a String', function() {
      expect(objectUtil.isArray('')).to.be(false);
    });
    it('should return false when passed a Number', function() {
      expect(objectUtil.isArray(9)).to.be(false);
    });
    it('should return false when passed a Function', function() {
      expect(objectUtil.isArray(objectUtil.isObject)).to.be(false);
    });
    it('should return false when passed NaN', function() {
      expect(objectUtil.isArray(NaN)).to.be(false);
    });
    it('should return false when passed an Element', function() {
      expect(objectUtil.isArray(element)).to.be(false);
    });
    it('should return false when passed a Boolean', function() {
      expect(objectUtil.isArray(true)).to.be(false);
    });
  });
  describe('isObject()', function() {
    it('should return true when passed an Object', function() {
      expect(objectUtil.isObject({})).to.be(true);
    });
    it('should return true when passed an Array', function() {
      expect(objectUtil.isObject([])).to.be(true);
    });
    it('should return false when passed a String', function() {
      expect(objectUtil.isObject('')).to.be(false);
    });
    it('should return false when passed a Number', function() {
      expect(objectUtil.isObject(9)).to.be(false);
    });
    it('should return true when passed a Function', function() {
      expect(objectUtil.isObject(objectUtil.isObject)).to.be(true);
    });
    it('should return false when passed NaN', function() {
      expect(objectUtil.isObject(NaN)).to.be(false);
    });
    it('should return false when passed an Element', function() {
      expect(objectUtil.isObject(element)).to.be(false);
    });
    it('should return false when passed a Boolean', function() {
      expect(objectUtil.isObject(true)).to.be(false);
    });
  });
  describe('isString()', function() {
    it('should return true when passed a String', function() {
      expect(objectUtil.isString('')).to.be(true);
    });
    it('should return false when passed an Array', function() {
      expect(objectUtil.isString([])).to.be(false);
    });
    it('should return false when passed an Object', function() {
      expect(objectUtil.isString({})).to.be(false);
    });
    it('should return false when passed a Number', function() {
      expect(objectUtil.isString(9)).to.be(false);
    });
    it('should return false when passed a Function', function() {
      expect(objectUtil.isString(objectUtil.isObject)).to.be(false);
    });
    it('should return false when passed NaN', function() {
      expect(objectUtil.isString(NaN)).to.be(false);
    });
    it('should return false when passed an Element', function() {
      expect(objectUtil.isString(element)).to.be(false);
    });
    it('should return false when passed a Boolean', function() {
      expect(objectUtil.isString(true)).to.be(false);
    });
  });
  describe('isNumber()', function() {
    it('should return true when passed a Number', function() {
      expect(objectUtil.isNumber(9)).to.be(true);
    });
    it('should return false when passed an Array', function() {
      expect(objectUtil.isNumber([])).to.be(false);
    });
    it('should return false when passed an Object', function() {
      expect(objectUtil.isNumber({})).to.be(false);
    });
    it('should return false when passed a String', function() {
      expect(objectUtil.isNumber('9')).to.be(false);
    });
    it('should return false when passed a Function', function() {
      expect(objectUtil.isNumber(objectUtil.isObject)).to.be(false);
    });
    it('should return false when passed an Element', function() {
      expect(objectUtil.isNumber(element)).to.be(false);
    });
    it('should return false when passed a Boolean', function() {
      expect(objectUtil.isNumber(true)).to.be(false);
    });
  });
  describe('isFunction()', function() {
    it('should return true when passed a Function', function() {
      expect(objectUtil.isFunction(objectUtil.isObject)).to.be(true);
    });
    it('should return false when passed an Array', function() {
      expect(objectUtil.isFunction([])).to.be(false);
    });
    it('should return false when passed an Object', function() {
      expect(objectUtil.isFunction({})).to.be(false);
    });
    it('should return false when passed a String', function() {
      expect(objectUtil.isFunction('')).to.be(false);
    });
    it('should return false when passed a Number', function() {
      expect(objectUtil.isFunction(9)).to.be(false);
    });
    it('should return false when passed NaN', function() {
      expect(objectUtil.isFunction(NaN)).to.be(false);
    });
    it('should return false when passed an Element', function() {
      expect(objectUtil.isFunction(element)).to.be(false);
    });
    it('should return false when passed a Boolean', function() {
      expect(objectUtil.isFunction(true)).to.be(false);
    });
  });
  describe('isNaN()', function() {
    it('should return true when passed NaN', function() {
      expect(objectUtil.isNaN(NaN)).to.be(true);
    });
    it('should return false when passed an Array', function() {
      expect(objectUtil.isNaN([])).to.be(false);
    });
    it('should return false when passed an Object', function() {
      expect(objectUtil.isNaN({})).to.be(false);
    });
    it('should return false when passed a String', function() {
      expect(objectUtil.isNaN('')).to.be(false);
    });
    it('should return false when passed a Number', function() {
      expect(objectUtil.isNaN(9)).to.be(false);
    });
    it('should return false when passed a Function', function() {
      expect(objectUtil.isNaN(objectUtil.isObject)).to.be(false);
    });
    it('should return false when passed an Element', function() {
      expect(objectUtil.isNaN(element)).to.be(false);
    });
    it('should return false when passed a Boolean', function() {
      expect(objectUtil.isNaN(true)).to.be(false);
    });
  });
  describe('isElement()', function() {
    it('should return true when passed an element', function() {
      expect(objectUtil.isElement(element)).to.be(true);
    });
    it('should return false when passed an Array', function() {
      expect(objectUtil.isElement([])).to.be(false);
    });
    it('should return false when passed an Object', function() {
      expect(objectUtil.isElement({})).to.be(false);
    });
    it('should return false when passed a String', function() {
      expect(objectUtil.isElement('')).to.be(false);
    });
    it('should return false when passed a Number', function() {
      expect(objectUtil.isElement(9)).to.be(false);
    });
    it('should return false when passed a Function', function() {
      expect(objectUtil.isElement(objectUtil.isObject)).to.be(false);
    });
    it('should return false when passed NaN', function() {
      expect(objectUtil.isElement(NaN)).to.be(false);
    });
    it('should return false when passed a Boolean', function() {
      expect(objectUtil.isElement(true)).to.be(false);
    });
  });
  describe('extend()', function() {
    var obj;
    beforeEach(function() {
      obj = {one:1, two:2};
    });
    it('should return the passed in object with properties copied from 1 other object', function() {
      var result = objectUtil.extend(obj, {three:3});
      expect(result).to.be(obj);
      expect(result).to.eql({one:1, two:2, three:3});
    });
    it('should return the passed in object with properties copied from 2 other objects', function() {
      var result = objectUtil.extend(obj, {three:3}, {four:4});
      expect(result).to.be(obj);
      expect(objectUtil.extend(obj)).to.eql({one:1, two:2, three:3, four:4});
    });
    it('should return the passed in object if no addition objects are passed', function() {
      var result = objectUtil.extend(obj);
      expect(result).to.be(obj);
      expect(result).to.eql({one:1, two:2});
    });
  });
  describe('objectify()', function() {
    it('should return an object containing the property and value of the passed in key/value pair', function() {
      expect(objectUtil.objectify('key', 'value')).to.eql({key:"value"});
    });
  });
});
