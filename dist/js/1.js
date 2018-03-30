webpackJsonp([1],{

/***/ 311:
/* no static exports found */
/* all exports used */
/*!****************************!*\
  !*** ./src/pages/Chat.vue ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Chat.vue */ 380),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-af213158"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Chat.vue */ 417),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\yotta\\college\\public_html\\assets\\yunxin\\src\\pages\\Chat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Chat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af213158", Component.options)
  } else {
    hotAPI.reload("data-v-af213158", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 339:
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./~/axios/lib/utils.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ 345);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 340:
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./~/axios/lib/defaults.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ 339);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 362);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 341);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 341);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 53)))

/***/ }),

/***/ 341:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/adapters/xhr.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./../utils */ 339);
var settle = __webpack_require__(/*! ./../core/settle */ 354);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 357);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 363);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 361);
var createError = __webpack_require__(/*! ../core/createError */ 344);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ 356);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 359);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../process/browser.js */ 53)))

/***/ }),

/***/ 342:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./~/axios/lib/cancel/Cancel.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 343:
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./~/axios/lib/cancel/isCancel.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 344:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/axios/lib/core/createError.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 353);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),

/***/ 345:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/bind.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 346:
/* no static exports found */
/* exports used: default */
/*!******************************!*\
  !*** ./src/configs/emoji.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _index = __webpack_require__(/*! ./index */ 13);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiBaseUrl = "http://yx-web.nosdn.127.net/webdoc/h5/emoji"; /* 表情原图配置文件 */


var emojiList = {
  "emoji": {
    "[大笑]": { file: "emoji_0.png" }, "[可爱]": { file: "emoji_01.png" }, "[色]": { file: "emoji_02.png" }, "[嘘]": { file: "emoji_03.png" }, "[亲]": { file: "emoji_04.png" }, "[呆]": { file: "emoji_05.png" }, "[口水]": { file: "emoji_06.png" }, "[汗]": { file: "emoji_145.png" }, "[呲牙]": { file: "emoji_07.png" }, "[鬼脸]": { file: "emoji_08.png" }, "[害羞]": { file: "emoji_09.png" }, "[偷笑]": { file: "emoji_10.png" }, "[调皮]": { file: "emoji_11.png" }, "[可怜]": { file: "emoji_12.png" }, "[敲]": { file: "emoji_13.png" }, "[惊讶]": { file: "emoji_14.png" }, "[流感]": { file: "emoji_15.png" }, "[委屈]": { file: "emoji_16.png" }, "[流泪]": { file: "emoji_17.png" }, "[嚎哭]": { file: "emoji_18.png" }, "[惊恐]": { file: "emoji_19.png" }, "[怒]": { file: "emoji_20.png" }, "[酷]": { file: "emoji_21.png" }, "[不说]": { file: "emoji_22.png" }, "[鄙视]": { file: "emoji_23.png" }, "[阿弥陀佛]": { file: "emoji_24.png" }, "[奸笑]": { file: "emoji_25.png" }, "[睡着]": { file: "emoji_26.png" }, "[口罩]": { file: "emoji_27.png" }, "[努力]": { file: "emoji_28.png" }, "[抠鼻孔]": { file: "emoji_29.png" }, "[疑问]": { file: "emoji_30.png" }, "[怒骂]": { file: "emoji_31.png" }, "[晕]": { file: "emoji_32.png" }, "[呕吐]": { file: "emoji_33.png" }, "[拜一拜]": { file: "emoji_160.png" }, "[惊喜]": { file: "emoji_161.png" }, "[流汗]": { file: "emoji_162.png" }, "[卖萌]": { file: "emoji_163.png" }, "[默契眨眼]": { file: "emoji_164.png" }, "[烧香拜佛]": { file: "emoji_165.png" }, "[晚安]": { file: "emoji_166.png" }, "[强]": { file: "emoji_34.png" }, "[弱]": { file: "emoji_35.png" }, "[OK]": { file: "emoji_36.png" }, "[拳头]": { file: "emoji_37.png" }, "[胜利]": { file: "emoji_38.png" }, "[鼓掌]": { file: "emoji_39.png" }, "[握手]": { file: "emoji_200.png" }, "[发怒]": { file: "emoji_40.png" }, "[骷髅]": { file: "emoji_41.png" }, "[便便]": { file: "emoji_42.png" }, "[火]": { file: "emoji_43.png" }, "[溜]": { file: "emoji_44.png" }, "[爱心]": { file: "emoji_45.png" }, "[心碎]": { file: "emoji_46.png" }, "[钟情]": { file: "emoji_47.png" }, "[唇]": { file: "emoji_48.png" }, "[戒指]": { file: "emoji_49.png" }, "[钻石]": { file: "emoji_50.png" }, "[太阳]": { file: "emoji_51.png" }, "[有时晴]": { file: "emoji_52.png" }, "[多云]": { file: "emoji_53.png" }, "[雷]": { file: "emoji_54.png" }, "[雨]": { file: "emoji_55.png" }, "[雪花]": { file: "emoji_56.png" }, "[爱人]": { file: "emoji_57.png" }, "[帽子]": { file: "emoji_58.png" }, "[皇冠]": { file: "emoji_59.png" }, "[篮球]": { file: "emoji_60.png" }, "[足球]": { file: "emoji_61.png" }, "[垒球]": { file: "emoji_62.png" }, "[网球]": { file: "emoji_63.png" }, "[台球]": { file: "emoji_64.png" }, "[咖啡]": { file: "emoji_65.png" }, "[啤酒]": { file: "emoji_66.png" }, "[干杯]": { file: "emoji_67.png" }, "[柠檬汁]": { file: "emoji_68.png" }, "[餐具]": { file: "emoji_69.png" }, "[汉堡]": { file: "emoji_70.png" }, "[鸡腿]": { file: "emoji_71.png" }, "[面条]": { file: "emoji_72.png" }, "[冰淇淋]": { file: "emoji_73.png" }, "[沙冰]": { file: "emoji_74.png" }, "[生日蛋糕]": { file: "emoji_75.png" }, "[蛋糕]": { file: "emoji_76.png" }, "[糖果]": { file: "emoji_77.png" }, "[葡萄]": { file: "emoji_78.png" }, "[西瓜]": { file: "emoji_79.png" }, "[光碟]": { file: "emoji_80.png" }, "[手机]": { file: "emoji_81.png" }, "[电话]": { file: "emoji_82.png" }, "[电视]": { file: "emoji_83.png" }, "[声音开启]": { file: "emoji_84.png" }, "[声音关闭]": { file: "emoji_85.png" }, "[铃铛]": { file: "emoji_86.png" }, "[锁头]": { file: "emoji_87.png" }, "[放大镜]": { file: "emoji_88.png" }, "[灯泡]": { file: "emoji_89.png" }, "[锤头]": { file: "emoji_90.png" }, "[烟]": { file: "emoji_91.png" }, "[炸弹]": { file: "emoji_92.png" }, "[枪]": { file: "emoji_93.png" }, "[刀]": { file: "emoji_94.png" }, "[药]": { file: "emoji_95.png" }, "[打针]": { file: "emoji_96.png" }, "[钱袋]": { file: "emoji_97.png" }, "[钞票]": { file: "emoji_98.png" }, "[银行卡]": { file: "emoji_99.png" }, "[手柄]": { file: "emoji_100.png" }, "[麻将]": { file: "emoji_101.png" }, "[调色板]": { file: "emoji_102.png" }, "[电影]": { file: "emoji_103.png" }, "[麦克风]": { file: "emoji_104.png" }, "[耳机]": { file: "emoji_105.png" }, "[音乐]": { file: "emoji_106.png" }, "[吉他]": { file: "emoji_107.png" }, "[火箭]": { file: "emoji_108.png" }, "[飞机]": { file: "emoji_109.png" }, "[火车]": { file: "emoji_110.png" }, "[公交]": { file: "emoji_111.png" }, "[轿车]": { file: "emoji_112.png" }, "[出租车]": { file: "emoji_113.png" }, "[警车]": { file: "emoji_114.png" }, "[自行车]": { file: "emoji_115.png" }
  }
};

for (var emoji in emojiList) {
  var emojiItem = emojiList[emoji];
  for (var key in emojiItem) {
    var item = emojiItem[key];
    item.img = emojiBaseUrl + "/" + emoji + "/" + item.file;
  }
}

var pinupList = {
  'ajmd': {},
  'xxy': {},
  'lt': {}
};

for (var i = 1; i <= 48; i++) {
  var _key = 'ajmd0' + (i >= 10 ? i : '0' + i);
  pinupList['ajmd'][_key] = { file: _key + '.png' };
}
for (var _i = 1; _i <= 40; _i++) {
  var _key2 = 'xxy0' + (_i >= 10 ? _i : '0' + _i);
  pinupList['xxy'][_key2] = { file: _key2 + '.png' };
}
for (var _i2 = 1; _i2 <= 20; _i2++) {
  var _key3 = 'lt0' + (_i2 >= 10 ? _i2 : '0' + _i2);
  pinupList['lt'][_key3] = { file: _key3 + '.png' };
}

for (var _emoji in pinupList) {
  var _emojiItem = pinupList[_emoji];
  for (var _key4 in _emojiItem) {
    var _item = _emojiItem[_key4];
    _item.img = emojiBaseUrl + "/" + _emoji + "/" + _item.file;
  }
}

exports.default = {
  emojiList: emojiList,
  pinupList: pinupList
};
module.exports = exports["default"];

/***/ }),

/***/ 347:
/* no static exports found */
/* exports used: default */
/*!**************************!*\
  !*** ./~/axios/index.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ 348);

/***/ }),

/***/ 348:
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./~/axios/lib/axios.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 339);
var bind = __webpack_require__(/*! ./helpers/bind */ 345);
var Axios = __webpack_require__(/*! ./core/Axios */ 350);
var defaults = __webpack_require__(/*! ./defaults */ 340);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 342);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 349);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 343);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 364);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 349:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/axios/lib/cancel/CancelToken.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ 342);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 350:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./~/axios/lib/core/Axios.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ 340);
var utils = __webpack_require__(/*! ./../utils */ 339);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 351);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 352);
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 360);
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 358);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 351:
/* no static exports found */
/* all exports used */
/*!************************************************!*\
  !*** ./~/axios/lib/core/InterceptorManager.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 339);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 352:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/axios/lib/core/dispatchRequest.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 339);
var transformData = __webpack_require__(/*! ./transformData */ 355);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 343);
var defaults = __webpack_require__(/*! ../defaults */ 340);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 353:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./~/axios/lib/core/enhanceError.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),

/***/ 354:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./~/axios/lib/core/settle.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 344);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),

/***/ 355:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/axios/lib/core/transformData.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 339);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 356:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/btoa.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 357:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/axios/lib/helpers/buildURL.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 339);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 358:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./~/axios/lib/helpers/combineURLs.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),

/***/ 359:
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./~/axios/lib/helpers/cookies.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 339);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 360:
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 361:
/* no static exports found */
/* all exports used */
/*!************************************************!*\
  !*** ./~/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 339);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 362:
/* no static exports found */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 339);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 363:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 339);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),

