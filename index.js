/**
 * Test if 'obj' is an Array
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isArray = function(obj) {
	if (Array.isArray) {
		return Array.isArray(obj);
	} else {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}
};

/**
 * Test if 'obj' is an Object
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isObject = function(obj) {
	return obj === Object(obj);
};

/**
 * Test if 'obj' is a String
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isString = function(obj) {
	return Object.prototype.toString.call(obj) === '[object String]';
};

/**
 * Test if 'obj' is a Number
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isNumber = function(obj) {
	return Object.prototype.toString.call(obj) === '[object Number]';
};

/**
 * Test if 'obj' is a Function
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isFunction = function(obj) {
	return Object.prototype.toString.call(obj) === '[object Function]';
};

/**
 * Test if 'obj' is NaN
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isNaN = function(obj) {
	return obj !== obj;
};

/**
 * Test if 'obj' is an Element
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isElement = function(obj) {
	return !!((obj != null ? obj.nodeType : null) === 1);
};

/**
 * Test if 'obj' is a Boolean
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isBoolean = function(obj) {
	return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
};

/**
 * Extend an 'obj' with additional properties
 * @param {Object} obj
 * @param {Object} ...
 * @returns {Object}
 */
exports.extend = function(obj) {
	var argObjs = (2 <= arguments.length) ? Array.slice.call(arguments, 1) : []
		, argObj;
	for (var i = 0, n = argObjs.length; i < n; i++) {
		argObj = argObjs[i];
		for (var prop in argObj) {
			obj[prop] = argObj[prop];
		}
	}
	return obj;
};

/**
 * Convert a 'key' 'value' pair into an object
 * @param {String} key
 * @param {*} value
 * @returns {Object}
 */
exports.objectify = function(key, value) {
	var o = {};
	o[key] = value;
	return o;
};
