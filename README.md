[![browser support](http://ci.testling.com/popeindustries/util.object.png)](http://ci.testling.com/popeindustries/util.object)
A collection of Object utility functions.

## Usage
```javascript
var objectUtils = require('util.object');

objectUtils.isArray([]); // => true
objectUtils.isObject({}); // => true
objectUtils.isString(''); // => true
objectUtils.isNumber(9); // => true
objectUtils.isFunction(function(){}); // => true
objectUtils.isElement(document.getElementById('myElement')); // => true
objectUtils.isBoolean(true); // => true
objectUtils.extend({}, {one:1}, {two:2}); // => {one:1, two:2}
objectUtils.objectify('key', 1); // => {key:1}
```