/***/ 364:
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./~/axios/lib/helpers/spread.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 365:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatList.vue ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ../../utils */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs__ = __webpack_require__(/*! ../../configs */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__configs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_emoji__ = __webpack_require__(/*! ../../configs/emoji */ 346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__configs_emoji__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




//import ChatItem from './ChatItem'

/* harmony default export */ __webpack_exports__["default"] = ({
  //  components: {
  //    ChatItem
  //  },
  props: {
    type: String, // 类型，chatroom, session
    canLoadMore: [String, Boolean],
    rawMsg: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isRobot: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    msglist: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    userInfos: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    myInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
    // robotInfos: {
    //   type: Object,
    //   default () {
    //     return {}
    //   }
    // }
  },
  data: function data() {
    var _ref;

    return _ref = {
      isFullImgShow: false,
      msgLoadedTimer: null

    }, _defineProperty(_ref, 'isFullImgShow', false), _defineProperty(_ref, 'currentAudio', null), _defineProperty(_ref, 'page_showAudio', true), _defineProperty(_ref, 'teacherId', this.$store.state.haha.teacher_im), _defineProperty(_ref, 'showScrollBox', false), _ref;
  },

  computed: {
    robotInfos: function robotInfos() {
      return this.$store.state.robotInfos;
    }
  },
  beforeMount: function beforeMount() {
    var item = Object.assign({}, this.rawMsg);
    // 标记用户，区分聊天室、普通消息
    if (this.type === 'session') {
      if (item.flow === 'in') {
        if (item.type === 'robot' && item.content && item.content.msgOut) {
          // 机器人下行消息
          var robotAccid = item.content.robotAccid;
          item.avatar = this.robotInfos[robotAccid].avatar;
          item.isRobot = true;
          item.link = '#/namecard/' + robotAccid;
        } else if (item.from !== this.$store.state.userUID) {
          item.avatar = this.userInfos[item.from] && this.userInfos[item.from].avatar || __WEBPACK_IMPORTED_MODULE_1__configs___default.a.defaultUserIcon;
          item.link = '#/namecard/' + item.from;
        } else {
          item.avatar = this.myInfo.avatar;
        }
      } else if (item.flow === 'out') {
        item.avatar = this.myInfo.avatar;
      }
    } else {
      // 标记时间，聊天室中
      item.showTime = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.formatDate(item.time);
    }
    if (item.type === 'timeTag') {
      // 标记发送的时间
      item.showText = item.text;
    } else if (item.type === 'text') {
      // 文本消息
      item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.escape(item.text);
      if (/\[[^\]]+\]/.test(item.showText)) {
        var emojiItems = item.showText.match(/\[[^\]]+\]/g);
        emojiItems.forEach(function (text) {
          var emojiCnt = __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.emojiList.emoji;
          if (emojiCnt[text]) {
            item.showText = item.showText.replace(text, '<img class="emoji-small" src="' + emojiCnt[text].img + '">');
          }
        });
      }
    } else if (item.type === 'custom') {
      var content = JSON.parse(item.content);
      // type 1 为猜拳消息
      if (content.type === 1) {
        var data = content.data;
        var resourceUrl = __WEBPACK_IMPORTED_MODULE_1__configs___default.a.resourceUrl;
        // item.showText = `<img class="emoji-middle" src="${resourceUrl}/im/play-${data.value}.png">`
        item.type = 'custom-type1';
        item.imgUrl = resourceUrl + '/im/play-' + data.value + '.png';
        // type 3 为贴图表情
      } else if (content.type === 3) {
        var _data = content.data;
        var emojiCnt = '';
        if (__WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.pinupList[_data.catalog]) {
          emojiCnt = __WEBPACK_IMPORTED_MODULE_2__configs_emoji___default.a.pinupList[_data.catalog][_data.chartlet];
          // item.showText = `<img class="emoji-big" src="${emojiCnt.img}">`
          item.type = 'custom-type3';
          item.imgUrl = '' + emojiCnt.img;
        }
      } else {
        item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.parseCustomMsg(item);
        if (item.showText !== '[自定义消息]') {
          item.showText += ',请到手机或电脑客户端查看';
        }
      }
    } else if (item.type === 'image') {
      // 原始图片全屏显示
      item.originLink = item.file.url;
    } else if (item.type === 'video') {
      // ...
    } else if (item.type === 'audio') {
      item.audioSrc = item.file.mp3Url;
      item.showText = Math.round(item.file.dur / 1000) + '" 点击播放';
    } else if (item.type === 'file') {
      item.fileLink = item.file.url;
      item.showText = item.file.name;
    } else if (item.type === 'notification') {
      //对于系统通知，更新下用户信息的状态
      item.showText = __WEBPACK_IMPORTED_MODULE_0__utils___default.a.generateChatroomSysMsg(item);
    } else if (item.type === 'tip') {
      //对于系统通知，更新下用户信息的状态
      item.showText = item.tip;
    } else if (item.type === 'robot') {
      var _content = item.content || {};
      var message = _content.message || [];
      if (!_content.msgOut) {
        // 机器人上行消息
        item.robotFlow = 'out';
        item.showText = item.text;
      } else if (_content.flag === 'bot') {
        item.subType = 'bot';
        message = message.map(function (item) {
          if (item.type === 'template') {
            // 在vuex(store/actions/msgs.js)中已调用sdk方法做了转换
            return item.content.json;
          } else if (item.type === 'text' || item.type === 'answer') {
            // 保持跟template结构一致
            return [{
              type: 'text',
              text: item.content
            }];
          } else if (item.type === 'image') {
            // 保持跟template结构一致
            return [{
              type: 'image',
              url: item.content
            }];
          }
        });
        item.message = message;
      } else if (item.content.flag === 'faq') {
        item.subType = 'faq';
        item.query = message.query;
        var match = message.match.sort(function (a, b) {
          // 返回最匹配的答案
          return b.score - a.score;
        });
        item.message = match[0];
      }
    } else {
      item.showText = '[' + __WEBPACK_IMPORTED_MODULE_0__utils___default.a.mapMsgType(item) + '],\u8BF7\u5230\u624B\u673A\u6216\u7535\u8111\u5BA2\u6237\u7AEF\u67E5\u770B';
    }
    this.msg = item;
  },
  mounted: function mounted() {
    var _this = this;

    var item = this.msg;
    // 有时序问题的操作
    this.$nextTick(function () {
      var media = null;
      if (item.type === 'image') {
        // 图片消息缩略图
        media = new Image();
        media.src = item.file.url + '?imageView&thumbnail=180x0&quality=85';
      } else if (item.type === 'custom-type1') {
        // 猜拳消息
        media = new Image();
        media.className = 'emoji-middle';
        media.src = item.imgUrl;
      } else if (item.type === 'custom-type3') {
        // 贴图表情
        media = new Image();
        media.className = 'emoji-big';
        media.src = item.imgUrl;
      } else if (item.type === 'video') {
        if (/(mov|mp4|ogg|webm)/i.test(item.file.ext)) {
          media = document.createElement('video');
          media.src = item.file.url;
          media.width = 640;
          media.height = 480;
          media.autoStart = false;
          media.preload = 'metadata';
          media.controls = 'controls';
        } else {
          var aLink = document.createElement('a');
          aLink.href = item.file.url;
          aLink.target = '_blank';
          aLink.innerHTML = '<i class="u-icon icon-file"></i>' + video.name;
          _this.$refs.mediaMsg.appendChild(aLink);
        }
      }
      if (media) {
        if (_this.$refs.mediaMsg) {
          _this.$refs.mediaMsg.appendChild(media);
        }
        media.onload = function () {
          _this.$emit('msg-loaded');
        };
        media.onerror = function () {
          _this.$emit('msg-loaded');
        };
      } else {
        _this.$emit('msg-loaded');
      }
    }); // end this.nextTick
  },

  methods: {
    revocateMsg: function revocateMsg(vNode) {
      // 在会话聊天页
      if (this.$store.state.currSessionId) {
        if (vNode && vNode.data && vNode.data.attrs) {
          var attrs = vNode.data.attrs;
          if (attrs.type === 'robot') {
            return;
          }
          // 自己发的消息
          if (attrs.flow === 'out') {
            var that = this;
            this.$vux.confirm.show({
              title: '确定需要撤回消息',
              onCancel: function onCancel() {},
              onConfirm: function onConfirm() {
                that.$store.dispatch('revocateMsg', {
                  idClient: attrs.idClient
                });
              }
            });
          }
        }
      }
    },
    sendRobotBlockMsg: function sendRobotBlockMsg(msg, originMsg) {
      var body = '[复杂按钮模板触发消息]';
      if (msg.text && msg.text.length === 1) {
        body = msg.text[0].text;
      }
      var robotAccid = originMsg.content.robotAccid;
      if (!this.isRobot) {
        body = '@' + this.robotInfos[robotAccid].nick + ' ' + body;
      }
      if (this.type === 'session') {
        this.$store.dispatch('sendRobotMsg', {
          type: 'link',
          scene: originMsg.scene,
          to: originMsg.to,
          robotAccid: robotAccid,
          // 机器人后台消息
          params: msg.params,
          target: msg.target,
          // 显示的文本消息
          body: body
        });
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomRobotMsg', {
          type: 'link',
          robotAccid: robotAccid,
          // 机器人后台消息
          params: msg.params,
          target: msg.target,
          // 显示的文本消息
          body: body
        });
      }
    },
    continueRobotMsg: function continueRobotMsg(robotAccid) {
      this.$store.dispatch('continueRobotMsg', robotAccid);
    },
    showFullImg: function showFullImg(src) {
      this.$store.dispatch('showFullscreenImg', {
        src: src
      });
    },
    msgLoaded: function msgLoaded() {
      var _this2 = this;

      clearTimeout(this.msgLoadedTimer);
      this.msgLoadedTimer = setTimeout(function () {
        _this2.$emit('msgs-loaded');
      }, 20);
    },
    getText: function getText(txt) {
      return __WEBPACK_IMPORTED_MODULE_0__utils___default.a.generateChatroomSysMsg(txt);
    },
    clickExceptionalImg: function clickExceptionalImg() {
      this.$store.dispatch('addshowScrollBox', true);
    },

    // 语音播放
    playAudio: function playAudio(src, data, index) {
      var vm = this;
      var myaudio = vm.$refs.myaudio;
      myaudio.src = src;
      vm.msglist.forEach(function (item, num) {
        if (num == index) {
          if (typeof data.isplay == 'undefined' || !data.isplay) {
            vm.$set(item.file, 'isplay', false);
          }
        } else {
          if (item.file) {
            vm.$set(item.file, 'isplay', false);
          }
        }
      });

      if (data.isplay) {
        vm.$set(data, 'isplay', false);
        myaudio.pause();
        myaudio.currentTime = 0.0;
      } else {
        vm.$set(data, 'isplay', true);
        myaudio.play();
      }

      myaudio.onended = function () {
        vm.$set(data, 'isplay', false);
      };

      //      var vm = this;
      //      if(!data.ispaused){
      //        vm.$set(data,'ispaused',false)
      //        console.log(data)
      //      }else{
      //
      //        data.ispaused = !data.ispaused
      //        this.currentAudio.pause()
      //        console.log(data.ispaused)
      //      }
      //
      //      if (this.currentAudio) {
      //    		if (!this.currentAudio.paused) {
      //    			this.currentAudio.pause()
      //    		}
      //    	} else {
      //    		this.currentAudio = new Audio()
      //    	}
      //
      //    	if (!this.currentAudio) {
      //    		this.currentAudio = new Audio()
      //    	}
      //    	this.currentAudio.src = src
      //
      //       if(!data.ispaused){
      //          this.currentAudio.play()
      //          vm.$set(data,'ispaused',true)
      //       }else{
      //
      //       }
      //
      //    	var mp3 = document.getElementsByClassName("mp3_url");
      //    	var j = 0;
      //    	for(var i = 0; i < mp3.length; i++){
      //    		if(src == mp3[i].value){
      //    			mp3[i].nextElementSibling.style.display = "inline";
      //    			j = i;
      //
      //    		}else{
      //    			mp3[i].nextElementSibling.style.display = "none";
      //        }
      //      }
      //
      //    	this.currentAudio.onended = () => {
      //        mp3[j].nextElementSibling.style.display = "none";
      //        vm.$set(data,'ispaused',false)
      //				}
    }
  }
});

/***/ }),

