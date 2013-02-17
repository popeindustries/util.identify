var objectUtil, expect, element;

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
  describe('isObject()', function() {
    it('should return true when passed an Object', function() {
      return expect(objectUtil.isObject({})).to.be(true);
    });
    it('should return true when passed an Array', function() {
      return expect(objectUtil.isObject([])).to.be(true);
    });
    it('should return true when passed a Function', function() {
      return expect(objectUtil.isObject(objectUtil.isObject)).to.be(true);
    });
    it('should return false when passed a String', function() {
      return expect(objectUtil.isObject('')).to.be(false);
    });
    return it('should return false when passed a Number', function() {
      return expect(objectUtil.isObject(9)).to.be(false);
    });
  });
  describe('isArray()', function() {
    it('should return true when passed an Array', function() {
      return expect(objectUtil.isArray([])).to.be(true);
    });
    it('should return false when passed an Object', function() {
      return expect(objectUtil.isArray({})).to.be(false);
    });
    it('should return false when passed a Function', function() {
      return expect(objectUtil.isArray(objectUtil.isObject)).to.be(false);
    });
    it('should return false when passed a String', function() {
      return expect(objectUtil.isArray('')).to.be(false);
    });
    return it('should return false when passed a Number', function() {
      return expect(objectUtil.isArray(9)).to.be(false);
    });
  });
  describe('isString()', function() {
    it('should return true when passed a String', function() {
      return expect(objectUtil.isString('')).to.be(true);
    });
    it('should return false when passed an Array', function() {
      return expect(objectUtil.isString([])).to.be(false);
    });
    it('should return false when passed an Object', function() {
      return expect(objectUtil.isString({})).to.be(false);
    });
    it('should return false when passed a Function', function() {
      return expect(objectUtil.isString(objectUtil.isObject)).to.be(false);
    });
    return it('should return false when passed a Number', function() {
      return expect(objectUtil.isString(9)).to.be(false);
    });
  });
  describe('isNumber()', function() {
    it('should return true when passed a Number', function() {
      return expect(objectUtil.isNumber(9)).to.be(true);
    });
    it('should return false when passed a String', function() {
      return expect(objectUtil.isNumber('9')).to.be(false);
    });
    it('should return false when passed an Array', function() {
      return expect(objectUtil.isNumber([])).to.be(false);
    });
    it('should return false when passed an Object', function() {
      return expect(objectUtil.isNumber({})).to.be(false);
    });
    return it('should return false when passed a Function', function() {
      return expect(objectUtil.isNumber(objectUtil.isObject)).to.be(false);
    });
  });
  describe('isFunction()', function() {
    it('should return true when passed a Function', function() {
      return expect(objectUtil.isFunction(objectUtil.isObject)).to.be(true);
    });
    it('should return false when passed a Number', function() {
      return expect(objectUtil.isFunction(9)).to.be(false);
    });
    it('should return false when passed a String', function() {
      return expect(objectUtil.isFunction('')).to.be(false);
    });
    it('should return false when passed an Array', function() {
      return expect(objectUtil.isFunction([])).to.be(false);
    });
    return it('should return false when passed an Object', function() {
      return expect(objectUtil.isFunction({})).to.be(false);
    });
  });
  return describe('isNaN()', function() {
    it('should return true when passed NaN', function() {
      return expect(objectUtil.isNaN(NaN)).to.be(true);
    });
    it('should return false when passed a Function', function() {
      return expect(objectUtil.isNaN(objectUtil.isObject)).to.be(false);
    });
    it('should return false when passed a Number', function() {
      return expect(objectUtil.isNaN(9)).to.be(false);
    });
    it('should return false when passed a String', function() {
      return expect(objectUtil.isNaN('')).to.be(false);
    });
    it('should return false when passed an Array', function() {
      return expect(objectUtil.isNaN([])).to.be(false);
    });
    return it('should return false when passed an Object', function() {
      return expect(objectUtil.isNaN({})).to.be(false);
    });
  });
});
