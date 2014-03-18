A collection of Object identification functions.

## Usage
```javascript
var id = require('util.identify');

id.isArray([]); // => true
id.isObject({}); // => true
id.isString(''); // => true
id.isNumber(9); // => true
id.isFunction(function(){}); // => true
id.isElement(document.getElementById('myElement')); // => true
id.isBoolean(true); // => true
```