/***/ 366:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-a2403f3a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatList.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.p-chat-list .u-icon {\n  width: 1.4rem;\n  height: 1.6rem;\n  margin-right: 0.2rem;\n  vertical-align: bottom;\n}\n.p-chat-history .u-msg .msg-link {\n  display: none;\n}\n.p-room-chat-list .u-msg .msg-text {\n  max-width: 50%;\n}\n.p-room-chat-list .u-msg .msg-link {\n  bottom: 0;\n  right: -4rem;\n  font-size: 0.9rem;\n}\n.page_qrCode{\n  width: 260px;\n}\n.page_voice{\n  width: 20px;\n}\n.exceptionalImg{\n\twidth: 25px;\n\theight: 25px;\n\tposition: absolute;\n\ttop: 48px;\n\tleft: 5px;\n}\n", "", {"version":3,"sources":["D:/yotta/college/public_html/assets/yunxin/src/pages/components/ChatList.vue"],"names":[],"mappings":";AAmjBE;EACE,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,uBAAuB;CACxB;AAIC;EACE,cAAc;CACf;AAKD;EACE,eAAe;CAChB;AACD;EACE,UAAU;EACV,aAAa;EACb,kBAAkB;CACnB;AAGL;EACE,aAAa;CAEd;AACD;EACE,YAAY;CACb;AAGD;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,UAAU;CACV,UAAU;CACV","file":"ChatList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-chat-list {\n  .u-icon {\n    width: 1.4rem;\n    height: 1.6rem;\n    margin-right: 0.2rem;\n    vertical-align: bottom;\n  }\n}\n.p-chat-history {\n  .u-msg {\n    .msg-link {\n      display: none;\n    }\n  }\n}\n.p-room-chat-list {\n  .u-msg {\n    .msg-text {\n      max-width: 50%;\n    }\n    .msg-link {\n      bottom: 0;\n      right: -4rem;\n      font-size: 0.9rem;\n    }\n  }\n}\n.page_qrCode{\n  width: 260px;\n\n}\n.page_voice{\n  width: 20px;\n}\n\n\n.exceptionalImg{\n\twidth: 25px;\n\theight: 25px;\n\tposition: absolute;\n\ttop: 48px;\n\tleft: 5px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 367:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-a2403f3a"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatList.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "m-chat-list p-chat-list",
    attrs: {
      "id": "chat-list"
    }
  }, [(_vm.canLoadMore) ? _c('li', {
    staticClass: "u-msg item-time"
  }, [_vm._v("\n      ---- 上拉加载更多 ----\n    ")]) : _c('li', {
    staticClass: "u-msg item-time"
  }, [_vm._v("\n      ---- 已无更多记录 ----\n    ")]), _vm._v(" "), _vm._l((_vm.msglist), function(msg, index) {
    return _c('li', {
      key: msg.idClient,
      staticClass: "u-msg item-you",
      class: {
        'item-time': msg.type === 'timeTag',
          'item-tip': msg.type === 'tip',
          'session-chat': _vm.type === 'session',
          'item-img': msg.type === 'images'
      },
      attrs: {
        "type": _vm.type,
        "rawMsg": msg,
        "isRobot": _vm.isRobot,
        "userInfos": _vm.userInfos,
        "myInfo": _vm.myInfo
      },
      on: {
        "msg-loaded": _vm.msgLoaded
      }
    }, [(msg.type === 'timeTag') ? _c('div', [_vm._v("---- " + _vm._s(msg.text) + " ----")]) : (msg.type === 'tip') ? _c('div', {
      staticClass: "tip"
    }, [_vm._v(_vm._s(msg.tip))]) : (msg.from == _vm.teacherId) ? _c('div', {
      directives: [{
        name: "touch",
        rawName: "v-touch:hold",
        value: (_vm.revocateMsg),
        expression: "revocateMsg",
        arg: "hold"
      }],
      attrs: {
        "idClient": msg.idClient,
        "time": msg.time,
        "flow": msg.flow,
        "type": msg.type
      }
    }, [(msg.avatar) ? _c('a', {
      staticClass: "msg-head",
      attrs: {
        "href": msg.link
      }
    }, [_c('img', {
      attrs: {
        "src": msg.avatar
      }
    })]) : (msg.type !== 'notification') ? _c('p', {
      staticClass: "msg-user"
    }, [(msg.fromAvatar !== '') ? _c('span', {
      staticClass: "page_msgMe"
    }, [_c('img', {
      staticClass: "myItem-me",
      staticStyle: {
        "width": "45px",
        "height": "45px",
        "border-radius": "100%"
      },
      attrs: {
        "src": msg.fromAvatar,
        "alt": ""
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "exceptionalImg",
      attrs: {
        "src": "http://college.m-fyd.com/assets/yunxin/res/im/exceptional.png",
        "alt": ""
      },
      on: {
        "click": function($event) {
          _vm.clickExceptionalImg()
        }
      }
    })]) : _vm._e(), _vm._v(" "), (msg.fromAvatar === '') ? _c('span', {
      staticClass: "page_msgMe"
    }, [_c('img', {
      staticClass: "myItem-me",
      staticStyle: {
        "width": "45px",
        "height": "45px",
        "border-radius": "100%"
      },
      attrs: {
        "src": "http://college.m-fyd.com/assets/yunxin/res/im/tourists.png",
        "alt": ""
      }
    })]) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "msg-dateOfName"
    }, [_c('em', [_vm._v(_vm._s(msg.showTime))]), _vm._v(_vm._s(msg.fromNick))])]) : _vm._e(), _vm._v(" "), (msg.type === 'text') ? _c('span', {
      staticClass: "msg-text",
      domProps: {
        "innerHTML": _vm._s(msg.text)
      }
    }) : (msg.type === 'custom-type1') ? _c('span', {
      ref: "mediaMsg",
      refInFor: true,
      staticClass: "msg-text"
    }) : (msg.type === 'custom-type3') ? _c('span', {
      ref: "mediaMsg",
      refInFor: true,
      staticClass: "msg-text"
    }) : (msg.type === 'image') ? _c('span', {
      ref: "mediaMsg",
      refInFor: true,
      staticClass: "msg-text",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.showFullImg(msg.file.url)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": msg.file.url
      }
    })]) : (msg.type === 'video') ? _c('span', {
      ref: "mediaMsg",
      refInFor: true,
      staticClass: "msg-text"
    }) : (msg.type === 'audio') ? _c('span', {
      staticClass: "msg-text msg-audio",
      attrs: {
        "id": "msg-audio"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.playAudio(msg.file.mp3Url, msg.file, index)
        }
      }
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.page_showAudio),
        expression: "page_showAudio"
      }]
    }, [_vm._v(_vm._s(Math.round(msg.file.dur / 1000) + '" 点击播放'))]), _vm._v(" "), (msg.file.isplay) ? _c('img', {
      staticClass: "page_voice",
      attrs: {
        "id": "page_voice",
        "src": "http://college.m-fyd.com/assets/yunxin/res/im/voiceSpeaker.gif"
      }
    }) : _vm._e()]) : (msg.type === 'file') ? _c('span', {
      staticClass: "msg-text"
    }, [_c('a', {
      attrs: {
        "href": msg.fileLink,
        "target": "_blank"
      }
    }, [_c('i', {
      staticClass: "u-icon icon-file"
    }), _vm._v("\n\t          " + _vm._s(msg.file.name) + "\n\t        ")])]) : (msg.type === 'robot') ? _c('span', {
      staticClass: "msg-text",
      class: {
        'msg-robot': msg.robotFlow !== 'out' && !_vm.isRobot
      }
    }, [(msg.robotFlow === 'out') ? _c('div', [_vm._v(_vm._s(msg.text))]) : (msg.subType === 'bot') ? _c('div', _vm._l((msg.message), function(tmsgs) {
      return _c('div', _vm._l((tmsgs), function(tmsg) {
        return _c('div', [(tmsg.type === 'text') ? _c('div', [_c('p', [_vm._v(_vm._s(tmsg.text))])]) : (tmsg.type === 'image') ? _c('div', [_c('p', [_c('img', {
          attrs: {
            "src": tmsg.url
          }
        })])]) : (tmsg.type === 'url') ? _c('div', [_c('a', {
          class: tmsg.style,
          attrs: {
            "href": tmsg.target,
            "target": "_blank"
          }
        }, [(tmsg.image) ? _c('div', _vm._l((tmsg.image), function(tmsg2) {
          return _c('p', [_c('img', {
            attrs: {
              "src": tmsg2.url
            }
          })])
        })) : _vm._e(), _vm._v(" "), (tmsg.text) ? _c('div', _vm._l((tmsg.text), function(tmsg2) {
          return _c('p', [_vm._v(_vm._s(tmsg2.text))])
        })) : _vm._e()])]) : (tmsg.type === 'block') ? _c('div', [_c('a', {
          class: tmsg.style,
          attrs: {
            "params": tmsg.params,
            "target": tmsg.target
          },
          on: {
            "click": function($event) {
              _vm.sendRobotBlockMsg(tmsg, msg)
            }
          }
        }, [(tmsg.image) ? _c('div', _vm._l((tmsg.image), function(tmsg2) {
          return _c('p', [_c('img', {
            attrs: {
              "src": tmsg2.url
            }
          })])
        })) : _vm._e(), _vm._v(" "), (tmsg.text) ? _c('div', _vm._l((tmsg.text), function(tmsg2) {
          return _c('p', [_vm._v(_vm._s(tmsg2.text))])
        })) : _vm._e()])]) : _vm._e()])
      }))
    })) : (msg.subType === 'faq') ? _c('div', [_c('p', [_vm._v(_vm._s(msg.message.answer))])]) : _vm._e(), _vm._v(" "), (msg.robotFlow !== 'out' && !_vm.isRobot) ? _c('span', {
      staticClass: "msg-link"
    }, [_c('a', {
      staticClass: "link-right",
      on: {
        "click": function($event) {
          _vm.continueRobotMsg(msg.content.robotAccid)
        }
      }
    }, [_vm._v("继续对话")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (msg.status === 'fail') ? _c('span', {
      staticClass: "msg-failed"
    }, [_c('i', {
      staticClass: "weui-icon-warn"
    })]) : _vm._e()]) : _vm._e()])
  }), _vm._v(" "), _c('audio', {
    ref: "myaudio",
    staticStyle: {
      "opacity": "0"
    }
  }, [_c('source')])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a2403f3a", module.exports)
  }
}

/***/ }),

/***/ 368:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-a2403f3a","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatList.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-a2403f3a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue */ 366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("4386df3f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a2403f3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a2403f3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 369:
/* no static exports found */
/* exports used: default */
/*!*******************************************!*\
  !*** ./src/pages/components/ChatList.vue ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-a2403f3a","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatList.vue */ 368)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatList.vue */ 365),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-a2403f3a"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatList.vue */ 367),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\yotta\\college\\public_html\\assets\\yunxin\\src\\pages\\components\\ChatList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a2403f3a", Component.options)
  } else {
    hotAPI.reload("data-v-a2403f3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 370:
/* exports provided: default */
/* all exports used */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatEditor.vue ***!
  \*********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatEmoji__ = __webpack_require__(/*! ./ChatEmoji */ 379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatEmoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ChatEmoji__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(/*! ../../utils */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs__ = __webpack_require__(/*! ../../configs */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__configs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(/*! axios */ 347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatEmoji: __WEBPACK_IMPORTED_MODULE_0__ChatEmoji___default.a
  },
  updated: function updated() {
    var _this = this;

    window.document.body.addEventListener('click', function () {
      _this.isEmojiShown = false;
    });
  },

  props: {
    type: String,
    scene: String,
    to: String,
    isRobot: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  watch: {
    continueRobotAccid: function continueRobotAccid(curVal, oldVal) {
      if (curVal && this.robotInfos[curVal]) {
        this.msgToSent = '@' + this.robotInfos[curVal].nick + ' ';
      }
      // 重置
      this.$store.dispatch('continueRobotMsg', '');
    },
    msgToSent: function msgToSent(curVal, oldVal) {
      if (this.isRobot) {
        return;
      }
      var indexAt = this.msgToSent.indexOf('@');
      if (indexAt >= 0 && indexAt === this.msgToSent.length - 1) {
        if (this.robotslist && this.robotslist.length > 0) {
          this.isRobotListShown = true;
        }
      } else if (this.isRobotListShown === true) {
        this.isRobotListShown = false;
      }
    },
    inputNum: function inputNum(nVal, oVal) {
      if (nVal > 100) {
        this.inputNum = 100;
      } else if (nVal < 1) {
        this.inputNum = 1;
      }
    },
    inputAmount: function inputAmount(newVal, oldVal) {
      if (newVal > 10000) {
        this.inputAmount = 10000;
      } else if (newVal < 1) {
        this.inputAmount = 1;
      }
    }
  },
  data: function data() {
    return {
      isEmojiShown: false,
      isRobotListShown: false,
      msgToSent: '',
      icon1: __WEBPACK_IMPORTED_MODULE_2__configs___default.a.resourceUrl + '/im/chat-editor-1.png',
      icon2: __WEBPACK_IMPORTED_MODULE_2__configs___default.a.resourceUrl + '/im/chat-editor-2.png',
      icon3: __WEBPACK_IMPORTED_MODULE_2__configs___default.a.resourceUrl + '/im/chat-editor-3.png',
      popupShow: false,
      popupPLShow: false,
      tabsParam: ['最新评论', '打赏排行'],
      nowIndex: 0,
      showScrollBox: false,
      showScrollBox2: false,
      showHideOnBlur: false,
      isImgHide: false,
      maskShowHide: true,
      teacher_if: this.$store.state.haha.teacher_if,
      position: 'middle',
      redEnvelopeShow: false,
      inputNum: '',
      inputAmount: '',
      result: null
    };
  },

  computed: {
    continueRobotAccid: function continueRobotAccid() {
      return this.$store.state.continueRobotAccid;
    },
    robotslist: function robotslist() {
      return this.$store.state.robotslist;
    },
    robotInfos: function robotInfos() {
      return this.$store.state.robotInfos;
    },
    robotInfosByNick: function robotInfosByNick() {
      return this.$store.state.robotInfosByNick;
    }
  },
  methods: {
    toggleTabs: function toggleTabs(index) {
      this.nowIndex = index;
    },

    // inputFunc(){
    //   var x = document.getElementById("myInput");
    //   var z = document.getElementById("myIconShowPlass");
    //   var c = document.getElementById("myBtnShowPlass");
    //   if(x.value == "" || x.value == undefined || x.value == null){
    //     z.style = "";
    //     c.style.display = "none";
    //   }else{
    //     z.style.display = "none";
    //     c.style = "";
    //   }
    // },

    clickHB: function clickHB() {
      // this.showScrollBox = true;
      this.popupShow = true;
      // this.maskShowHide = true;
    },
    fadeMask: function fadeMask() {
      this.popupShow = false;
    },
    clickStudentsPL: function clickStudentsPL() {
      this.popupPLShow = true;
    },
    clickTeacherPL: function clickTeacherPL() {
      this.showScrollBox = true;
    },
    clickTeacherML: function clickTeacherML() {
      this.showScrollBox = true;
    },
    clickOpInput: function clickOpInput() {
      this.showHideOnBlur = true;
      document.getElementById("inputId").readonly = false;
      document.getElementById("inputId").blur();
      document.getElementById("textareaId").focus();
    },
    clickShutDown: function clickShutDown() {
      this.popupPLShow = false;
    },
    removeTextMsg: function removeTextMsg() {
      this.showHideOnBlur = false;
    },
    sendHbMsg: function sendHbMsg() {
      // this.redEnvelopeShow = true;
      // this.popupShow = false;
      this.showScrollBox = true;
    },
    clickSendRedEnvelope: function clickSendRedEnvelope() {
      this.redEnvelopeShow = false;
    },


    //发送消息
    sendTextMsg: function sendTextMsg() {
      // var z = document.getElementById("myIconShowPlass");
      // var c = document.getElementById("myBtnShowPlass");
      // if(c.style.display != "none"){
      //   z.style = "";
      //   c.style.display = "none";
      // }else{
      //   z.style.display = "none";
      //   c.style = "";
      // }

      //    var x =  document.getElementById("clickSendDown");
      //    var y = document.getElementById("textareaId");
      //    if(y.value == "" || y.value == undefined || y.value == null){
      //      x.style = "";
      //    }else{
      //      this.showHideOnBlur = false;
      //    }
      this.showHideOnBlur = false;
      if (/^\s*$/.test(this.msgToSent)) {
        this.$vux.alert.show({
          title: '请不要刷屏'
        });
        return;
      } else if (this.msgToSent.length > 800) {
        this.$vux.alert.show({
          title: '请不要超过800个字'
        });
        return;
      }
      this.msgToSent = this.msgToSent.trim();
      console.log('确认发送消息');
      if (this.type === 'session') {
        // 如果是机器人
        if (this.isRobot) {
          this.$store.dispatch('sendRobotMsg', {
            type: 'text',
            scene: this.scene,
            to: this.to,
            robotAccid: this.to,
            // 机器人后台消息
            content: this.msgToSent,
            // 显示的文本消息
            body: this.msgToSent
          });
        } else {
          var robotAccid = '';
          var robotText = '';
          var atUsers = this.msgToSent.match(/@[^\s@$]+/g);
          if (atUsers) {
            for (var i = 0; i < atUsers.length; i++) {
              var item = atUsers[i].replace('@', '');
              if (this.robotInfosByNick[item]) {
                robotAccid = this.robotInfosByNick[item].account;
                robotText = (this.msgToSent + '').replace(atUsers[i], '').trim();
                break;
              }
            }
          }
          if (robotAccid) {
            if (robotText) {
              this.$store.dispatch('sendRobotMsg', {
                type: 'text',
                scene: this.scene,
                to: this.to,
                robotAccid: robotAccid,
                // 机器人后台消息
                content: robotText,
                // 显示的文本消息
                body: this.msgToSent
              });
            } else {
              this.$store.dispatch('sendRobotMsg', {
                type: 'welcome',
                scene: this.scene,
                to: this.to,
                robotAccid: robotAccid,
                // 显示的文本消息
                body: this.msgToSent
              });
            }
          } else {
            this.$store.dispatch('sendMsg', {
              type: 'text',
              scene: this.scene,
              to: this.to,
              text: this.msgToSent
            });
          }
        }
      } else if (this.type === 'chatroom') {
        console.log('用户发送信息');
        var _robotAccid = '';
        var _robotText = '';
        var _atUsers = this.msgToSent.match(/@[^\s@$]+/g);
        if (_atUsers) {
          for (var _i = 0; _i < _atUsers.length; _i++) {
            var _item = _atUsers[_i].replace('@', '');
            if (this.robotInfosByNick[_item]) {
              _robotAccid = this.robotInfosByNick[_item].account;
              _robotText = (this.msgToSent + '').replace(_atUsers[_i], '').trim();
              break;
            }
          }
        }
        if (_robotAccid) {
          if (_robotText) {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'text',
              robotAccid: _robotAccid,
              // 机器人后台消息
              content: _robotText,
              // 显示的文本消息
              body: this.msgToSent
            });
          } else {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'welcome',
              robotAccid: _robotAccid,
              // 显示的文本消息
              body: this.msgToSent
            });
          }
        } else {

          console.log('执行store sendChatroomMsg commit  type-TEXT ');
          this.$store.dispatch('sendChatroomMsg', {
            type: 'text',
            text: this.msgToSent
          });
        }
      }
      this.msgToSent = '';
    },
    sendPlayMsg: function sendPlayMsg() {
      // 发送猜拳消息
      if (this.type === 'session') {
        this.$store.dispatch('sendMsg', {
          type: 'custom',
          scene: this.scene,
          to: this.to,
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random() * 3)
            }
          }
        });
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomMsg', {
          type: 'custom',
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random() * 3)
            }
          }
        });
      }
    },
    sendFileMsg: function sendFileMsg() {
      var ipt = this.$refs.fileToSent;
      if (ipt.value) {
        if (this.type === 'session') {
          this.$store.dispatch('sendFileMsg', {
            scene: this.scene,
            to: this.to,
            fileInput: ipt
          });
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomFileMsg', {
            fileInput: ipt
          });
        }
      }
    },


    // 微信语音(按下)
    startRecord: function startRecord(e) {
      e.preventDefault();
      START = new Date().getTime();
      this.isImgHide = true;
      recordTimer = setTimeout(function () {
        wx.startRecord({
          success: function success() {
            localStorage.rainAllowRecord = 'true';
          },
          cancel: function cancel() {
            alert('用户拒绝授权录音');
            window.location.reload();
          }
        });
      }, 200);
    },

    // 微信语音(松开)
    stopRecord: function stopRecord(e) {
      e.preventDefault();
      END = new Date().getTime();
      this.isImgHide = false;
      useTime = END - START;
      if (END - START < 200) {
        END = 0;
        START = 0;
        // 小于200ms则不录音
        clearTimeout(recordTimer);
        alert("录音时间不能小于200ms");
      } else {
        wx.stopRecord({
          success: function success(res) {
            localId = res.localId;
            // 上传
            wx.uploadVoice({
              localId: localId,
              isShowProgressTips: 1, // 显示进度
              success: function success(res) {
                serverId = res.serverId;
                // 提交到后台
                __WEBPACK_IMPORTED_MODULE_3_axios___default()({
                  url: "/m/index/yunxin/save",
                  method: "post",
                  data: {
                    uid: window.document.getElementById('uid').value,
                    serverId: serverId,
                    length: useTime
                  }
                }).then(function (res) {
                  // alert(JSON.stringify(res))
                }).catch(function (err) {
                  alert('上传失败！' + JSON.stringify(err));
                });
              }
            });
          },
          fail: function fail(res) {
            alert('录制失败！' + JSON.stringify(res));
          }
        });
      }
    },
    showEmoji: function showEmoji() {
      this.isEmojiShown = true;
    },
    hideEmoji: function hideEmoji() {
      this.isEmojiShown = false;
    },
    addEmoji: function addEmoji(emojiName) {
      this.msgToSent += emojiName;
      this.hideEmoji();
    },
    chooseRobot: function chooseRobot(robot) {
      if (robot && robot.account) {
        var len = this.msgToSent.length;
        if (len === 0 || this.msgToSent[len - 1] !== '@') {
          this.msgToSent += '@' + robot.nick + ' ';
        }{
          this.msgToSent += robot.nick + ' ';
        }
      }
    },
    hideRobotList: function hideRobotList() {
      this.isRobotListShown = false;
    }
  }
});

/***/ }),

/***/ 371:
/* exports provided: default */
/* all exports used */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatEmoji.vue ***!
  \********************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_emoji__ = __webpack_require__(/*! ../../configs/emoji */ 346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__configs_emoji__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



function genEmojiList(type, emojiList) {
  var result = {};
  for (var name in emojiList) {
    var emojiMap = emojiList[name];
    var list = [];
    for (var key in emojiMap) {
      list.push({
        type: type,
        name: name,
        key: key,
        img: emojiMap[key].img
      });
    }
    if (list.length > 0) {
      result[name] = {
        type: type,
        name: name,
        list: list,
        album: list[0].img
      };
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: String,
    scene: String,
    to: String
  },
  data: function data() {
    return {
      currType: 'emoji',
      currAlbum: 'emoji'
    };
  },

  computed: {
    emoji: function emoji() {
      return genEmojiList('emoji', __WEBPACK_IMPORTED_MODULE_0__configs_emoji___default.a.emojiList);
    },
    pinup: function pinup() {
      return genEmojiList('pinup', __WEBPACK_IMPORTED_MODULE_0__configs_emoji___default.a.pinupList);
    },
    currEmoji: function currEmoji() {
      if (this.currType === 'emoji') {
        return this.emoji[this.currAlbum];
      } else if (this.currType === 'pinup') {
        return this.pinup[this.currAlbum];
      }
      return [];
    }
  },
  methods: {
    selectAlbum: function selectAlbum(album) {
      this.currType = album.type;
      this.currAlbum = album.name;
    },
    selectEmoji: function selectEmoji(emoji) {
      if (this.currType === 'emoji') {
        // 由触发父组件事件，增加表情文案
        this.$emit('add-emoji', emoji.key);
      } else if (this.currType === 'pinup') {
        if (this.type === 'session') {
          this.$store.dispatch('sendMsg', {
            type: 'custom',
            scene: this.scene,
            to: this.to,
            pushContent: '[贴图表情]',
            content: {
              type: 3,
              data: {
                catalog: this.currAlbum,
                chartlet: emoji.key
              }
            }
          });
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomMsg', {
            type: 'custom',
            pushContent: '[贴图表情]',
            content: {
              type: 3,
              data: {
                catalog: this.currAlbum,
                chartlet: emoji.key
              }
            }
          });
        }
        this.$emit('hide-emoji');
      }
    }
  }
});

/***/ }),

/***/ 372:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-42d7fa72","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEditor.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.robot.m-chat-editor-main[data-v-42d7fa72] {\n    /*.u-editor-input {\n      padding-right: 4.5rem;\n    }\n    .u-editor-icons {\n      width: 4rem;\n    }*/\n}\n.m-chat-robot[data-v-42d7fa72] {\n    overflow-y: scroll;\n}\n.m-chat-robot .weui-cells .weui-cell__hd[data-v-42d7fa72] {\n    margin-right: 0.5rem;\n}\n.page_popup[data-v-42d7fa72] {\n    width: 90%;\n    height:100px;\n    margin: 0 auto;\n}\n.page_popup .page_showHbLeft[data-v-42d7fa72]{\n    height: 100px;\n    float: left;\n}\n.page_popup .page_showHbLeft .sendImg[data-v-42d7fa72]{\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n       -moz-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: 60px;\n}\n.page_popup .page_showHbLeft input[type=\"file\"][data-v-42d7fa72] {\n    position: absolute;\n    display: inline-block;\n    left: 0;\n    top: 0;\n    width: inherit;\n    height: inherit;\n    opacity: 0;\n    font-size: 1rem;\n}\n.page_popup .page_showHbRight[data-v-42d7fa72]{\n    height: 100px;\n    float: left;\n    padding-left: 20px;\n}\n.page_popup .page_showHbRight .sendHBImg[data-v-42d7fa72]{\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n       -moz-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: 60px;\n}\n.vux-popup-dialog[data-v-42d7fa72]{\n    position: fixed;\n    left: 0;\n    bottom: 64px;\n    background-color: #fff;\n    border-bottom: 1px solid rgb(200, 200, 200);\n    z-index: 999;\n}\n.active[data-v-42d7fa72]{\n    color: #ffd000;\n}\n.tabs[data-v-42d7fa72]{\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    padding:0;\n    position: relative;\n    border-bottom: 1px solid rgb(200, 200, 200);\n}\n.tabs .page_popupPlCK[data-v-42d7fa72]{\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n       -moz-transform: translateY(-50%);\n            transform: translateY(-50%);\n    right: 20px;\n}\n.tabs .page_popupPlCK .shutDownPlImg[data-v-42d7fa72]{\n    width: 15px;\n}\n.li-tab[data-v-42d7fa72]{\n    width: 30%;\n    height: 100%;\n    display:inline-block;\n    text-align: center;\n}\n.divTab[data-v-42d7fa72]{\n    width: 100%;\n    height: 240px;\n    position: relative;\n}\n.divTab .page_popupPlList[data-v-42d7fa72]{\n    width: 100%;\n    height: 240px;\n    overflow: hidden;\n    overflow-y: auto;\n}\n.divTab .page_popupPlList .page_popupPlNcList[data-v-42d7fa72]{\n    width: 90%;\n    height: 50px;\n    margin: 10px auto;\n    border-bottom: 1px solid rgb(200, 200, 200);\n}\n.divTab .page_popupPlList .page_popupPlNcList .page_popupPlImg[data-v-42d7fa72]{\n    width: 15%;\n    height: 50px;\n    float: left;\n}\n.divTab .page_popupPlList .page_popupPlNcList .page_popupPlImg .popupPlImg[data-v-42d7fa72]{\n    width: 40px;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n       -moz-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.divTab .page_popupPlList .page_popupPlNcList .page_popupPlNameDate[data-v-42d7fa72]{\n    width: 85%;\n    height: 50px;\n    float: right;\n}\n.divTab .page_popupPlList .page_popupPlNcList .page_popupPlNameDate .popupPlNameDate .popupPlName[data-v-42d7fa72]{\n    color: rgb(153, 153, 153);\n    font-size: 14px;\n}\n.divTab .page_popupPlList .page_popupPlNcList .page_popupPlNameDate .popupPlNameDate .popupPlDate[data-v-42d7fa72]{\n    color: rgb(153, 153, 153);\n    font-size: 14px;\n    float: right;\n}\n.divTab .page_popupPlList .page_popupPlNcList .page_popupPlNameDate .page_popupPlShow[data-v-42d7fa72]{}\n.divTab2[data-v-42d7fa72]{\n    width: 100%;\n    height: 240px;\n    position: relative;\n}\n.divTab2 .page_excepitionalList[data-v-42d7fa72]{\n    width: 100%;\n    height: 210px;\n    overflow: hidden;\n    overflow-y: auto;\n}\n.divTab2 .page_excepitionalList .page_excepitionalCC[data-v-42d7fa72]{\n    width: 90%;\n    height: 50px;\n    margin: 10px auto;\n    border-bottom: 1px solid rgb(200, 200, 200);\n}\n.divTab2 .page_excepitionalList .page_excepitionalCC .page_excepitionalImg[data-v-42d7fa72]{\n    width: 15%;\n    height: 50px;\n    float: left;\n}\n.divTab2 .page_excepitionalList .page_excepitionalCC .page_excepitionalImg .excepitionalImg[data-v-42d7fa72]{\n    width: 40px;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n       -moz-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.divTab2 .page_excepitionalList .page_excepitionalCC .page_excepitionalNM[data-v-42d7fa72]{\n    width: 85%;\n    height: 50px;\n    line-height: 50px;\n    float: left;\n}\n.divTab2 .page_excepitionalList .page_excepitionalCC .page_excepitionalNM ..excepitionalName[data-v-42d7fa72]{\n    color: #333333;\n}\n.divTab2 .page_excepitionalList .page_excepitionalCC .page_excepitionalNM .medalImg[data-v-42d7fa72]{\n    width: 15px;\n    position: relative;\n    top: 25%;\n    -webkit-transform: translateY(-50%);\n       -moz-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.divTab2 .page_excepitionalList .page_excepitionalCC .page_excepitionalNM .excepitionalMoney[data-v-42d7fa72]{\n    color: rgb(153, 153, 153);\n    float: right;\n}\n.divTab2 .page_excepitionalChoose[data-v-42d7fa72]{\n    position: absolute;\n    bottom: -4rem;\n    left: 0;\n    width: 100%;\n    height: 6rem;\n    background-color: #f7f7f7;\n}\n.divTab2 .page_excepitionalChoose .excepitionalChoose_TT[data-v-42d7fa72]{\n    width: 90%;\n    margin: 10px auto;\n    color: #333333;\n    height: 24px;\n}\n.divTab2 .page_excepitionalChoose .excepitionalChoose_List[data-v-42d7fa72]{\n    width: 90%;\n    height: 54px;\n    margin: 0 auto;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.divTab2 .page_excepitionalChoose .excepitionalChoose_List .excepitionalChoose_nc[data-v-42d7fa72]{\n    width: 100%;\n    height: 54px;\n    overflow-x: auto;\n    overflow-y: hidden;\n    padding-bottom: 6px;\n}\n.divTab2 .page_excepitionalChoose .excepitionalChoose_List .excepitionalChoose_nc .excepitionalChoose_ct .etCsImg[data-v-42d7fa72]{\n    width: 40px;\n}\n.vux-divider[data-v-42d7fa72]{\n    padding: 30px 0 0 0;\n    font-size: 18px;\n}\n.page_directoryList[data-v-42d7fa72]{\n    width: 100%;\n    text-align: left;\n}\n.page_directoryList .directoryList[data-v-42d7fa72]{\n    width: 100%;\n    height: 45px;\n    line-height: 45px;\n    padding-left: 20px;\n    border-bottom: 1px solid rgb(200, 200, 200);\n}\n.page_directoryList .directoryList .showRed[data-v-42d7fa72]{\n    color: red;\n}\n.page_OpInput[data-v-42d7fa72]{\n    width: 100%;\n    height: 200px;\n}\n.page_OpInput .OpInput[data-v-42d7fa72]{\n    height: 120px;\n    padding: 20px 20px 0px 20px;\n    text-align: center;\n}\n.page_OpInput .OpInput .OpInput_TA[data-v-42d7fa72]{\n    width: 100%;\n    height: 70%;\n    margin-top: 10px;\n}\n.page_OpInput .page_Bmbtn[data-v-42d7fa72]{\n    height: 50px;\n    line-height: 50px;\n    padding: 0;\n    text-align: center;\n    margin-top: 10px;\n    border-top: 1px solid rgb(200, 200, 200);\n}\n.page_OpInput .page_Bmbtn .BmbtnLeft[data-v-42d7fa72]{\n    display: inline-block;\n    width: 50%;\n    height: 50px;\n    float: left;\n    background-color: #ffffff;\n    color: #333333;\n    border-top: 0;\n    border-left: 0;\n    border-bottom: 0;\n}\n.page_OpInput .page_Bmbtn .BmbtnRight[data-v-42d7fa72]{\n    display: inline-block;\n    width: 49.6%;\n    height: 50px;\n    float: right;\n    background-color: #ffffff;\n    color: green;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 0;\n    border-left: 1px solid rgb(200, 200, 200);\n}\n.page_showYY[data-v-42d7fa72]{\n    width: 100%;\n    position: absolute;\n    top: -400%;\n    text-align: center;\n}\n.page_showYYImg[data-v-42d7fa72]{\n    width: 40%;\n}\n.dialog_no[data-v-42d7fa72]{\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n}\n\n  /* 遮罩层 */\n  /*.homemadeMask{\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,.6);\n    z-index: 500;\n    -moz-opacity: 0.8;\n    opacity: 0.5;\n    filter: alpha(opacity=80);\n  }*/\n.page_sendRedEnvelope[data-v-42d7fa72]{\n\t\t\twidth: 100%;\n\t\t  height: auto;\n\t\t  min-height: 100vh;\n\t\t\tbackground: #d9d9d9;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tz-index: 10000;\n}\n.page_sendRedEnvelope input[data-v-42d7fa72]::-webkit-input-placeholder{\n    font-family: \"microsoft yahei\";\n    font-size: 14px;\n    color: rgb(102, 102, 102);\n}\n.page_sendRedEnvelope input[data-v-42d7fa72]::-moz-placeholder{\n    /* Mozilla Firefox 19+ */\n    font-family: \"microsoft yahei\";\n    font-size: 14px;\n    color: rgb(102, 102, 102);\n}\n.page_sendRedEnvelope input[data-v-42d7fa72]:-moz-placeholder{\n    /* Mozilla Firefox 4 to 18 */\n    font-family: \"microsoft yahei\";\n    font-size: 14px;\n    color: rgb(102, 102, 102);\n}\n.page_sendRedEnvelope input[data-v-42d7fa72]:-ms-input-placeholder{\n    /* Internet Explorer 10-11 */\n    font-family: \"microsoft yahei\";\n    font-size: 14px;\n    color: rgb(102, 102, 102);\n}\n.sendRedEnvelopeTitle[data-v-42d7fa72]{\n\t\t\twidth: 100%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tbackground: #FF0000;\n\t\t\tposition: relative;\n\t\t\ttext-align: center;\n}\n.sendRedEnvelopeImg[data-v-42d7fa72]{\n\t\t\twidth: 15px;\n\t\t\tfloat: left;\n\t\t\tposition: relative;\n\t\t\ttop: 50%;\n\t\t\t-webkit-transform: translateY(-50%);\n\t\t\t   -moz-transform: translateY(-50%);\n\t\t\t        transform: translateY(-50%);\n\t\t\tleft: 15px;\n}\n.sendRedEnvelopeText[data-v-42d7fa72]{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(255, 255, 255);\n}\n.sendRedEnvelopeBody[data-v-42d7fa72]{\n\t\t\theight: auto;\n\t\t\tpadding: 20px 15px 40px 15px;\n}\n\t\t/* 红包个数 */\n.sendRedEnvelopeDiv[data-v-42d7fa72]{\n\t\t\twidth: 100%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tbackground: #FFFFFF;\n}\n.sendRedEnvelopeDiv_left[data-v-42d7fa72]{\n\t\t\twidth: 20%;\n\t\t\tfloat: left;\n\t\t\ttext-align: left;\n\t\t\tpadding-left: 10px;\n}\n.redEnvelopeNum[data-v-42d7fa72]{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51, 51, 51);\n}\n.sendRedEnvelopeDiv_right[data-v-42d7fa72]{\n\t\t\twidth: 70%;\n\t\t\theight: 40px;\n\t\t\tfloat: right;\n\t\t\ttext-align: right;\n\t\t\tpadding-right: 10px;\n}\n.redEnvelopeNumInput[data-v-42d7fa72]{\n\t\t\ttext-align: right;\n\t\t\tborder: 0;\n\t\t\toutline: none;\n\t\t\twidth: 90%;\n\t\t\theight: 38px;\n\t\t\tfloat: left;\n}\n.redEnvelopeNumText[data-v-42d7fa72]{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51, 51, 51);\n}\n.redEnvelopeNumPrompt[data-v-42d7fa72]{\n\t\t\tfont-family: \"plngFang SC\";\n\t\t\tfont-size: 12px;\n\t\t\tcolor: rgb(153, 153, 153);\n\t\t\tdisplay: block;\n\t\t\tpadding-top: 5px;\n\t\t\tpadding: 5px 0 15px 0;\n}\n\n\t\t/* 总金额 */\n.sendRedEnvelopeDiv2[data-v-42d7fa72]{\n\t\t\twidth: 100%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tbackground: #FFFFFF;\n}\n.redEnvelopeAmount_left[data-v-42d7fa72]{\n\t\t\twidth: 20%;\n\t\t\tfloat: left;\n\t\t\ttext-align: left;\n\t\t\tpadding-left: 10px;\n}\n.redEnvelopeAmount[data-v-42d7fa72]{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51, 51, 51);\n}\n.redEnvelopeAmount_right[data-v-42d7fa72]{\n\t\t\twidth: 70%;\n\t\t\theight: 40px;\n\t\t\tfloat: right;\n\t\t\ttext-align: right;\n\t\t\tpadding-right: 10px;\n}\n.redEnvelopeAmountInput[data-v-42d7fa72]{\n\t\t\ttext-align: right;\n\t\t\tborder: 0;\n\t\t\toutline: none;\n\t\t\twidth: 90%;\n\t\t\theight: 38px;\n\t\t\tfloat: left;\n}\n.redEnvelopeAmountText[data-v-42d7fa72]{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51, 51, 51);\n}\n\n\t\t/* 留言 */\n.sendRedEnvelopeDiv3[data-v-42d7fa72]{\n\t\t\twidth: 100%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tbackground: #FFFFFF;\n}\n.redEnvelopeLeaveMsg_left[data-v-42d7fa72]{\n\t\t\twidth: 20%;\n\t\t\tfloat: left;\n\t\t\ttext-align: left;\n\t\t\tpadding-left: 10px;\n}\n.redEnvelopeLeaveMsg[data-v-42d7fa72]{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51, 51, 51);\n}\n.redEnvelopeLeaveMsg_right[data-v-42d7fa72]{\n\t\t\twidth: 70%;\n\t\t\theight: 40px;\n\t\t\tfloat: right;\n\t\t\ttext-align: right;\n\t\t\tpadding-right: 10px;\n}\n.redEnvelopeLeaveMsgInput[data-v-42d7fa72]{\n\t\t\ttext-align: right;\n\t\t\tborder: 0;\n\t\t\toutline: none;\n\t\t\twidth: 100%;\n\t\t\theight: 38px;\n\t\t\tfloat: left;\n}\n\n\t\t/* 提交 */\n.sendRedEnvelopeBtn[data-v-42d7fa72]{\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\ttext-align: center;\n}\n.redEnvelopeAmountShow[data-v-42d7fa72]{\n\t\t\tdisplay: block;\n\t\t\tfont-size: 24px;\n\t\t\tfont-weight: bold;\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tcolor: rgb(51, 51, 51);\n}\n.sendRedEnvelopeBtn input[data-v-42d7fa72]{\n\t\t\twidth: 90%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tcolor: rgb(255, 255, 255);\n\t\t\tfont-family: \"plngFang SC\";\n\t\t\tmargin-top: 20px;\n\t\t\tborder: 0;\n\t\t\tbackground: #FF0000;\n}\n.notReceiveRedEnvelope[data-v-42d7fa72]{\n\t\t\tfont-family: \"plngFang SC\";\n\t\t\tfont-size: 12px;\n\t\t\tcolor: rgb(153, 153, 153);\n\t\t\tdisplay: block;\n\t\t\tpadding-top: 5px;\n\t\t\tpadding: 5px 15px 15px 15px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  /* input样式 */\ninput[data-v-42d7fa72]::input-placeholder {\n\n    padding-left: 5px;\n}\ninput[data-v-42d7fa72]::-webkit-input-placeholder {\n\n    padding-left: 5px;\n}\ninput[data-v-42d7fa72]:-ms-input-placeholder {\n\n    padding-left: 5px;\n}\ninput[data-v-42d7fa72]:-moz-placeholder {\n\n    padding-left: 5px;\n}\ninput[data-v-42d7fa72]::-moz-placeholder {\n\n    padding-left: 5px;\n}\n\n\n", "", {"version":3,"sources":["D:/yotta/college/public_html/assets/yunxin/src/pages/components/ChatEditor.vue"],"names":[],"mappings":";AAkwBE;IACE;;;;;OAKG;CACJ;AAED;IACE,mBAAmB;CAMpB;AAJG;IACE,qBAAqB;CACtB;AAGL;IACE,WAAW;IACX,aAAa;IACb,eAAe;CAiChB;AA/BC;IACE,cAAc;IACd,YAAY;CAiBb;AAhBC;IACE,mBAAmB;IACnB,SAAS;IACT,oCAA4B;OAA5B,iCAA4B;YAA5B,4BAA4B;IAC5B,YAAY;CACb;AACD;IACE,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;IACR,OAAO;IACP,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,gBAAgB;CACjB;AAEH;IACE,cAAc;IACd,YAAY;IACZ,mBAAmB;CAOpB;AANC;IACE,mBAAmB;IACnB,SAAS;IACT,oCAA4B;OAA5B,iCAA4B;YAA5B,4BAA4B;IAC5B,YAAY;CACb;AAIL;IACE,gBAAgB;IAChB,QAAQ;IACR,aAAa;IACb,uBAAuB;IACvB,4CAA0C;IAC1C,aAAa;CACd;AAID;IACE,eAAe;CAChB;AACD;IACE,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,4CAA0C;CAY3C;AAVC;IACE,mBAAmB;IACnB,SAAS;IACT,oCAA4B;OAA5B,iCAA4B;YAA5B,4BAA4B;IAC5B,YAAY;CAKb;AAHC;IACE,YAAY;CACb;AAGL;IACE,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,mBAAmB;CACpB;AACD;IACE,YAAY;IACZ,cAAc;IACd,mBAAmB;CAgDpB;AA9CC;IACE,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,iBAAiB;CAwClB;AAvCC;IACE,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,4CAA0C;CAkC3C;AAjCC;IACE,WAAW;IACX,aAAa;IACb,YAAY;CAQb;AANC;IACE,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,oCAA4B;OAA5B,iCAA4B;YAA5B,4BAA4B;CAC7B;AAEH;IACE,WAAW;IACX,aAAa;IACb,aAAa;CAiBd;AAbG;IACE,0BAAwB;IACxB,gBAAgB;CACjB;AACD;IACE,0BAAwB;IACxB,gBAAgB;IAChB,aAAa;CACd;AAEH,wGAEC;AAMT;IACE,YAAY;IACZ,cAAc;IACd,mBAAmB;CAwFpB;AAtFC;IACE,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,iBAAiB;CA2ClB;AAzCC;IACE,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,4CAA0C;CAoC3C;AAlCC;IACE,WAAW;IACX,aAAa;IACb,YAAY;CAQb;AANC;IACE,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,oCAA4B;OAA5B,iCAA4B;YAA5B,4BAA4B;CAC7B;AAIH;IACE,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,YAAY;CAeb;AAbC;IACE,eAAe;CAChB;AACD;IACE,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,oCAA4B;OAA5B,iCAA4B;YAA5B,4BAA4B;CAC7B;AACD;IACE,0BAAwB;IACxB,aAAa;CACd;AAKP;IACE,mBAAmB;IACnB,cAAc;IACd,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,0BAA0B;CA8B3B;AA5BC;IACE,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,aAAa;CACd;AAED;IACE,WAAW;IACX,aAAa;IACb,eAAe;IACf,oBAAoB;IACpB,iBAAiB;CAelB;AAdC;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;CAQrB;AAJG;IACE,YAAY;CACb;AAOX;IACE,oBAAoB;IACpB,gBAAgB;CACjB;AACD;IACE,YAAY;IACZ,iBAAiB;CAYlB;AAXA;IACG,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,4CAA0C;CAK3C;AAHC;IACE,WAAW;CACZ;AAIL;IACE,YAAY;IACZ,cAAc;CA6Cf;AA5CC;IACE,cAAc;IACd,4BAA4B;IAC5B,mBAAmB;CAOpB;AALC;IACE,YAAY;IACZ,YAAY;IACZ,iBAAiB;CAClB;AAGH;IACE,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,yCAAuC;CAyBxC;AAvBC;IACE,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,YAAY;IACZ,0BAA0B;IAC1B,eAAe;IACf,cAAc;IACd,eAAe;IACf,iBAAiB;CAClB;AACD;IACE,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,0CAAwC;CACzC;AAIL;IACE,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,mBAAmB;CACpB;AACD;IACE,WAAW;CACZ;AAGD;IACE,YAAY;IACZ,aAAa;IACb,kBAAkB;CACnB;;EAED,SAAS;EACT;;;;;;;;;;;KAWG;AAEJ;GACE,YAAY;IACX,aAAa;IACb,kBAAkB;GACnB,oBAAoB;GACpB,gBAAgB;GAChB,OAAO;GACP,QAAQ;GACR,eAAe;CAwBf;AArBA;IACC,+BAA+B;IAC/B,gBAAgB;IACZ,0BAAwB;CACzB;AACD;IAA2B,yBAAyB;IAClD,+BAA+B;IACnC,gBAAgB;IACZ,0BAAwB;CACzB;AACD;IAA2B,6BAA6B;IACtD,+BAA+B;IACnC,gBAAgB;IACZ,0BAAwB;CACzB;AACD;IAA8B,6BAA6B;IACzD,+BAA+B;IACnC,gBAAgB;IACZ,0BAAwB;CACzB;AAGL;GACC,YAAY;GACZ,aAAa;GACb,kBAAkB;GAClB,oBAAoB;GACpB,mBAAmB;GACnB,mBAAmB;CACnB;AACD;GACC,YAAY;GACZ,YAAY;GACZ,mBAAmB;GACnB,SAAS;GACT,oCAA4B;MAA5B,iCAA4B;WAA5B,4BAA4B;GAC5B,WAAW;CACX;AACD;GACC,+BAA+B;GAC/B,gBAAgB;GAChB,0BAAwB;CACxB;AAED;GACC,aAAa;GACb,6BAA6B;CAC7B;EACD,UAAU;AACV;GACC,YAAY;GACZ,aAAa;GACb,kBAAkB;GAClB,oBAAoB;CACpB;AACD;GACC,WAAW;GACX,YAAY;GACZ,iBAAiB;GACjB,mBAAmB;CACnB;AACD;GACC,+BAA+B;GAC/B,gBAAgB;GAChB,uBAAqB;CACrB;AACD;GACC,WAAW;GACX,aAAa;GACb,aAAa;GACb,kBAAkB;GAClB,oBAAoB;CACpB;AACD;GACC,kBAAkB;GAClB,UAAU;GACV,cAAc;GACd,WAAW;GACX,aAAa;GACb,YAAY;CACZ;AACD;GACC,+BAA+B;GAC/B,gBAAgB;GAChB,uBAAqB;CACrB;AAED;GACC,2BAA2B;GAC3B,gBAAgB;GAChB,0BAAwB;GACxB,eAAe;GACf,iBAAiB;GACjB,sBAAsB;CACtB;;EAED,SAAS;AACT;GACC,YAAY;GACZ,aAAa;GACb,kBAAkB;GAClB,oBAAoB;CACpB;AACD;GACC,WAAW;GACX,YAAY;GACZ,iBAAiB;GACjB,mBAAmB;CACnB;AACD;GACC,+BAA+B;GAC/B,gBAAgB;GAChB,uBAAqB;CACrB;AACD;GACC,WAAW;GACX,aAAa;GACb,aAAa;GACb,kBAAkB;GAClB,oBAAoB;CACpB;AACD;GACC,kBAAkB;GAClB,UAAU;GACV,cAAc;GACd,WAAW;GACX,aAAa;GACb,YAAY;CACZ;AACD;GACC,+BAA+B;GAC/B,gBAAgB;GAChB,uBAAqB;CACrB;;EAED,QAAQ;AACR;GACC,YAAY;GACZ,aAAa;GACb,kBAAkB;GAClB,oBAAoB;CACpB;AACD;GACC,WAAW;GACX,YAAY;GACZ,iBAAiB;GACjB,mBAAmB;CACnB;AACD;GACC,+BAA+B;GAC/B,gBAAgB;GAChB,uBAAqB;CACrB;AACD;GACC,WAAW;GACX,aAAa;GACb,aAAa;GACb,kBAAkB;GAClB,oBAAoB;CACpB;AACD;GACC,kBAAkB;GAClB,UAAU;GACV,cAAc;GACd,YAAY;GACZ,aAAa;GACb,YAAY;CACZ;;EAED,QAAQ;AACR;GACC,YAAY;GACZ,aAAa;GACb,mBAAmB;CACnB;AACD;GACC,eAAe;GACf,gBAAgB;GAChB,kBAAkB;GAClB,+BAA+B;GAC/B,uBAAqB;CACrB;AACD;GACC,WAAW;GACX,aAAa;GACb,kBAAkB;GAClB,0BAAwB;GACxB,2BAA2B;GAC3B,iBAAiB;GACjB,UAAU;GACV,oBAAoB;CACpB;AAED;GACC,2BAA2B;GAC3B,gBAAgB;GAChB,0BAAwB;GACxB,eAAe;GACf,iBAAiB;GACjB,4BAA4B;CAC5B;;;;;;;;;;;;;;;;;EAiBD,aAAa;AACb;;IAEE,kBAAkB;CACnB;AAED;;IAEE,kBAAkB;CACnB;AAED;;IAEE,kBAAkB;CACnB;AAED;;IAEE,kBAAkB;CACnB;AAED;;IAEE,kBAAkB;CACnB","file":"ChatEditor.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  .robot.m-chat-editor-main {\n    /*.u-editor-input {\n      padding-right: 4.5rem;\n    }\n    .u-editor-icons {\n      width: 4rem;\n    }*/\n  }\n\n  .m-chat-robot {\n    overflow-y: scroll;\n    .weui-cells {\n      .weui-cell__hd {\n        margin-right: 0.5rem;\n      }\n    }\n  }\n  .page_popup {\n    width: 90%;\n    height:100px;\n    margin: 0 auto;\n\n    .page_showHbLeft{\n      height: 100px;\n      float: left;\n      .sendImg{\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 60px;\n      }\n      input[type=\"file\"] {\n        position: absolute;\n        display: inline-block;\n        left: 0;\n        top: 0;\n        width: inherit;\n        height: inherit;\n        opacity: 0;\n        font-size: 1rem;\n      }\n    }\n    .page_showHbRight{\n      height: 100px;\n      float: left;\n      padding-left: 20px;\n      .sendHBImg{\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 60px;\n      }\n    }\n  }\n\n  .vux-popup-dialog{\n    position: fixed;\n    left: 0;\n    bottom: 64px;\n    background-color: #fff;\n    border-bottom: 1px solid rgb(200,200,200);\n    z-index: 999;\n  }\n\n\n\n  .active{\n    color: #ffd000;\n  }\n  .tabs{\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    padding:0;\n    position: relative;\n    border-bottom: 1px solid rgb(200,200,200);\n\n    .page_popupPlCK{\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      right: 20px;\n\n      .shutDownPlImg{\n        width: 15px;\n      }\n    }\n  }\n  .li-tab{\n    width: 30%;\n    height: 100%;\n    display:inline-block;\n    text-align: center;\n  }\n  .divTab{\n    width: 100%;\n    height: 240px;\n    position: relative;\n\n    .page_popupPlList{\n      width: 100%;\n      height: 240px;\n      overflow: hidden;\n      overflow-y: auto;\n      .page_popupPlNcList{\n        width: 90%;\n        height: 50px;\n        margin: 10px auto;\n        border-bottom: 1px solid rgb(200,200,200);\n        .page_popupPlImg{\n          width: 15%;\n          height: 50px;\n          float: left;\n\n          .popupPlImg{\n            width: 40px;\n            position: relative;\n            top: 50%;\n            transform: translateY(-50%);\n          }\n        }\n        .page_popupPlNameDate{\n          width: 85%;\n          height: 50px;\n          float: right;\n\n          .popupPlNameDate{\n\n            .popupPlName{\n              color: rgb(153,153,153);\n              font-size: 14px;\n            }\n            .popupPlDate{\n              color: rgb(153,153,153);\n              font-size: 14px;\n              float: right;\n            }\n          }\n          .page_popupPlShow{\n\n          }\n        }\n      }\n    }\n\n  }\n  .divTab2{\n    width: 100%;\n    height: 240px;\n    position: relative;\n\n    .page_excepitionalList{\n      width: 100%;\n      height: 210px;\n      overflow: hidden;\n      overflow-y: auto;\n\n      .page_excepitionalCC{\n        width: 90%;\n        height: 50px;\n        margin: 10px auto;\n        border-bottom: 1px solid rgb(200,200,200);\n\n        .page_excepitionalImg{\n          width: 15%;\n          height: 50px;\n          float: left;\n\n          .excepitionalImg{\n            width: 40px;\n            position: relative;\n            top: 50%;\n            transform: translateY(-50%);\n          }\n        }\n\n\n        .page_excepitionalNM{\n          width: 85%;\n          height: 50px;\n          line-height: 50px;\n          float: left;\n\n          ..excepitionalName{\n            color: #333333;\n          }\n          .medalImg{\n            width: 15px;\n            position: relative;\n            top: 25%;\n            transform: translateY(-50%);\n          }\n          .excepitionalMoney{\n            color: rgb(153,153,153);\n            float: right;\n          }\n        }\n      }\n    }\n\n    .page_excepitionalChoose{\n      position: absolute;\n      bottom: -4rem;\n      left: 0;\n      width: 100%;\n      height: 6rem;\n      background-color: #f7f7f7;\n\n      .excepitionalChoose_TT{\n        width: 90%;\n        margin: 10px auto;\n        color: #333333;\n        height: 24px;\n      }\n\n      .excepitionalChoose_List{\n        width: 90%;\n        height: 54px;\n        margin: 0 auto;\n        white-space: nowrap;\n        overflow: hidden;\n        .excepitionalChoose_nc{\n          width: 100%;\n          height: 54px;\n          overflow-x: auto;\n          overflow-y: hidden;\n          padding-bottom: 6px;\n\n          .excepitionalChoose_ct{\n\n            .etCsImg{\n              width: 40px;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .vux-divider{\n    padding: 30px 0 0 0;\n    font-size: 18px;\n  }\n  .page_directoryList{\n    width: 100%;\n    text-align: left;\n   .directoryList{\n      width: 100%;\n      height: 45px;\n      line-height: 45px;\n      padding-left: 20px;\n      border-bottom: 1px solid rgb(200,200,200);\n\n      .showRed{\n        color: red;\n      }\n    }\n  }\n\n  .page_OpInput{\n    width: 100%;\n    height: 200px;\n    .OpInput{\n      height: 120px;\n      padding: 20px 20px 0px 20px;\n      text-align: center;\n\n      .OpInput_TA{\n        width: 100%;\n        height: 70%;\n        margin-top: 10px;\n      }\n    }\n\n    .page_Bmbtn{\n      height: 50px;\n      line-height: 50px;\n      padding: 0;\n      text-align: center;\n      margin-top: 10px;\n      border-top: 1px solid rgb(200,200,200);\n\n      .BmbtnLeft{\n        display: inline-block;\n        width: 50%;\n        height: 50px;\n        float: left;\n        background-color: #ffffff;\n        color: #333333;\n        border-top: 0;\n        border-left: 0;\n        border-bottom: 0;\n      }\n      .BmbtnRight{\n        display: inline-block;\n        width: 49.6%;\n        height: 50px;\n        float: right;\n        background-color: #ffffff;\n        color: green;\n        border-top: 0;\n        border-right: 0;\n        border-bottom: 0;\n        border-left: 1px solid rgb(200,200,200);\n      }\n    }\n  }\n\n  .page_showYY{\n    width: 100%;\n    position: absolute;\n    top: -400%;\n    text-align: center;\n  }\n  .page_showYYImg{\n    width: 40%;\n  }\n\n\n  .dialog_no{\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n  }\n\n  /* 遮罩层 */\n  /*.homemadeMask{\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,.6);\n    z-index: 500;\n    -moz-opacity: 0.8;\n    opacity: 0.5;\n    filter: alpha(opacity=80);\n  }*/\n\n\t.page_sendRedEnvelope{\n\t\t\twidth: 100%;\n\t\t  height: auto;\n\t\t  min-height: 100vh;\n\t\t\tbackground: #d9d9d9;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tz-index: 10000;\n\n\n\t\t\tinput::-webkit-input-placeholder{\n\t\t\t\tfont-family: \"microsoft yahei\";\n\t\t\t\tfont-size: 14px;\n        color: rgb(102,102,102);\n      }\n      input::-moz-placeholder{   /* Mozilla Firefox 19+ */\n        font-family: \"microsoft yahei\";\n\t\t\t\tfont-size: 14px;\n        color: rgb(102,102,102);\n      }\n      input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */\n        font-family: \"microsoft yahei\";\n\t\t\t\tfont-size: 14px;\n        color: rgb(102,102,102);\n      }\n      input:-ms-input-placeholder{  /* Internet Explorer 10-11 */\n        font-family: \"microsoft yahei\";\n\t\t\t\tfont-size: 14px;\n        color: rgb(102,102,102);\n      }\n\n\t\t}\n\t\t.sendRedEnvelopeTitle{\n\t\t\twidth: 100%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tbackground: #FF0000;\n\t\t\tposition: relative;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.sendRedEnvelopeImg{\n\t\t\twidth: 15px;\n\t\t\tfloat: left;\n\t\t\tposition: relative;\n\t\t\ttop: 50%;\n\t\t\ttransform: translateY(-50%);\n\t\t\tleft: 15px;\n\t\t}\n\t\t.sendRedEnvelopeText{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(255,255,255);\n\t\t}\n\n\t\t.sendRedEnvelopeBody{\n\t\t\theight: auto;\n\t\t\tpadding: 20px 15px 40px 15px;\n\t\t}\n\t\t/* 红包个数 */\n\t\t.sendRedEnvelopeDiv{\n\t\t\twidth: 100%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tbackground: #FFFFFF;\n\t\t}\n\t\t.sendRedEnvelopeDiv_left{\n\t\t\twidth: 20%;\n\t\t\tfloat: left;\n\t\t\ttext-align: left;\n\t\t\tpadding-left: 10px;\n\t\t}\n\t\t.redEnvelopeNum{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51,51,51);\n\t\t}\n\t\t.sendRedEnvelopeDiv_right{\n\t\t\twidth: 70%;\n\t\t\theight: 40px;\n\t\t\tfloat: right;\n\t\t\ttext-align: right;\n\t\t\tpadding-right: 10px;\n\t\t}\n\t\t.redEnvelopeNumInput{\n\t\t\ttext-align: right;\n\t\t\tborder: 0;\n\t\t\toutline: none;\n\t\t\twidth: 90%;\n\t\t\theight: 38px;\n\t\t\tfloat: left;\n\t\t}\n\t\t.redEnvelopeNumText{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51,51,51);\n\t\t}\n\n\t\t.redEnvelopeNumPrompt{\n\t\t\tfont-family: \"plngFang SC\";\n\t\t\tfont-size: 12px;\n\t\t\tcolor: rgb(153,153,153);\n\t\t\tdisplay: block;\n\t\t\tpadding-top: 5px;\n\t\t\tpadding: 5px 0 15px 0;\n\t\t}\n\n\t\t/* 总金额 */\n\t\t.sendRedEnvelopeDiv2{\n\t\t\twidth: 100%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tbackground: #FFFFFF;\n\t\t}\n\t\t.redEnvelopeAmount_left{\n\t\t\twidth: 20%;\n\t\t\tfloat: left;\n\t\t\ttext-align: left;\n\t\t\tpadding-left: 10px;\n\t\t}\n\t\t.redEnvelopeAmount{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51,51,51);\n\t\t}\n\t\t.redEnvelopeAmount_right{\n\t\t\twidth: 70%;\n\t\t\theight: 40px;\n\t\t\tfloat: right;\n\t\t\ttext-align: right;\n\t\t\tpadding-right: 10px;\n\t\t}\n\t\t.redEnvelopeAmountInput{\n\t\t\ttext-align: right;\n\t\t\tborder: 0;\n\t\t\toutline: none;\n\t\t\twidth: 90%;\n\t\t\theight: 38px;\n\t\t\tfloat: left;\n\t\t}\n\t\t.redEnvelopeAmountText{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51,51,51);\n\t\t}\n\n\t\t/* 留言 */\n\t\t.sendRedEnvelopeDiv3{\n\t\t\twidth: 100%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tbackground: #FFFFFF;\n\t\t}\n\t\t.redEnvelopeLeaveMsg_left{\n\t\t\twidth: 20%;\n\t\t\tfloat: left;\n\t\t\ttext-align: left;\n\t\t\tpadding-left: 10px;\n\t\t}\n\t\t.redEnvelopeLeaveMsg{\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tfont-size: 14px;\n\t\t\tcolor: rgb(51,51,51);\n\t\t}\n\t\t.redEnvelopeLeaveMsg_right{\n\t\t\twidth: 70%;\n\t\t\theight: 40px;\n\t\t\tfloat: right;\n\t\t\ttext-align: right;\n\t\t\tpadding-right: 10px;\n\t\t}\n\t\t.redEnvelopeLeaveMsgInput{\n\t\t\ttext-align: right;\n\t\t\tborder: 0;\n\t\t\toutline: none;\n\t\t\twidth: 100%;\n\t\t\theight: 38px;\n\t\t\tfloat: left;\n\t\t}\n\n\t\t/* 提交 */\n\t\t.sendRedEnvelopeBtn{\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.redEnvelopeAmountShow{\n\t\t\tdisplay: block;\n\t\t\tfont-size: 24px;\n\t\t\tfont-weight: bold;\n\t\t\tfont-family: \"microsoft yahei\";\n\t\t\tcolor: rgb(51,51,51);\n\t\t}\n\t\t.sendRedEnvelopeBtn input{\n\t\t\twidth: 90%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tcolor: rgb(255,255,255);\n\t\t\tfont-family: \"plngFang SC\";\n\t\t\tmargin-top: 20px;\n\t\t\tborder: 0;\n\t\t\tbackground: #FF0000;\n\t\t}\n\n\t\t.notReceiveRedEnvelope{\n\t\t\tfont-family: \"plngFang SC\";\n\t\t\tfont-size: 12px;\n\t\t\tcolor: rgb(153,153,153);\n\t\t\tdisplay: block;\n\t\t\tpadding-top: 5px;\n\t\t\tpadding: 5px 15px 15px 15px;\n\t\t}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  /* input样式 */\n  input::input-placeholder {\n\n    padding-left: 5px;\n  }\n\n  input::-webkit-input-placeholder {\n\n    padding-left: 5px;\n  }\n\n  input:-ms-input-placeholder {\n\n    padding-left: 5px;\n  }\n\n  input:-moz-placeholder {\n\n    padding-left: 5px;\n  }\n\n  input::-moz-placeholder {\n\n    padding-left: 5px;\n  }\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 373:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4591ad5e","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEmoji.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.m-chat-emoji {\n  position: absolute;\n  top: -12rem;\n  height: 12rem;\n  left: 0;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n}\n.m-chat-emoji .emoji-channel {\n  position: relative;\n  width: 100%;\n  height: auto;\n  margin: 0 1rem;\n}\n.m-chat-emoji .emoji-channel .emoji-album {\n  display: inline-block;\n  padding: 0.1rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  border-right: 1px solid #f0f0f0;\n}\n.m-chat-emoji .emoji-channel .emoji-album img {\n  margin: 0;\n  display: block;\n  width: inherit;\n  height: inherit;\n}\n.m-chat-emoji .emoji-channel .emoji-album.active {\n  background-color: #f0f0f0;\n}\n.m-chat-emoji .emoji-content {\n  position: relative;\n  width: 100%;\n  height: 10rem;\n  background-color: #f0f0f0;\n  overflow-y: auto;\n}\n.m-chat-emoji .emoji-content .cnt {\n  position: relative;\n  display: block;\n  margin: 0.4rem auto;\n  text-align: left;\n}\n.m-chat-emoji .emoji-content .emoji-item {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  padding: 2px;\n  vertical-align: middle;\n  /*border: 1px solid #fff;*/\n  /*margin-left: -1px;*/\n}\n/*margin-bottom: -1px;*/\n.m-chat-emoji .emoji-content .emoji-item img {\n  width: inherit;\n  height: inherit;\n}\n.m-chat-emoji .emoji-content .pinup-item {\n  width: 44px;\n  height: 44px;\n}\n@media screen and (min-width: 300px) and (max-width: 420px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 300px;\n  }\n}\n@media screen and (min-width: 420px) and (max-width: 600px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 720px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 600px;\n  }\n}\n@media screen and (min-width: 720px) and (max-width: 1080px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 720px;\n  }\n}\n@media screen and (min-width: 1080px){\n  .m-chat-emoji .emoji-content .cnt {\n    width: 1080px;\n  }\n}\n", "", {"version":3,"sources":["D:/yotta/college/public_html/assets/yunxin/src/pages/components/ChatEmoji.vue"],"names":[],"mappings":";AAwHA;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,QAAQ;EACR,YAAY;EACZ,2BAA2B;EAC3B,uBAAuB;CAoFxB;AAnFC;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,eAAe;CAiBhB;AAhBC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,gCAAgC;CAUjC;AATC;EACE,UAAU;EACV,eAAe;EACf,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,0BAA0B;CAC3B;AAGL;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,0BAA0B;EAC1B,iBAAiB;CAyBlB;AAxBC;EACE,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,sBAAsB;CAMvB;AALC,wBAAwB;AACxB;EACE,eAAe;EACf,gBAAgB;CACjB;AAEH;EACE,YAAY;EACZ,aAAa;CACd;AAGH;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,cAAc;GACf;CACF","file":"ChatEmoji.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.m-chat-emoji {\n  position: absolute;\n  top: -12rem;\n  height: 12rem;\n  left: 0;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n  .emoji-channel {\n    position: relative;\n    width: 100%;\n    height: auto;\n    margin: 0 1rem;\n    .emoji-album {\n      display: inline-block;\n      padding: 0.1rem;\n      width: 1.8rem;\n      height: 1.8rem;\n      border-right: 1px solid #f0f0f0;\n      img {\n        margin: 0;\n        display: block;\n        width: inherit;\n        height: inherit;\n      }\n      &.active {\n        background-color: #f0f0f0;\n      }\n    }\n  }\n  .emoji-content {\n    position: relative;\n    width: 100%;\n    height: 10rem;\n    background-color: #f0f0f0;\n    overflow-y: auto;\n    .cnt {\n      position: relative;\n      display: block;\n      margin: 0.4rem auto;\n      text-align: left;\n    }\n    .emoji-item {\n      display: inline-block;\n      width: 28px;\n      height: 28px;\n      padding: 2px;\n      vertical-align: middle;\n      /*border: 1px solid #fff;*/\n      /*margin-left: -1px;*/\n      /*margin-bottom: -1px;*/\n      img {\n        width: inherit;\n        height: inherit;\n      }\n    }\n    .pinup-item {\n      width: 44px;\n      height: 44px;\n    }\n  }\n\n  @media screen and (min-width: 300px) and (max-width: 420px) {\n    .emoji-content .cnt {\n      width: 300px;\n    }\n  }\n\n  @media screen and (min-width: 420px) and (max-width: 600px) {\n    .emoji-content .cnt {\n      width: 420px;\n    }\n  }\n\n  @media screen and (min-width: 600px) and (max-width: 720px) {\n    .emoji-content .cnt {\n      width: 600px;\n    }\n  }\n\n  @media screen and (min-width: 720px) and (max-width: 1080px) {\n    .emoji-content .cnt {\n      width: 720px;\n    }\n  }\n\n  @media screen and (min-width: 1080px){\n    .emoji-content .cnt {\n      width: 1080px;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 374:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-42d7fa72"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatEditor.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-chat-editor",
    staticStyle: {
      "z-index": "999"
    },
    attrs: {
      "id": "m-chat-editor"
    },
    on: {
      "click": _vm.hideRobotList
    }
  }, [_c('chat-emoji', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEmojiShown),
      expression: "isEmojiShown"
    }],
    attrs: {
      "type": _vm.type,
      "scene": _vm.scene,
      "to": _vm.to
    },
    on: {
      "add-emoji": _vm.addEmoji,
      "hide-emoji": _vm.hideEmoji
    }
  }), _vm._v(" "), _c('group', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isRobotListShown),
      expression: "isRobotListShown"
    }],
    staticClass: "m-chat-emoji m-chat-robot"
  }, [_vm._l((_vm.robotslist), function(robot) {
    return _c('cell', {
      key: robot.account,
      attrs: {
        "title": robot.nick
      },
      nativeOn: {
        "click": function($event) {
          _vm.chooseRobot(robot)
        }
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "slot": "icon",
        "width": "20",
        "src": robot.avatar
      },
      slot: "icon"
    })])
  }), _vm._v(" "), _c('x-switch', {
    attrs: {
      "title": "Default popup"
    },
    model: {
      value: (_vm.popupShow),
      callback: function($$v) {
        _vm.popupShow = $$v
      },
      expression: "popupShow"
    }
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "page_popupBox"
  }, [_c('popup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.popupShow),
      expression: "popupShow"
    }],
    model: {
      value: (_vm.popupShow),
      callback: function($$v) {
        _vm.popupShow = $$v
      },
      expression: "popupShow"
    }
  }, [_c('div', {
    staticClass: "page_popup"
  }, [(!_vm.isRobot) ? _c('div', {
    staticClass: "page_showHbLeft",
    on: {
      "change": _vm.sendFileMsg
    }
  }, [_c('img', {
    staticClass: "sendImg",
    attrs: {
      "src": "/assets/yunxin/res/im/sendImg.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('input', {
    ref: "fileToSent",
    attrs: {
      "type": "file"
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "page_showHbRight",
    on: {
      "click": _vm.sendHbMsg
    }
  }, [_c('img', {
    staticClass: "sendHBImg",
    attrs: {
      "src": "/assets/yunxin/res/im/sendHB.png",
      "alt": ""
    }
  })])])])], 1), _vm._v(" "), _c('div', [_c('x-dialog', {
    staticClass: "dialog-demo",
    attrs: {
      "hide-on-blur": ""
    },
    model: {
      value: (_vm.showScrollBox),
      callback: function($$v) {
        _vm.showScrollBox = $$v
      },
      expression: "showScrollBox"
    }
  }, [_c('div', {
    staticClass: "dialog_no"
  }, [_c('span', [_vm._v("敬请期待")])]), _vm._v(" "), _c('div', {
    on: {
      "click": function($event) {
        _vm.showScrollBox = false
      }
    }
  }, [_c('span', {
    staticClass: "vux-close"
  })])])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.redEnvelopeShow),
      expression: "redEnvelopeShow"
    }],
    staticClass: "page_sendRedEnvelope"
  }, [_c('div', {
    staticClass: "sendRedEnvelopeTitle"
  }, [_c('img', {
    staticClass: "sendRedEnvelopeImg",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/backIcon.png"
    },
    on: {
      "click": function($event) {
        _vm.redEnvelopeShow = false
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sendRedEnvelopeText"
  }, [_vm._v("发红包")])]), _vm._v(" "), _c('div', {
    staticClass: "sendRedEnvelopeBody"
  }, [_c('div', {
    staticClass: "sendRedEnvelopeDiv"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "sendRedEnvelopeDiv_right"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputNum),
      expression: "inputNum"
    }],
    staticClass: "redEnvelopeNumInput",
    attrs: {
      "type": "tel",
      "value": "",
      "maxlength": "3",
      "placeholder": "红包个数"
    },
    domProps: {
      "value": (_vm.inputNum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputNum = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "redEnvelopeNumText"
  }, [_vm._v("个")])])]), _vm._v(" "), _c('span', {
    staticClass: "redEnvelopeNumPrompt"
  }, [_vm._v("最多100个")]), _vm._v(" "), _c('div', {
    staticClass: "sendRedEnvelopeDiv2 "
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "redEnvelopeAmount_right"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputAmount),
      expression: "inputAmount "
    }],
    staticClass: "redEnvelopeAmountInput",
    attrs: {
      "type": "tel",
      "value": "",
      "maxlength": "5",
      "placeholder": "填写金额"
    },
    domProps: {
      "value": (_vm.inputAmount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputAmount = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "redEnvelopeAmountText"
  }, [_vm._v("元")])])]), _vm._v(" "), _c('span', {
    staticClass: "redEnvelopeNumPrompt"
  }, [_vm._v("总金额上限为10000元")]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c('div', {
    staticClass: "sendRedEnvelopeBtn"
  }, [_c('span', {
    staticClass: "redEnvelopeAmountShow"
  }, [_vm._v("￥" + _vm._s(_vm.inputAmount))]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "submit",
      "value": "塞钱进红包"
    },
    on: {
      "click": _vm.clickSendRedEnvelope
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "notReceiveRedEnvelope"
  }, [_vm._v("未领取的红包，7天后自动转入个人收益")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border-radius": "10px"
    },
    attrs: {
      "id": "clickSendDown"
    }
  }, [_c('x-dialog', {
    staticClass: "dialog-demo",
    attrs: {
      "hide-on-blur": ""
    },
    model: {
      value: (_vm.showHideOnBlur),
      callback: function($$v) {
        _vm.showHideOnBlur = $$v
      },
      expression: "showHideOnBlur"
    }
  }, [_c('div', {
    staticClass: "img-box"
  }, [_c('div', {
    staticClass: "page_OpInput"
  }, [_c('div', {
    staticClass: "OpInput"
  }, [_c('p', {
    staticClass: "OpInput_TT"
  }, [_vm._v("发送文字")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msgToSent),
      expression: "msgToSent"
    }],
    staticClass: "OpInput_TA",
    attrs: {
      "type": "text",
      "id": "textareaId",
      "cols": "",
      "rows": ""
    },
    domProps: {
      "value": (_vm.msgToSent)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.msgToSent = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "page_Bmbtn"
  }, [_c('span', {
    staticClass: "BmbtnLeft",
    on: {
      "click": _vm.removeTextMsg
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('span', {
    staticClass: "BmbtnRight",
    on: {
      "click": _vm.sendTextMsg
    }
  }, [_vm._v("发送")])])])]), _vm._v(" "), _c('div', {
    on: {
      "click": function($event) {
        _vm.showHideOnBlur = false
      }
    }
  }, [_c('span', {
    staticClass: "vux-close"
  })])])], 1), _vm._v(" "), _c('div', {
    staticClass: "m-chat-editor-main",
    class: {
      robot: _vm.isRobot
    },
    staticStyle: {
      "display": "none"
    }
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "u-editor-input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msgToSent),
      expression: "msgToSent"
    }],
    attrs: {
      "type": "text",
      "placeholder": "发表评论"
    },
    domProps: {
      "value": (_vm.msgToSent)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.msgToSent = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "u-editor-icons"
  }, [_c('div', {
    staticClass: "page_comments",
    on: {
      "click": _vm.clickStudentsPL
    }
  }, [_c('img', {
    staticClass: "commentsImg",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/comments.png"
    }
  })]), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _c('div', {
    staticClass: "m-chat-editor-main",
    class: {
      robot: _vm.isRobot
    }
  }, [(_vm.teacher_if == false) ? _c('div', [(!_vm.isRobot) ? _c('div', {
    staticClass: "page_changeAT2",
    on: {
      "touchstart": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.startRecord($event)
      },
      "touchend": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.stopRecord($event)
      }
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('a', {
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "href": "http://www.hkwzxy.com/m/index/luodi/haolaoshi"
    }
  }, [(_vm.teacher_if == true) ? _c('div', {
    staticClass: "page_changeAT",
    staticStyle: {
      "width": "15%"
    }
  }, [_c('img', {
    staticClass: "changeAtImg",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/classes.png"
    }
  })]) : _vm._e()]), _vm._v(" "), (_vm.teacher_if == false) ? _c('div', [_c('div', {
    staticClass: "u-editor-input2"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "发送文字",
      "id": "inputId",
      "readonly": ""
    },
    on: {
      "click": _vm.clickOpInput
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.teacher_if == true) ? _c('div', [_c('div', {
    staticClass: "u-editor-input2",
    staticStyle: {
      "width": "55%"
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "发送文字",
      "id": "inputId",
      "readonly": ""
    },
    on: {
      "click": _vm.clickOpInput
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.teacher_if == false) ? _c('div', [_c('div', {
    staticClass: "u-editor-icons2"
  }, [(_vm.teacher_if == false) ? _c('div', {
    staticClass: "page_sendImgHB2",
    on: {
      "click": _vm.clickHB
    }
  }, [_c('img', {
    staticClass: "myIconShowPlass",
    attrs: {
      "id": "myIconShowPlass",
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/sendImgHB.png"
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "page_comments2",
    on: {
      "click": _vm.clickTeacherPL
    }
  }, [_c('img', {
    staticClass: "commentsImg2",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/comments.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "page_unknown2",
    on: {
      "click": _vm.clickTeacherML
    }
  }, [_c('img', {
    staticClass: "unknownImg2",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/list.png"
    }
  })])])]) : _vm._e(), _vm._v(" "), (_vm.teacher_if == true) ? _c('div', [_c('div', {
    staticClass: "u-editor-icons2",
    staticStyle: {
      "width": "30%"
    }
  }, [(_vm.teacher_if == false) ? _c('div', {
    staticClass: "page_sendImgHB2",
    on: {
      "click": _vm.clickHB
    }
  }, [_c('img', {
    staticClass: "myIconShowPlass",
    attrs: {
      "id": "myIconShowPlass",
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/sendImgHB.png"
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "page_comments2",
    staticStyle: {
      "width": "50%"
    },
    on: {
      "click": _vm.clickTeacherPL
    }
  }, [_c('img', {
    staticClass: "commentsImg2",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/comments.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "page_unknown2",
    staticStyle: {
      "width": "50%"
    },
    on: {
      "click": _vm.clickTeacherML
    }
  }, [_c('img', {
    staticClass: "unknownImg2",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/list.png"
    }
  })])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "page_showYY"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isImgHide),
      expression: "isImgHide"
    }],
    staticClass: "page_showYYImg",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/recording.gif",
      "alt": ""
    }
  })])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sendRedEnvelopeDiv_left"
  }, [_c('span', {
    staticClass: "redEnvelopeNum"
  }, [_vm._v("红包个数")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "redEnvelopeAmount_left"
  }, [_c('span', {
    staticClass: "redEnvelopeAmount"
  }, [_vm._v("总金额")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sendRedEnvelopeDiv3 "
  }, [_c('div', {
    staticClass: "redEnvelopeLeaveMsg_left"
  }, [_c('span', {
    staticClass: "redEnvelopeLeaveMsg"
  }, [_vm._v("留言")])]), _vm._v(" "), _c('div', {
    staticClass: "redEnvelopeLeaveMsg_right"
  }, [_c('input', {
    staticClass: "redEnvelopeLeaveMsgInput",
    attrs: {
      "type": "text",
      "value": "",
      "maxlength": "20",
      "placeholder": "恭喜发财，大吉大利"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page_changeAT"
  }, [_c('img', {
    staticClass: "changeAtImg",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/classes.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page_unknown"
  }, [_c('img', {
    staticClass: "unknownImg",
    attrs: {
      "src": "http://college.m-fyd.com/assets/yunxin/res/im/list.png"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42d7fa72", module.exports)
  }
}

/***/ }),

/***/ 375:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-4591ad5e"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatEmoji.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-chat-emoji"
  }, [_c('div', {
    staticClass: "emoji-content"
  }, [_c('div', {
    staticClass: "cnt"
  }, _vm._l((_vm.currEmoji.list), function(item) {
    return _c('span', {
      staticClass: "emoji-item",
      class: {
        'pinup-item': item.type === 'pinup'
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectEmoji(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "emoji-channel"
  }, [_vm._l((_vm.emoji), function(item) {
    return _c('span', {
      staticClass: "emoji-album",
      class: {
        active: item.name == _vm.currAlbum
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectAlbum(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.album
      }
    })])
  }), _vm._l((_vm.pinup), function(item) {
    return (_vm.type === 'session') ? _c('span', {
      staticClass: "emoji-album",
      class: {
        active: item.name == _vm.currAlbum
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectAlbum(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.album
      }
    })]) : _vm._e()
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4591ad5e", module.exports)
  }
}

/***/ }),

/***/ 376:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-42d7fa72","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEditor.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-42d7fa72","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue */ 372);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("1bb21024", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-42d7fa72\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-42d7fa72\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 377:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-4591ad5e","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEmoji.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-4591ad5e","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue */ 373);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("a0707a62", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4591ad5e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4591ad5e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 378:
/* no static exports found */
/* exports used: default */
/*!*********************************************!*\
  !*** ./src/pages/components/ChatEditor.vue ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-42d7fa72","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatEditor.vue */ 376)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatEditor.vue */ 370),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-42d7fa72"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatEditor.vue */ 374),
  /* scopeId */
  "data-v-42d7fa72",
  /* cssModules */
  null
)
Component.options.__file = "D:\\yotta\\college\\public_html\\assets\\yunxin\\src\\pages\\components\\ChatEditor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatEditor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42d7fa72", Component.options)
  } else {
    hotAPI.reload("data-v-42d7fa72", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 379:
/* no static exports found */
/* exports used: default */
/*!********************************************!*\
  !*** ./src/pages/components/ChatEmoji.vue ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-4591ad5e","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatEmoji.vue */ 377)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatEmoji.vue */ 371),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-4591ad5e"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatEmoji.vue */ 375),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\yotta\\college\\public_html\\assets\\yunxin\\src\\pages\\components\\ChatEmoji.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatEmoji.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4591ad5e", Component.options)
  } else {
    hotAPI.reload("data-v-4591ad5e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 380:
/* exports provided: default */
/* all exports used */
/*!****************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Chat.vue ***!
  \****************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ChatEditor__ = __webpack_require__(/*! ./components/ChatEditor */ 378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ChatEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ChatEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ChatList__ = __webpack_require__(/*! ./components/ChatList */ 369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ChatList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ChatList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(/*! ../utils */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page__ = __webpack_require__(/*! ../utils/page */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_page__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatEditor: __WEBPACK_IMPORTED_MODULE_0__components_ChatEditor___default.a,
    ChatList: __WEBPACK_IMPORTED_MODULE_1__components_ChatList___default.a
  },
  // 进入该页面，文档被挂载
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('showLoading');
    // 此时设置当前会话
    this.$store.dispatch('setCurrSession', this.sessionId);
    __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
    setTimeout(function () {
      _this.$store.dispatch('hideLoading');
    }, 1000);
  },
  updated: function updated() {
    __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
  },

  // 离开该页面，此时重置当前会话
  destroyed: function destroyed() {
    this.$store.dispatch('resetCurrSession');
  },
  data: function data() {
    return {
      leftBtnOptions: {
        backText: ' ',
        preventGoBack: true
      }
    };
  },

  computed: {
    sessionId: function sessionId() {
      var sessionId = this.$route.params.sessionId;
      return sessionId;
    },
    sessionName: function sessionName() {
      var sessionId = this.sessionId;
      var user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (user === this.$store.state.userUID) {
          return '我的手机';
        } else if (this.isRobot) {
          return this.robotInfos[user].nick;
        } else {
          var userInfo = this.userInfos[user] || {};
          return __WEBPACK_IMPORTED_MODULE_2__utils___default.a.getFriendAlias(userInfo);
        }
      } else if (/^team-/.test(sessionId)) {
        return '群';
      }
    },
    scene: function scene() {
      return __WEBPACK_IMPORTED_MODULE_2__utils___default.a.parseSession(this.sessionId).scene;
    },
    to: function to() {
      return __WEBPACK_IMPORTED_MODULE_2__utils___default.a.parseSession(this.sessionId).to;
    },

    // 判断是否是机器人
    isRobot: function isRobot() {
      var sessionId = this.sessionId;
      var user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (this.robotInfos[user]) {
          return true;
        }
      }
      return false;
    },
    myInfo: function myInfo() {
      return this.$store.state.myInfo;
    },
    userInfos: function userInfos() {
      return this.$store.state.userInfos;
    },
    robotInfos: function robotInfos() {
      return this.$store.state.robotInfos;
    },
    msglist: function msglist() {
      var msgs = this.$store.state.currSessionMsgs;
      return msgs;
    }
  },
  methods: {
    onClickBack: function onClickBack() {
      // location.href = '#/contacts'
      window.history.go(-1);
    },
    msgsLoaded: function msgsLoaded() {
      __WEBPACK_IMPORTED_MODULE_3__utils_page___default.a.scrollChatListDown();
    },
    enterNameCard: function enterNameCard() {
      if (/^p2p-/.test(this.sessionId)) {
        var account = this.sessionId.replace(/^p2p-/, '');
        if (account === this.$store.state.userUID) {
          location.href = '#/general';
          return;
        }
        location.href = '#/namecard/' + account;
      }
    }
  }
});

/***/ }),

/***/ 417:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-af213158"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Chat.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": _vm.leftBtnOptions
    },
    on: {
      "on-click-back": _vm.onClickBack
    }
  }, [_c('h1', {
    staticClass: "m-tab-top",
    on: {
      "click": _vm.enterNameCard
    }
  }, [_vm._v(_vm._s(_vm.sessionName))]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }), _vm._v(" "), _c('group', {
    staticClass: "m-tab-right",
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('a', {
    attrs: {
      "href": '#/chathistory/' + _vm.sessionId
    }
  }, [_vm._v("历史消息")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "m-chat-main"
  }, [_c('chat-list', {
    attrs: {
      "type": "session",
      "msglist": _vm.msglist,
      "userInfos": _vm.userInfos,
      "myInfo": _vm.myInfo,
      "isRobot": _vm.isRobot
    },
    on: {
      "msgs-loaded": _vm.msgsLoaded
    }
  }), _vm._v(" "), _c('chat-editor', {
    attrs: {
      "type": "session",
      "scene": _vm.scene,
      "to": _vm.to,
      "isRobot": _vm.isRobot
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-af213158", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1.js.map