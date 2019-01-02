(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gelatin-ui"] = factory(require("vue"));
	else
		root["gelatin-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  __webpack_require__("9aa9").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0196":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("5a88")
var Mode = __webpack_require__("bbf0")

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Buffer(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ "01e0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "0425":
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+\\-./:]+'
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ "044b":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "04d1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "05c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_b102e274_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9d72");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_b102e274_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_b102e274_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdown_vue_vue_type_style_index_0_id_b102e274_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "07fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("383c");



_icon_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].install = function (Vue) {
  Vue.component(_icon_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].name, _icon_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
};

/* harmony default export */ __webpack_exports__["a"] = (_icon_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "09fa":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__("4588");
var toLength = __webpack_require__("9def");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("2444");
var utils = __webpack_require__("c532");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");

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

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

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
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
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

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0df6":
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

/***/ "0ec0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0f32":
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__("b047"),
    isObject = __webpack_require__("1a8c");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "0f88":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var uid = __webpack_require__("ca5a");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "10b0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "1173":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "14b9":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__("9744")
});


/***/ }),

/***/ "1521":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "18e3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "19e9":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1d2b":
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

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

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
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
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
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
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

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "2446":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "24c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var global = __webpack_require__("e53d");
var ctx = __webpack_require__("d864");
var classof = __webpack_require__("40c3");
var $export = __webpack_require__("63b6");
var isObject = __webpack_require__("f772");
var aFunction = __webpack_require__("79aa");
var anInstance = __webpack_require__("1173");
var forOf = __webpack_require__("a22a");
var speciesConstructor = __webpack_require__("f201");
var task = __webpack_require__("4178").set;
var microtask = __webpack_require__("aba2")();
var newPromiseCapabilityModule = __webpack_require__("656e");
var perform = __webpack_require__("4439");
var userAgent = __webpack_require__("bc13");
var promiseResolve = __webpack_require__("cd78");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("5168")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("5c95")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("45f2")($Promise, PROMISE);
__webpack_require__("4c95")(PROMISE);
Wrapper = __webpack_require__("584a")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("4ee1")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "268f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fde4");

/***/ }),

/***/ "2732":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("5a88")
var GF = __webpack_require__("699e")

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1)
  coeff.fill(0)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),

/***/ "27a3":
/***/ (function(module, exports) {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2818":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_36e0a100_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c24d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_36e0a100_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_36e0a100_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_36e0a100_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';

// eslint-disable-next-line no-empty
var SUPPORTS_Y = !!(function () { try { return new RegExp('x', 'y'); } catch (e) {} })();

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? 0xffffffff : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "2f3a":
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__("bbf0")
var Utils = __webpack_require__("7bf0")

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "3024":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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
      } else {
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

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "3209":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a3b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3279":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "34ef":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ec30")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "34fc":
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__("7a43")

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "383c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/icon.vue?vue&type=template&id=551a70ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconId)?_c('svg',{staticClass:"ui-icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":_vm.iconId}})]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/icon/icon.vue?vue&type=template&id=551a70ba&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("795b");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/interopRequireWildcard.js
var interopRequireWildcard = __webpack_require__("8793");

// EXTERNAL MODULE: ./packages/assets/scss/icon.scss
var icon = __webpack_require__("4cc0");

// EXTERNAL MODULE: ./packages/assets/image/iconfont.svg
var iconfont = __webpack_require__("fb97");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/icon.vue?vue&type=script&lang=js&




//
//
//
//
//


/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: "ui-icon",
  props: {
    name: String
  },
  mounted: function mounted() {
    promise_default.a.resolve().then(function () {
      return Object(interopRequireWildcard["a" /* default */])(__webpack_require__("ee47"));
    }).then(function (module) {});
  },
  computed: {
    iconId: function iconId() {
      return this.name ? this.name.startsWith("icon-") ? "#".concat(this.name) : "#icon-".concat(this.name) : "";
    }
  }
});
// CONCATENATED MODULE: ./packages/icon/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icon_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/icon/icon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "icon.vue"
/* harmony default export */ var icon_icon = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "394f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "3b89":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3c11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var speciesConstructor = __webpack_require__("f201");
var promiseResolve = __webpack_require__("cd78");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "3cbe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ring_vue_vue_type_style_index_0_id_adc93386_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b656");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ring_vue_vue_type_style_index_0_id_adc93386_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ring_vue_vue_type_style_index_0_id_adc93386_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ring_vue_vue_type_style_index_0_id_adc93386_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4006":
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__("45be")

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255
  var str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  var path = ''
  var moveBy = 0
  var newRow = false
  var lineLength = 0

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size)
    var row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = size + opts.margin * 2

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ "4055":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "408c":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "4146":
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__("45be")

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = Utils.getImageWidth(qrData.modules.size, opts)

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ "4178":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var invoke = __webpack_require__("3024");
var html = __webpack_require__("32fc");
var cel = __webpack_require__("1ec9");
var global = __webpack_require__("e53d");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("6b4c")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "43fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("63b6");
var newPromiseCapability = __webpack_require__("656e");
var perform = __webpack_require__("4439");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "4439":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45be":
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  var width = options.width && options.width >= 21 ? options.width : undefined
  var scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scale = exports.getScale(size, opts)
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)
  var scaledMargin = opts.margin * scale
  var palette = [opts.color.light, opts.color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

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
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "48c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__("386b")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "4a3b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4aa0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4c7a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4c95":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var dP = __webpack_require__("d9f6");
var DESCRIPTORS = __webpack_require__("8e60");
var SPECIES = __webpack_require__("5168")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "4cc0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5176":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("51b6");

/***/ }),

/***/ "51a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_leafiy_code_gelatin_ui_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5176");
/* harmony import */ var _home_leafiy_code_gelatin_ui_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_leafiy_code_gelatin_ui_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("e1bd");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popover_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d4da");




var PopoverConstructor = vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend(_popover_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

var Popover = function Popover(options) {
  if (!options.trigger) {
    throw new Error("missing triggle element");
  }

  var el = options.trigger;

  if (el.dataset.popover) {
    return;
  }

  el.dataset.popover = "popover-" + nanoid__WEBPACK_IMPORTED_MODULE_2___default()();
  options = options.tooltip ? options : popoverOptions(el.dataset.popover, options);
  options.triggerId = el.dataset.popover;
  var instance = new PopoverConstructor({
    propsData: options
  });
  instance.$mount();

  if (!options.tooltip) {
    setTimeout(function () {
      instance.isShow = true;
    }, options.openDelay);
  }

  var $el = instance.$el;

  if (options.insertAfter) {
    el.parentNode.insertBefore($el, el.nextSibling);
  } else {
    document.body.appendChild($el);
  }

  el.addEventListener("click", function () {
    instance.close();
  });
  return instance;
};

var popoverOptions = function popoverOptions(triggerId, options) {
  var defaultOptions = {
    insertAfter: false,
    closeOnClick: true,
    arrow: true
  };
  options = _home_leafiy_code_gelatin_ui_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(defaultOptions, options);
  return options;
};

/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "522b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");
var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

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

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

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

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "539c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "571b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("5a88")

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Buffer(size * size)
  this.data.fill(0)
  this.reservedBit = new Buffer(size * size)
  this.reservedBit.fill(0)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5a88":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__("eee5")

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that
    if (buf === null) {
      buf = new Buffer(length)
    }
    buf.length = length
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(that, length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf)
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(that, len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(null, length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports = Buffer


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5c95":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("35e8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5d6b":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("e53d").parseInt;
var $trim = __webpack_require__("a1ce").trim;
var ws = __webpack_require__("e692");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5df3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("02f4")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("01f9")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "6093":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "610b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "656e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("79aa");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "67dd":
/***/ (function(module, exports) {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "696e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c207");
__webpack_require__("1654");
__webpack_require__("6c1c");
__webpack_require__("24c5");
__webpack_require__("3c11");
__webpack_require__("43fc");
module.exports = __webpack_require__("584a").Promise;


/***/ }),

/***/ "699e":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("5a88")

var EXP_TABLE = new Buffer(512)
var LOG_TABLE = new Buffer(256)

/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6c06":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "6e0f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7445":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var $parseInt = __webpack_require__("5d6b");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "7903":
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "795b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("696e");

/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a43":
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7a77":
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

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "7ba0":
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ "7bf0":
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "868c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8793":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _interopRequireWildcard; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("268f");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("85f2");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__);


function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default.a && _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default.a ? _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(obj, key) : {};

          if (desc.get || desc.set) {
            _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default()(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

/***/ }),

/***/ "8954":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrap":"marquee_wrap_1jSHU","content":"marquee_content_3tAbr","text":"marquee_text_2RIDH","animation":"marquee_animation_3MrrF","paused":"marquee_paused_3nOTS"};

/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8d23":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("5a88")
var Polynomial = __webpack_require__("2732")

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree)
  pad.fill(0)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = new Buffer(this.degree)
    buff.fill(0)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

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

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "924f":
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__("7bf0").getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "9582":
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__("7bf0")

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ "9744":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "9780":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9d72":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9d94":
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__("bbf0")

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9fa6":
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

/***/ "a0b0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a109":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a1ce":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var defined = __webpack_require__("25eb");
var fails = __webpack_require__("294c");
var spaces = __webpack_require__("e692");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "a22a":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var anObject = __webpack_require__("e4ae");
var toLength = __webpack_require__("b447");
var getIterFn = __webpack_require__("7cd6");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "a2df":
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){var e="undefined"!=typeof window&&("ontouchstart"in window||navigator.msMaxTouchPoints>0)?["touchstart","click"]:["click"],n=[];function t(n){var t="function"==typeof n;if(!t&&"object"!=typeof n)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?n:n.handler,middleware:n.middleware||function(e){return e},events:n.events||e}}function r(e){var n=e.el,t=e.event,r=e.handler,i=e.middleware;t.target!==n&&!n.contains(t.target)&&i(t,n)&&r(t,n)}var i={bind:function(e,i){var d=t(i.value),o=d.handler,a=d.middleware,u={el:e,eventHandlers:d.events.map(function(n){return{event:n,handler:function(n){return r({event:n,el:e,handler:o,middleware:a})}}})};u.eventHandlers.forEach(function(e){return document.addEventListener(e.event,e.handler)}),n.push(u)},update:function(e,i){var d=t(i.value),o=d.handler,a=d.middleware,u=d.events,c=n.find(function(n){return n.el===e});c.eventHandlers.forEach(function(e){return document.removeEventListener(e.event,e.handler)}),c.eventHandlers=u.map(function(n){return{event:n,handler:function(n){return r({event:n,el:e,handler:o,middleware:a})}}}),c.eventHandlers.forEach(function(e){return document.addEventListener(e.event,e.handler)})},unbind:function(e){n.find(function(n){return n.el===e}).eventHandlers.forEach(function(e){return document.removeEventListener(e.event,e.handler)})},instances:n};return{install:function(e){e.directive("click-outside",i)},directive:i}});
//# sourceMappingURL=v-click-outside.min.min.umd.js.map


/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return ch;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return ch;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return ch;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

/***/ }),

/***/ "aa63":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("5a88")
var Utils = __webpack_require__("7bf0")
var ECLevel = __webpack_require__("7a43")
var BitBuffer = __webpack_require__("7ba0")
var BitMatrix = __webpack_require__("577e")
var AlignmentPattern = __webpack_require__("d6c0")
var FinderPattern = __webpack_require__("924f")
var MaskPattern = __webpack_require__("7903")
var ECCode = __webpack_require__("34fc")
var ReedSolomonEncoder = __webpack_require__("8d23")
var Version = __webpack_require__("c8aa")
var FormatInfo = __webpack_require__("9582")
var Mode = __webpack_require__("bbf0")
var Segments = __webpack_require__("befa")
var isArray = __webpack_require__("eee5")

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = new Buffer(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version
  var mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ab8a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aba2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var macrotask = __webpack_require__("4178").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("6b4c")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "ad21":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b047":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    now = __webpack_require__("408c"),
    toNumber = __webpack_require__("b4b0");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b159":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b4b0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var buildURL = __webpack_require__("30b5");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("9fa6");

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
    if ( true &&
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
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
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
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("7aac");

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
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
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


/***/ }),

/***/ "b54a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__("386b")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "b656":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b9e9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7445");
module.exports = __webpack_require__("584a").parseInt;


/***/ }),

/***/ "ba92":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "babd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bbf0":
/***/ (function(module, exports, __webpack_require__) {

var VersionCheck = __webpack_require__("27a3")
var Regex = __webpack_require__("0425")

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "bc13":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "bc16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_style_index_0_id_d3fa0e4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c06");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_style_index_0_id_d3fa0e4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_style_index_0_id_d3fa0e4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_style_index_0_id_d3fa0e4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "be7d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "befa":
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__("bbf0")
var NumericData = __webpack_require__("dd7e")
var AlphanumericData = __webpack_require__("9d94")
var ByteData = __webpack_require__("0196")
var KanjiData = __webpack_require__("2f3a")
var Regex = __webpack_require__("0425")
var Utils = __webpack_require__("7bf0")
var dijkstra = __webpack_require__("10b0")

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "bf90":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("36c3");
var $getOwnPropertyDescriptor = __webpack_require__("bf0b").f;

__webpack_require__("ce7e")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "c18e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typer_vue_vue_type_style_index_0_id_b82cf0c6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6e0f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typer_vue_vue_type_style_index_0_id_b82cf0c6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typer_vue_vue_type_style_index_0_id_b82cf0c6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typer_vue_vue_type_style_index_0_id_b82cf0c6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c24d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

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
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");
var isBuffer = __webpack_require__("044b");

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
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
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
  if (typeof obj !== 'object') {
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
  isBuffer: isBuffer,
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

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8aa":
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__("7bf0")
var ECCode = __webpack_require__("34fc")
var ECLevel = __webpack_require__("7a43")
var Mode = __webpack_require__("bbf0")
var VersionCheck = __webpack_require__("27a3")
var isArray = __webpack_require__("eee5")

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "cd78":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var newPromiseCapability = __webpack_require__("656e");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var defaults = __webpack_require__("2444");

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
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "d055":
/***/ (function(module, exports, __webpack_require__) {


var canPromise = __webpack_require__("67dd")

var QRCode = __webpack_require__("aa63")
var CanvasRenderer = __webpack_require__("4146")
var SvgRenderer = __webpack_require__("4006")

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1)
  var argsNum = args.length
  var isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d36e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_style_index_0_id_eea9540e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ff0b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_style_index_0_id_eea9540e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_style_index_0_id_eea9540e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_style_index_0_id_eea9540e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d4da":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/popover/popover.vue?vue&type=template&id=ed26688e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.isShow)?_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.close),expression:"close"}],staticClass:"ui-popover",class:{ 'ui-tooltip': _vm.tooltip, 'ui-dropdown': _vm.dropdown },style:(_vm.stlyes)},[(_vm.arrow)?_c('span',{ref:"arrow",staticClass:"ui-popover-arrow",style:(_vm.arrowStyles)}):_vm._e(),_c('div',{ref:"menu",staticClass:"ui-popover-menu",class:[
        _vm.menuType && ("ui-popover-menu-" + _vm.menuType),
        { 'ui-popover-with-close': _vm.showCloseIcon }
      ],style:(_vm.menuStyles),on:{"mouseover":_vm.mouseover,"mouseleave":_vm.mouseleave}},[(_vm.menu.length)?_c('ul',_vm._l((_vm.menu),function(item){return _c('ui-popover-item',{key:item.content,attrs:{"params":_vm.params,"close-on-click":_vm.closeOnClick,"close-on-mouseleave":_vm.closeOnMouseleave,"item":item},on:{"close":function($event){_vm.isShow = false}}})}),1):_vm._e(),(_vm.content)?_c('div',{staticClass:"ui-popover-content",domProps:{"innerHTML":_vm._s(_vm.handleContent(_vm.content))},on:{"click":function($event){_vm.closeOnClick ? _vm.close : ''}}}):_vm._e(),(_vm.showCloseIcon && !_vm.menu.length)?_c('div',{staticClass:"ui-popover-close-icon",on:{"click":_vm.close}},[_c('ui-icon',{attrs:{"name":"icon-close-circle-fill"}})],1):_vm._e(),(_vm.$slots.default && _vm.dropdown)?_c('div',{staticClass:"ui-dropdown-content"},[_vm._t("default")],2):_vm._e()])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/popover/popover.vue?vue&type=template&id=ed26688e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/v-click-outside/dist/v-click-outside.min.min.umd.js
var v_click_outside_min_min_umd = __webpack_require__("a2df");
var v_click_outside_min_min_umd_default = /*#__PURE__*/__webpack_require__.n(v_click_outside_min_min_umd);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/popover/popover-item.vue?vue&type=template&id=5c26d750&
var popover_itemvue_type_template_id_5c26d750_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.item)?_c('li',{staticClass:"ui-popover-item",class:[_vm.item.class, { pointer: _vm.item.action }],attrs:{"title":_vm.item.content},on:{"click":_vm.click,"mouseleave":_vm.mouseleave}},[(_vm.item.icon)?_c('ui-icon',{attrs:{"name":_vm.item.icon}}):_vm._e(),_vm._v(_vm._s(_vm.item.content)+"\n")],1):_vm._e()}
var popover_itemvue_type_template_id_5c26d750_staticRenderFns = []


// CONCATENATED MODULE: ./packages/popover/popover-item.vue?vue&type=template&id=5c26d750&

// EXTERNAL MODULE: ./packages/icon/index.js
var icon = __webpack_require__("07fc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/popover/popover-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var popover_itemvue_type_script_lang_js_ = ({
  name: "ui-popover-item",
  components: {
    UiIcon: icon["a" /* default */]
  },
  data: function data() {
    return {};
  },
  props: {
    item: Object,
    params: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    closeOnClick: Boolean,
    closeOnMouseleave: Boolean
  },
  methods: {
    mouseleave: function mouseleave() {
      if (this.closeOnMouseleave) {
        this.$emit("close");
      }
    },
    click: function click() {
      if (this.item.action && typeof this.item.action === "function") {
        this.item.action(this.params || "");
      }

      if (this.closeOnClick) {
        this.$emit("close");
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/popover/popover-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var popover_popover_itemvue_type_script_lang_js_ = (popover_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/popover/popover-item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popover_popover_itemvue_type_script_lang_js_,
  popover_itemvue_type_template_id_5c26d750_render,
  popover_itemvue_type_template_id_5c26d750_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "popover-item.vue"
/* harmony default export */ var popover_item = (component.exports);
// EXTERNAL MODULE: ./packages/assets/scss/popover.scss
var popover = __webpack_require__("4055");

// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__("0f32");
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// CONCATENATED MODULE: ./src/utils/getAxis.js
/* harmony default export */ var utils_getAxis = (function () {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
});
// EXTERNAL MODULE: ./src/utils/scrollbar.js + 1 modules
var scrollbar = __webpack_require__("ec82");

// CONCATENATED MODULE: ./src/mixins/pop/position.js



/* harmony default export */ var position = ({
  data: function data() {
    return {
      axis: {},
      arrowLeft: "",
      el: "",
      key: "",
      // content: "",
      //not for options
      targetTop: "",
      placeOnTop: "",
      placeOnRight: "",
      placeOnBottom: "",
      placeOnLeft: "",
      left: "",
      top: "",
      borderTopColor: "",
      borderBottomColor: "",
      arrowTop: "",
      triggerOffset: "",
      popoverOffset: "",
      userOnClose: "",
      translateX: "",
      zIndex: this.$zIndex ? this.$zIndex.add() : 1000
    };
  },
  computed: {
    arrowStyles: function arrowStyles() {
      return {
        borderWidth: "".concat(this.arrowSize, "px"),
        borderTopColor: this.borderTopColor,
        borderBottomColor: this.borderBottomColor,
        top: "".concat(this.arrowTop, "px"),
        left: "".concat(this.arrowLeft, "px"),
        zIndex: this.zIndex + 1
      };
    },
    menuStyles: function menuStyles() {
      return {
        borderRadius: "".concat(this.radius, "px"),
        transform: "translateX(".concat(this.translateX, ")"),
        textAlign: this.textCetner ? "center" : ""
      };
    }
  },
  methods: {
    getAxis: function getAxis() {
      this.axis = utils_getAxis();
    },
    calculatePopoverPosition: function calculatePopoverPosition(e) {
      var _this = this;

      this.triggerOffset = this.trigger.getBoundingClientRect();
      this.popoverOffset = this.el.getBoundingClientRect();
      this.targetTop = this.triggerOffset.top;
      this.placeOnTop = this.targetTop - this.popoverOffset.height;
      this.placeOnRight = this.triggerOffset.left + this.triggerOffset.width - this.popoverOffset.width;
      this.placeOnBottom = this.targetTop + this.triggerOffset.height;
      this.placeOnLeft = this.triggerOffset.left;

      if (this.align == "center") {
        this.left = this.triggerOffset.left + this.triggerOffset.width / 2 - this.popoverOffset.width / 2;
      }

      if (this.align == "right") {
        this.left = this.triggerOffset.left + this.triggerOffset.width - this.popoverOffset.width;
      }

      if (this.align == "left") {
        this.left = this.triggerOffset.left;
      }

      if (this.left <= this.offset) {
        this.left = this.offset;
      }

      if (this.left >= this.axis.x * 2 - this.offset) {
        this.left = this.axis.x * 2 - this.popoverOffset.width - this.offset;
      }

      if (this.left + this.popoverOffset.width > this.axis.x * 2) {
        this.left = this.axis.x * 2 - this.popoverOffset.width - Object(scrollbar["default"])() - this.offset;
      }

      if (this.axis.y > this.targetTop) {
        this.top = this.offset ? this.placeOnBottom + this.offset : this.placeOnBottom;
      } else {
        this.top = this.offset ? this.placeOnTop - this.offset : this.placeOnTop;
      }

      if (this.arrow) {
        this.$nextTick(function () {
          _this.setarrowPosition();
        });
      }
    },
    setarrowPosition: function setarrowPosition() {
      var _this2 = this;

      var popoverOffset = this.el.getBoundingClientRect();

      if (this.align == "center") {
        this.arrowLeft = this.triggerOffset.left + this.triggerOffset.width / 2 - this.left - this.arrowSize;
      }

      if (this.align == "right") {
        this.arrowLeft = this.popoverOffset.width / 2 + this.arrowSize;
      }

      if (this.align == "left") {
        this.arrowLeft = this.popoverOffset.width / 4 - this.arrowSize;
      }

      if (this.axis.y > this.targetTop) {
        this.borderTopColor = "transparent";
        this.borderBottomColor = "#fff";
        this.arrowTop = -this.arrowSize * 2;
      } else {
        this.borderBottomColor = "transparent";
        this.borderTopColor = "#fff";
        this.arrowTop = popoverOffset.height;
      }

      this.$nextTick(function () {
        var arrowOffset = _this2.$refs["arrow"].getBoundingClientRect();

        if (arrowOffset.right + _this2.offset >= popoverOffset.right) {
          _this2.translateX = "".concat(_this2.arrowSize, "px");
        }

        if (arrowOffset.left - _this2.offset <= popoverOffset.left) {
          _this2.translateX = "-".concat(_this2.arrowSize, "px");
        }
      });
    }
  },
  mounted: function mounted() {
    this.getAxis();
  },
  beforeDestory: function beforeDestory() {
    if (this.$zIndex) {
      this.$zIndex.remove();
    }
  },
  beforeMount: function beforeMount() {
    this.calculatePopoverPosition = throttle_default()(this.calculatePopoverPosition, this.throttle);
    this.getAxis = throttle_default()(this.getAxis, this.throttle);
  }
});
// EXTERNAL MODULE: ./packages/icon/icon.vue + 4 modules
var icon_icon = __webpack_require__("383c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/popover/popover.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var popovervue_type_script_lang_js_ = ({
  name: "ui-popover",
  data: function data() {
    return {
      isShow: false,
      isMouseIn: false
    };
  },
  mixins: [position],
  props: {
    triggerId: {
      type: String,
      required: true
    },
    tooltip: Boolean,
    dropdown: Boolean,
    params: Object,
    menu: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    menuType: {
      type: String,
      validator: function validator(value) {
        return ["horizon", "vertical"].includes(value);
      }
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnMouseleave: Boolean,
    openOnMouseover: Boolean,
    onClose: Function,
    content: String,
    showCloseIcon: Boolean,
    textCetner: Boolean,
    width: Number,
    openDelay: Number,
    closeDelay: Number,
    arrow: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 10
    },
    arrowSize: {
      type: Number,
      default: 10
    },
    arrowOffset: {
      type: Number,
      default: 10
    },
    align: {
      type: String,
      default: "center",
      validator: function validator(value) {
        return ["center", "left", "right"].indexOf(value) !== -1;
      }
    },
    radius: {
      type: Number,
      default: 8
    },
    throttle: {
      type: Number,
      default: 20
    },
    interactive: {
      type: Boolean,
      default: true
    }
  },
  components: {
    UiPopoverItem: popover_item,
    UiIcon: icon_icon["a" /* default */]
  },
  computed: {
    stlyes: function stlyes() {
      return {
        top: "".concat(this.top, "px"),
        left: "".concat(this.left, "px"),
        width: this.width ? "".concat(this.width, "px") : "",
        zIndex: this.zIndex,
        maxWidth: "calc(100% - ".concat(this.offset * 2, "px)")
      };
    }
  },
  methods: {
    handleContent: function handleContent(content) {
      if (content.startsWith("data:image/")) {
        var img = document.createElement("img");
        img.src = content;
        return img.outerHTML;
      } else {
        return content;
      }
    },
    unbindEvents: function unbindEvents() {
      window.removeEventListener("resize", this.calculatePopoverPosition);
      window.removeEventListener("scroll", this.calculatePopoverPosition);
      window.removeEventListener("scroll", this.getAxis);
      window.removeEventListener("resize", this.getAxis);

      if (this.closeOnMouseleave && !this.tooltip) {
        this.trigger.removeEventListener("mouseout", this.close);
      }

      if (this.tooltip) {
        this.trigger.removeEventListener("mouseover", this.mouseover);
        this.trigger.removeEventListener("mouseleave", this.mouseleave);
      }
    },
    bindEvents: function bindEvents() {
      window.addEventListener("resize", this.calculatePopoverPosition);
      window.addEventListener("scroll", this.calculatePopoverPosition);
      window.addEventListener("scroll", this.getAxis);
      window.addEventListener("resize", this.getAxis);

      if (this.closeOnMouseleave && !this.tooltip) {
        this.trigger.addEventListener("mouseout", this.close);
      }

      if (this.tooltip) {
        this.trigger.addEventListener("mouseover", this.mouseover);
        this.trigger.addEventListener("mouseleave", this.mouseleave);
      }
    },
    close: function close(e) {
      var _this = this;

      setTimeout(function () {
        _this.isShow = false;
      }, this.closeDelay);
    },
    mouseleave: function mouseleave(e) {
      var _this2 = this;

      this.isMouseIn = false;
      setTimeout(function () {
        if (!_this2.isMouseIn && _this2.closeOnMouseleave) {
          _this2.close();
        }
      }, 300);
    },
    mouseover: function mouseover(e) {
      this.isMouseIn = true;
    }
  },
  mounted: function mounted() {
    this.trigger = document.querySelector("[data-popover=\"".concat(this.triggerId, "\"]"));
  },
  directives: {
    clickOutside: v_click_outside_min_min_umd_default.a.directive
  },
  watch: {
    isShow: function isShow(newValue) {
      var _this3 = this;

      if (!newValue) {
        if (this.onClose) {
          this.onClose();
        }

        this.$emit("close");
        this.unbindEvents();
        this.trigger.removeAttribute("data-popover");
      } else {
        this.$nextTick(function () {
          _this3.$emit("open");

          _this3.bindEvents();

          _this3.el = _this3.$el;

          _this3.calculatePopoverPosition();
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/popover/popover.vue?vue&type=script&lang=js&
 /* harmony default export */ var popover_popovervue_type_script_lang_js_ = (popovervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/popover/popover.vue





/* normalize component */

var popover_component = Object(componentNormalizer["a" /* default */])(
  popover_popovervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

popover_component.options.__file = "popover.vue"
/* harmony default export */ var popover_popover = __webpack_exports__["a"] = (popover_component.exports);

/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d6c0":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__("7bf0").getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ "d6c2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d925":
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

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "db0f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marquee_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8954");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marquee_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marquee_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marquee_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "dd71":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dd7e":
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__("bbf0")

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e1bd":
/***/ (function(module, exports, __webpack_require__) {

if (false) {}

var crypto = self.crypto || self.msCrypto

/*
 * This alphabet uses a-z A-Z 0-9 _- symbols.
 * Symbols order was changed for better gzip compression.
 */
var url = 'Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-'

module.exports = function (size) {
  size = size || 21
  var id = ''
  var bytes = crypto.getRandomValues(new Uint8Array(size))
  while (0 < size--) {
    id += url[bytes[size] & 63]
  }
  return id
}


/***/ }),

/***/ "e265":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ed33");

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e683":
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
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "e692":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "e6c6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e814":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b9e9");

/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ead3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ec30":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__("9e1e")) {
  var LIBRARY = __webpack_require__("2d00");
  var global = __webpack_require__("7726");
  var fails = __webpack_require__("79e5");
  var $export = __webpack_require__("5ca1");
  var $typed = __webpack_require__("0f88");
  var $buffer = __webpack_require__("ed0b");
  var ctx = __webpack_require__("9b43");
  var anInstance = __webpack_require__("f605");
  var propertyDesc = __webpack_require__("4630");
  var hide = __webpack_require__("32e9");
  var redefineAll = __webpack_require__("dcbc");
  var toInteger = __webpack_require__("4588");
  var toLength = __webpack_require__("9def");
  var toIndex = __webpack_require__("09fa");
  var toAbsoluteIndex = __webpack_require__("77f1");
  var toPrimitive = __webpack_require__("6a99");
  var has = __webpack_require__("69a8");
  var classof = __webpack_require__("23c6");
  var isObject = __webpack_require__("d3f4");
  var toObject = __webpack_require__("4bf8");
  var isArrayIter = __webpack_require__("33a4");
  var create = __webpack_require__("2aeb");
  var getPrototypeOf = __webpack_require__("38fd");
  var gOPN = __webpack_require__("9093").f;
  var getIterFn = __webpack_require__("27ee");
  var uid = __webpack_require__("ca5a");
  var wks = __webpack_require__("2b4c");
  var createArrayMethod = __webpack_require__("0a49");
  var createArrayIncludes = __webpack_require__("c366");
  var speciesConstructor = __webpack_require__("ebd6");
  var ArrayIterators = __webpack_require__("cadf");
  var Iterators = __webpack_require__("84f2");
  var $iterDetect = __webpack_require__("5cc5");
  var setSpecies = __webpack_require__("7a56");
  var arrayFill = __webpack_require__("36bd");
  var arrayCopyWithin = __webpack_require__("ba92");
  var $DP = __webpack_require__("86cc");
  var $GOPD = __webpack_require__("11e9");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "ec82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils/hasScroll.js
var hasScroll = function hasScroll(el) {
  if (el == undefined) {
    if (window.innerHeight) {
      return document.body.offsetHeight > window.innerHeight;
    } else {
      return document.documentElement.scrollHeight > document.documentElement.offsetHeight || document.body.scrollHeight > document.body.offsetHeight;
    }
  } else {
    return el.scrollHeight > el.offsetHeight;
  }
};

/* harmony default export */ var utils_hasScroll = (hasScroll);
// CONCATENATED MODULE: ./src/utils/scrollbar.js

/* harmony default export */ var scrollbar = __webpack_exports__["default"] = (function () {
  if (!utils_hasScroll()) {
    return 0;
  }

  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth; // force scrollbars

  outer.style.overflow = "scroll"; // add innerdiv

  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth; // remove divs

  outer.parentNode.removeChild(outer);
  return widthNoScroll - widthWithScroll;
});

/***/ }),

/***/ "ed0b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var DESCRIPTORS = __webpack_require__("9e1e");
var LIBRARY = __webpack_require__("2d00");
var $typed = __webpack_require__("0f88");
var hide = __webpack_require__("32e9");
var redefineAll = __webpack_require__("dcbc");
var fails = __webpack_require__("79e5");
var anInstance = __webpack_require__("f605");
var toInteger = __webpack_require__("4588");
var toLength = __webpack_require__("9def");
var toIndex = __webpack_require__("09fa");
var gOPN = __webpack_require__("9093").f;
var dP = __webpack_require__("86cc").f;
var arrayFill = __webpack_require__("36bd");
var setToStringTag = __webpack_require__("7f20");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "ed33":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
module.exports = __webpack_require__("584a").Object.getOwnPropertySymbols;


/***/ }),

/***/ "ee47":
/***/ (function(module, exports) {

!function (a) {
  var c,
      i = '<svg><symbol id="icon-twitter" viewBox="0 0 1024 1024"><path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"  ></path></symbol><symbol id="icon-facebook" viewBox="0 0 1024 1024"><path d="M338.048 349.248"  ></path><path d="M521.024 82.112c-244.224 0-442.176 197.952-442.176 442.176s197.952 442.176 442.176 442.176c22.976 0 45.504-1.728 67.52-5.12l-17.6 0L570.944 650.88 493.312 650.88 493.312 543.872l77.632-0.064-0.128-63.04c0-87.296 23.68-140.416 126.528-140.416l85.632 0L782.976 447.36l-53.504 0c-40.064 0-41.984 14.976-41.984 42.88l-0.128 53.568 96.256 0-11.328 107.008-84.8 0.064-0.064 283.328c161.792-65.728 275.904-224.448 275.904-409.856C963.264 280.128 765.248 82.112 521.024 82.112z"  ></path></symbol><symbol id="icon-More" viewBox="0 0 1024 1024"><path d="M146.030911 517.349845m-87.923492 0a87.923492 87.923492 0 1 0 175.846984 0 87.923492 87.923492 0 1 0-175.846984 0Z" fill="" ></path><path d="M512 512m-87.923492 0a87.923492 87.923492 0 1 0 175.846984 0 87.923492 87.923492 0 1 0-175.846984 0Z" fill="" ></path><path d="M873.565802 512m-87.923491 0a87.923492 87.923492 0 1 0 175.846983 0 87.923492 87.923492 0 1 0-175.846983 0Z" fill="" ></path></symbol><symbol id="icon-header" viewBox="0 0 1024 1024"><path d="M732.534 834.742c-37.32 0-74.642 2.968-111.962 2.968-14.42 0-21.206-15.692-21.206-27.99 0-37.746 42.41-21.628 64.462-36.048 13.996-8.906 13.996-44.532 13.996-59.376l-0.424-165.824c0-4.664 0-8.906-0.424-13.148-6.788-2.12-14.42-1.696-21.206-1.696H369.502c-7.208 0-14.844-0.424-21.628 1.696-0.424 4.242-0.424 8.484-0.424 13.148l-0.424 157.342c0 16.118 0 60.222 15.692 69.552 22.052 13.572 72.098-5.512 72.098 32.656 0 12.722-5.938 29.688-20.782 29.688-39.442 0-78.882-2.968-117.9-2.968-36.048 0-72.098 2.968-108.146 2.968-13.996 0-20.358-16.116-20.358-27.99 0-36.898 39.018-21.628 59.798-36.048 13.57-9.33 13.996-45.802 13.996-60.646l-0.426-24.174V344.056c0-20.358 2.968-85.668-16.116-97.12-21.206-13.146-66.584 7.21-66.584-30.958 0-12.298 5.514-29.688 20.358-29.688 39.018 0 78.458 2.968 117.476 2.968 35.624 0 71.672-2.968 107.296-2.968 15.268 0 21.206 16.964 21.206 29.688 0 36.472-41.986 18.66-62.768 31.808-14.842 8.906-14.842 52.588-14.842 67.856l0.424 135.712c0 4.666 0 8.906 0.424 13.572 5.514 1.272 11.026 1.272 16.54 1.272H660.86c5.09 0 10.604 0 16.118-1.272 0.424-4.666 0.424-8.906 0.424-13.572l0.424-135.712c0-15.692 0-58.95-14.844-67.856-21.206-12.724-63.616 4.242-63.616-31.808 0-12.724 5.938-29.688 21.206-29.688 37.32 0 74.642 2.968 111.962 2.968 36.472 0 72.946-2.968 109.418-2.968 15.268 0 21.206 16.964 21.206 29.688 0 36.896-43.682 18.236-64.886 31.382-14.42 9.332-14.844 53.014-14.844 68.282l0.424 399.93c0 13.994 0.848 50.89 14.42 59.374 21.628 13.572 67.432-3.816 67.432 33.08 0 12.298-5.514 29.688-20.356 29.688-37.324-0.004-75.068-2.972-112.814-2.972z" fill="" ></path></symbol><symbol id="icon-copyright" viewBox="0 0 1024 1024"><path d="M722 575c-10.5 58.9-33.1 103.4-67.8 133.5-34.7 30-80.3 45.1-136.9 45.1-69.4 0-123.1-23-161-69.1-36.2-43.9-54.3-100.6-54.3-170.3 0-69.7 18.1-126.7 54.3-171.1 39.1-48.4 93-72.6 161.9-72.6 56.6 0 102.4 13.6 137.4 40.7s56.3 68.4 63.9 123.8h-70c-6.4-35-20.9-61.4-43.3-79.2-22.5-17.8-51.8-26.4-87.9-25.8-44.9 0-80.2 16.9-105.9 50.7-25.1 32.7-37.6 76.9-37.6 132.6s12.1 99.7 36.3 132.1c24.2 32.4 59.7 48.6 106.3 48.6 78.2 0 122.8-39.7 133.9-119H722z"  ></path><path d="M651.1 575H722c-10.5 58.9-33.1 103.4-67.8 133.5-34.7 30-80.3 45.1-136.9 45.1-69.4 0-123.1-23-161-69.1-36.2-43.9-54.3-100.6-54.3-170.3 0-69.7 18.1-126.7 54.3-171.1 39.1-48.4 93-72.6 161.9-72.6 56.6 0 102.4 13.6 137.4 40.7s56.3 68.4 63.9 123.8h-70c-6.4-35-20.9-61.4-43.3-79.2-22.5-17.8-51.8-26.4-87.9-25.8-44.9 0-80.2 16.9-105.9 50.7-25.1 32.7-37.6 76.9-37.6 132.6s12.1 99.7 36.3 132.1c24.2 32.4 59.7 48.6 106.3 48.6 78 0 122.6-39.7 133.7-119z"  ></path><path d="M829.2 194.8C744.9 110.5 639.2 66.9 512 64c-127.2 2.9-232.9 46.5-317.2 130.8C110.5 279.1 66.9 384.8 64 512c2.9 127.2 46.5 232.9 130.8 317.2 84.3 84.3 190 127.9 317.2 130.8 127.2-2.9 232.9-46.5 317.2-130.8 84.3-84.3 127.9-190 130.8-317.2-2.9-127.2-46.5-232.9-130.8-317.2z m-45.1 589.3c-72.3 72.3-163 110-272.1 112.9-109.1-2.9-199.8-40.5-272.1-112.9-72.3-72.3-110-163-112.9-272.1 2.9-109.1 40.5-199.8 112.9-272.1 72.3-72.3 163-110 272.1-112.9 109.1 2.9 199.8 40.5 272.1 112.9C856.4 312.2 894.1 403 897 512c-2.9 109.1-40.5 199.8-112.9 272.1z"  ></path><path d="M722 575c-10.5 58.9-33.1 103.4-67.8 133.5-34.7 30-80.3 45.1-136.9 45.1-69.4 0-123.1-23-161-69.1-36.2-43.9-54.3-100.6-54.3-170.3 0-69.7 18.1-126.7 54.3-171.1 39.1-48.4 93-72.6 161.9-72.6 56.6 0 102.4 13.6 137.4 40.7s56.3 68.4 63.9 123.8h-70c-6.4-35-20.9-61.4-43.3-79.2-22.5-17.8-51.8-26.4-87.9-25.8-44.9 0-80.2 16.9-105.9 50.7-25.1 32.7-37.6 76.9-37.6 132.6s12.1 99.7 36.3 132.1c24.2 32.4 59.7 48.6 106.3 48.6 78.2 0 122.8-39.7 133.9-119H722z"  ></path></symbol><symbol id="icon-quote" viewBox="0 0 1024 1024"><path d="M384 128c-81.292 0-144.966 22.458-189.254 66.746C150.458 239.034 128 302.708 128 384v512h320V384h-192c0-46.112 9.844-79.332 29.254-98.746C304.668 265.844 337.888 256 384 256M832 128c-81.292 0-144.966 22.458-189.254 66.746C598.458 239.034 576 302.708 576 384v512h320V384h-192c0-46.112 9.844-79.332 29.254-98.746C752.668 265.844 785.888 256 832 256" fill="" ></path></symbol><symbol id="icon-meh" viewBox="0 0 1024 1024"><path d="M336 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M688 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2z"  ></path><path d="M664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-time-circle" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"  ></path></symbol><symbol id="icon-timeout" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path><path d="M424 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zM648 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-earth" viewBox="0 0 1024 1024"><path d="M854.4 800.9c0.2-0.3 0.5-0.6 0.7-0.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-0.2-0.3-0.5-0.5-0.7-0.8-1.1-1.3-2.1-2.5-3.2-3.7-0.4-0.5-0.8-0.9-1.2-1.4-1.4-1.6-2.7-3.1-4.1-4.7l-0.1-0.1c-1.5-1.7-3.1-3.4-4.6-5.1l-0.1-0.1c-3.2-3.4-6.4-6.8-9.7-10.1l-0.1-0.1-4.8-4.8-0.3-0.3c-1.5-1.5-3-2.9-4.5-4.3-0.5-0.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-0.3-0.3-0.7-0.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-0.3 0.3-0.7 0.6-1 1-1 0.9-2 1.9-3 2.9-0.5 0.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-0.3 0.3-4.8 4.8-0.1 0.1c-3.3 3.3-6.5 6.7-9.7 10.1l-0.1 0.1c-1.6 1.7-3.1 3.4-4.6 5.1l-0.1 0.1c-1.4 1.5-2.8 3.1-4.1 4.7-0.4 0.5-0.8 0.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-0.2 0.3-0.5 0.5-0.7 0.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c0.2 0.3 0.5 0.6 0.7 0.9 1 1.2 2.1 2.5 3.1 3.7 0.4 0.5 0.8 0.9 1.2 1.4 1.4 1.6 2.7 3.1 4.1 4.7 0 0.1 0.1 0.1 0.1 0.2 1.5 1.7 3 3.4 4.6 5l0.1 0.1c3.2 3.4 6.4 6.8 9.6 10.1l0.1 0.1c1.6 1.6 3.1 3.2 4.7 4.7l0.3 0.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2c3.4-3.1 6.7-6.3 10-9.6l0.3-0.3c1.6-1.6 3.2-3.1 4.7-4.7l0.1-0.1c3.3-3.3 6.5-6.7 9.6-10.1l0.1-0.1c1.5-1.7 3.1-3.3 4.6-5 0-0.1 0.1-0.1 0.1-0.2 1.4-1.5 2.8-3.1 4.1-4.7 0.4-0.5 0.8-0.9 1.2-1.4 1.2-1.3 2.3-2.5 3.3-3.7z m4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2-24.9-21.5-52.2-40.3-81.5-55.9 11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9 22.2 27.4 40.4 57.6 54.2 90.2C874.4 403.4 884 443.1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2-18.5 15.8-38.4 29.7-59.4 41.8-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4z m-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697c39.9 2.8 78.6 11.6 115.7 26.2-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1z m59-633.1c11 20.6 20.7 43.3 29 67.8-37.1 14.6-75.8 23.4-115.7 26.2V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-0.3 1.2c-41.1-15.6-85.1-25.3-130.9-28.1z m0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l0.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540z m-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-0.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484z m-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l0.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1z m0-370c-39.9-2.8-78.6-11.6-115.7-26.2 8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6-29.3 15.6-56.6 34.4-81.5 55.9-22.2-27.4-40.4-57.6-54.2-90.2C149.6 620.6 140 580.9 137 540z m228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4z m292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8-31.8 29.2-67.9 52.4-107.6 69.2z"  ></path></symbol><symbol id="icon-warning-circle" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path><path d="M512 688m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"  ></path></symbol><symbol id="icon-sync" viewBox="0 0 1024 1024"><path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27c40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8zM924 512h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4S687 811.7 646 829c-42.4 17.9-87.4 27-133.9 27s-91.5-9.1-133.9-27c-40.9-17.3-77.7-42.1-109.3-73.8-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47c5.3-4.1 3.5-12.5-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-0.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8 0.1-4.5-3.5-8.2-8-8.2z"  ></path></symbol><symbol id="icon-undo" viewBox="0 0 1024 1024"><path d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-0.3 13 6.3 12.9l167-0.8c5.2 0 9-4.9 7.7-9.9L369.8 727c-1.6-6.5-10-8.3-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26-29.4-29.4-52.5-63.6-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5c-16.1 38.1-39.2 72.3-68.6 101.7-7.5 7.5-15.3 14.5-23.4 21.2-3.4 2.8-3.9 7.7-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"  ></path></symbol><symbol id="icon-redo" viewBox="0 0 1024 1024"><path d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2-29.4-29.4-52.5-63.6-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5c-16.1 38.1-39.2 72.3-68.6 101.7-9.3 9.3-19.1 18-29.3 26L668.2 724c-4.1-5.3-12.5-3.5-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 0.8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"  ></path></symbol><symbol id="icon-reload" viewBox="0 0 1024 1024"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-0.7-8.9-4.9-10.3l-56.7-19.5c-4.1-1.4-8.6 0.7-10.1 4.8-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4-31.6 31.6-68.4 56.4-109.3 73.8-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27-40.9-17.3-77.7-42.1-109.3-73.8-31.6-31.6-56.4-68.4-73.7-109.4-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27 40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c-0.1-6.6-7.8-10.3-13-6.2z"  ></path></symbol><symbol id="icon-message" viewBox="0 0 1024 1024"><path d="M512 512m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M712 512m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M312 512m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56c10.1-8.6 13.8-22.6 9.3-35.2l-0.9-2.6c-18.1-50.5-44.9-96.9-79.7-137.9l-1.8-2.1c-8.6-10.1-22.5-13.9-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85c-2.4-13.1-12.7-23.3-25.8-25.7l-2.7-0.5c-52.1-9.4-106.9-9.4-159 0l-2.7 0.5c-13.1 2.4-23.4 12.6-25.8 25.7l-15.8 85.4c-35.9 13.6-69.2 32.9-99 57.4l-81.9-29.1c-12.5-4.4-26.5-0.7-35.1 9.5l-1.8 2.1c-34.8 41.1-61.6 87.5-79.7 137.9l-0.9 2.6c-4.5 12.5-0.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5c-10.1 8.6-13.8 22.6-9.3 35.2l0.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c8.6 10.1 22.5 13.9 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4c2.4 13.1 12.7 23.3 25.8 25.7l2.7 0.5c26.1 4.7 52.8 7.1 79.5 7.1 26.7 0 53.5-2.4 79.5-7.1l2.7-0.5c13.1-2.4 23.4-12.6 25.8-25.7l15.7-85c36.2-13.6 69.7-32.9 99.7-57.6l81.3 28.9c12.5 4.4 26.5 0.7 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l0.9-2.6c4.5-12.3 0.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9c-11.3 26.1-25.6 50.7-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97c-28.1 3.2-56.8 3.2-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9z"  ></path><path d="M512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 602.3 541.9 614 512 614c-29.9 0-58-11.7-79.2-32.8C411.7 560 400 531.9 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8C612.3 444 624 472.1 624 502c0 29.9-11.7 58-32.8 79.2z"  ></path></symbol><symbol id="icon-location" viewBox="0 0 1024 1024"><path d="M854.6 289.1c-18.8-43.4-45.7-82.3-79.9-115.7-34.2-33.4-73.9-59.5-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8-34.2 33.4-61.1 72.4-79.9 115.7-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153 6.9 4.1 14.7 6.1 22.4 6.1 7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1z"  ></path><path d="M512 263c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 539.3 541.9 551 512 551c-29.9 0-58-11.7-79.2-32.8C411.7 497 400 468.9 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"  ></path></symbol><symbol id="icon-edit-square" viewBox="0 0 1024 1024"><path d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"  ></path><path d="M355.9 534.9L354 653.8c-0.1 8.9 7.1 16.2 16 16.2h0.4l118-2.9c2-0.1 4-0.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1 0.8-5.7 2.3l-415.8 415c-1.4 1.5-2.3 3.5-2.3 5.6z m63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1 0.7-46.4z"  ></path></symbol><symbol id="icon-export" viewBox="0 0 1024 1024"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7z"  ></path><path d="M906.9 505.7L765 393.7c-5.3-4.2-13-0.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112c4.1-3.2 4.1-9.4 0-12.6z"  ></path></symbol><symbol id="icon-save" viewBox="0 0 1024 1024"><path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184z m456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840z"  ></path><path d="M512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z m0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"  ></path></symbol><symbol id="icon-team" viewBox="0 0 1024 1024"><path d="M824.2 699.9c-25.4-25.4-54.7-45.7-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5-31.7 14.7-60.9 34.9-86.4 60.4C345 754.6 314 826.8 312 903.8c-0.1 4.5 3.5 8.2 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C493.8 707.7 551.1 684 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c0.1 4.3 3.7 7.7 8 7.7h56c4.5 0 8.1-3.7 8-8.2-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5-24.5-24.5-37.9-57.1-37.5-91.8 0.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-0.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5-24.2 24.2-56.4 37.5-90.6 37.5z"  ></path><path d="M361.5 510.4c-0.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5 0.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1-25.8-25.2-39.7-59.3-38.7-95.4 0.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9 0.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-0.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204-0.1 4.5 3.5 8.2 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"  ></path></symbol><symbol id="icon-barchart" viewBox="0 0 1024 1024"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"  ></path><path d="M288 712h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zM440 712h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zM592 712h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zM744 712h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"  ></path></symbol><symbol id="icon-mobile" viewBox="0 0 1024 1024"><path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64z m-8 824H288V134h448v752z"  ></path><path d="M512 784m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"  ></path></symbol><symbol id="icon-book" viewBox="0 0 1024 1024"><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z m-260 72h96v209.9L621.5 312 572 347.4V136z m220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3 5.1 7.2 15.1 8.9 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"  ></path></symbol><symbol id="icon-file" viewBox="0 0 1024 1024"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z"  ></path></symbol><symbol id="icon-file-copy" viewBox="0 0 1024 1024"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z"  ></path><path d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"  ></path></symbol><symbol id="icon-snippets" viewBox="0 0 1024 1024"><path d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338z m0-402H514V336h0.2L664 485.8v0.2z m128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"  ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72z"  ></path><path d="M864 256H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"  ></path></symbol><symbol id="icon-hourglass" viewBox="0 0 1024 1024"><path d="M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194 64-40.8 106.4-112.5 106.4-194z m-72 388v134H354V706c0-42.2 16.4-81.9 46.3-111.7C430.1 564.4 469.8 548 512 548s81.9 16.4 111.7 46.3C653.6 624.1 670 663.8 670 706z m0-388c0 42.2-16.4 81.9-46.3 111.7C593.9 459.6 554.2 476 512 476s-81.9-16.4-111.7-46.3C370.4 399.9 354 360.2 354 318V184h316v134z"  ></path></symbol><symbol id="icon-bell" viewBox="0 0 1024 1024"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"  ></path></symbol><symbol id="icon-like" viewBox="0 0 1024 1024"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4-20.5-21.5-48.1-33.4-77.9-33.4-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-0.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81z m636.4-353l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5c5.2-18.9 22.5-32.2 42.2-32.3 7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"  ></path></symbol><symbol id="icon-unlike" viewBox="0 0 1024 1024"><path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4-8.3-3.6-17.2-5.4-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81z m627.2 160.4H496.8l9.6 198.4c0.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7-19.6-0.1-36.9-13.4-42.2-32.3L329 459.2V172h415.4c20.4 9.2 33.6 29.4 33.6 51.8 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 19.1-11 37.5-28.8 48.4z"  ></path></symbol><symbol id="icon-unlock" viewBox="0 0 1024 1024"><path d="M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32z m-40 376H232V536h560v304z"  ></path><path d="M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53c12.1-8.7 20-22.9 20-39 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 16.1 7.9 30.3 20 39z"  ></path></symbol><symbol id="icon-lock" viewBox="0 0 1024 1024"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240z m460 600H232V536h560v304z"  ></path><path d="M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53c12.1-8.7 20-22.9 20-39 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 16.1 7.9 30.3 20 39z"  ></path></symbol><symbol id="icon-customerservice" viewBox="0 0 1024 1024"><path d="M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128z m496 192H696V632h128v192z"  ></path></symbol><symbol id="icon-flag" viewBox="0 0 1024 1024"><path d="M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184z m656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z"  ></path></symbol><symbol id="icon-folder" viewBox="0 0 1024 1024"><path d="M880 298.4H521L403.7 186.2c-1.5-1.4-3.5-2.2-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"  ></path></symbol><symbol id="icon-folder-open" viewBox="0 0 1024 1024"><path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2c-1.5-1.4-3.5-2.2-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256z m635.3 512H159l103.3-256h612.4L771.3 768z"  ></path></symbol><symbol id="icon-folder-add" viewBox="0 0 1024 1024"><path d="M484 443.1V528h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H484v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V584h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H540v-84.9c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1z"  ></path><path d="M880 298.4H521L403.7 186.2c-1.5-1.4-3.5-2.2-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"  ></path></symbol><symbol id="icon-camera" viewBox="0 0 1024 1024"><path d="M864 248H728l-32.4-90.8C691 144.5 679 136 665.4 136H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80z m8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456z"  ></path><path d="M512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160z m0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"  ></path></symbol><symbol id="icon-read" viewBox="0 0 1024 1024"><path d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3C422 175.1 373.9 161 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3 0.8 2.8 1.3 4.3 1.3s3-0.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39z m563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488z"  ></path><path d="M396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0.1-4.1-3.1-7.5-7-7.5zM620 368.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0.1-4.1-3.1-7.5-7-7.5zM812.9 501H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0.1-4.1-3.1-7.5-7-7.5z"  ></path></symbol><symbol id="icon-cloud-upload" viewBox="0 0 1024 1024"><path d="M518.3 459c-3.2-4.1-9.4-4.1-12.6 0l-112 141.7c-4.1 5.2-0.4 12.9 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"  ></path><path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6 0.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4 14.9-19.2 32.6-35.9 52.4-49.9 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7-23.4 23.4-54.5 36.3-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"  ></path></symbol><symbol id="icon-cloud" viewBox="0 0 1024 1024"><path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z m36.3 281c-23.4 23.4-54.5 36.3-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3-23.4-23.4-36.3-54.6-36.3-87.7 0-28 9.1-54.3 26.2-76.3 16.7-21.3 40.2-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4 14.9-19.2 32.6-35.9 52.4-49.9 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"  ></path></symbol><symbol id="icon-cloud-download" viewBox="0 0 1024 1024"><path d="M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9z"  ></path><path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6 0.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4 14.9-19.2 32.6-35.9 52.4-49.9 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7-23.4 23.4-54.5 36.3-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"  ></path></symbol><symbol id="icon-video" viewBox="0 0 1024 1024"><path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560z m176-167l-104-59.8V458.9L888 399v226z"  ></path><path d="M208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"  ></path></symbol><symbol id="icon-notification" viewBox="0 0 1024 1024"><path d="M880 112c-3.8 0-7.7 0.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z m496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"  ></path></symbol><symbol id="icon-sound" viewBox="0 0 1024 1024"><path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zM934 476H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM892.1 737.8l-110.3-63.7c-2.5-1.4-5.2-2.1-7.9-2.1-5.5 0-10.9 2.9-13.8 8l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800c2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.8-8l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344c2.9 5.1 8.3 8 13.8 8 2.7 0 5.4-0.7 7.9-2.1L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230c-2.9-5.1-8.3-8-13.8-8-2.7 0-5.4 0.7-7.9 2.1L746 287.8c-7.6 4.4-10.2 14.2-5.8 21.8L760 344z"  ></path></symbol><symbol id="icon-qrcode" viewBox="0 0 1024 1024"><path d="M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z m-56 284H192V192h220v220z"  ></path><path d="M274 338h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM468 548H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8z m-56 284H192V612h220v220z"  ></path><path d="M274 758h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM864 128H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32z m-32 284H612V192h220v220z"  ></path><path d="M694 338h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM888 548h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8z"  ></path><path d="M746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM888 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-mail" viewBox="0 0 1024 1024"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5z"  ></path><path d="M833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6c20.2 15.7 48.5 15.7 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"  ></path></symbol><symbol id="icon-idcard" viewBox="0 0 1024 1024"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136V232h752v560z"  ></path><path d="M610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zM615.1 620h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c0.3 4.2 3.7 7.5 7.9 7.5H522c4.6 0 8.2-3.8 8-8.4-2.8-53.3-32-99.7-74.6-126.1 18.1-19.9 29.1-46.4 29.1-75.5 0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5-42.7 26.5-71.8 72.8-74.6 126.1-0.4 4.6 3.2 8.4 7.8 8.4z m149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"  ></path></symbol><symbol id="icon-heart" viewBox="0 0 1024 1024"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"  ></path></symbol><symbol id="icon-star" viewBox="0 0 1024 1024"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1c-3.1 3.1-3.1 8.2 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112z m161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z"  ></path></symbol><symbol id="icon-shrink" viewBox="0 0 1024 1024"><path d="M881.7 187.4l-45.1-45.1c-3.1-3.1-8.2-3.1-11.3 0L667.8 299.9l-54.7-54.7c-4.7-4.7-12.7-1.9-13.5 4.7L576.1 439c-0.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-0.8 9.3-8.8 4.7-13.5l-54.7-54.7 157.6-157.6c3-3 3-8.1-0.1-11.2zM439 576.1l-189.2 23.5c-6.6 0.8-9.3 8.9-4.7 13.5l54.7 54.7-157.5 157.5c-3.1 3.1-3.1 8.2 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l157.6-157.6 54.7 54.7c4.7 4.7 12.7 1.9 13.5-4.7L447.9 585c0.7-5.2-3.7-9.6-8.9-8.9z"  ></path></symbol><symbol id="icon-arrawsalt" viewBox="0 0 1024 1024"><path d="M855 160.1l-189.2 23.5c-6.6 0.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5c-3.1 3.1-3.1 8.2 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7c4.7 4.7 12.7 1.9 13.5-4.7L863.9 169c0.7-5.2-3.7-9.6-8.9-8.9zM416.6 562.3c-3.1-3.1-8.2-3.1-11.3 0L251.8 715.9l-54.7-54.7c-4.7-4.7-12.7-1.9-13.5 4.7L160.1 855c-0.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-0.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"  ></path></symbol><symbol id="icon-up" viewBox="0 0 1024 1024"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3c-3.8 5.3-0.1 12.7 6.5 12.7h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z"  ></path></symbol><symbol id="icon-fullscreen" viewBox="0 0 1024 1024"><path d="M290 236.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L169 160c-5.1-0.6-9.5 3.7-8.9 8.9L179 329.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zM642.7 423.7c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7L863.9 169c0.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4zM845 694.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L734 787.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L855 864c5.1 0.6 9.5-3.7 8.9-8.9L845 694.9zM381.3 600.3c-3.1-3.1-8.2-3.1-11.3 0L236.3 733.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L160.1 855c-0.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-0.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"  ></path></symbol><symbol id="icon-fullscreen-exit" viewBox="0 0 1024 1024"><path d="M391 240.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L280 333.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L401 410c5.1 0.6 9.5-3.7 8.9-8.9L391 240.9zM401.1 614.1L240.8 633c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7l18.9-160.1c0.6-5.1-3.7-9.4-8.8-8.8zM622.9 409.9L783.2 391c6.6-0.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3c-3.1-3.1-8.2-3.1-11.3 0L690.3 279.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L614.1 401c-0.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L623 614c-5.1-0.6-9.5 3.7-8.9 8.9L633 783.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"  ></path></symbol><symbol id="icon-indent" viewBox="0 0 1024 1024"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM400 646c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zM904 160H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM904 792H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519c4.5-3.5 4.5-10.3 0-13.9L142.4 381.9c-5.8-4.6-14.4-0.5-14.4 6.9v246.3c0 7.4 8.5 11.6 14.4 7z"  ></path></symbol><symbol id="icon-outdent" viewBox="0 0 1024 1024"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM400 646c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zM904 160H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM904 792H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4 0.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1c-4.5 3.5-4.5 10.3 0 13.8z"  ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-unorderedlist" viewBox="0 0 1024 1024"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM912 476H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM912 760H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"  ></path><path d="M160 228m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z"  ></path><path d="M160 512m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z"  ></path><path d="M160 796m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z"  ></path></symbol><symbol id="icon-orderedlist" viewBox="0 0 1024 1024"><path d="M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM920 192H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM920 476H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zM216 428H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7c-1.3 1.5-2.1 3.4-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7c1.3-1.5 2.1-3.4 2.1-5.4V432c0-2.2-1.8-4-4-4z"  ></path></symbol><symbol id="icon-align-right" viewBox="0 0 1024 1024"><path d="M904 158H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM904 582H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM904 794H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM904 370H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-align-center" viewBox="0 0 1024 1024"><path d="M264 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM760 654c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496zM904 794H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM904 370H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-align-left" viewBox="0 0 1024 1024"><path d="M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM120 654h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM904 794H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM904 370H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-bold" viewBox="0 0 1024 1024"><path d="M697.8 481.4c33.6-35 54.2-82.3 54.2-134.3v-10.2C752 229.3 663.9 142 555.3 142H259.4c-15.1 0-27.4 12.3-27.4 27.4v679.1c0 16.3 13.2 29.5 29.5 29.5h318.7c117 0 211.8-94.2 211.8-210.5v-11c0-73-37.4-137.3-94.2-175.1zM328 238h224.7c57.1 0 103.3 44.4 103.3 99.3v9.5c0 54.8-46.3 99.3-103.3 99.3H328V238z m366.6 429.4c0 62.9-51.7 113.9-115.5 113.9H328V542.7h251.1c63.8 0 115.5 51 115.5 113.9v10.8z"  ></path></symbol><symbol id="icon-font-colors" viewBox="0 0 1024 1024"><path d="M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM253.7 736h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-0.2 3.2-0.5 5.1-1.8 7.8-7.3 6-12.4L573.6 118.6c-1.4-3.9-5.1-6.6-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-0.4 1-0.5 2.1-0.5 3.2-0.1 5.3 4.3 9.7 9.7 9.7z m255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z"  ></path></symbol><symbol id="icon-exclaimination" viewBox="0 0 1024 1024"><path d="M512 804m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M480 636h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"  ></path></symbol><symbol id="icon-font-size" viewBox="0 0 1024 1024"><path d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8z"  ></path><path d="M656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"  ></path></symbol><symbol id="icon-infomation" viewBox="0 0 1024 1024"><path d="M512 224m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M544 392h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-line-height" viewBox="0 0 1024 1024"><path d="M648 160H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM920.8 706H856V318h64.8c6 0 9.4-7 5.7-11.7L825.7 178.7c-2.9-3.7-8.5-3.7-11.3 0L713.6 306.3c-3.7 4.7-0.4 11.7 5.7 11.7H784v388h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.8-4.7 0.4-11.7-5.6-11.7z"  ></path></symbol><symbol id="icon-strikethrough" viewBox="0 0 1024 1024"><path d="M952 474H569.9c-10-2-20.5-4-31.6-6-15.9-2.9-22.2-4.1-30.8-5.8-51.3-10-82.2-20-106.8-34.2-35.1-20.5-52.2-48.3-52.2-85.1 0-37 15.2-67.7 44-89 28.4-21 68.8-32.1 116.8-32.1 54.8 0 97.1 14.4 125.8 42.8 14.6 14.4 25.3 32.1 31.8 52.6 1.3 4.1 2.8 10 4.3 17.8 0.9 4.8 5.2 8.2 9.9 8.2h72.8c5.6 0 10.1-4.6 10.1-10.1v-1c-0.7-6.8-1.3-12.1-2-16-7.3-43.5-28-81.7-59.7-110.3-44.4-40.5-109.7-61.8-188.7-61.8-72.3 0-137.4 18.1-183.3 50.9-25.6 18.4-45.4 41.2-58.6 67.7-13.5 27.1-20.3 58.4-20.3 92.9 0 29.5 5.7 54.5 17.3 76.5 8.3 15.7 19.6 29.5 34.1 42H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h433.2c2.1 0.4 3.9 0.8 5.9 1.2 30.9 6.2 49.5 10.4 66.6 15.2 23 6.5 40.6 13.3 55.2 21.5 35.8 20.2 53.3 49.2 53.3 89 0 35.3-15.5 66.8-43.6 88.8-30.5 23.9-75.6 36.4-130.5 36.4-43.7 0-80.7-8.5-110.2-25-29.1-16.3-49.1-39.8-59.7-69.5-0.8-2.2-1.7-5.2-2.7-9-1.2-4.4-5.3-7.5-9.7-7.5h-79.7c-5.6 0-10.1 4.6-10.1 10.1v1c0.2 2.3 0.4 4.2 0.6 5.7 6.5 48.8 30.3 88.8 70.7 118.8 47.1 34.8 113.4 53.2 191.8 53.2 84.2 0 154.8-19.8 204.2-57.3 25-18.9 44.2-42.2 57.1-69 13-27.1 19.7-57.9 19.7-91.5 0-31.8-5.8-58.4-17.8-81.4-5.8-11.2-13.1-21.5-21.8-30.8H952c4.4 0 8-3.6 8-8v-60c0-4.3-3.6-7.9-8-7.9z"  ></path></symbol><symbol id="icon-underline" viewBox="0 0 1024 1024"><path d="M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6zM512 728c69.4 0 134.6-27.1 183.8-76.2C745 602.7 772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8C377.3 701 442.6 728 512 728z"  ></path></symbol><symbol id="icon-number" viewBox="0 0 1024 1024"><path d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394h164zM628 630H400V394h228v236z"  ></path></symbol><symbol id="icon-italic" viewBox="0 0 1024 1024"><path d="M798 160H366c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h181.2l-156 544H229c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8H474.4l156-544H798c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-code" viewBox="0 0 1024 1024"><path d="M438.4 849.1l222.7-646.7c0.2-0.5 0.3-1.1 0.4-1.6L438.4 849.1z"  ></path><path d="M661.2 168.7h-67.5c-3.4 0-6.5 2.2-7.6 5.4L354.7 846c-0.3 0.8-0.4 1.7-0.4 2.6 0 4.4 3.6 8 8 8h67.8c3.4 0 6.5-2.2 7.6-5.4l0.7-2.1 223.1-648.3 7.4-21.4c0.3-0.8 0.4-1.7 0.4-2.6-0.1-4.5-3.6-8.1-8.1-8.1zM954.6 502.1c-0.8-1-1.7-1.9-2.7-2.7l-219-171.3c-3.5-2.7-8.5-2.1-11.2 1.4-1.1 1.4-1.7 3.1-1.7 4.9v81.3c0 2.5 1.1 4.8 3.1 6.3l115 90-115 90c-1.9 1.5-3.1 3.8-3.1 6.3v81.3c0 4.4 3.6 8 8 8 1.8 0 3.5-0.6 4.9-1.7l219-171.3c6.9-5.4 8.2-15.5 2.7-22.5zM291.1 328.1l-219 171.3c-1 0.8-1.9 1.7-2.7 2.7-5.4 7-4.2 17 2.7 22.5l219 171.3c1.4 1.1 3.1 1.7 4.9 1.7 4.4 0 8-3.6 8-8v-81.3c0-2.5-1.1-4.8-3.1-6.3l-115-90 115-90c1.9-1.5 3.1-3.8 3.1-6.3v-81.3c0-1.8-0.6-3.5-1.7-4.9-2.7-3.5-7.7-4.1-11.2-1.4z"  ></path></symbol><symbol id="icon-column-width" viewBox="0 0 1024 1024"><path d="M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM904 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6c-4.7-3.7-11.7-0.4-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3c-3.7 2.9-3.7 8.5 0 11.3l127.5 100.8c4.7 3.7 11.7 0.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5 0.2-11.4z"  ></path></symbol><symbol id="icon-check" viewBox="0 0 1024 1024"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474c-6.1-7.7-15.3-12.2-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1 0.4-12.8-6.3-12.8z"  ></path></symbol><symbol id="icon-ellipsis" viewBox="0 0 1024 1024"><path d="M232 511m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z"  ></path><path d="M512 511m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z"  ></path><path d="M792 511m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z"  ></path></symbol><symbol id="icon-dash" viewBox="0 0 1024 1024"><path d="M112 476h160v72H112zM432 476h160v72H432zM752 476h160v72H752z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"  ></path></symbol><symbol id="icon-line" viewBox="0 0 1024 1024"><path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-minus" viewBox="0 0 1024 1024"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-question" viewBox="0 0 1024 1024"><path d="M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8-15.4 19.4-23.9 43.8-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"  ></path></symbol><symbol id="icon-plus" viewBox="0 0 1024 1024"><path d="M848 474H550V152h-76v322H176c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h298v322h76V550h298c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-small-dash" viewBox="0 0 1024 1024"><path d="M112 476h72v72h-72zM294 476h72v72h-72zM658 476h72v72h-72zM840 476h72v72h-72zM476 476h72v72h-72z"  ></path></symbol><symbol id="icon-pause" viewBox="0 0 1024 1024"><path d="M304 176h80v672h-80zM712 176h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-bg-colors" viewBox="0 0 1024 1024"><path d="M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zM389.3 700.2c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-0.6-0.6-1.3-1.2-2-1.7l-78.2-78.2c-3.5-3.5-9.3-3.5-12.8 0l-48 48c-3.5 3.5-3.5 9.3 0 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256z m12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-drag" viewBox="0 0 1024 1024"><path d="M909.3 506.3L781.7 405.6c-4.7-3.7-11.7-0.4-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7c-2.9-3.7-8.5-3.7-11.3 0L405.6 242.3c-3.7 4.7-0.4 11.7 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3c-3.7 2.9-3.7 8.5 0 11.3l127.5 100.8c4.7 3.7 11.7 0.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7 0.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.7-2.9 3.7-8.5 0.1-11.4z"  ></path></symbol><symbol id="icon-stop" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884z m288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"  ></path></symbol><symbol id="icon-check-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"  ></path></symbol><symbol id="icon-minus-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"  ></path></symbol><symbol id="icon-close-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"  ></path></symbol><symbol id="icon-info-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"  ></path></symbol><symbol id="icon-plus-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"  ></path></symbol><symbol id="icon-question-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z m62.9-219.5c-18.5 7.1-30.9 25.1-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"  ></path></symbol><symbol id="icon-heart-fill" viewBox="0 0 1024 1024"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"  ></path></symbol><symbol id="icon-message-fill" viewBox="0 0 1024 1024"><path d="M924.3 338.4c-22.5-53.7-54.9-101.9-96.1-143.3-41.2-41.3-89.3-73.8-143-96.3C630.3 75.7 572.1 64 512 64h-2c-60.5 0.3-119 12.3-174.1 35.9-53.2 22.8-100.9 55.2-141.7 96.5-40.8 41.3-72.8 89.3-95 142.8C76.3 394.6 64.7 453.5 65 514.1c0.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8c61.5 31.1 130.2 47.7 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3 53.4-22.3 101.4-54.3 142.5-95.2 41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5 0.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48z m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z"  ></path></symbol><symbol id="icon-plus-square-fill" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"  ></path></symbol><symbol id="icon-bulb-fill" viewBox="0 0 1024 1024"><path d="M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z"  ></path></symbol><symbol id="icon-bell-fill" viewBox="0 0 1024 1024"><path d="M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z"  ></path></symbol><symbol id="icon-star-fill" viewBox="0 0 1024 1024"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"  ></path></symbol><symbol id="icon-google" viewBox="0 0 1024 1024"><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"  ></path></symbol><symbol id="icon-apple" viewBox="0 0 1024 1024"><path d="M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z m-10.6 267c-14.3 19.9-28.7 35.6-41.9 45.7-10.5 8-18.6 11.4-24 11.6-9-0.1-17.7-2.3-34.7-8.8-1.2-0.5-2.5-1-4.2-1.6-0.8-0.3-3.9-1.5-4.4-1.7-17.4-6.7-27.8-10.3-41.1-13.8-18.6-4.8-37.1-7.4-56.9-7.4-20.2 0-39.2 2.5-58.1 7.2-13.9 3.5-25.6 7.4-42.7 13.8-0.7 0.3-8.1 3.1-10.2 3.9-3.5 1.3-6.2 2.3-8.7 3.2-10.4 3.6-17 5.1-22.9 5.2-0.7 0-1.3-0.1-1.8-0.2-1.1-0.2-2.5-0.6-4.1-1.3-4.5-1.8-9.9-5.1-16-9.8-14-10.9-29.4-28-45.1-49.9-27.5-38.6-53.5-89.8-66-125.7-15.4-44.8-23-87.7-23-128.6 0-60.2 17.8-106 48.4-137.1 26.3-26.6 61.7-41.5 97.8-42.3 5.9 0.1 14.5 1.5 25.4 4.5 8.6 2.3 18 5.4 30.7 9.9 3.8 1.4 16.9 6.1 18.5 6.7 7.7 2.8 13.5 4.8 19.2 6.6 18.2 5.8 32.3 9 47.6 9 15.5 0 28.8-3.3 47.7-9.8 7.1-2.4 32.9-12 37.5-13.6 25.6-9.1 44.5-14 60.8-15.2 4.8-0.4 9.1-0.4 13.2-0.1 22.7 1.8 42.1 6.3 58.6 13.8-37.6 43.4-57 96.5-56.9 158.4-0.3 14.7 0.9 31.7 5.1 51.8 6.4 30.5 18.6 60.7 37.9 89 14.7 21.5 32.9 40.9 54.7 57.8-11.5 23.7-25.6 48.2-40.4 68.8z"  ></path><path d="M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"  ></path></symbol><symbol id="icon-instagram" viewBox="0 0 1024 1024"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9z m0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zM725.5 250.7c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9c-0.1-26.6-21.4-47.9-47.9-47.9z"  ></path><path d="M911.8 512c0-55.2 0.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-0.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-0.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9 0.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165z m-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"  ></path></symbol><symbol id="icon-Youtube" viewBox="0 0 1024 1024"><path d="M960 509.2c0-2.2 0-4.7-0.1-7.6-0.1-8.1-0.3-17.2-0.5-26.9-0.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8-12.8-47.9-50.4-85.6-98.3-98.5-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-0.2-26.8-0.3-38.4-0.4H497.3c-11.6 0.1-24.5 0.2-38.4 0.4-39.7 0.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2-47.8 12.8-85.5 50.5-98.3 98.5-6.1 22.6-10.4 52.7-13.4 88.8-2.2 26.2-3.6 54-4.4 81.9-0.3 9.7-0.4 18.8-0.5 26.9 0 2.9-0.1 5.4-0.1 7.6v5.6c0 2.2 0 4.7 0.1 7.6 0.1 8.1 0.3 17.2 0.5 26.9 0.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9 0.2 26.8 0.3 38.4 0.4H526.7c11.6-0.1 24.5-0.2 38.4-0.4 39.7-0.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9 0.3-9.7 0.4-18.8 0.5-26.9 0-2.9 0.1-5.4 0.1-7.6V512v-2.8z m-72 5.2c0 2.1 0 4.4-0.1 7.1-0.1 7.8-0.3 16.4-0.5 25.7-0.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7 0.2-26.4 0.3-37.8 0.3h-28.6c-11.4-0.1-24.1-0.2-37.8-0.3-39.1-0.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-0.3-9.3-0.4-18-0.5-25.7 0-2.7-0.1-5.1-0.1-7.1v-3-1.8c0-2.1 0-4.4 0.1-7.1 0.1-7.8 0.3-16.4 0.5-25.7 0.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-0.2 26.4-0.3 37.8-0.3h28.6c11.4 0.1 24.1 0.2 37.8 0.3 39.1 0.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9 0.3 9.3 0.4 18 0.5 25.7 0 2.7 0.1 5.1 0.1 7.1v4.8z"  ></path><path d="M423 646l232-135-232-133z"  ></path></symbol><symbol id="icon-weibo" viewBox="0 0 1024 1024"><path d="M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2z m-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3z m45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zM785.3 443.5c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109-27.6-30.6-68.4-42.3-106-34.3-15.4 3.3-25.2 18.4-21.9 33.8 3.3 15.3 18.4 25.2 33.8 21.8 18.4-3.9 38.3 1.8 51.9 16.7 13.5 15 17.2 35.4 11.3 53.3-4.9 15.1 3.2 31.1 18.2 36z"  ></path><path d="M885.1 237.5c-56.7-62.9-140.4-86.9-217.7-70.5-17.9 3.8-29.3 21.4-25.4 39.3 3.8 17.9 21.4 29.3 39.3 25.5 55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-0.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7 0.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z"  ></path></symbol><symbol id="icon-weixin" viewBox="0 0 1024 1024"><path d="M765.4 503.6c-18.7 0-37 18.5-37 37.4 0 19.1 18 37.2 37 37.2 27.8 0 45-19.3 45-37.2 0-18-17.2-37.4-45-37.4zM599.1 503.6c-18.8 0-37.3 18.5-37.3 37.4 0 19.1 18.1 37.2 37.3 37.2 27.6 0 44.8-19.3 44.8-37.2 0-18-17.2-37.4-44.8-37.4zM545.6 329c0-26.7-18-44.7-44.8-44.7-25.2 0-52.5 17.1-52.5 44.7 0 27.7 27.3 44.8 52.5 44.8 26.3 0 44.8-18.4 44.8-44.8z"  ></path><path d="M960.2 609c0-121.3-108.2-225.1-247.5-238.6-28.2-130.3-168-228.5-325.4-228.5C209 141.8 64 266.5 64 419.9c0 81 40.5 154.2 117.3 212l-25.4 76.5c-2.6 8-0.2 16.7 6.1 22.3 6.2 5.3 15.4 6.6 22.9 2.9l99.4-49.7 10.5 2.1c31.5 6.5 58.7 12.1 92.5 12.1 0.3 0 21.9-0.9 35.1-4.6 40.7 93.5 144.3 155.8 260.1 155.8 29.4 0 58.4-6.4 87.9-13.8l75.9 41.5c3.1 1.7 6.5 2.6 10 2.6 4.8 0 9.4-1.7 13.1-4.6 6.6-5.4 9.3-14.1 6.8-22.1L857.6 791c66.2-53.8 102.6-118.2 102.6-182zM806.8 780.8l7.5 24.9-35.9-19.7c-3-1.6-6.3-2.5-9.7-2.5-1.7 0-3.4 0.2-4.9 0.6C737 791 709.2 798 682.5 798c-123.9 0-224.6-84.6-224.6-188.6s100.8-188.6 224.6-188.6c121.5 0 224.1 86.4 224.1 188.6 0 51.5-32.9 104.7-92.7 149.6-6.6 5-9.5 13.8-7.1 21.8zM408.9 647.5c-7.1 0.5-14.3 0.8-21.5 0.8-29 0-53.3-5-81.5-10.9l-16.7-3.4c-4.5-1-9.1-0.3-13.1 1.7l-58.3 29.2 13.7-41.3c2.9-8.6-0.2-17.8-7.6-23.1-71.7-50-108.1-110.7-108.1-180.3 0-125.7 121.8-227.9 271.5-227.9C516 192.3 631 268.5 659.2 371c-141.7 6-255.6 108.3-255.6 231.7 0 14.5 1.8 29.5 5.3 44.8z"  ></path><path d="M289 284.3c-25.3 0-52.6 17.1-52.6 44.7 0 27.7 27.3 44.8 52.6 44.8 26.3 0 44.7-18.4 44.7-44.8 0.1-26.7-17.9-44.7-44.7-44.7z"  ></path></symbol><symbol id="icon-link" viewBox="0 0 1024 1024"><path d="M865.3 266.5l-109-108.9c-18.8-18.7-43.8-29.1-70.4-29.1-26.7 0-51.7 10.3-70.4 29.1L397.6 375.4c-18.8 18.8-29.1 43.8-29.1 70.4 0 26.7 10.3 51.7 29.1 70.4l59.9 59.9c5.7 5.7 13.2 8.5 20.6 8.5 7.5 0 14.9-2.8 20.6-8.5 11.4-11.4 11.4-29.9 0-41.3L438.9 475c-7.7-7.7-12-18.1-12-29.2 0-11.1 4.3-21.4 12-29.2l217.9-217.9c15.4-15.5 42.8-15.5 58.3 0L824 307.8c7.7 7.7 12 18.1 12 29.2 0 11.1-4.3 21.4-12 29.2L687.1 503.1c-11.4 11.4-11.4 29.9 0 41.3 11.4 11.4 29.9 11.4 41.3 0l136.9-136.9c18.8-18.8 29.1-43.8 29.1-70.4 0-26.8-10.4-51.8-29.1-70.6z m0 0"  ></path><path d="M565.7 446.3c-11.4-11.4-29.9-11.4-41.3 0-11.4 11.4-11.4 29.9 0 41.3l59.9 59.9c7.7 7.7 12 18.1 12 29.2 0 11.1-4.3 21.4-12 29.2L366.5 823.6c-16.1 16.1-42.3 16.1-58.3 0l-109-108.9c-16.1-16.1-16.1-42.2 0-58.3l136.9-136.9c11.4-11.4 11.4-29.9 0-41.3-11.4-11.4-29.9-11.4-41.3 0L158 615.1c-38.8 38.8-38.8 102 0 140.8l108.9 108.9c19.4 19.4 44.9 29.1 70.4 29.1 25.5 0 51-9.7 70.4-29.1L625.6 647c18.8-18.7 29.1-43.8 29.1-70.4 0-26.7-10.3-51.7-29.1-70.4l-59.9-59.9z m0 0"  ></path></symbol><symbol id="icon-zoomout" viewBox="0 0 1024 1024"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"  ></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"  ></path></symbol><symbol id="icon-audio" viewBox="0 0 1024 1024"><path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"  ></path><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168z m-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"  ></path></symbol><symbol id="icon-audio-fill" viewBox="0 0 1024 1024"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168z"  ></path><path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"  ></path></symbol><symbol id="icon-zoomin" viewBox="0 0 1024 1024"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"  ></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"  ></path></symbol></svg>',
      h = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss");

  if (h && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (c) {
      console && console.log(c);
    }
  }

  !function (c) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(c, 0);else {
        var h = function h() {
          document.removeEventListener("DOMContentLoaded", h, !1), c();
        };

        document.addEventListener("DOMContentLoaded", h, !1);
      }
    } else document.attachEvent && (l = c, o = a.document, t = !1, v = function v() {
      t || (t = !0, l());
    }, (_i = function i() {
      try {
        o.documentElement.doScroll("left");
      } catch (c) {
        return void setTimeout(_i, 50);
      }

      v();
    })(), o.onreadystatechange = function () {
      "complete" == o.readyState && (o.onreadystatechange = null, v());
    });

    var l, o, t, v, _i;
  }(function () {
    var c, h, l, o, t, v;
    (c = document.createElement("div")).innerHTML = i, i = null, (h = c.getElementsByTagName("svg")[0]) && (h.setAttribute("aria-hidden", "true"), h.style.position = "absolute", h.style.width = 0, h.style.height = 0, h.style.overflow = "hidden", l = h, (o = document.body).firstChild ? (t = l, (v = o.firstChild).parentNode.insertBefore(t, v)) : o.appendChild(l));
  });
}(window);

/***/ }),

/***/ "eee5":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "f1fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_height_transition_vue_vue_type_style_index_0_id_38c12aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2446");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_height_transition_vue_vue_type_style_index_0_id_38c12aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_height_transition_vue_vue_type_style_index_0_id_38c12aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_height_transition_vue_vue_type_style_index_0_id_38c12aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f201":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("e4ae");
var aFunction = __webpack_require__("79aa");
var SPECIES = __webpack_require__("5168")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "f9ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_panel_vue_vue_type_style_index_0_id_0985f30b_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("394f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_panel_vue_vue_type_style_index_0_id_0985f30b_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_panel_vue_vue_type_style_index_0_id_0985f30b_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_panel_vue_vue_type_style_index_0_id_0985f30b_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fabe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/avatar/avatar.vue?vue&type=template&id=f0fc2b18&
var avatarvue_type_template_id_f0fc2b18_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-avatar",class:_vm.classes},[_c('div',{staticClass:"ui-avatar-container"},[(_vm.lazy && _vm.url)?_c('ui-image',{staticClass:"ui-avatar-image",attrs:{"fallback":_vm.fallback,"src":_vm.url},on:{"load-finished":_vm.loadFinished,"load-failed":_vm.loadFailed}}):_vm._e(),(!_vm.lazy && _vm.url)?_c('img',{staticClass:"ui-avatar-image",attrs:{"src":_vm.url,"alt":""}}):_vm._e(),(!_vm.url && _vm.displayName)?_c('div',{staticClass:"ui-avatar-string"},[_vm._v("\n      "+_vm._s(_vm.displayName)+"\n    ")]):_vm._e(),(!_vm.url && !_vm.displayName)?_c('ui-icon',{attrs:{"name":_vm.icon}}):_vm._e()],1),(_vm.showName)?_c('span',{staticClass:"ui-avatar-name"},[_vm._v(_vm._s(_vm.username))]):_vm._e(),(_vm.$slots.default)?_c('span',{staticClass:"ui-avatar-slot"},[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/avatar/avatar.vue?vue&type=template&id=f0fc2b18&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./packages/assets/scss/avatar.scss
var avatar = __webpack_require__("3b89");

// EXTERNAL MODULE: ./packages/icon/icon.vue + 4 modules
var icon = __webpack_require__("383c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/image/image.vue?vue&type=template&id=845904a0&
var imagevue_type_template_id_845904a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-image",class:[_vm.keepSize && 'ui-image-keep-size']},[_c('transition',{attrs:{"name":"fade"}},[(!_vm.loading)?_c('div',{staticClass:"ui-image-image",style:(_vm.backgroundStyle)}):_vm._e()]),(_vm.cover)?_c('div',{staticClass:"ui-image-cover"}):_vm._e(),(_vm.loading)?_vm._t("loader",[_c('div',{staticClass:"ui-image-loader"},[_c('ui-spinner',{attrs:{"center":""}})],1)]):_vm._e(),(_vm.$slots.default)?_c('div',{staticClass:"ui-image-slot",style:(_vm.slotStyles)},[_vm._t("default")],2):_vm._e()],2)}
var imagevue_type_template_id_845904a0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/image/image.vue?vue&type=template&id=845904a0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/spinner/spinner.vue?vue&type=template&id=6f503344&
var spinnervue_type_template_id_6f503344_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.type == 'dot' && _vm.isMounted)?_c('div',{staticClass:"ui-spinner",class:_vm.classes},[_c('div',{staticClass:"rect1"}),_c('div',{staticClass:"rect2"}),_c('div',{staticClass:"rect3"})]):_vm._e()])}
var spinnervue_type_template_id_6f503344_staticRenderFns = []


// CONCATENATED MODULE: ./packages/spinner/spinner.vue?vue&type=template&id=6f503344&

// EXTERNAL MODULE: ./packages/assets/scss/spinner.scss
var spinner = __webpack_require__("1521");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/spinner/spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var spinnervue_type_script_lang_js_ = ({
  name: "ui-spinner",
  data: function data() {
    return {
      isMounted: false
    };
  },
  props: {
    type: {
      type: String,
      default: "dot"
    },
    center: Boolean,
    light: Boolean,
    dark: Boolean
  },
  computed: {
    classes: function classes() {
      return ["ui-spinner-".concat(this.type), {
        "ui-spinner-center": this.center
      }, {
        "ui-spinner-light": this.light
      }, {
        "ui-spinner-dark": this.dark
      }];
    }
  },
  mounted: function mounted() {
    this.isMounted = true;
  }
});
// CONCATENATED MODULE: ./packages/spinner/spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var spinner_spinnervue_type_script_lang_js_ = (spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/spinner/spinner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  spinner_spinnervue_type_script_lang_js_,
  spinnervue_type_template_id_6f503344_render,
  spinnervue_type_template_id_6f503344_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "spinner.vue"
/* harmony default export */ var spinner_spinner = (component.exports);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("795b");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./src/utils/imgLoader.js


var imgLoader_imgLoader = function imgLoader(url) {
  return new promise_default.a(function (resolve, reject) {
    var img = new Image();

    img.onload = function () {
      resolve(url);
    };

    img.onerror = function () {
      console.log(url);
      reject(url);
    };

    img.src = url;
  });
};

/* harmony default export */ var utils_imgLoader = (imgLoader_imgLoader);
// EXTERNAL MODULE: ./packages/assets/scss/image.scss
var scss_image = __webpack_require__("fabe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/image/image.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var imagevue_type_script_lang_js_ = ({
  name: "ui-image",
  props: {
    src: String,
    cover: Boolean,
    keepSize: Boolean,
    fallback: String
  },
  components: {
    UiSpinner: spinner_spinner
  },
  data: function data() {
    return {
      loading: true,
      failed: false
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      utils_imgLoader(this.src).then(function (url) {
        _this.loading = false;

        _this.$emit("load-finished");
      }).catch(function (err) {
        _this.loading = false;
        _this.failed = true;

        _this.$emit("load-failed");
      });
    }
  },
  mounted: function mounted() {
    this.load();
  },
  computed: {
    slotStyles: function slotStyles() {
      return {
        zIndex: this.$zIndex ? this.$zIndex.add() : 100
      };
    },
    backgroundStyle: function backgroundStyle() {
      return {
        backgroundImage: this.failed ? "url(".concat(this.fallback, ")") : "url(".concat(this.src, ")")
      };
    }
  }
});
// CONCATENATED MODULE: ./packages/image/image.vue?vue&type=script&lang=js&
 /* harmony default export */ var image_imagevue_type_script_lang_js_ = (imagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/image/image.vue





/* normalize component */

var image_component = Object(componentNormalizer["a" /* default */])(
  image_imagevue_type_script_lang_js_,
  imagevue_type_template_id_845904a0_render,
  imagevue_type_template_id_845904a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

image_component.options.__file = "image.vue"
/* harmony default export */ var image_image = (image_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/avatar/avatar.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var avatarvue_type_script_lang_js_ = ({
  name: "ui-avatar",
  components: {
    UiIcon: icon["a" /* default */],
    UiImage: image_image
  },
  props: {
    shape: {
      validator: function validator(value) {
        return ["circle", "square"].includes(value);
      },
      default: "circle"
    },
    size: {
      type: String,
      validator: function validator(value) {
        return ["sm", "lg", "default"].includes(value);
      },
      default: "default"
    },
    url: String,
    username: String,
    icon: {
      type: String,
      default: "icon-user"
    },
    showName: {
      type: Boolean,
      default: true
    },
    fallback: String,
    lazy: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    displayName: function displayName() {
      return this.username ? this.username[0].toUpperCase() : false;
    },
    classes: function classes() {
      return ["ui-avatar-size-".concat(this.size), "ui-avatar-".concat(this.shape)];
    }
  },
  methods: {
    loadFinished: function loadFinished() {
      this.$emit("load-finished");
    },
    loadFailed: function loadFailed() {
      this.$emit("load-failed");
    }
  }
});
// CONCATENATED MODULE: ./packages/avatar/avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var avatar_avatarvue_type_script_lang_js_ = (avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/avatar/avatar.vue





/* normalize component */

var avatar_component = Object(componentNormalizer["a" /* default */])(
  avatar_avatarvue_type_script_lang_js_,
  avatarvue_type_template_id_f0fc2b18_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

avatar_component.options.__file = "avatar.vue"
/* harmony default export */ var avatar_avatar = (avatar_component.exports);
// CONCATENATED MODULE: ./packages/avatar/index.js



avatar_avatar.install = function (Vue) {
  Vue.component(avatar_avatar.name, avatar_avatar);
};

/* harmony default export */ var packages_avatar = (avatar_avatar);
// EXTERNAL MODULE: ./packages/icon/index.js
var packages_icon = __webpack_require__("07fc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/loader/loader.vue?vue&type=template&id=cc5b8d78&
var loadervue_type_template_id_cc5b8d78_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-loader"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:('pull-down' === _vm.pull.type),expression:"'pull-down' === pull.type"}],staticClass:"ui-loader__header",style:({ height: _vm.pullHeight + 'px' })},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.pull.available),expression:"!pull.available"}],staticClass:"ui-loader__header-text"},[_vm._v("\n      "+_vm._s(_vm.lang.pullDownToRefresh)+"\n    ")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.pull.available && 'pull-down' !== _vm.loadingType),expression:"pull.available && 'pull-down' !== loadingType"}],staticClass:"ui-loader__header-text"},[_vm._v("\n      "+_vm._s(_vm.lang.releaseToRefresh)+"\n    ")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:('pull-down' === _vm.loadingType),expression:"'pull-down' === loadingType"}],staticClass:"ui-loader__header-text"},[_vm._t('pull-down-loading',[_c('ui-spinner')])],2)]),_c('div',{staticClass:"ui-loader__content"},[_vm._t("default")],2),(_vm.showFooter)?_c('div',{directives:[{name:"show",rawName:"v-show",value:('pull-up' === _vm.pull.type),expression:"'pull-up' === pull.type"}],staticClass:"ui-loader__footer",style:({ height: _vm.pullHeight + 'px' })},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.pull.available),expression:"!pull.available"}],staticClass:"ui-loader__footer-text"},[_vm._v("\n      "+_vm._s(_vm.lang.pullUpToLoad)+"\n    ")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.pull.available && 'pull-up' !== _vm.loadingType),expression:"pull.available && 'pull-up' !== loadingType"}],staticClass:"ui-loader__footer-text"},[_vm._v("\n      "+_vm._s(_vm.lang.releaseToRefresh)+"\n    ")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:('pull-up' === _vm.loadingType),expression:"'pull-up' === loadingType"}],staticClass:"ui-loader__footer-text"},[_vm._t('pull-up-loading',[_c('ui-spinner')])],2)]):_vm._e(),(_vm.showFooter)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading && 'scroll' === _vm.loadingType),expression:"loading && 'scroll' === loadingType"}],staticClass:"ui-loader__footer",style:({ height: _vm.distance + 'px' })},[_c('div',{staticClass:"footer-text"},[_vm._t('scroll-loading',[_c('ui-spinner')])],2)]):_vm._e(),(_vm.showFooter)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCompleted),expression:"showCompleted"}],staticClass:"ui-loader__footer",style:({ height: _vm.distance + 'px' })},[_c('div',{staticClass:"ui-loader__footer-text"},[_vm._v(_vm._s(_vm.lang.loadCompleted))])]):_vm._e()])}
var loadervue_type_template_id_cc5b8d78_staticRenderFns = []


// CONCATENATED MODULE: ./packages/loader/loader.vue?vue&type=template&id=cc5b8d78&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./packages/assets/scss/loader.scss
var loader = __webpack_require__("4aa0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/loader/loader.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var loadervue_type_script_lang_js_ = ({
  name: "ui-loader",
  components: {
    UiSpinner: spinner_spinner
  },
  props: {
    lang: {
      type: Object,
      default: function _default() {
        return {
          pullDownToRefresh: "下拉刷新数据",
          releaseToRefresh: "松开刷新数据",
          pullUpToLoad: "上拉加载数据",
          loadCompleted: "加载完毕"
        };
      }
    },
    disableBrowserPull: {
      type: Boolean,
      default: true
    },
    loading: Boolean,
    completed: Boolean,
    distance: {
      type: Number,
      default: 60
    },
    offset: {
      type: Number,
      default: 0
    },
    listens: {
      type: Array,
      default: function _default() {
        return ["infinite-scroll", "pull-down", "pull-up"];
      }
    },
    container: {
      type: String
    },
    initScroll: Boolean,
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      margin: {
        top: 0,
        bottom: 0
      },
      pull: {
        from: -1,
        to: -1,
        distance: 0,
        type: null,
        available: false
      },
      loadingType: null,
      inited: false
    };
  },
  computed: {
    _container: function _container() {
      return this.container ? this.$parent.$refs[this.container] : window.window;
    },
    pullHeight: function pullHeight() {
      return this.pull.distance > this.distance ? this.distance : this.pull.distance;
    },
    showCompleted: function showCompleted() {
      return !this.loading && this.completed && "pull-up" !== this.pull.type && !this.pull.available;
    }
  },
  watch: {
    loading: function loading(val, oldVal) {
      if (oldVal && !val) {
        this.resetPull();
        this.setLoadingType();
      }
    }
  },
  methods: {
    updateView: function updateView() {
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          top = _this$$el$getBounding.top,
          height = _this$$el$getBounding.height;

      this.margin = {
        top: top,
        bottom: window.innerHeight - (height + top + this.offset)
      };
    },
    setLoadingType: function setLoadingType() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.loadingType = type;
    },
    handleScroll: function handleScroll() {
      this.updateView();

      if (this.loading || this.completed) {
        return;
      }

      if (this.margin.bottom >= 0) {
        this.$emit("scroll");
        this.setLoadingType("scroll");
      }
    },
    handleTouchStart: function handleTouchStart(e) {
      if (this.loading || !(this.hasListen("pull-up") || this.hasListen("pull-down")) || this.margin.top < 0 && this.margin.bottom < 0) {
        return;
      }

      this.pull.from = e.touches.item(0).pageY;
    },
    handleTouchMove: function handleTouchMove(e) {
      if (this.loading || this.pull.from < 0) {
        return;
      }

      this.pull.to = e.touches.item(0).pageY;
      var distance = this.pull.to - this.pull.from;

      if (distance > 0 && this.margin.top > 0 && this.hasListen("pull-down")) {
        // pull down
        this.pull.type = "pull-down";
      } else if (distance < 0 && this.margin.bottom > 0 && this.hasListen("pull-up")) {
        // pull up
        this.pull.type = "pull-up";
      } else {
        this.pull.type = null;
      }

      this.pull.distance = Math.abs(distance);
      this.pull.available = this.pull.distance >= this.distance;
    },
    handleTouchEnd: function handleTouchEnd() {
      if (this.pull.distance >= this.distance) {
        if ("pull-up" === this.pull.type || "pull-down" === this.pull.type) {
          this.$emit(this.pull.type);
          this.setLoadingType(this.pull.type);
        }
      } else {
        this.resetPull();
      }
    },
    resetPull: function resetPull() {
      this.pull = {
        from: -1,
        to: -1,
        distance: 0,
        type: null,
        available: false
      };
    },
    bindEvents: function bindEvents() {
      var _this = this;

      // scroll
      if (this.hasListen("scroll")) {
        ["scroll", "resize"].forEach(function (e) {
          _this._container.addEventListener(e, _this.handleScroll);
        });
      } // touch


      if (this.hasListen("pull-up") || this.hasListen("pull-down")) {
        this._container.addEventListener("touchstart", this.handleTouchStart);

        this._container.addEventListener("touchmove", this.handleTouchMove);

        this._container.addEventListener("touchend", this.handleTouchEnd);
      }
    },
    hasListen: function hasListen(event) {
      return this.listens.indexOf(event) >= 0;
    },
    init: function init() {
      this.bindEvents();
      this.updateView();

      if (this.initScroll) {
        this.handleScroll();
      }
    },
    unBindEvents: function unBindEvents() {
      var _this2 = this;

      if (this.hasListen("scroll")) {
        ["scroll", "resize"].forEach(function (e) {
          _this2._container.removeEventListener(e, _this2.handleScroll);
        });
      } // touch


      if (this.hasListen("pull-up") || this.hasListen("pull-down")) {
        this._container.removeEventListener("touchstart", this.handleTouchStart);

        this._container.removeEventListener("touchmove", this.handleTouchMove);

        this._container.removeEventListener("touchend", this.handleTouchEnd);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.init();

      _this3.inited = true;

      if (_this3.disableBrowserPull) {
        document.body.style["overscroll-behavior-y"] = "contain";
      }
    });
  },
  activated: function activated() {
    if (this.inited) {
      this.init();
    }
  },
  deactivated: function deactivated() {
    this.unBindEvents();
  },
  beforeDestroy: function beforeDestroy() {
    this.unBindEvents();
  }
});
// CONCATENATED MODULE: ./packages/loader/loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var loader_loadervue_type_script_lang_js_ = (loadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/loader/loader.vue





/* normalize component */

var loader_component = Object(componentNormalizer["a" /* default */])(
  loader_loadervue_type_script_lang_js_,
  loadervue_type_template_id_cc5b8d78_render,
  loadervue_type_template_id_cc5b8d78_staticRenderFns,
  false,
  null,
  null,
  null
  
)

loader_component.options.__file = "loader.vue"
/* harmony default export */ var loader_loader = (loader_component.exports);
// CONCATENATED MODULE: ./packages/loader/index.js



loader_loader.install = function (Vue) {
  Vue.component(loader_loader.name, loader_loader);
};

/* harmony default export */ var packages_loader = (loader_loader);
// CONCATENATED MODULE: ./packages/spinner/index.js



spinner_spinner.install = function (Vue) {
  Vue.component(spinner_spinner.name, spinner_spinner);
};

/* harmony default export */ var packages_spinner = (spinner_spinner);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/uplaoder/uploader.vue?vue&type=template&id=5188ec18&
var uploadervue_type_template_id_5188ec18_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-upload-container",class:_vm.wrapperClass},[(_vm.showInput && !_vm.$slots.trigger)?_c('div',{staticClass:"ui-upload-inner",class:_vm.triggerClass,on:{"click":_vm.handleClick,"drop":function($event){$event.preventDefault();return _vm.onDrop($event)},"dragover":function($event){$event.preventDefault();return _vm.onDragover($event)},"dragleave":function($event){$event.preventDefault();return _vm.onDragleave($event)}}},[_c('div',{staticClass:"ui-upload-text"},[_vm._t("text")],2),(_vm.type == 'select')?_c('button',{staticClass:"ui-upload-button",domProps:{"innerHTML":_vm._s(_vm.text)}}):_vm._e(),_c('input',{ref:"input",staticClass:"ui-uploader-input",attrs:{"type":"file","multiple":_vm.multiple,"accept":_vm.accept},on:{"change":_vm.handleChange}}),_vm._t("default"),_vm._t("trigger")],2):_vm._e(),(_vm.uploadFiles.length && _vm.showList)?_c('upload-list',{ref:"upload-list",attrs:{"file-list":_vm.uploadFiles,"lang":_vm.lang,"width":_vm.width,"height":_vm.height,"list-style":_vm.listStyle,"auto-upload":_vm.autoUpload},on:{"del-file":_vm.handleDelFile,"cancel-file":_vm.handleCancelFile,"retry-file":_vm.handleRetryFile,"click-file":_vm.clickFile}}):_vm._e(),_c('div',{staticClass:"clearfix"})],1)}
var uploadervue_type_template_id_5188ec18_staticRenderFns = []


// CONCATENATED MODULE: ./packages/uplaoder/uploader.vue?vue&type=template&id=5188ec18&

// CONCATENATED MODULE: ./src/mixins/uploader/uploadPropsFunctions.js
/* harmony default export */ var uploadPropsFunctions = ({
  props: {
    beforeUpload: Function,
    onStart: Function,
    onSubmit: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    onRemove: Function,
    onCancel: Function,
    onRetry: Function,
    onClickFile: Function,
    onSizeExceed: Function,
    onNumberExceed: Function,
    onFormatError: Function,
    onChange: Function,
    onOrderChange: Function,
    parseUrl: Function
  }
});
// CONCATENATED MODULE: ./src/mixins/uploader/uploadPropsOptions.js

/* harmony default export */ var uploadPropsOptions = ({
  props: {
    type: {
      type: String,
      default: "select",
      validator: function validator(value) {
        return ["drag", "select"].indexOf(value) !== -1;
      }
    },
    accept: {
      type: String,
      default: "image/jpeg,image/png,image/jpg,image/gif,image/webp"
    },
    height: {
      type: [Number, String],
      default: "140px"
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 15
    },
    maxNumber: {
      type: Number,
      default: 1
    },
    supportFormat: {
      type: Array,
      default: function _default() {
        return ["gif", "jpg", "jpeg", "png", "webp"];
      }
    },
    lang: {
      type: Object,
      default: function _default() {
        return {
          cancel: "cancel",
          del: "delete",
          retry: "retry"
        };
      }
    },
    text: {
      type: String,
      default: "click to upload"
    },
    uploadApi: String,
    headers: Object,
    withCredentials: Boolean,
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    drag: {
      type: Boolean,
      default: true
    },
    useBuiltInValidate: {
      type: Boolean,
      default: true
    },
    showInputAfterSuccess: {
      type: Boolean,
      default: true
    },
    showList: {
      type: Boolean,
      default: true
    },
    showPreview: Boolean,
    showPercentage: {
      type: Boolean,
      default: true
    },
    listStyle: {
      type: String,
      default: "list",
      validator: function validator(value) {
        return ["list", "card", "custom", ""].indexOf(value) !== -1;
      }
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    autoOrient: Boolean,
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/nanoid/index.browser.js
var index_browser = __webpack_require__("e1bd");
var index_browser_default = /*#__PURE__*/__webpack_require__.n(index_browser);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint8-array.js
var es6_typed_uint8_array = __webpack_require__("34ef");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./src/utils/imgUtils.js



var imgUtils_getBase64 = function getBase64(file) {
  return new promise_default.a(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};
var imgUtils_getOrientation = function getOrientation(file) {
  return new promise_default.a(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var view = new DataView(e.target.result);

      if (view.getUint16(0, false) != 0xffd8) {
        resolve(-2);
        return;
      }

      var length = view.byteLength,
          offset = 2;

      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) {
          resolve(-1);
          return;
        }

        var marker = view.getUint16(offset, false);
        offset += 2;

        if (marker == 0xffe1) {
          if (view.getUint32(offset += 2, false) != 0x45786966) {
            resolve(-1);
            return;
          }

          var little = view.getUint16(offset += 6, false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;

          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) == 0x0112) {
              resolve(view.getUint16(offset + i * 12 + 8, little));
              return;
            }
          }
        } else if ((marker & 0xff00) != 0xff00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }

      resolve(-1);
    };

    reader.readAsArrayBuffer(file);
  });
};
var imgUtils_resetOrientation = function resetOrientation(srcBase64, srcOrientation) {
  return new promise_default.a(function (resolve) {
    var img = new Image();

    img.onload = function () {
      var width = img.width,
          height = img.height,
          canvas = document.createElement("canvas"),
          ctx = canvas.getContext("2d"); // set proper canvas dimensions before transform & export

      if (4 < srcOrientation && srcOrientation < 9) {
        canvas.width = height;
        canvas.height = width;
      } else {
        canvas.width = width;
        canvas.height = height;
      } // transform context before drawing image


      switch (srcOrientation) {
        case 2:
          ctx.transform(-1, 0, 0, 1, width, 0);
          break;

        case 3:
          ctx.transform(-1, 0, 0, -1, width, height);
          break;

        case 4:
          ctx.transform(1, 0, 0, -1, 0, height);
          break;

        case 5:
          ctx.transform(0, 1, 1, 0, 0, 0);
          break;

        case 6:
          ctx.transform(0, 1, -1, 0, height, 0);
          break;

        case 7:
          ctx.transform(0, -1, -1, 0, height, width);
          break;

        case 8:
          ctx.transform(0, -1, 1, 0, 0, width);
          break;

        default:
          break;
      } // draw image


      ctx.drawImage(img, 0, 0); // export base64
      // resolve(canvas.toDataURL());

      var base64 = canvas.toDataURL();
      imgUtils_b64toBlob(base64).then(function (url) {
        resolve(url);
      });
    };

    img.src = srcBase64;
  });
};
var imgUtils_b64toBlob = function b64toBlob(base64) {
  return new promise_default.a(function (resolve) {
    var sliceSize = 512;
    var b64data = base64.split(",");
    var contentType = b64data[0].substring("data:".length, b64data[0].indexOf(";base64"));
    var byteCharacters = atob(b64data[1]);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);

      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {
      type: contentType
    });
    resolve(URL.createObjectURL(blob));
  });
};
// CONCATENATED MODULE: ./src/mixins/uploader/uploadMethods.js








/* harmony default export */ var uploadMethods = ({
  methods: {
    click: function click(params) {
      this.$refs.input.click();
      this.params = params;
    },
    handleChange: function handleChange(e) {
      var files = e.target.files;

      if (!files) {
        return;
      }

      this.handleFiles(files);
      this.onChange && this.onChange({
        e: e
      });
      this.$refs.input.value = null;
    },
    handleClick: function handleClick() {
      this.$refs.input.click();
    },
    onDrop: function onDrop(e) {
      this.dragOver = false;
      var files = e.dataTransfer.files;

      if (!files) {
        return;
      }

      this.onChange && this.onChange({
        e: e
      });
      this.handleFiles(files);
    },
    onDragover: function onDragover() {
      if (this.drag) {
        this.dragOver = true;
      }
    },
    onDragleave: function onDragleave() {
      if (this.drag) {
        this.dragOver = false;
      }
    },
    handleFiles: function handleFiles(files) {
      var _this = this;

      var postFiles = Array.prototype.slice.call(files);
      if (postFiles.length === 0) return;

      if (postFiles.length + this.uploadFiles.length > this.maxNumber) {
        this.onNumberExceed && this.onNumberExceed({
          files: files
        });
        return;
      }

      postFiles.forEach(function (file) {
        _this.handleFilesStart(file);
      });
    },
    handleFilesStart: function handleFilesStart(file) {
      var _this2 = this;

      if (this.useBuiltInValidate) {
        this.validateFile(file).then(function () {
          _this2.handleBeforeUpload(file);
        }).catch(function () {});
      } else {
        this.handleBeforeUpload(file);
      }
    },
    handleBeforeUpload: function handleBeforeUpload(file) {
      var _this3 = this;

      this.prepareFile(file).then(function (_file) {
        if (_this3.beforeUpload) {
          _this3.beforeUpload(_file).then(function () {
            _this3.startUpload(_file);
          }).catch(function () {});
        } else {
          _this3.startUpload(_file);
        }
      });
    },
    handleDelFile: function handleDelFile(_ref) {
      var file = _ref.file,
          index = _ref.index;

      if (file.source && file.source.cancel) {
        file.source.cancel("canceled");
      }

      this.uploadFiles.splice(index, 1);
      this.onRemove && this.onRemove({
        file: file,
        index: index
      });
    },
    handleRetryFile: function handleRetryFile(_ref2) {
      var file = _ref2.file,
          index = _ref2.index;
      file.percentage = 0;
      file.status = "ready";
      this.$set(this.uploadFiles, index, file);
      this.onRetry && this.onRetry({
        file: file,
        index: index
      });
      this.post(file);
    },
    handleCancelFile: function handleCancelFile(_ref3) {
      var file = _ref3.file,
          index = _ref3.index;
      file.source.cancel("canceled");
      file.status = "canceled";
      this.onCancel && this.onCancel({
        file: file,
        index: index
      });
    },
    handleFileList: function handleFileList(_ref4) {
      var file = _ref4.file,
          oldIndex = _ref4.oldIndex,
          newIndex = _ref4.newIndex;

      if (this.maxNumber == 1) {
        this.uploadFiles = [file];
      } else {
        this.uploadFiles.splice(oldIndex, 1);
        this.uploadFiles.splice(newIndex, 0, file);
      }

      this.onOrderChange && this.onOrderChange({
        file: file,
        oldIndex: oldIndex,
        newIndex: newIndex
      });
    },
    prepareFile: function prepareFile(file) {
      var _this4 = this;

      return new promise_default.a(function (resolve) {
        var fileType = Object.prototype.toString.call(file);

        if (fileType === "[object File]" || fileType === "[object Blob]") {
          var _file = {
            // url: URL.createObjectURL(file),
            status: "ready",
            percentage: 0,
            name: file.name,
            raw: file,
            uid: index_browser_default()(),
            params: _this4.params
          };

          if (_this4.autoOrient && _this4.accept.includes("image")) {
            imgUtils_getOrientation(file).then(function (orientation) {
              _file.url = URL.createObjectURL(file);
              _file.orientation = orientation;
              resolve(_file);
            }).catch(function (err) {
              console.log(err);
            }); // import("../utils/imgUtils.js").then(
            //   module => {
            //     const getBase64 = module.default.getBase64;
            //     const getOrientation = module.default.getOrientation;
            //     const resetOrientation = module.default.resetOrientation;
            //     Promise.all([getBase64(file), getOrientation(file)]).then(
            //       data => {
            //     if (data[1] > 1) {
            //       resetOrientation(data[0], data[1])
            //         .then(url => {
            //           _file.url = url;
            //           _file.orientation = data[1]
            //           resolve(_file);
            //         })
            //         .catch(err => {
            //           console.log(err);
            //         });
            //     } else {
            //       _file.url = URL.createObjectURL(file);
            //       resolve(_file);
            //     }
            //     }
            //     );
            //   }
            // );
          } else {
            _file.url = URL.createObjectURL(file);
            resolve(_file);
          }
        } else {
          resolve(file);
        }
      });
    },
    clickFile: function clickFile(_ref5) {
      var file = _ref5.file,
          index = _ref5.index;
      this.onClickFile && this.onClickFile({
        file: file,
        index: index
      });
    }
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./src/mixins/uploader/uploadComputed.js

/* harmony default export */ var uploadComputed = ({
  computed: {
    wrapperClass: function wrapperClass() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, "ui-upload-single", this.maxNumber == 1), _defineProperty(_ref, "ui-upload-drag-supportted", this.drag), _defineProperty(_ref, "ui-upload-list-card", this.listStyle == "card"), _ref), "ui-upload-".concat(this.type)];
    },
    triggerClass: function triggerClass() {
      return [_defineProperty({}, "ui-upload-drag-over", this.dragOver)];
    },
    triggerStyles: function triggerStyles() {// if (this.type == "drag") {
      //   return {
      //     height:
      //       typeof this.height === "string" ? this.height : `${this.height}px`,
      //     width: typeof this.width === "string" ? this.width : `${this.width}px`
      //   };
      // }
      // if (this.type == "circle") {
      //   return {
      //     height:
      //       typeof this.height === "string" ? this.height : `${this.height}px`,
      //     width:
      //       typeof this.height === "string" ? this.height : `${this.height}px`
      //   };
      // }
    },
    showInput: function showInput() {
      return this.uploadFiles.length ? this.showInputAfterSuccess : true;
    },
    multiple: function multiple() {
      return this.maxNumber > 1;
    }
  }
});
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/utils/uploader.js






var uploader_uploader = function uploader(file, uploadOptions) {
  return new promise_default.a(function (resolve, reject) {
    var uploadApi = uploadOptions.uploadApi,
        headers = uploadOptions.headers,
        withCredentials = uploadOptions.withCredentials,
        onProgress = uploadOptions.onProgress,
        data = uploadOptions.data;
    var formData = new FormData();

    keys_default()(data).forEach(function (key) {
      formData.append(key, data[key]);
    });

    var CancelToken = axios_default.a.CancelToken;
    var source = CancelToken.source();
    file.source = source;

    var onUploadProgress = function onUploadProgress(e) {
      handleProgress(e, file);

      if (onProgress) {
        onProgress({
          e: e,
          file: file
        });
      }
    };

    var fileType = Object.prototype.toString.call(file);

    if (fileType === "[object File]" || fileType === "[object Blob]") {
      formData.append("file", file);
    } else if (file.raw) {
      formData.append("file", file.raw);
    } else {
      throw new Error("not a file");
    }

    axios_default()({
      method: "post",
      url: uploadApi,
      data: formData,
      headers: headers,
      onUploadProgress: onUploadProgress,
      cancelToken: source.token,
      withCredentials: withCredentials,
      timeout: 600000
    }).then(function (res) {
      resolve(res);
    }).catch(function (err) {
      reject(err);
    });
  });
};

var handleProgress = function handleProgress(e, file) {
  var percent = e.loaded / e.total * 100;
  file.percentage = percent || 0;
};

/* harmony default export */ var utils_uploader = (uploader_uploader);
// CONCATENATED MODULE: ./src/mixins/uploader/uploadAction.js


/* harmony default export */ var uploadAction = ({
  methods: {
    startUpload: function startUpload(file) {
      if (this.maxNumber == 1) {
        if (this.uploadFiles.length && this.uploadFiles[0].source && this.uploadFiles[0].source.cancel) {
          this.uploadFiles[0].source.cancel("canceled");
        }

        this.uploadFiles = [file];
      } else {
        this.uploadFiles.push(file);
      }

      if (!this.autoUpload) return;
      this.post(file);
      this.onStart && this.onStart({
        file: file
      });
    },
    submit: function submit() {
      var _this = this;

      this.uploadFiles.forEach(function (file) {
        if (file.status == "ready") {
          _this.onSubmit && _this.onSubmit({
            file: file
          });

          _this.post(file);
        }
      });
    },
    post: function post(file) {
      var _this2 = this;

      if (!file) return;
      file.status = "uploading";
      utils_uploader(file, {
        headers: this.headers,
        uploadApi: this.uploadApi,
        data: this.data,
        withCredentials: this.withCredentials,
        onProgress: this.onProgress
      }).then(function (res) {
        if (_this2.parseUrl) {
          file.url = _this2.parseUrl(res);
        }

        delete file.source;
        file.status = "finished";
        _this2.onSuccess && _this2.onSuccess({
          file: file,
          res: res
        });
      }).catch(function (err) {
        file.status = "error";
        _this2.onError && _this2.onError({
          file: file,
          err: err
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/utils/getFileExt.js


var getFileExt = function getFileExt(file) {
  var name = typeof file == "string" ? file : file.name;
  var ext = name.substring(name.lastIndexOf(".") + 1, name.length);
  return ext.toLowerCase();
};

/* harmony default export */ var utils_getFileExt = (getFileExt);
// CONCATENATED MODULE: ./src/mixins/uploader/uploadValidate.js





/* harmony default export */ var uploadValidate = ({
  methods: {
    validateFile: function validateFile(file) {
      var _this = this;

      return new promise_default.a(function (resolve, reject) {
        _this.validateFileType(file).then(function (file) {
          return _this.validateFileSize(file);
        }).then(function (file) {
          resolve(file);
        }).catch(function (err) {
          _this.onError && _this.onError({
            err: err,
            file: file
          });
          reject(err);
        });
      });
    },
    validateFileType: function validateFileType(file) {
      var _this2 = this;

      return new promise_default.a(function (resolve, reject) {
        var ext = utils_getFileExt(file.name);

        if (_this2.supportFormat.includes(ext)) {
          resolve(file);
        } else {
          _this2.onFormatError && _this2.onFormatError({
            file: file
          });
          reject({
            message: "format error"
          });
        }
      });
    },
    validateFileSize: function validateFileSize(file) {
      var _this3 = this;

      return new promise_default.a(function (resolve, reject) {
        if (file.size <= _this3.maxSize) {
          resolve(file);
        } else {
          _this3.onSizeExceed && _this3.onSizeExceed({
            file: file
          });
          reject({
            message: "exceed size"
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/uplaoder/uploader-list.vue?vue&type=template&id=4a79b1b0&
var uploader_listvue_type_template_id_4a79b1b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-upload-list"},_vm._l((_vm.fileList),function(file,index){return _c('div',{key:file.id || file.uid,staticClass:"ui-upload-file-item",class:'ui-upload-file-' + file.status},[_c('img',{staticClass:"ui-upload-thumb",attrs:{"src":file.url},on:{"click":function($event){_vm.handlePreview(file, index)}}}),(file)?_c('div',{staticClass:"ui-upload-actions",style:({ zIndex: _vm.$zIndex ? _vm.$zIndex.get() : 100 })},[(file.status == 'uploading')?_c('span',{domProps:{"innerHTML":_vm._s(_vm.lang.cancel)},on:{"click":function($event){$event.preventDefault();_vm.cancel(file, index)}}}):_vm._e(),(file.status == 'ready' && !_vm.autoUpload)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.lang.ready)}}):_vm._e(),(file.status == 'error' || file.status == 'canceled')?_c('span',{domProps:{"innerHTML":_vm._s(_vm.lang.retry)},on:{"click":function($event){$event.preventDefault();_vm.retry(file, index)}}}):_vm._e(),(
          file.status == 'finished' || file.status == 'error' || !file.status
        )?_c('span',{domProps:{"innerHTML":_vm._s(_vm.lang.del)},on:{"click":function($event){$event.preventDefault();_vm.del(file, index)}}}):_vm._e()]):_vm._e(),_c('transition',{attrs:{"name":"fade"}},[(file.status == 'uploading')?_c('ui-progress',{attrs:{"type":"ring","percentage":file.percentage}}):_vm._e()],1)],1)}),0)}
var uploader_listvue_type_template_id_4a79b1b0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/uplaoder/uploader-list.vue?vue&type=template&id=4a79b1b0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/progress.vue?vue&type=template&id=6680ca4a&
var progressvue_type_template_id_6680ca4a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-progress",class:[_vm.animate && "ui-progress-animate"]},[_c(_vm.type,{tag:"component",attrs:{"size":_vm.size,"percentage":_vm.percentage,"stroke-width":_vm.strokeWidth,"back-color":_vm.backColor,"fore-color":_vm.foreColor,"show-number":_vm.showNumber,"progress-number":_vm.progressNumber,"show":_vm.show}})],1)}
var progressvue_type_template_id_6680ca4a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/progress/progress.vue?vue&type=template&id=6680ca4a&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("e814");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./packages/assets/scss/progress.scss
var progress = __webpack_require__("b159");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/types/ring.vue?vue&type=template&id=adc93386&scoped=true&
var ringvue_type_template_id_adc93386_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-progress-type-ring",style:({ width: _vm.size + 'px', height: _vm.size + 'px' }),attrs:{"data-pct":_vm.progressNumber}},[_c('svg',{attrs:{"width":_vm.size,"height":_vm.size,"viewPort":'0 0 ' + _vm.size + ' ' + _vm.size,"version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{staticClass:"ui-progress-ring",attrs:{"stroke":_vm.backColor,"r":_vm.r,"cx":_vm.size / 2,"cy":_vm.size / 2,"stroke-width":_vm.strokeWidth,"fill":"none"}}),_c('circle',{staticClass:"ui-progress-ring-inner",attrs:{"stroke":_vm.foreColor,"r":_vm.r,"cx":_vm.size / 2,"cy":_vm.size / 2,"stroke-width":_vm.strokeWidth,"fill":"none","stroke-dasharray":_vm.dasharray,"stroke-dashoffset":_vm.dashoffset}})])])}
var ringvue_type_template_id_adc93386_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/progress/types/ring.vue?vue&type=template&id=adc93386&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/types/ring.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ringvue_type_script_lang_js_ = ({
  name: "ring",
  data: function data() {
    return {};
  },
  props: ["size", "percentage", "strokeWidth", "backColor", "foreColor", "showNumber", "progressNumber"],
  computed: {
    r: function r() {
      return this.size / 2 - this.strokeWidth / 2;
    },
    dasharray: function dasharray() {
      return 2 * Math.PI * this.r;
    },
    dashoffset: function dashoffset() {
      return this.dasharray * (1 - this.percentage / 100);
    }
  }
});
// CONCATENATED MODULE: ./packages/progress/types/ring.vue?vue&type=script&lang=js&
 /* harmony default export */ var types_ringvue_type_script_lang_js_ = (ringvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/progress/types/ring.vue?vue&type=style&index=0&id=adc93386&lang=css&scoped=true&
var ringvue_type_style_index_0_id_adc93386_lang_css_scoped_true_ = __webpack_require__("3cbe");

// CONCATENATED MODULE: ./packages/progress/types/ring.vue






/* normalize component */

var ring_component = Object(componentNormalizer["a" /* default */])(
  types_ringvue_type_script_lang_js_,
  ringvue_type_template_id_adc93386_scoped_true_render,
  ringvue_type_template_id_adc93386_scoped_true_staticRenderFns,
  false,
  null,
  "adc93386",
  null
  
)

ring_component.options.__file = "ring.vue"
/* harmony default export */ var ring = (ring_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/types/bar.vue?vue&type=template&id=664a5324&
var barvue_type_template_id_664a5324_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.loadingBar ? 'fade' : ''}},[(_vm.show)?_c('div',{staticClass:"ui-progress-type-bar",class:[
      _vm.indeterminate && 'ui-loading-bar-indeterminate',
      _vm.loadingBar && 'ui-loading-bar'
    ],style:(_vm.barStyles)},[(!_vm.indeterminate)?_c('div',{ref:"bar",staticClass:"ui-progress-bar",style:(_vm.styles),attrs:{"role":"progressbar","aria-valuenow":_vm.percentage,"aria-valuemin":"0","aria-valuemax":"100"}},[(_vm.showNumber)?_c('span',{staticClass:"ui-progress-bar-number"},[_vm._v(_vm._s(_vm.percentage)+"%")]):_vm._e()]):_vm._e(),(_vm.indeterminate)?_c('div',{staticClass:"ui-loading-bar-indeterminate-bg1",style:({ backgroundColor: _vm.foreColor })}):_vm._e(),(_vm.indeterminate)?_c('div',{staticClass:"ui-loading-bar-indeterminate-bg2",style:({ backgroundColor: _vm.foreColor })}):_vm._e()]):_vm._e()])}
var barvue_type_template_id_664a5324_staticRenderFns = []


// CONCATENATED MODULE: ./packages/progress/types/bar.vue?vue&type=template&id=664a5324&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/types/bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var barvue_type_script_lang_js_ = ({
  name: "bar",
  data: function data() {
    return {
      timer: null
    };
  },
  props: ["size", "percentage", "backColor", "foreColor", "showNumber", "progressNumber", "indeterminate", "loadingBar", "zIndex", "show", "duration"],
  computed: {
    barStyles: function barStyles() {
      return {
        height: this.size + "px",
        backgroundColor: this.backColor,
        zIndex: this.zIndex
      };
    },
    styles: function styles() {
      return {
        width: this.percentage + "%",
        backgroundColor: this.foreColor,
        zIndex: this.zIndex,
        transition: this.loadingBar ? "all 1s ease-in-out" : ""
      };
    }
  },
  watch: {
    percentage: function percentage() {
      if (this.percentage >= 100) {
        this.$emit("finish");
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/progress/types/bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var types_barvue_type_script_lang_js_ = (barvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/progress/types/bar.vue





/* normalize component */

var bar_component = Object(componentNormalizer["a" /* default */])(
  types_barvue_type_script_lang_js_,
  barvue_type_template_id_664a5324_render,
  barvue_type_template_id_664a5324_staticRenderFns,
  false,
  null,
  null,
  null
  
)

bar_component.options.__file = "bar.vue"
/* harmony default export */ var bar = (bar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/progress.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var progressvue_type_script_lang_js_ = ({
  name: "ui-progress",
  data: function data() {
    return {};
  },
  components: {
    Ring: ring,
    Bar: bar
  },
  props: {
    type: {
      type: String,
      default: "ring"
    },
    size: {
      type: Number,
      default: 36
    },
    percentage: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val <= 100;
      }
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    backColor: {
      type: String,
      default: "#E9EBEE"
    },
    foreColor: {
      type: String,
      default: "#08D7B8"
    },
    showNumber: {
      type: Boolean,
      default: true
    },
    animate: Boolean,
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    progressNumber: function progressNumber() {
      return this.showNumber && parse_int_default()(this.percentage);
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./packages/progress/progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var progress_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/progress/progress.vue





/* normalize component */

var progress_component = Object(componentNormalizer["a" /* default */])(
  progress_progressvue_type_script_lang_js_,
  progressvue_type_template_id_6680ca4a_render,
  progressvue_type_template_id_6680ca4a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

progress_component.options.__file = "progress.vue"
/* harmony default export */ var progress_progress = (progress_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/uplaoder/uploader-list.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var uploader_listvue_type_script_lang_js_ = ({
  name: "ui-uploader-list",
  data: function data() {
    return {};
  },
  props: {
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    lang: Object,
    width: [Number, String],
    height: [Number, String],
    listStyle: String,
    autoUpload: Boolean
  },
  computed: {// listItemStyles() {
    //   if (this.listStyle == "card") {
    //     return {
    //       width: typeof this.height === "string" ? this.height : `${this.height}px`,
    //       height: typeof this.height === "string" ? this.height : `${this.height}px`
    //     };
    //   } else {
    //     return {
    //       height: typeof this.height === "string" ? this.height : `${this.height}px`,
    //       width: typeof this.width === "string" ? this.width : `${this.width}px`
    //     };
    //   }
    // }
  },
  components: {
    UiProgress: progress_progress
  },
  methods: {
    cancel: function cancel(file, index) {
      this.$emit("cancel-file", {
        file: file,
        index: index
      });
    },
    retry: function retry(file, index) {
      this.$emit("retry-file", {
        file: file,
        index: index
      });
    },
    del: function del(file, index) {
      this.$emit("del-file", {
        file: file,
        index: index
      });
    },
    handlePreview: function handlePreview(file, index) {
      this.$emit("clik-ifle", {
        file: file,
        index: index
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/uplaoder/uploader-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var uplaoder_uploader_listvue_type_script_lang_js_ = (uploader_listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/uplaoder/uploader-list.vue





/* normalize component */

var uploader_list_component = Object(componentNormalizer["a" /* default */])(
  uplaoder_uploader_listvue_type_script_lang_js_,
  uploader_listvue_type_template_id_4a79b1b0_render,
  uploader_listvue_type_template_id_4a79b1b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

uploader_list_component.options.__file = "uploader-list.vue"
/* harmony default export */ var uploader_list = (uploader_list_component.exports);
// EXTERNAL MODULE: ./packages/assets/scss/uploader.scss
var scss_uploader = __webpack_require__("a0b0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/uplaoder/uploader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var uploadervue_type_script_lang_js_ = ({
  name: "ui-uploader",
  data: function data() {
    return {
      dragOver: false,
      reqs: {},
      uploadFiles: [],
      params: null
    };
  },
  mixins: [uploadPropsFunctions, uploadPropsOptions, uploadMethods, uploadComputed, uploadAction, uploadValidate],
  components: {
    UploadList: uploader_list
  },
  mounted: function mounted() {
    this.uploadFiles = this.fileList;
  }
});
// CONCATENATED MODULE: ./packages/uplaoder/uploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var uplaoder_uploadervue_type_script_lang_js_ = (uploadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/uplaoder/uploader.vue





/* normalize component */

var uploader_component = Object(componentNormalizer["a" /* default */])(
  uplaoder_uploadervue_type_script_lang_js_,
  uploadervue_type_template_id_5188ec18_render,
  uploadervue_type_template_id_5188ec18_staticRenderFns,
  false,
  null,
  null,
  null
  
)

uploader_component.options.__file = "uploader.vue"
/* harmony default export */ var uplaoder_uploader = (uploader_component.exports);
// CONCATENATED MODULE: ./packages/uplaoder/index.js



uplaoder_uploader.install = function (Vue) {
  Vue.component(uplaoder_uploader.name, uplaoder_uploader);
};

/* harmony default export */ var uplaoder = (uplaoder_uploader);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/card/card.vue?vue&type=template&id=5a2b5d25&
var cardvue_type_template_id_5a2b5d25_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-card",class:_vm.classes},[_vm._t("default")],2)}
var cardvue_type_template_id_5a2b5d25_staticRenderFns = []


// CONCATENATED MODULE: ./packages/card/card.vue?vue&type=template&id=5a2b5d25&

// EXTERNAL MODULE: ./packages/assets/scss/card.scss
var card = __webpack_require__("610b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/card/card.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var cardvue_type_script_lang_js_ = ({
  name: "ui-card",
  data: function data() {
    return {};
  },
  props: {
    shadow: {
      type: Boolean,
      default: true
    },
    shadowHover: {
      type: Boolean,
      default: false
    },
    cardStyle: String
  },
  computed: {
    classes: function classes() {
      return [{
        "ui-card-shadow": this.shadow,
        "ui-card-shadow-hover": this.shadowHover
      }];
    }
  }
});
// CONCATENATED MODULE: ./packages/card/card.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_cardvue_type_script_lang_js_ = (cardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/card/card.vue





/* normalize component */

var card_component = Object(componentNormalizer["a" /* default */])(
  card_cardvue_type_script_lang_js_,
  cardvue_type_template_id_5a2b5d25_render,
  cardvue_type_template_id_5a2b5d25_staticRenderFns,
  false,
  null,
  null,
  null
  
)

card_component.options.__file = "card.vue"
/* harmony default export */ var card_card = (card_component.exports);
// CONCATENATED MODULE: ./packages/card/index.js



card_card.install = function (Vue) {
  Vue.component(card_card.name, card_card);
};

/* harmony default export */ var packages_card = (card_card);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/alert/alert.vue?vue&type=template&id=243a9488&
var alertvue_type_template_id_243a9488_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(!_vm.closed)?_c('div',{class:_vm.wrapClasses},[(_vm.showIcon)?_c('span',{staticClass:"ui-alert-icon"},[_vm._t("icon")],2):_vm._e(),(_vm.$slots.title)?_c('div',{staticClass:"ui-alert-title"},[_vm._t("title")],2):_vm._e(),(_vm.$slots.default)?_c('div',{staticClass:"ui-alert-message"},[_vm._t("default")],2):_vm._e(),(_vm.closeable)?_c('ui-icon',{staticClass:"ui-alert-close-icon",attrs:{"name":"icon-close-circle-fill"},nativeOn:{"click":function($event){return _vm.close($event)}}}):_vm._e()],1):_vm._e()])}
var alertvue_type_template_id_243a9488_staticRenderFns = []


// CONCATENATED MODULE: ./packages/alert/alert.vue?vue&type=template&id=243a9488&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// EXTERNAL MODULE: ./packages/assets/scss/alert.scss
var scss_alert = __webpack_require__("571b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/alert/alert.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var alertvue_type_script_lang_js_ = ({
  name: "ui-alert",
  props: {
    type: {
      validator: function validator(value) {
        return ["success", "warning", "error", "normal"].includes(value);
      },
      default: "success"
    },
    closeable: Boolean,
    showIcon: Boolean,
    fill: Boolean
  },
  data: function data() {
    return {
      closed: false
    };
  },
  computed: {
    wrapClasses: function wrapClasses() {
      return ["ui-alert", "ui-alert-".concat(this.type), this.showIcon && "ui-alert-with-icon", this.$slots.title && "ui-alert-with-title", this.fill && "ui-alert-fill"];
    }
  },
  methods: {
    close: function close(e) {
      this.closed = true;
      this.$emit("close", e);
    }
  }
});
// CONCATENATED MODULE: ./packages/alert/alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var alert_alertvue_type_script_lang_js_ = (alertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/alert/alert.vue





/* normalize component */

var alert_component = Object(componentNormalizer["a" /* default */])(
  alert_alertvue_type_script_lang_js_,
  alertvue_type_template_id_243a9488_render,
  alertvue_type_template_id_243a9488_staticRenderFns,
  false,
  null,
  null,
  null
  
)

alert_component.options.__file = "alert.vue"
/* harmony default export */ var alert_alert = (alert_component.exports);
// CONCATENATED MODULE: ./packages/alert/index.js



alert_alert.install = function (Vue) {
  Vue.component(alert_alert.name, alert_alert);
};

/* harmony default export */ var packages_alert = (alert_alert);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/input.vue?vue&type=template&id=0c81fdf1&
var inputvue_type_template_id_0c81fdf1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-input",class:_vm.wrapClasses},[(_vm.$slots.prefix)?_c('div',{ref:"prefix",staticClass:"ui-input-prefix",on:{"click":_vm.focus}},[_vm._t("prefix")],2):_vm._e(),_c('input',{ref:"input",staticClass:"ui-input-inner",attrs:{"tabindex":_vm.tabindex,"name":_vm.name,"autofocus":_vm.autofocus,"readonly":_vm.readonly,"disabled":_vm.disabled,"type":_vm.type,"maxlength":_vm.maxLength,"minLength":_vm.minLength,"placeholder":_vm.placeholder,"autocomplete":_vm.autoComplete ? 'on' : 'off'},domProps:{"value":_vm.inputVal},on:{"input":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleInput($event)},"focus":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleFocus($event)},"blur":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleBlur($event)},"keyup":[function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleKeyup($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleEnter($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleEsc($event)}],"keydown":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleKeydown($event)},"change":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleChange($event)}}}),_c('transition',{attrs:{"name":"fade"}},[(_vm.inputVal && _vm.showClear && !_vm.readonly)?_c('div',{staticClass:"ui-input-clear",on:{"click":_vm.clear}},[_c('ui-icon',{attrs:{"name":"close-circle-fill"}})],1):_vm._e()]),_c('transition',{attrs:{"name":"fade"}},[(_vm.loading)?_c('ui-spinner'):_vm._e()],1),(_vm.$slots.suffix)?_c('div',{ref:"suffix",staticClass:"ui-input-suffix",on:{"click":_vm.focus}},[_vm._t("suffix")],2):_vm._e()],1)}
var inputvue_type_template_id_0c81fdf1_staticRenderFns = []


// CONCATENATED MODULE: ./packages/input/input.vue?vue&type=template&id=0c81fdf1&

// EXTERNAL MODULE: ./packages/assets/scss/input.scss
var input = __webpack_require__("babd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/input.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: "ui-input",
  data: function data() {
    return {
      focusIn: false,
      inputVal: this.value === undefined || this.value === null ? "" : this.value,
      errors: false
    };
  },
  props: {
    tabindex: Number,
    value: [String, Number],
    loading: Boolean,
    type: {
      type: String,
      default: "text"
    },
    name: String,
    maxLength: Number,
    minLength: Number,
    placeholder: {
      type: String,
      default: "type in here"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoComplete: Boolean,
    showClear: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: Boolean,
    theme: String // flat/ghost

  },
  components: {
    UiIcon: icon["a" /* default */],
    UiSpinner: spinner_spinner
  },
  computed: {
    wrapClasses: function wrapClasses() {
      return [this.focusIn && "ui-input-focusin", this.disabled && "ui-input-disabled", this.errors && "ui-input-with-error", this.$slots.suffix && "ui-input-with-suffix", this.$slots.prefix && "ui-input-with-prefix", this.theme && "ui-input-theme-".concat(this.theme), this.readonly && "ui-input-readonly"];
    }
  },
  methods: {
    select: function select() {
      this.$refs["input"].select();
    },
    focus: function focus() {
      this.$refs["input"].focus();
    },
    handleEnter: function handleEnter(e) {
      this.$emit("submit", this.inputVal);
    },
    handleEsc: function handleEsc(e) {
      this.$emit("esc", this.inputVal);
      this.$refs["input"].blur();
    },
    handleKeyup: function handleKeyup(e) {
      this.$emit("keyup", this.inputVal);
    },
    handleKeydown: function handleKeydown(e) {
      this.$emit("keydown", this.inputVal);
    },
    handleInput: function handleInput(e) {
      this.inputVal = e.target.value;
      this.$emit("input", this.inputVal);
    },
    handleFocus: function handleFocus(e) {
      this.focusIn = true;
      this.$emit("focus", this.inputVal);
    },
    handleBlur: function handleBlur(e) {
      this.focusIn = false;
      this.$emit("blur", this.inputVal);
    },
    handleChange: function handleChange(e) {
      this.$emit("change", this.inputVal);
    },
    clear: function clear() {
      var _this = this;

      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
      this.$nextTick(function () {
        _this.inputVal = "";
        _this.errors = false;

        _this.focus();
      });
    }
  },
  watch: {
    value: function value(val) {
      this.inputVal = val;
    }
  }
});
// CONCATENATED MODULE: ./packages/input/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input/input.vue





/* normalize component */

var input_component = Object(componentNormalizer["a" /* default */])(
  input_inputvue_type_script_lang_js_,
  inputvue_type_template_id_0c81fdf1_render,
  inputvue_type_template_id_0c81fdf1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

input_component.options.__file = "input.vue"
/* harmony default export */ var input_input = (input_component.exports);
// CONCATENATED MODULE: ./packages/input/index.js



input_input.install = function (Vue) {
  Vue.component(input_input.name, input_input);
};

/* harmony default export */ var packages_input = (input_input);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/textarea/textarea.vue?vue&type=template&id=1752f5b2&
var textareavue_type_template_id_1752f5b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-textarea",class:_vm.wrapClasses},[(_vm.$slots.prefix)?_c('div',{ref:"prefix",staticClass:"ui-textarea-prefix",on:{"click":_vm.focus}},[_vm._t("prefix")],2):_vm._e(),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputVal),expression:"inputVal"}],ref:"textarea",staticClass:"ui-textarea-inner",attrs:{"name":_vm.name,"rows":_vm.rows,"tabindex":_vm.tabindex,"readonly":_vm.readonly,"disabled":_vm.disabled,"maxlength":_vm.maxLength,"minLength":_vm.minLength,"placeholder":_vm.placeholder},domProps:{"value":(_vm.inputVal)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.inputVal=$event.target.value},function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleInput($event)}],"focus":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleFocus($event)},"blur":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleBlur($event)},"keyup":[function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleKeyup($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleEnter($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleEsc($event)}],"keydown":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleKeydown($event)},"change":function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleChange($event)}}}),_c('transition',{attrs:{"name":"fade"}},[(_vm.counter && _vm.inputVal && _vm.inputVal.length)?_c('div',{staticClass:"ui-textarea-counter"},[_vm._v("\n      "+_vm._s(_vm.inputVal.length)+"/"+_vm._s(_vm.maxLength)+"\n    ")]):_vm._e()])],1)}
var textareavue_type_template_id_1752f5b2_staticRenderFns = []


// CONCATENATED MODULE: ./packages/textarea/textarea.vue?vue&type=template&id=1752f5b2&

// EXTERNAL MODULE: ./packages/assets/scss/textarea.scss
var scss_textarea = __webpack_require__("01e0");

// EXTERNAL MODULE: ./node_modules/autosize/dist/autosize.js
var autosize = __webpack_require__("19e9");
var autosize_default = /*#__PURE__*/__webpack_require__.n(autosize);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/textarea/textarea.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var textareavue_type_script_lang_js_ = ({
  name: "ui-textarea",
  data: function data() {
    return {
      focusIn: false,
      inputVal: this.value === undefined || this.value === null ? "" : this.value,
      errors: false,
      autosizeIns: null
    };
  },
  props: {
    tabindex: Number,
    value: [String, Number],
    maxLength: Number,
    minLength: Number,
    counter: Boolean,
    name: String,
    autosize: {
      type: Boolean,
      default: true
    },
    // resize: Boolean,
    placeholder: {
      type: String,
      default: "type in here"
    },
    rows: {
      type: Number,
      default: 3
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: Boolean,
    theme: String // flat/ghost

  },
  computed: {
    wrapClasses: function wrapClasses() {
      return [this.focusIn && "ui-textarea-focusin", this.disabled && "ui-textarea-disabled", this.errors && "ui-textarea-with-error", this.$slots.prefix && "ui-textarea-with-prefix", this.theme && "ui-textarea-theme-".concat(this.theme), this.readonly && "ui-textarea-readonly" // this.resize && `ui-textarea-resize`
      ];
    }
  },
  methods: {
    select: function select() {
      this.$refs["textarea"].select();
    },
    focus: function focus() {
      this.$refs["textarea"].focus();
    },
    handleEnter: function handleEnter(e) {
      this.$emit("submit", this.inputVal);
    },
    handleEsc: function handleEsc(e) {
      this.$emit("esc", this.inputVal);
      this.$refs["textarea"].blur();
    },
    handleKeyup: function handleKeyup(e) {
      this.$emit("keyup", this.inputVal);
    },
    handleKeydown: function handleKeydown(e) {
      this.$emit("keydown", this.inputVal);
    },
    handleInput: function handleInput(e) {
      this.inputVal = e.target.value;
      this.$emit("input", this.inputVal);
    },
    handleFocus: function handleFocus(e) {
      this.focusIn = true;
      this.$emit("focus", this.inputVal);
    },
    handleBlur: function handleBlur(e) {
      this.focusIn = false;
      this.$emit("blur", this.inputVal);
    },
    handleChange: function handleChange(e) {
      this.$emit("change", this.inputVal);
    },
    clear: function clear() {
      this.inputVal = "";
      this.focus();
    },
    resetSize: function resetSize() {
      autosize_default.a.update(this.$refs["textarea"]);
    },
    sizeChanged: function sizeChanged() {
      this.$emit("size-changed");
    }
  },
  watch: {
    value: function value(val) {
      this.inputVal = val;
    }
  },
  mounted: function mounted() {
    if (this.autosize) {
      this.autosizeIns = autosize_default()(this.$refs["textarea"]);
      this.$refs["textarea"].addEventListener("autosize:resized", this.sizeChanged);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.autosize) {
      this.$refs["textarea"].removeEventListener("autosize:resized", this.sizeChanged);
    }
  }
});
// CONCATENATED MODULE: ./packages/textarea/textarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var textarea_textareavue_type_script_lang_js_ = (textareavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/textarea/textarea.vue





/* normalize component */

var textarea_component = Object(componentNormalizer["a" /* default */])(
  textarea_textareavue_type_script_lang_js_,
  textareavue_type_template_id_1752f5b2_render,
  textareavue_type_template_id_1752f5b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

textarea_component.options.__file = "textarea.vue"
/* harmony default export */ var textarea_textarea = (textarea_component.exports);
// CONCATENATED MODULE: ./packages/textarea/index.js



textarea_textarea.install = function (Vue) {
  Vue.component(textarea_textarea.name, textarea_textarea);
};

/* harmony default export */ var packages_textarea = (textarea_textarea);
// CONCATENATED MODULE: ./packages/image/index.js



image_image.install = function (Vue) {
  Vue.component(image_image.name, image_image);
};

/* harmony default export */ var packages_image = (image_image);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.bold.js
var es6_string_bold = __webpack_require__("48c0");

// EXTERNAL MODULE: ./packages/assets/scss/heading.scss
var heading = __webpack_require__("04d1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/heading/heading.vue?vue&type=script&lang=js&





/* harmony default export */ var headingvue_type_script_lang_js_ = ({
  name: "ui-heading",
  components: {
    heading: {
      props: ["tag", "classes"]
    }
  },
  props: {
    bold: Boolean,
    primary: {
      type: Boolean,
      default: true
    },
    divider: Boolean,
    bullet: Boolean,
    margin: Boolean,
    tag: {
      type: String,
      default: "h2",
      validator: function validator(value) {
        return ["h1", "h2", "h3", "h4", "h5"].includes(value);
      }
    }
  },
  computed: {
    classes: function classes() {
      var _ref;

      return ["ui-heading", (_ref = {}, _defineProperty(_ref, "ui-heading-margin", this.margin), _defineProperty(_ref, "ui-heading-bold", this.bold), _defineProperty(_ref, "ui-heading-primary", this.primary), _defineProperty(_ref, "ui-heading-divider", this.divider), _defineProperty(_ref, "ui-heading-bullet", this.bullet), _ref)];
    }
  },
  render: function render(h) {
    return h(this.tag, {
      class: this.classes
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/heading/heading.vue?vue&type=script&lang=js&
 /* harmony default export */ var heading_headingvue_type_script_lang_js_ = (headingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/heading/heading.vue
var heading_render, heading_staticRenderFns




/* normalize component */

var heading_component = Object(componentNormalizer["a" /* default */])(
  heading_headingvue_type_script_lang_js_,
  heading_render,
  heading_staticRenderFns,
  false,
  null,
  null,
  null
  
)

heading_component.options.__file = "heading.vue"
/* harmony default export */ var heading_heading = (heading_component.exports);
// CONCATENATED MODULE: ./packages/heading/index.js



heading_heading.install = function (Vue) {
  Vue.component(heading_heading.name, heading_heading);
};

/* harmony default export */ var packages_heading = (heading_heading);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/layout/row.vue?vue&type=template&id=4637f7b0&
var rowvue_type_template_id_4637f7b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,style:(_vm.styles)},[_vm._t("default")],2)}
var rowvue_type_template_id_4637f7b0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/layout/row.vue?vue&type=template&id=4637f7b0&

// EXTERNAL MODULE: ./packages/assets/scss/layout.scss
var layout = __webpack_require__("4c7a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/utils/camelToDash.js

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/layout/row.vue?vue&type=script&lang=js&





//
//
//


/* harmony default export */ var rowvue_type_script_lang_js_ = ({
  name: "ui-row",
  data: function data() {
    return {};
  },
  props: {
    // around: Boolean,
    // between: Boolean,
    gutter: Number,
    reverse: Boolean,
    xsAround: Boolean,
    smAround: Boolean,
    mdAround: Boolean,
    lgAround: Boolean,
    xsBetween: Boolean,
    smBetween: Boolean,
    mdBetween: Boolean,
    lgBetween: Boolean,
    xsStart: Boolean,
    smStart: Boolean,
    mdStart: Boolean,
    lgStart: Boolean,
    xsCenter: Boolean,
    smCenter: Boolean,
    mdCenter: Boolean,
    lgCenter: Boolean,
    xsEnd: Boolean,
    smEnd: Boolean,
    mdEnd: Boolean,
    lgEnd: Boolean,
    xsTop: Boolean,
    smTop: Boolean,
    mdTop: Boolean,
    lgTop: Boolean,
    xsMiddle: Boolean,
    smMiddle: Boolean,
    mdMiddle: Boolean,
    lgMiddle: Boolean,
    xsBottom: Boolean,
    smBottom: Boolean,
    mdBottom: Boolean,
    lgBottom: Boolean,
    noGutter: Boolean,
    gutterV: Boolean,
    alignContent: {
      type: String,
      validator: function validator(value) {
        return ["start", "center", "end", "stretch", "around", "between"].includes(value);
      }
    },
    alignH: {
      type: String,
      validator: function validator(value) {
        return ["start", "center", "end", "baseline", "stretch", "evenly", "between"].includes(value);
      }
    },
    alignV: {
      type: String,
      validator: function validator(value) {
        return ["top", "middle", "bottom", "stretch"].includes(value);
      }
    },
    wrap: {
      type: String,
      // default: 'nowrap',
      validator: function validator(value) {
        return ["nowrap", "wrap", "reverse"].includes(value);
      }
    }
  },
  computed: {
    classes: function classes() {
      return ["ui-row", this.getSizeProps().join(" "), this.warp && "ui-row-".concat(this.wrap), this.alignH && "ui-row-justify-content-".concat(this.alignH), this.alignV && "ui-row-align-item-".concat(this.alignV), this.alignContent && "ui-row-align-content-".concat(this.alignContent), this.reverse && "ui-row-reverse", this.noGutter && "ui-row-no-gutter", this.gutterV && "ui-row-gutter-vertical"];
    },
    styles: function styles() {
      return [{
        marginLeft: -this.gutter + "rem",
        marginBottom: -this.gutter + "rem"
      }];
    }
  },
  methods: {
    getSizeProps: function getSizeProps() {
      var _this = this;

      var classes = [];

      keys_default()(this.$props).forEach(function (s) {
        if (_this.$props[s]) {
          if (s.includes("Around") || s.includes("Between")) {
            classes.push("ui-row-".concat(camelCaseToDash(s)));
          }

          if (s.includes("Center") || s.includes("Start") || s.includes("End") || s.includes("Top") || s.includes("Middle") || s.includes("Bottom") || s.includes("First") || s.includes("Last")) {
            classes.push("ui-row-".concat(camelCaseToDash(s)));
          }
        }
      });

      return classes;
    }
  },
  mounted: function mounted() {
    this.getSizeProps();
  } // render(h) {
  //   return h(
  //     this.tag, {
  //       class: this.classes,
  //       style: this.styles,
  //     },
  //     this.$scopedSlots.default({
  //       gutter: this.gutter
  //     })
  //     // this.$slots.default
  //   );
  // }

});
// CONCATENATED MODULE: ./packages/layout/row.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_rowvue_type_script_lang_js_ = (rowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/layout/row.vue





/* normalize component */

var row_component = Object(componentNormalizer["a" /* default */])(
  layout_rowvue_type_script_lang_js_,
  rowvue_type_template_id_4637f7b0_render,
  rowvue_type_template_id_4637f7b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

row_component.options.__file = "row.vue"
/* harmony default export */ var row = (row_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/layout/col.vue?vue&type=template&id=21136342&
var colvue_type_template_id_21136342_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,style:(_vm.styles)},[_vm._t("default")],2)}
var colvue_type_template_id_21136342_staticRenderFns = []


// CONCATENATED MODULE: ./packages/layout/col.vue?vue&type=template&id=21136342&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/layout/col.vue?vue&type=script&lang=js&





//
//
//

/* harmony default export */ var colvue_type_script_lang_js_ = ({
  name: "ui-col",
  data: function data() {
    return {
      gutter: ""
    };
  },
  props: {
    autoWidth: Boolean,
    xs: {
      type: Number,
      default: 12
    },
    sm: Number,
    md: Number,
    lg: Number,
    xlg: Number,
    xsOffset: Number,
    smOffset: Number,
    mdOffset: Number,
    lgOffset: Number,
    xsFirst: Boolean,
    smFirst: Boolean,
    mdFirst: Boolean,
    lgFirst: Boolean,
    xsLast: Boolean,
    smLast: Boolean,
    mdLast: Boolean,
    lgLast: Boolean,
    first: Boolean,
    last: Boolean,
    reverse: Boolean,
    grow: Number,
    shrink: Number,
    basis: Number,
    order: Number,
    alignSelf: {
      type: String,
      validator: function validator(value) {
        return ["start", "center", "end", "baseline", "stretch"].includes(value);
      }
    }
  },
  computed: {
    styles: function styles() {
      return {
        "flex-grow": this.grow,
        "flex-shrink": this.shrink,
        "flex-basis": "".concat(this.basis, "%"),
        "align-self": this.alignSelf,
        paddingLeft: this.gutter + "rem",
        paddingBottom: this.gutter + "rem",
        order: this.order
      };
    },
    classes: function classes() {
      return ["ui-col", this.getSizeProps().join(" "), this.autoWidth && "ui-col-auto-width", {
        "ui-col-first": this.first,
        "ui-col-last": this.last,
        "ui-col-reverse": this.reverse
      }];
    }
  },
  methods: {
    getSizeProps: function getSizeProps() {
      var _this = this;

      var cols = ["xs", "sm", "md", "lg", "xlg"];
      var classes = [];

      keys_default()(this.$props).forEach(function (s) {
        if (_this.$props[s]) {
          if (cols.includes(s)) {
            classes.push("ui-col-".concat(s, "-").concat(_this.$props[s]));
          }

          if (s.includes("Offset")) {
            classes.push("ui-col-".concat(camelCaseToDash(s), "-").concat(_this.$props[s]));
          }
        }
      });

      return classes;
    }
  },
  mounted: function mounted() {
    this.getSizeProps();

    if (this.$parent.gutter) {
      this.gutter = this.$parent.gutter;
    }
  } // render(h) {
  //   return h(
  //     this.tag, {
  //       class: this.classes,
  //       style: this.styles
  //     },
  //     this.$slots.default
  //   );
  // }

});
// CONCATENATED MODULE: ./packages/layout/col.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_colvue_type_script_lang_js_ = (colvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/layout/col.vue





/* normalize component */

var col_component = Object(componentNormalizer["a" /* default */])(
  layout_colvue_type_script_lang_js_,
  colvue_type_template_id_21136342_render,
  colvue_type_template_id_21136342_staticRenderFns,
  false,
  null,
  null,
  null
  
)

col_component.options.__file = "col.vue"
/* harmony default export */ var col = (col_component.exports);
// CONCATENATED MODULE: ./packages/layout/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/button.vue?vue&type=template&id=d41b06d8&
var buttonvue_type_template_id_d41b06d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"button",class:_vm.classes,attrs:{"role":"button","disabled":_vm.disabled,"loading":_vm.loading},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleClick($event)},"mousedown":_vm.mouseDown,"mouseup":_vm.mouseUp}},[_c('div',{staticClass:"ui-btn-inner",on:{"click":_vm.clickInner}},[_c('span',[_vm._t("default")],2),_c('transition',{attrs:{"name":"fade"}},[(_vm.loading)?_c('ui-spinner',{attrs:{"light":_vm.type !== 'border'}}):_vm._e()],1)],1)])}
var buttonvue_type_template_id_d41b06d8_staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=template&id=d41b06d8&

// EXTERNAL MODULE: ./packages/assets/scss/button.scss
var scss_button = __webpack_require__("be7d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/button.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "ui-button",
  data: function data() {
    return {
      isActive: false
    };
  },
  components: {
    UiSpinner: spinner_spinner
  },
  props: {
    type: {
      type: String,
      validator: function validator(value) {
        return ["primary", "border", "warning", "error", "ghost", "normal"].includes(value);
      },
      default: "primary"
    },
    // shape: {
    //   type: String,
    //   default: 'block',
    //   validator(value) {
    //     return ["circle", "block"].includes(value);
    //   }
    // },
    size: {
      type: String,
      default: "md",
      validator: function validator(value) {
        return ["sm", "lg", "md"].includes(value);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    shadow: Boolean,
    full: Boolean,
    center: Boolean
  },
  computed: {
    classes: function classes() {
      return ["ui-btn", this.disabled && "ui-btn-disabled", this.shadow && "ui-btn-shadow", this.type && "ui-btn-".concat(this.type), this.full && "ui-btn-full", this.center && "ui-btn-center", // this.shape && `ui-btn-shape-${this.shape}`,
      this.size && "ui-btn-size-".concat(this.size), this.loading && "ui-btn-loading", this.isActive && "ui-btn-active"];
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit("click", event);
      }
    },
    mouseDown: function mouseDown() {
      if (!this.loading && !this.disabled) {
        this.isActive = true;
      }
    },
    mouseUp: function mouseUp() {
      if (!this.loading && !this.disabled) {
        this.isActive = false;
      }
    },
    clickInner: function clickInner(e) {
      e.stopPropagation();
      this.$refs["button"].click();
    }
  }
});
// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button/button.vue





/* normalize component */

var button_component = Object(componentNormalizer["a" /* default */])(
  button_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_d41b06d8_render,
  buttonvue_type_template_id_d41b06d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

button_component.options.__file = "button.vue"
/* harmony default export */ var button_button = (button_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/button-group.vue?vue&type=template&id=38fe58db&
var button_groupvue_type_template_id_38fe58db_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_vm._t("default")],2)}
var button_groupvue_type_template_id_38fe58db_staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/button-group.vue?vue&type=template&id=38fe58db&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/button-group.vue?vue&type=script&lang=js&



//
//
//
/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
  name: "ui-button-group",
  props: {
    size: {
      type: String,
      validator: function validator(value) {
        return ["sm", "lg", "md"].includes(value);
      },
      default: "md"
    },
    vertical: Boolean,
    gutter: Boolean
  },
  computed: {
    classes: function classes() {
      var _ref;

      return ["ui-btn-group", this.gutter && "ui-btn-group-gutter", (_ref = {}, _defineProperty(_ref, "ui-btn-group-size-".concat(this.size), !!this.size), _defineProperty(_ref, "ui-btn-group-vertical", this.vertical), _ref)];
    }
  }
});
// CONCATENATED MODULE: ./packages/button/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button/button-group.vue





/* normalize component */

var button_group_component = Object(componentNormalizer["a" /* default */])(
  button_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_38fe58db_render,
  button_groupvue_type_template_id_38fe58db_staticRenderFns,
  false,
  null,
  null,
  null
  
)

button_group_component.options.__file = "button-group.vue"
/* harmony default export */ var button_group = (button_group_component.exports);
// CONCATENATED MODULE: ./packages/button/index.js




button_button.install = function (Vue) {
  Vue.component(button_button.name, button_button);
};

button_group.install = function (Vue) {
  Vue.component(button_group.name, button_group);
};


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/accordion/accordion.vue?vue&type=template&id=eea9540e&scoped=true&
var accordionvue_type_template_id_eea9540e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-accordion-container",class:[_vm.size && ("ui-accordion-size-" + _vm.size)]},[_vm._t("default")],2)}
var accordionvue_type_template_id_eea9540e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/accordion/accordion.vue?vue&type=template&id=eea9540e&scoped=true&

// CONCATENATED MODULE: ./src/utils/events.js

var events = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
/* harmony default export */ var utils_events = (events);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/accordion/accordion.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//


/* harmony default export */ var accordionvue_type_script_lang_js_ = ({
  name: "ui-accordion",
  data: function data() {
    return {
      id: "accordion-".concat(index_browser_default()())
    };
  },
  provide: function provide() {
    return {
      accordionId: this.id
    };
  },
  methods: {
    handler: function handler(_ref) {
      var id = _ref.id,
          show = _ref.show;

      if (!this.keepOpen) {
        this.$slots.default.forEach(function (item) {
          if (show && item.componentInstance && item.componentInstance.id !== id) {
            item.componentInstance.show = false;
          }
        });
      }
    }
  },
  props: {
    size: String,
    keepOpen: Boolean
  },
  mounted: function mounted() {
    utils_events.$on("".concat(this.id), this.handler);
  }
});
// CONCATENATED MODULE: ./packages/accordion/accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var accordion_accordionvue_type_script_lang_js_ = (accordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/accordion/accordion.vue?vue&type=style&index=0&id=eea9540e&lang=css&scoped=true&
var accordionvue_type_style_index_0_id_eea9540e_lang_css_scoped_true_ = __webpack_require__("d36e");

// CONCATENATED MODULE: ./packages/accordion/accordion.vue






/* normalize component */

var accordion_component = Object(componentNormalizer["a" /* default */])(
  accordion_accordionvue_type_script_lang_js_,
  accordionvue_type_template_id_eea9540e_scoped_true_render,
  accordionvue_type_template_id_eea9540e_scoped_true_staticRenderFns,
  false,
  null,
  "eea9540e",
  null
  
)

accordion_component.options.__file = "accordion.vue"
/* harmony default export */ var accordion = (accordion_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/accordion/accordion-item.vue?vue&type=template&id=47c80d60&
var accordion_itemvue_type_template_id_47c80d60_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-accordion-item",class:_vm.classes},[_c('div',{staticClass:"ui-accordion-title",on:{"mouseenter":_vm.mouseenter,"click":_vm.clickTitle}},[_c('span',{staticClass:"ui-accordion-title-content",domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._t("close",[_c('span',{staticClass:"ui-accordion-close-icon",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.click($event)}}},[_c('ui-icon',{attrs:{"name":"plus"}})],1)])],2),_c('ui-height-transition',{attrs:{"duration":_vm.duration},on:{"before-enter":function($event){_vm.animating = true},"after-enter":function($event){_vm.animating = false},"before-leave":function($event){_vm.animating = true},"after-leave":function($event){_vm.animating = false}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"ui-accordion-content"},[_c('div',{staticClass:"ui-accordion-content-inner"},[_vm._t("default")],2)])])],1)}
var accordion_itemvue_type_template_id_47c80d60_staticRenderFns = []


// CONCATENATED MODULE: ./packages/accordion/accordion-item.vue?vue&type=template&id=47c80d60&

// EXTERNAL MODULE: ./packages/assets/scss/accordion.scss
var scss_accordion = __webpack_require__("868c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/height-transition/height-transition.vue?vue&type=template&id=38c12aec&scoped=true&
var height_transitionvue_type_template_id_38c12aec_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"height"},on:{"enter":_vm.enterHandler,"after-enter":_vm.afterEnterHandler,"leave":_vm.leaveHandler,"before-enter":function($event){_vm.$emit('before-enter')},"enter-cancelled":function($event){_vm.$emit('enter-cancelled')},"before-leave":function($event){_vm.$emit('before-leave')},"after-leave":function($event){_vm.$emit('after-leave')},"leave-cancelled":function($event){_vm.$emit('leave-cancelled')}}},[_vm._t("default")],2)}
var height_transitionvue_type_template_id_38c12aec_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/height-transition/height-transition.vue?vue&type=template&id=38c12aec&scoped=true&

// EXTERNAL MODULE: ./packages/assets/scss/height-transition.scss
var height_transition = __webpack_require__("e6c6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/height-transition/height-transition.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var height_transitionvue_type_script_lang_js_ = ({
  name: "ui-height-transition",
  props: {
    duration: {
      type: Number,
      default: 300
    }
  },
  methods: {
    enterHandler: function enterHandler(el) {
      var width = getComputedStyle(el).width;
      el.style.position = "absolute";
      el.style.visibility = "hidden";
      el.style.height = "auto";
      el.style.width = width;
      var height = getComputedStyle(el).height;
      el.style.position = "";
      el.style.visibility = "";
      el.style.width = "";
      el.style.height = 0;
      getComputedStyle(el).height;
      el.style.transitionDuration = this.duration + "ms";
      requestAnimationFrame(function () {
        el.style.height = height;
      });
      this.$emit("enter");
    },
    afterEnterHandler: function afterEnterHandler(el) {
      el.style.height = "auto";
      this.$emit("after-enter");
    },
    leaveHandler: function leaveHandler(el) {
      var height = getComputedStyle(el).height;
      el.style.height = height;
      getComputedStyle(el).height;
      el.style.transitionDuration = this.duration + "ms";
      requestAnimationFrame(function () {
        el.style.height = "0";
      });
      this.$emit("leave");
    }
  }
});
// CONCATENATED MODULE: ./packages/height-transition/height-transition.vue?vue&type=script&lang=js&
 /* harmony default export */ var height_transition_height_transitionvue_type_script_lang_js_ = (height_transitionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/height-transition/height-transition.vue?vue&type=style&index=0&id=38c12aec&scoped=true&lang=css&
var height_transitionvue_type_style_index_0_id_38c12aec_scoped_true_lang_css_ = __webpack_require__("f1fe");

// CONCATENATED MODULE: ./packages/height-transition/height-transition.vue






/* normalize component */

var height_transition_component = Object(componentNormalizer["a" /* default */])(
  height_transition_height_transitionvue_type_script_lang_js_,
  height_transitionvue_type_template_id_38c12aec_scoped_true_render,
  height_transitionvue_type_template_id_38c12aec_scoped_true_staticRenderFns,
  false,
  null,
  "38c12aec",
  null
  
)

height_transition_component.options.__file = "height-transition.vue"
/* harmony default export */ var height_transition_height_transition = (height_transition_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/accordion/accordion-item.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var accordion_itemvue_type_script_lang_js_ = ({
  name: "ui-accordion-item",
  data: function data() {
    return {
      show: false,
      animating: false,
      id: "ui-accordion-item-".concat(index_browser_default()())
    };
  },
  props: {
    title: String,
    openOnMouseOver: Boolean,
    openOnClickTitle: {
      type: Boolean,
      default: true
    },
    active: Boolean,
    duration: Number
  },
  components: {
    UiIcon: packages_icon["a" /* default */],
    UiHeightTransition: height_transition_height_transition
  },
  computed: {
    classes: function classes() {
      return {
        "ui-accordion-item-active": this.show
      };
    }
  },
  inject: ["accordionId"],
  watch: {
    show: function show(val) {
      utils_events.$emit("".concat(this.accordionId), {
        id: this.id,
        show: this.show
      });

      if (val) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    }
  },
  methods: {
    clickTitle: function clickTitle() {
      if (this.openOnClickTitle) {
        this.click();
      }
    },
    click: function click() {
      this.show = !this.show;
    },
    mouseenter: function mouseenter() {
      if (this.openOnMouseOver && !this.animating) {
        this.show = !this.show;
      }
    }
  },
  mounted: function mounted() {
    if (this.active) this.show = true;
  }
});
// CONCATENATED MODULE: ./packages/accordion/accordion-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var accordion_accordion_itemvue_type_script_lang_js_ = (accordion_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/accordion/accordion-item.vue





/* normalize component */

var accordion_item_component = Object(componentNormalizer["a" /* default */])(
  accordion_accordion_itemvue_type_script_lang_js_,
  accordion_itemvue_type_template_id_47c80d60_render,
  accordion_itemvue_type_template_id_47c80d60_staticRenderFns,
  false,
  null,
  null,
  null
  
)

accordion_item_component.options.__file = "accordion-item.vue"
/* harmony default export */ var accordion_item = (accordion_item_component.exports);
// CONCATENATED MODULE: ./packages/accordion/index.js



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/checkbox.vue?vue&type=template&id=18812838&
var checkboxvue_type_template_id_18812838_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-checkbox",class:_vm.classes},[_c('input',{attrs:{"type":"checkbox","id":_vm.id,"name":_vm.name,"disabled":_vm.disabled,"indeterminate":!_vm.isChecked && _vm.indeterminate},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"change":_vm.setValue}}),_c('label',{attrs:{"for":_vm.id},on:{"click":_vm.prevent}},[_vm._t("checkbox-box",[_c('span',{staticClass:"ui-checkbox-box"},[_c('svg',{attrs:{"width":"16","height":"16","viewBox":"0 0 12 12","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M11.5385 0.228769C11.0395 -0.16 10.3415 -0.0410482 9.97806 0.492783L4.78903 8.12889L1.93058 5.01584C1.50946 4.53423 0.802782 4.51102 0.352815 4.96362C-0.0971515 5.41331 -0.120227 6.17054 0.30378 6.64925C0.30378 6.64925 3.7766 10.5253 4.2756 10.9141C4.7746 11.3029 5.47263 11.1839 5.83606 10.6501L11.7866 1.89699C12.15 1.36026 12.0375 0.614635 11.5385 0.228769Z"}})])]),(_vm.indeterminate && !_vm.toggle)?_c('span',{staticClass:"ui-checkbox-indeterminate-bar"}):_vm._e()]),_vm._t("default")],2)])}
var checkboxvue_type_template_id_18812838_staticRenderFns = []


// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue?vue&type=template&id=18812838&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./packages/assets/scss/checkbox.scss
var scss_checkbox = __webpack_require__("9780");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./src/utils/isObjectEqual.js


function isObjectEqual(a, b) {
  if (!a || !b) {
    return false;
  }

  var aKeys = keys_default()(a);

  var bKeys = keys_default()(b);

  if (aKeys.length != bKeys.length) {
    return false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = get_iterator_default()(aKeys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (a[key] !== b[key]) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/checkbox.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: "ui-checkbox",
  model: {
    prop: "modelValue",
    event: "input"
  },
  props: {
    id: {
      type: String,
      default: function _default() {
        return index_browser_default()();
      }
    },
    value: [String, Number, Object],
    modelValue: [Array, String, Number, Boolean, Object],
    checked: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    toggle: Boolean,
    name: String
  },
  computed: {
    classes: function classes() {
      return {
        "ui-checkbox-disabled": this.disabled,
        "ui-checkbox-checked": this.isChecked,
        "ui-checkbox-toggle": this.toggle,
        "ui-checkbox-indeterminate": this.$options.propsData.hasOwnProperty("indeterminate") && this.indeterminate
      };
    },
    isChecked: function isChecked() {
      var _this = this;

      if (!this.modelValue) {
        return this.checked;
      }

      if (this.isGroup) {
        if (typeof_typeof(this.value) == "object") {
          return this.modelValue.some(function (item) {
            return isObjectEqual(item, _this.value);
          });
        } else {
          return this.modelValue.includes(this.value);
        }
      }

      return !!this.modelValue;
    },
    isGroup: function isGroup() {
      return this.$options.propsData.hasOwnProperty("value") && is_array_default()(this.modelValue);
    },
    checkList: function checkList() {
      return this.isGroup && this.modelValue;
    }
  },
  methods: {
    prevent: function prevent(e) {
      if (this.$options.propsData.hasOwnProperty("indeterminate")) {
        e.preventDefault();
        return;
      }
    },
    setValue: function setValue(e) {
      if (this.disabled || this.$options.hasOwnProperty("indeterminate")) return;
      var value;

      if (!this.isGroup) {
        if (!this.isChecked && this.value) {
          value = this.value;
        } else {
          value = !this.isChecked;
        }
      } else {
        if (this.isChecked) {
          this.checkList.splice(this.checkList.indexOf(this.value), 1);
        } else {
          this.checkList.push(this.value);
        }

        value = this.checkList;
      }

      this.$emit("input", value);
      this.$emit("change", value);
    }
  }
});
// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkbox_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue





/* normalize component */

var checkbox_component = Object(componentNormalizer["a" /* default */])(
  checkbox_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_18812838_render,
  checkboxvue_type_template_id_18812838_staticRenderFns,
  false,
  null,
  null,
  null
  
)

checkbox_component.options.__file = "checkbox.vue"
/* harmony default export */ var checkbox_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./packages/checkbox/index.js



checkbox_checkbox.install = function (Vue) {
  Vue.component(checkbox_checkbox.name, checkbox_checkbox);
};

/* harmony default export */ var packages_checkbox = (checkbox_checkbox);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio/radio.vue?vue&type=template&id=7b505353&
var radiovue_type_template_id_7b505353_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-radio",class:_vm.classes,on:{"click":_vm.setValue}},[_c('input',{attrs:{"type":"radio","name":_vm.name,"id":_vm.id,"disabled":_vm.disabled},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"change":_vm.change}}),_c('label',{attrs:{"for":_vm.id}},[_vm._t("radio-box",[_c('span',{staticClass:"ui-radio-box"})]),_vm._t("default")],2)])}
var radiovue_type_template_id_7b505353_staticRenderFns = []


// CONCATENATED MODULE: ./packages/radio/radio.vue?vue&type=template&id=7b505353&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio/radio.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: "ui-radio",
  model: {
    prop: "modelValue",
    event: "input"
  },
  props: {
    id: {
      type: String,
      default: function _default() {
        return "ui-radio-" + index_browser_default()();
      }
    },
    name: String,
    value: [String, Number, Object, Boolean],
    modelValue: [Array, String, Number, Boolean, Object],
    checked: Boolean,
    disabled: Boolean,
    toggle: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        "ui-radio-disabled": this.disabled,
        "ui-radio-checked": this.isChecked,
        "ui-radio-toggle": this.toggle
      };
    },
    isChecked: function isChecked() {
      if (!this.modelValue) {
        return this.checked;
      } else {
        if (typeof_typeof(this.value) == "object") {
          return isObjectEqual(this.modelValue, this.value);
        } else {
          return this.modelValue == this.value;
        }
      }
    }
  },
  methods: {
    change: function change(e) {
      this.$emit("change", e.target.value);
    },
    setValue: function setValue(e) {
      if (this.disabled) return;
      var value;

      if (this.isChecked) {
        value = false;
      } else {
        value = this.value ? this.value : true;
      }

      this.$emit("input", value);
    }
  }
});
// CONCATENATED MODULE: ./packages/radio/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var radio_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/radio/radio.vue





/* normalize component */

var radio_component = Object(componentNormalizer["a" /* default */])(
  radio_radiovue_type_script_lang_js_,
  radiovue_type_template_id_7b505353_render,
  radiovue_type_template_id_7b505353_staticRenderFns,
  false,
  null,
  null,
  null
  
)

radio_component.options.__file = "radio.vue"
/* harmony default export */ var radio_radio = (radio_component.exports);
// CONCATENATED MODULE: ./packages/radio/index.js



radio_radio.install = function (Vue) {
  Vue.component(radio_radio.name, radio_radio);
};

/* harmony default export */ var packages_radio = (radio_radio);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/tag.vue?vue&type=template&id=36e0a100&scoped=true&
var tagvue_type_template_id_36e0a100_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('div',{staticClass:"ui-tag",class:_vm.classes},[_c('div',{staticClass:"ui-tag-inner"},[_c('div',{staticClass:"ui-tag-slot"},[_vm._t("default")],2),(_vm.showClose)?_c('ui-icon',{staticClass:"ui-icon-close",attrs:{"name":"close-circle-fill"},nativeOn:{"click":function($event){return _vm.click($event)}}}):_vm._e()],1)]):_vm._e()])}
var tagvue_type_template_id_36e0a100_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tag/tag.vue?vue&type=template&id=36e0a100&scoped=true&

// EXTERNAL MODULE: ./packages/assets/scss/tag.scss
var tag = __webpack_require__("0ec0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/tag.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var tagvue_type_script_lang_js_ = ({
  name: "ui-tag",
  data: function data() {
    return {
      show: true
    };
  },
  components: {
    UiIcon: packages_icon["a" /* default */]
  },
  computed: {
    classes: function classes() {
      return [this.showClose && "ui-tag-with-icon", "ui-tag-".concat(this.type), "ui-tag-size-".concat(this.size)];
    }
  },
  props: {
    showClose: Boolean,
    type: {
      type: String,
      default: "default",
      validator: function validator(value) {
        return ["warning", "error", "success", "default", "border"].includes(value);
      }
    },
    size: {
      type: String,
      default: "lg"
    }
  },
  methods: {
    click: function click() {
      this.show = false;
      this.$emit("close");
    }
  }
});
// CONCATENATED MODULE: ./packages/tag/tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var tag_tagvue_type_script_lang_js_ = (tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tag/tag.vue?vue&type=style&index=0&id=36e0a100&lang=css&scoped=true&
var tagvue_type_style_index_0_id_36e0a100_lang_css_scoped_true_ = __webpack_require__("2818");

// CONCATENATED MODULE: ./packages/tag/tag.vue






/* normalize component */

var tag_component = Object(componentNormalizer["a" /* default */])(
  tag_tagvue_type_script_lang_js_,
  tagvue_type_template_id_36e0a100_scoped_true_render,
  tagvue_type_template_id_36e0a100_scoped_true_staticRenderFns,
  false,
  null,
  "36e0a100",
  null
  
)

tag_component.options.__file = "tag.vue"
/* harmony default export */ var tag_tag = (tag_component.exports);
// CONCATENATED MODULE: ./packages/tag/index.js



tag_tag.install = function (Vue) {
  Vue.component(tag_tag.name, tag_tag);
};

/* harmony default export */ var packages_tag = (tag_tag);
// EXTERNAL MODULE: ./packages/assets/scss/hightlight.scss
var hightlight = __webpack_require__("dd71");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// CONCATENATED MODULE: ./src/utils/setCharAt.js
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}

/* harmony default export */ var utils_setCharAt = (setCharAt);
// CONCATENATED MODULE: ./src/utils/highlight.js






var highlight = function highlight(_ref) {
  var el = _ref.el,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "primary" : _ref$color,
      text = _ref.text,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? "b" : _ref$tag,
      _ref$loose = _ref.loose,
      loose = _ref$loose === void 0 ? false : _ref$loose;

  if (!el) {
    return;
  }

  var classes = "ui-highlight-text ui-highlight-".concat(color, " ").concat(className ? "ui-highlight-" + className : "");

  if (text) {
    text = text.replace(/[|\\{}()[\]^$+*?.]/g, "");
    var re = loose ? new RegExp(text.split("").join("|"), "i") : new RegExp(text, "gi");
    el.querySelectorAll("span").forEach(function (item) {
      var content = item.textContent;

      if (!loose) {
        content = content.replace(re, "<".concat(tag, " class=\"").concat(classes, "\">").concat(text, "</").concat(tag, ">"));
      } else {
        var match = [];
        var searchPosition = 0;

        for (var number = 0; number < content.length; number++) {
          var recordChar = content[number];

          if (re.test(recordChar)) {
            recordChar = "<".concat(tag, " class=\"").concat(classes, "\">").concat(recordChar, "</").concat(tag, ">");
            searchPosition++;
          }

          match.push(recordChar);
        }

        content = match.join("");
      }

      item.innerHTML = content;
    });
  } else {
    el.querySelectorAll(tag).forEach(function (item) {
      if (item.classList.contains("ui-highlight-text")) {
        item.outerHTML = item.textContent;
      }
    });
  }
};

/* harmony default export */ var utils_highlight = (highlight);
// CONCATENATED MODULE: ./packages/highlight/highlight.js



var highlight_h = function h(el, binding) {
  var options = {};
  options.el = el;

  if (typeof binding.value == "string") {
    options.text = binding.value;
  } else {
    options.text = binding.value.text;
    options.className = binding.value && binding.value.className;
    options.color = binding.value && binding.value.color;
    options.tag = binding.value && binding.value.tag;
    options.loose = binding.value && binding.value.loose;
  }

  utils_highlight(options);
}; //el约定，只接受在span中的文字


/* harmony default export */ var highlight_highlight = ({
  name: "ui-highlight",
  inserted: function inserted(el, binding, vnode) {
    if (binding.value) {
      highlight_h(el, binding);
    }
  },
  update: function update(el, binding, vnode) {
    if (binding.value) {
      highlight_h(el, binding);
    }
  }
});
// CONCATENATED MODULE: ./packages/highlight/index.js


highlight_highlight.install = function (Vue, opt) {
  Vue.directive("ui-highlight", highlight_highlight);
};

/* harmony default export */ var packages_highlight = (highlight_highlight);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/hr/hr.vue?vue&type=template&id=c37f8af4&
var hrvue_type_template_id_c37f8af4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-hr"},[_c('div',{staticClass:"ui-hr-icon"},[_vm._t("default")],2)])}
var hrvue_type_template_id_c37f8af4_staticRenderFns = []


// CONCATENATED MODULE: ./packages/hr/hr.vue?vue&type=template&id=c37f8af4&

// EXTERNAL MODULE: ./packages/assets/scss/hr.scss
var hr = __webpack_require__("18e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/hr/hr.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var hrvue_type_script_lang_js_ = ({
  name: "ui-hr",
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./packages/hr/hr.vue?vue&type=script&lang=js&
 /* harmony default export */ var hr_hrvue_type_script_lang_js_ = (hrvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/hr/hr.vue





/* normalize component */

var hr_component = Object(componentNormalizer["a" /* default */])(
  hr_hrvue_type_script_lang_js_,
  hrvue_type_template_id_c37f8af4_render,
  hrvue_type_template_id_c37f8af4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

hr_component.options.__file = "hr.vue"
/* harmony default export */ var hr_hr = (hr_component.exports);
// CONCATENATED MODULE: ./packages/hr/index.js



hr_hr.install = function (Vue) {
  Vue.component(hr_hr.name, hr_hr);
};

/* harmony default export */ var packages_hr = (hr_hr);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/backdrop/backdrop.vue?vue&type=template&id=307a6834&
var backdropvue_type_template_id_307a6834_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('div',{staticClass:"ui-backdrop",class:_vm.classes,style:(_vm.styles),on:{"click":_vm.click}},[_vm._t("default"),(_vm.showSpinner)?_c('ui-spinner'):_vm._e(),(_vm.text)?_c('span',[_vm._v(_vm._s(_vm.text))]):_vm._e()],2):_vm._e()])}
var backdropvue_type_template_id_307a6834_staticRenderFns = []


// CONCATENATED MODULE: ./packages/backdrop/backdrop.vue?vue&type=template&id=307a6834&

// EXTERNAL MODULE: ./packages/assets/scss/backdrop.scss
var backdrop = __webpack_require__("a109");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/backdrop/backdrop.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var backdropvue_type_script_lang_js_ = ({
  name: "ui-backdrop",
  data: function data() {
    return {
      show: false
    };
  },
  components: {
    UiSpinner: spinner_spinner
  },
  props: {
    type: {
      type: String
    },
    onClick: Function,
    showSpinner: Boolean,
    // zIndex: Number,
    global: Boolean,
    text: String,
    closeOnClick: Boolean,
    radius: [Number, String],
    color: {
      type: String,
      default: "dark",
      validator: function validator(value) {
        return ["white", "light", "dark", "darker"].includes(value);
      }
    }
  },
  computed: {
    styles: function styles() {
      return [{
        zIndex: this.$zIndex.add(),
        borderRadius: typeof this.radius == "number" ? this.radius + "px" : this.radius
      }];
    },
    classes: function classes() {
      return ["ui-backdrop-".concat(this.color), this.global && "ui-backdrop-global"];
    }
  },
  methods: {
    click: function click() {
      if (this.closeOnClick) {
        this.close();
      }

      if (this.onClick && typeof this.onClick == "function") {
        this.onClick();
      }
    },
    close: function close() {
      this.show = false;
      this.$zIndex.remove();
    }
  },
  mounted: function mounted() {
    this.show = true;
    this.$zIndex.add();

    if (this.global) {
      utils_events.$on("close-backdrop", this.close);
    }
  }
});
// CONCATENATED MODULE: ./packages/backdrop/backdrop.vue?vue&type=script&lang=js&
 /* harmony default export */ var backdrop_backdropvue_type_script_lang_js_ = (backdropvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/backdrop/backdrop.vue





/* normalize component */

var backdrop_component = Object(componentNormalizer["a" /* default */])(
  backdrop_backdropvue_type_script_lang_js_,
  backdropvue_type_template_id_307a6834_render,
  backdropvue_type_template_id_307a6834_staticRenderFns,
  false,
  null,
  null,
  null
  
)

backdrop_component.options.__file = "backdrop.vue"
/* harmony default export */ var backdrop_backdrop = (backdrop_component.exports);
// CONCATENATED MODULE: ./packages/backdrop/render.js


var BackdropConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(backdrop_backdrop);

var Render = function Render(_ref) {
  var el = _ref.el,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;

  if (options.global) {
    this.backdrop = new BackdropConstructor({
      el: document.createElement("div"),
      propsData: options
    });
    this.backdrop.$mount();
    document.body.appendChild(this.backdrop.$el);
  } else {
    el.style.position = el.style.position == "absolute" ? "absolute" : "relative";
    var style = window.getComputedStyle(el);

    if (style.borderRadius) {
      options.radius = style.borderRadius;
    }

    this.backdrop = new BackdropConstructor({
      el: document.createElement("div"),
      propsData: options
    });
    this.backdrop.$mount();
    el.appendChild(this.backdrop.$el);
  }
};

/* harmony default export */ var backdrop_render = (Render);
// CONCATENATED MODULE: ./packages/backdrop/index.js





backdrop_backdrop.install = function (Vue) {
  Vue.component(backdrop_backdrop.name, backdrop_backdrop);
};

var backdrop_$UiCover = function $UiCover() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options.global = true;
  var cover = new backdrop_render({
    options: options
  });
  return cover.backdrop;
};

backdrop_$UiCover.close = function () {
  utils_events.$emit("close-backdrop");
};


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/autocomplete/autocomplete.vue?vue&type=template&id=43821a97&
var autocompletevue_type_template_id_43821a97_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-autocomplete"},[_c('ui-input',{attrs:{"placeholder":_vm.placeholder},on:{"focus":_vm.focus,"blur":_vm.blur},nativeOn:{"keydown":[function($event){return _vm.onKeyDown($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.enterHandler($event)}]},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}},[_c('ui-icon',{attrs:{"slot":"prefix","name":_vm.icon},slot:"prefix"})],1),_c('ui-height-transition',{attrs:{"duration":100},on:{"after-enter":function($event){_vm.$emit('open')},"after-leave":function($event){_vm.$emit('close')}}},[(_vm.showList && _vm.listLength)?_c('div',{ref:"list",staticClass:"ui-autocomplete-list",style:({ zIndex: _vm.zIndex })},[(_vm.loading && _vm.showSpinner)?_c('ui-spinner',{attrs:{"center":""}}):_vm._e(),_vm._l((_vm.showItems),function(item,index){return (item.show)?_c('div',{key:index + Date.now(),staticClass:"ui-autocomplete-list-item",on:{"click":function($event){_vm.selectItem(index)}}},[_c('div',{directives:[{name:"ui-highlight",rawName:"v-ui-highlight",value:(_vm.highlightOptions),expression:"highlightOptions"}],domProps:{"innerHTML":_vm._s(item.item)}})]):_vm._e()})],2):_vm._e()])],1)}
var autocompletevue_type_template_id_43821a97_staticRenderFns = []


// CONCATENATED MODULE: ./packages/autocomplete/autocomplete.vue?vue&type=template&id=43821a97&

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__("b047");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./src/utils/validator.js
/* harmony default export */ var validator = ({
  username: /^[A-Za-z0-9_._\u4e00-\u9fa5_\。_\、_\@]+$/,
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  url: /^\S*$/,
  link: /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  htmlGeneric: /<[a-z][\s\S]*>/,
  htmlStrict: /<[a-z/][\s\S]*>/
});
// CONCATENATED MODULE: ./node_modules/iselement/module/index.js
var module_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Returns `true` if provided input is Element.
 * @name isElement
 * @param {*} [input]
 * @returns {boolean}
 */
/* harmony default export */ var iselement_module = (function (input) {
  return input != null && (typeof input === 'undefined' ? 'undefined' : module_typeof(input)) === 'object' && input.nodeType === 1 && module_typeof(input.style) === 'object' && module_typeof(input.ownerDocument) === 'object';
});
// EXTERNAL MODULE: ./packages/assets/scss/autocomplete.scss
var autocomplete = __webpack_require__("522b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// CONCATENATED MODULE: ./packages/autocomplete/mixins.js


/* harmony default export */ var mixins = ({
  methods: {
    highlightItem: function highlightItem(direction) {
      var _this = this;

      var items = this.showItems.filter(function (item) {
        return item.show;
      });

      if (items.length === 0) {
        return;
      }

      var selectedIndex = items.findIndex(function (item, index) {
        return index === _this.activeItemIndex;
      });

      if (selectedIndex === -1) {
        if (direction === "down") {
          selectedIndex = 0;
        } else {
          selectedIndex = items.length - 1;
        }
      } else {
        this.activeIndexItem = 0;

        if (direction === "down") {
          selectedIndex++;

          if (selectedIndex === items.length) {
            selectedIndex = 0;
          }
        } else {
          selectedIndex--;

          if (selectedIndex < 0) {
            selectedIndex = items.length - 1;
          }
        }
      }

      this.activeItemIndex = selectedIndex;
      var list = this.$refs["list"];
      var listItems = list.querySelectorAll(".ui-autocomplete-list-item");
      listItems.forEach(function (item) {
        item.classList.remove("ui-autocomplete-list-item-active");
      });
      listItems[this.activeItemIndex].classList.add("ui-autocomplete-list-item-active");
      var item = listItems[this.activeItemIndex];
      var scrollTop = list.scrollTop;
      var offsetTop = item.offsetTop;

      if (offsetTop + item.scrollHeight > scrollTop + list.clientHeight) {
        list.scrollTop += item.scrollHeight * 2;
      }

      if (offsetTop < scrollTop) {
        list.scrollTop -= item.scrollHeight * 2;
      }
    },
    onKeyDown: function onKeyDown(e) {
      switch (e.keyCode) {
        case 40:
          if (this.showList) {
            this.highlightItem("down");
          }

          e.preventDefault();
          break;

        case 38:
          if (this.showList) {
            this.highlightItem("up");
          }

          e.preventDefault();
          break;

        case 13:
          if (this.activeItemIndex == -1) {
            break;
          }

          var items = this.showItems.filter(function (item) {
            return item.show;
          });

          if (items.length) {
            var item = items[this.activeItemIndex].item;
            var index = this.items.findIndex(function (i) {
              return i == item;
            });
            this.selectItem(index);
          }

          e.preventDefault();
          break;

        default:
          return true;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/autocomplete/autocomplete.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var autocompletevue_type_script_lang_js_ = ({
  name: "ui-autocomplete",
  data: function data() {
    return {
      activeItemIndex: -1,
      selectedIndex: -1,
      query: this.value === undefined || this.value === null ? "" : this.value,
      showList: false,
      loading: false,
      showItems: [],
      list: "",
      lastQuery: "",
      zIndex: this.$zIndex.get()
    };
  },
  mixins: [mixins],
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loose: Boolean,
    highlight: {
      type: Boolean,
      default: true
    },
    highlightColor: String,
    showSpinner: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: "team"
    },
    placeholder: {
      type: String,
      default: ""
    },
    onInputChange: Function,
    onItemSelected: Function,
    showOnFocus: Boolean,
    filterData: Boolean,
    value: [String]
  },
  components: {
    UiInput: packages_input,
    UiHeightTransition: height_transition_height_transition,
    UiSpinner: packages_spinner,
    UiIcon: icon["a" /* default */]
  },
  computed: {
    listLength: function listLength() {
      return this.showItems.filter(function (item) {
        return item.show;
      }).length;
    },
    highlightOptions: function highlightOptions() {
      if (!this.highlight) {
        return null;
      } else {
        return {
          text: this.query,
          loose: this.loose,
          color: this.highlightColor
        };
      }
    }
  },
  methods: {
    focus: function focus() {
      if (this.showOnFocus) {
        this.show();
      }
    },
    blur: function blur() {
      var _this = this;

      setTimeout(function () {
        _this.showList = false;
      }, this.debounce);
    },
    show: function show() {
      this.showList = true;
      this.$zIndex.add();
    },
    hide: function hide() {
      this.showList = false;
      this.$zIndex.remove();
    },
    itemHandler: function itemHandler(item) {
      if (typeof item == "string") {
        return validator.htmlStrict.test(item) ? item : "<span>".concat(item, "</span>");
      } else if (iselement_module(item)) {
        // todo: make element react
        return item.innerHTML;
      } else {
        throw new Error("each item should be a string or an element");
      }
    },
    onItemSelectedDefault: function onItemSelectedDefault(index) {
      if (typeof this.items[index] == "string") {
        this.$emit("input", this.items[index]);
      } else {
        this.$emit("select", index);
      }

      this.activeItemIndex = -1;
      this.hide(); // this.showList = false;
    },
    enterHandler: function enterHandler() {
      var _this2 = this;

      setTimeout(function () {
        _this2.$emit("enter", _this2.query);
      }, this.debounce);
    },
    selectItem: function selectItem(index) {
      var item = null;

      if (typeof index === "undefined") {
        if (this.activeItemIndex === -1) {
          return;
        }

        item = this.items[this.activeItemIndex];
      } else {
        item = this.items[index];
      }

      this.hide();

      if (!item) {
        return;
      }

      if (this.onItemSelected) {
        this.onItemSelected(index);
      } else {
        this.onItemSelectedDefault(index);
      }
    },
    setItems: function setItems(items) {
      var _this3 = this;

      items = items ? items : this.items;
      this.showItems = items.map(function (item) {
        return {
          item: _this3.itemHandler(item),
          show: true
        };
      });
      this.activeItemIndex = -1;
    },
    onQueryChanged: function onQueryChanged(value) {
      var _this4 = this;

      this.show();

      if (this.onInputChange) {
        var result = this.onInputChange && this.onInputChange(value);

        if (typeof result === "undefined" || typeof result === "boolean" || result === null) {
          this.loading = false;
          return;
        }

        if (is_array_default()(result)) {
          this.setItems(result);
          this.loading = false;
        }

        if (typeof result.then === "function") {
          this.loading = true;
          result.then(function (items) {
            _this4.setItems(items);

            _this4.loading = false;
          });
        }
      } else {
        if (this.filterData) {
          this.showItems.forEach(function (item, index) {
            if (value) {
              if (typeof item.item == "string") {
                if (!item.item.includes(_this4.query)) {
                  item.show = false;
                } else {
                  item.show = true;
                }
              }
            } else {
              item.show = true;
            }
          });
        }

        this.loading = false;
      }
    }
  },
  watch: {
    query: function query(newValue, oldValue) {
      if (newValue === this.lastQuery) {
        this.lastQuery = null;
        return;
      }

      this.onQueryChanged(newValue);
      this.$emit("input", newValue);
    },
    value: function value(val) {
      this.query = val;
      this.lastQuery = val;
    },
    items: function items() {
      this.setItems(this.items);
    }
  },
  beforeMount: function beforeMount() {
    this.onQueryChanged = debounce_default()(this.onQueryChanged, this.debounce);
  },
  mounted: function mounted() {
    this.setItems();
  },
  directives: {
    UiHighlight: packages_highlight
  }
});
// CONCATENATED MODULE: ./packages/autocomplete/autocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var autocomplete_autocompletevue_type_script_lang_js_ = (autocompletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/autocomplete/autocomplete.vue





/* normalize component */

var autocomplete_component = Object(componentNormalizer["a" /* default */])(
  autocomplete_autocompletevue_type_script_lang_js_,
  autocompletevue_type_template_id_43821a97_render,
  autocompletevue_type_template_id_43821a97_staticRenderFns,
  false,
  null,
  null,
  null
  
)

autocomplete_component.options.__file = "autocomplete.vue"
/* harmony default export */ var autocomplete_autocomplete = (autocomplete_component.exports);
// CONCATENATED MODULE: ./packages/autocomplete/index.js



autocomplete_autocomplete.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.component(autocomplete_autocomplete.name, autocomplete_autocomplete);
};

/* harmony default export */ var packages_autocomplete = (autocomplete_autocomplete);
// CONCATENATED MODULE: ./packages/loading/loading.js



var loading_BackdropConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(backdrop_backdrop);


var loading_render = function render(_ref) {
  var el = _ref.el,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  options.showSpinner = true;
  el.loading = new backdrop_render({
    el: el,
    options: options
  });
};

/* harmony default export */ var loading = ({
  name: "ui-loading",
  inserted: function inserted(el, binding, vnode) {
    if (typeof_typeof(binding.value) == "object" || binding.value) {
      var options = typeof_typeof(binding.value) == "object" ? binding.value : {};

      if (binding.value) {
        loading_render({
          el: el,
          options: options
        });
      }
    }
  },
  update: function update(el, binding, vnode) {
    if (!binding.value && el.loading) {
      el.loading.backdrop.close();
      delete el.loading;
    }

    if (binding.value && !el.loading) {
      var options = typeof_typeof(binding.value) == "object" ? binding.value : {};
      loading_render({
        el: el,
        options: options
      });
    }
  },
  unbind: function unbind(el) {}
});
// CONCATENATED MODULE: ./packages/loading/index.js


loading.install = function (Vue, opt) {
  Vue.directive("ui-loading", loading);
};

/* harmony default export */ var packages_loading = (loading);
// CONCATENATED MODULE: ./packages/mask/mask.js



var mask_BackdropConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(backdrop_backdrop);


var mask_render = function render(_ref) {
  var el = _ref.el,
      options = _ref.options;
  el.mask = new backdrop_render({
    el: el,
    options: options
  });
};

var mask_makeOptions = function makeOptions(val) {
  if (typeof val == "string") {
    return {
      text: val
    };
  }

  if (typeof_typeof(val) == "object") {
    return val;
  }

  if (typeof val == "boolean") {
    return val ? {} : null;
  }
};

/* harmony default export */ var mask = ({
  name: "ui-mask",
  inserted: function inserted(el, binding, vnode) {
    if (binding.value) {
      mask_render({
        el: el,
        options: mask_makeOptions(binding.value)
      });
    }
  },
  update: function update(el, binding, vnode) {
    if (!binding.value && el.mask) {
      el.mask.backdrop.close();
      delete el.mask;
    }

    if (binding.value) {
      mask_render({
        el: el,
        options: mask_makeOptions(binding.value)
      });
    }
  },
  unbind: function unbind(el) {}
});
// CONCATENATED MODULE: ./packages/mask/index.js


mask.install = function (Vue, opt) {
  Vue.directive("ui-mask", mask);
};

/* harmony default export */ var packages_mask = (mask);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/confirm/confirm.vue?vue&type=template&id=25182503&
var confirmvue_type_template_id_25182503_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-modal',{attrs:{"confirm":""},on:{"modal-open":_vm.ConfirmOpen,"modal-close":_vm.ConfirmClose},model:{value:(_vm.isOpen),callback:function ($$v) {_vm.isOpen=$$v},expression:"isOpen"}},[(_vm.header || _vm.$slots.header)?_c('div',{staticClass:"ui-confirm-header"},[(_vm.header)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.header)}}):_vm._e(),_vm._t("header")],2):_vm._e(),(_vm.content || _vm.$slots.default)?_c('div',{staticClass:"ui-confirm-content"},[(_vm.content)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.content)}}):_vm._e(),_vm._t("default")],2):_vm._e(),_c('ui-button-group',{staticClass:"ui-confirm-buttons",attrs:{"size":"sm","gutter":""}},[_c('ui-button',{attrs:{"shadow":""},nativeOn:{"click":function($event){return _vm.clickConfirm($event)}}},[_vm._v(_vm._s(_vm.confirm))]),_c('ui-button',{attrs:{"shadow":"","type":"border"},nativeOn:{"click":function($event){return _vm.clickCancel($event)}}},[_vm._v(_vm._s(_vm.cancel))])],1)],1)}
var confirmvue_type_template_id_25182503_staticRenderFns = []


// CONCATENATED MODULE: ./packages/confirm/confirm.vue?vue&type=template&id=25182503&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/modal/modal.vue?vue&type=template&id=0796f7e5&
var modalvue_type_template_id_0796f7e5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.modalTransition}},[(_vm.isOpen)?_c('div',{staticClass:"ui-modal",class:_vm.classes,style:(_vm.styles)},[_c('div',{staticClass:"ui-modal-inner"},[_c('ui-icon',{staticClass:"ui-modal-close-icon",attrs:{"name":"close"},nativeOn:{"click":function($event){return _vm.closeModal($event)}}}),(_vm.header || _vm.$slots.header)?_c('div',{staticClass:"ui-modal-header"},[(_vm.header)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.header)}}):_vm._e(),_vm._t("header")],2):_vm._e(),(_vm.content || _vm.$slots.default)?_c('div',{staticClass:"ui-modal-content"},[(_vm.content)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.content)}}):_vm._e(),_vm._t("default")],2):_vm._e(),_c('div',{staticClass:"ui-modal-footer"},[(_vm.footer || _vm.$slots.footer)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.footer)}}):_vm._e(),(_vm.buttons.length)?_c('ui-button-group',{staticClass:"ui-modal-btn",attrs:{"size":"sm"}},_vm._l((_vm.buttons),function(btn){return _c('ui-button',{key:btn.text,attrs:{"type":btn.type},nativeOn:{"click":function($event){return (function () {
                btn.action && btn.action();
              })($event)}}},[_vm._v(_vm._s(btn.text))])}),1):_vm._e(),_vm._t("footer")],2)],1)]):_vm._e()])}
var modalvue_type_template_id_0796f7e5_staticRenderFns = []


// CONCATENATED MODULE: ./packages/modal/modal.vue?vue&type=template&id=0796f7e5&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/interopRequireWildcard.js
var interopRequireWildcard = __webpack_require__("8793");

// EXTERNAL MODULE: ./packages/assets/scss/modal.scss
var modal = __webpack_require__("6093");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/modal/modal.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  name: "ui-modal",
  data: function data() {
    return {
      cover: null,
      header: "",
      content: "",
      footer: "",
      buttons: [],
      isOpen: !!this.value
    };
  },
  components: {
    UiIcon: icon["a" /* default */],
    UiButtonGroup: button_group,
    UiButton: button_button
  },
  computed: {
    classes: function classes() {
      return [this.value && "ui-modal-active", this.confirm && "ui-confirm", this.size && "ui-modal-size-".concat(this.size)];
    },
    modalTransition: function modalTransition() {
      return "modal";
    },
    styles: function styles() {
      return [{
        zIndex: this.$zIndex.get()
      }];
    }
  },
  watch: {
    value: function value() {
      if (this.value) {
        this.openModal();
        this.isOpen = true;
        this.$zIndex.add();
      } else {
        this.closeModal();
        this.isOpen = false;
        this.$zIndex.remove();
      }
    }
  },
  props: {
    confirm: Boolean,
    zIndex: Number,
    showBackdrop: {
      type: Boolean,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    value: Boolean,
    showCloseIcon: {
      type: Boolean,
      default: true
    },
    backdropColor: String,
    disableScroll: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "sm"
    }
  },
  methods: {
    closeModal: function closeModal() {
      if (this.showBackdrop) {
        this.closeCover();
      }

      if (this.disableScroll) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }

      this.isOpen = false;
      this.$emit("input", false);
      this.$emit("modal-close");
    },
    openModal: function openModal() {
      if (this.showBackdrop) {
        this.openCover();
      }

      this.$emit("modal-open");
      document.body.appendChild(this.$el);

      if (this.disableScroll) {
        promise_default.a.resolve().then(function () {
          return Object(interopRequireWildcard["a" /* default */])(__webpack_require__("ec82"));
        }).then(function (module) {
          var scrollbarWidth = module.default();
          document.body.style.overflow = "hidden";

          if (scrollbarWidth > 0) {
            document.body.style.paddingRight = scrollbarWidth + "px";
          }
        });
      }
    },
    openCover: function openCover() {
      var _this = this;

      if (!this.cover) {
        this.cover = new backdrop_$UiCover({
          closeOnClick: this.closeOnClick,
          color: this.backdropColor,
          onClick: function onClick() {
            if (_this.closeOnClick) {
              _this.closeModal();
            }
          }
        });
      } else {
        this.cover.show = true;
      }
    },
    closeCover: function closeCover() {
      if (this.cover) {
        this.cover.show = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/modal/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/modal/modal.vue





/* normalize component */

var modal_component = Object(componentNormalizer["a" /* default */])(
  modal_modalvue_type_script_lang_js_,
  modalvue_type_template_id_0796f7e5_render,
  modalvue_type_template_id_0796f7e5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

modal_component.options.__file = "modal.vue"
/* harmony default export */ var modal_modal = (modal_component.exports);
// EXTERNAL MODULE: ./packages/assets/scss/confirm.scss
var scss_confirm = __webpack_require__("3279");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/confirm/confirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var confirmvue_type_script_lang_js_ = ({
  name: "ui-confirm",
  data: function data() {
    return {
      isOpen: this.value
    };
  },
  components: {
    UiModal: modal_modal,
    UiButton: button_button,
    UiButtonGroup: button_group
  },
  props: {
    value: Boolean,
    confirm: {
      type: String,
      default: "确认"
    },
    cancel: {
      type: String,
      default: "取消"
    },
    header: String,
    content: String,
    onConfirm: Function,
    onCancel: Function
  },
  methods: {
    ConfirmOpen: function ConfirmOpen() {
      this.$emit("input", true);
      this.$emit("confirm-open");
    },
    ConfirmClose: function ConfirmClose() {
      this.$emit("input", false);
      this.$emit("confirm-close");
    },
    clickConfirm: function clickConfirm() {
      if (this.onConfirm && typeof this.onConfirm == "function") {
        this.onConfirm();
      }

      this.$emit("confirm");
      this.isOpen = !this.isOpen;
    },
    clickCancel: function clickCancel() {
      if (this.onCancel && typeof this.onCancel == "function") {
        this.onCancel();
      }

      this.$emit("cancel");
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    value: function value(val) {
      this.isOpen = this.value;
    }
  }
});
// CONCATENATED MODULE: ./packages/confirm/confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var confirm_confirmvue_type_script_lang_js_ = (confirmvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/confirm/confirm.vue





/* normalize component */

var confirm_component = Object(componentNormalizer["a" /* default */])(
  confirm_confirmvue_type_script_lang_js_,
  confirmvue_type_template_id_25182503_render,
  confirmvue_type_template_id_25182503_staticRenderFns,
  false,
  null,
  null,
  null
  
)

confirm_component.options.__file = "confirm.vue"
/* harmony default export */ var confirm_confirm = (confirm_component.exports);
// CONCATENATED MODULE: ./packages/confirm/confirm.js


var ConfirmContrustor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(confirm_confirm);

var $Confirm = function $Confirm() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = {
    propsData: options
  };
  var confirm = new ConfirmContrustor(options);
  confirm.$mount();
  confirm.$props.value = true;
  document.body.appendChild(confirm.$el);
};

/* harmony default export */ var packages_confirm_confirm = ($Confirm);
// CONCATENATED MODULE: ./packages/confirm/index.js




confirm_confirm.install = function (Vue) {
  Vue.component(confirm_confirm.name, confirm_confirm);
};


// CONCATENATED MODULE: ./packages/modal/modal.js


var ModalContrustor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(modal_modal);

var $Modal = function $Modal() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = {
    data: options
  };
  var modal = new ModalContrustor(options);
  modal.$mount();
  modal.$props.value = true;
  document.body.appendChild(modal.$el);
};

/* harmony default export */ var packages_modal_modal = ($Modal);
// CONCATENATED MODULE: ./packages/modal/index.js




modal_modal.install = function (Vue) {
  Vue.component(modal_modal.name, modal_modal);
};


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__("b54a");

// CONCATENATED MODULE: ./src/utils/isValidDate.js
var isValidDate = function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
};

/* harmony default export */ var utils_isValidDate = (isValidDate);
// CONCATENATED MODULE: ./src/mixins/v/validators.js










/* harmony default export */ var validators = ({
  methods: {
    trigger: function trigger(_ref) {
      var _this = this;

      var name = _ref.name,
          value = _ref.value,
          rule = _ref.rule;
      return new promise_default.a(function (resolve, reject) {
        var type = rule.type;

        if (_this.builtinValidator.includes(type)) {
          _this["".concat(type, "Validate")]({
            name: name,
            rule: rule,
            value: value
          }).then(function () {
            resolve({
              name: name,
              message: rule.message
            });
          }).catch(function () {
            reject({
              name: name,
              message: rule.message
            });
          });
        } else if (typeof type == "function") {
          _this.costumFnValidate({
            name: name,
            fn: type,
            value: value
          }).then(function () {
            resolve({
              name: name,
              message: rule.message
            });
          }).catch(function (msg) {
            reject({
              name: name,
              message: msg || rule.message
            });
          });
        } else if (typeof type == "string" || type instanceof RegExp && type.constructor == RegExp) {
          var re = type instanceof RegExp && type.constructor == RegExp ? type : new RegExp(type);

          _this.costumReValidate({
            name: name,
            re: re,
            value: value
          }).then(function () {
            resolve({
              name: name,
              message: rule.message
            });
          }).catch(function () {
            reject({
              name: name,
              message: rule.message
            });
          });
        } else {
          throw new Error("unsupported validate type");
        }
      });
    },
    costumFnValidate: function costumFnValidate(_ref2) {
      var name = _ref2.name,
          fn = _ref2.fn,
          value = _ref2.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        var f = fn(value);

        if (f.then && typeof f.then == "function") {
          f.then(function () {
            resolve();
          }).catch(function (msg) {
            reject(msg);
          });
        } else {
          if (f) {
            resolve();
          } else {
            reject();
          }
        }
      });
    },
    costumReValidate: function costumReValidate(_ref3) {
      var name = _ref3.name,
          re = _ref3.re,
          value = _ref3.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        if (re.test(value)) {
          resolve();
        } else {
          reject();
        }
      });
    },
    requiredValidate: function requiredValidate(_ref4) {
      var name = _ref4.name,
          rule = _ref4.rule,
          value = _ref4.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          reject();
        } else {
          resolve();
        }
      });
    },
    numberValidate: function numberValidate(_ref5) {
      var name = _ref5.name,
          rule = _ref5.rule,
          value = _ref5.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        if (!Number(value)) {
          reject();
        } else {
          resolve();
        }
      });
    },
    emailValidate: function emailValidate(_ref6) {
      var name = _ref6.name,
          rule = _ref6.rule,
          value = _ref6.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        if (validator["email"].test(value)) {
          resolve();
        } else {
          reject();
        }
      });
    },
    minLengthValidate: function minLengthValidate(_ref7) {
      var name = _ref7.name,
          rule = _ref7.rule,
          value = _ref7.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        if (value.length < rule.length) {
          reject();
        } else {
          resolve();
        }
      });
    },
    maxLengthValidate: function maxLengthValidate(_ref8) {
      var name = _ref8.name,
          rule = _ref8.rule,
          value = _ref8.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        if (value.length > rule.length) {
          reject();
        } else {
          resolve();
        }
      });
    },
    linkValidate: function linkValidate(_ref9) {
      var name = _ref9.name,
          rule = _ref9.rule,
          value = _ref9.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        if (validator["link"].test(value)) {
          resolve();
        } else {
          reject();
        }
      });
    },
    arrayValidate: function arrayValidate(_ref10) {
      var name = _ref10.name,
          rule = _ref10.rule,
          value = _ref10.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        if (is_array_default()(value)) {
          resolve();
        } else {
          reject();
        }
      });
    },
    dateValidate: function dateValidate(_ref11) {
      var name = _ref11.name,
          rule = _ref11.rule,
          value = _ref11.value;
      return new promise_default.a(function (resolve, reject) {
        if (!value) {
          resolve();
          return;
        }

        if (utils_isValidDate(value)) {
          resolve();
        } else {
          reject();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/v/error.vue?vue&type=template&id=35da741c&
var errorvue_type_template_id_35da741c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default"),_c('ui-height-transition',[(_vm.errorArr && _vm.errorArr.length)?_c('div',{staticClass:"ui-v-error-list"},_vm._l((_vm.errorArr),function(error){return _c('span',{key:error.message},[_vm._v(_vm._s(error.message)+" "),_c('em',[_vm._v(", ")])])}),0):_vm._e()])],2)}
var errorvue_type_template_id_35da741c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/v/error.vue?vue&type=template&id=35da741c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/v/error.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  name: "ui-v-error",
  components: {
    UiHeightTransition: height_transition_height_transition
  },
  props: {
    errors: Array,
    name: String
  },
  computed: {
    errorArr: function errorArr() {
      var _this = this;

      return this.errors.filter(function (error) {
        return error.name == _this.name;
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/v/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var v_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/v/error.vue?vue&type=style&index=0&lang=css&
var errorvue_type_style_index_0_lang_css_ = __webpack_require__("3209");

// CONCATENATED MODULE: ./packages/v/error.vue






/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  v_errorvue_type_script_lang_js_,
  errorvue_type_template_id_35da741c_render,
  errorvue_type_template_id_35da741c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

error_component.options.__file = "error.vue"
/* harmony default export */ var v_error = (error_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/v/v.vue?vue&type=script&lang=js&












/* harmony default export */ var vvue_type_script_lang_js_ = ({
  name: "ui-v",
  data: function data() {
    return {
      fields: {},
      errors: [],
      inited: false,
      supportedTrigger: ["input", "blur", "focus", "keyup", "keydown", "submit", "change"],
      builtinValidator: ["email", "required", "number", "minLength", "maxLength", "link", "array", "date"]
    };
  },
  mixins: [validators],
  components: {
    Error: v_error
  },
  props: {
    rules: Object
  },
  methods: {
    parseFileds: function parseFileds() {
      var _this = this;

      var rulesKey = keys_default()(this.rules);

      this.$slots.default.forEach(function (field) {
        if (field.componentInstance && field.componentInstance.name && rulesKey.includes(field.componentInstance.name)) {
          _this.applyRules(field.componentInstance);

          _this.fields[field.componentInstance.name] = field.componentInstance;
        }
      });
    },
    applyRules: function applyRules(instance) {
      var _this2 = this;

      var rules = this.rules[instance.name];

      if (rules) {
        rules.forEach(function (rule) {
          if (!rule.trigger || !rule.type || !rule.message) {
            throw new v_error("rule must have trigger/type/message");
          }

          if (!_this2.supportedTrigger.includes(rule.trigger)) {
            throw new v_error("only support triggers: " + _this2.supportedTrigger.join(","));
          }

          if (rule.trigger !== "submit") {
            instance.$on(rule.trigger, function (val) {
              var name = instance.name;

              _this2.validateStart({
                name: name
              });

              var value = instance.$el.querySelector("[name=\"".concat(name, "\"]")).value;

              _this2.$nextTick(function () {
                _this2.trigger({
                  name: name,
                  value: value,
                  rule: rule
                }).then(function (_ref) {
                  var name = _ref.name,
                      message = _ref.message;

                  _this2.removeError({
                    name: name,
                    message: message
                  });
                }).catch(function (_ref2) {
                  var name = _ref2.name,
                      message = _ref2.message;

                  _this2.parseError({
                    name: name,
                    message: message
                  });
                });
              });
            });
          }

          instance.$on("clear", function () {
            _this2.clearErrors(instance.name);
          });
          instance.$on("focus", function (value) {
            if (!value) {
              instance.errors = false;

              _this2.clearErrors(instance.name);
            }
          });
        });
      }
    },
    validate: function validate() {
      var _this3 = this;

      return new promise_default.a(function (resolve, reject) {
        var promises = [];
        var results = [];
        var errors = [];

        keys_default()(_this3.rules).forEach(function (name) {
          var instance = _this3.fields[name];

          if (_this3.fields[name]) {
            _this3.rules[name].forEach(function (rule) {
              var value;

              if (instance.$el.querySelector("input")) {
                value = instance.$el.querySelector("input").value;
              } else if (instance.$el.querySelector("textarea")) {
                value = instance.$el.querySelector("textarea").value;
              } else {
                value = instance.value;
              }

              promises.push(_this3.trigger({
                name: name,
                rule: rule,
                value: value
              }));
            });
          } else {
            resolve();
          }
        });

        _this3.validateStart({
          name: keys_default()(_this3.rules)
        });

        var reflect = function reflect(p) {
          return p.then(function (v) {
            return {
              v: v,
              status: "fulfilled"
            };
          }, function (e) {
            return {
              e: e,
              status: "rejected"
            };
          });
        };

        promise_default.a.all(promises.map(reflect)).then(function (v) {
          var errors = [];
          v.forEach(function (item) {
            if (item.status == "rejected") {
              errors.push(item.e);

              _this3.parseError(item.e);
            } else {
              _this3.removeError(item.v);
            }
          });

          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
    },
    parseError: function parseError(_ref3) {
      var name = _ref3.name,
          message = _ref3.message;
      var instance = this.fields[name];

      if (instance) {
        instance.errors = true;
      }

      var exist = this.errors.some(function (error) {
        return isObjectEqual(error, {
          name: name,
          message: message
        });
      });

      if (!exist) {
        this.errors.push({
          name: name,
          message: message
        });
      }

      this.$emit("add-error", {
        name: name,
        message: message
      });
    },
    removeError: function removeError(_ref4) {
      var _this4 = this;

      var name = _ref4.name,
          message = _ref4.message;
      var instance = this.fields[name];
      this.errors.forEach(function (error, index) {
        if (isObjectEqual(error, {
          name: name,
          message: message
        })) {
          _this4.errors.splice(index, 1);
        }
      });
      var exist = this.errors.some(function (error) {
        return isObjectEqual(error, {
          name: name,
          message: message
        });
      });

      if (!exist) {
        instance.errors = false;
      }

      this.$emit("remove-error", {
        name: name,
        message: message
      });
    },
    clearErrors: function clearErrors(name) {
      this.errors = this.errors.filter(function (item) {
        return item.name !== name;
      });
      this.$emit("clear-errors");
    },
    validateStart: function validateStart(_ref5) {
      var name = _ref5.name;
      this.$emit("validate-start", name);
    },
    validateFinish: function validateFinish(_ref6) {
      var name = _ref6.name,
          message = _ref6.message,
          errors = _ref6.errors;
      this.$emit("validate-finish", {
        name: name,
        message: message,
        errors: errors
      });
    },
    isInstance: function isInstance(item) {
      return item && item.componentOptions && item.componentOptions.propsData && item.componentOptions.propsData.name;
    }
  },
  mounted: function mounted() {
    if (this.$slots.default.length) {
      this.parseFileds();
    } else {
      throw new v_error("why?");
    }
  },
  render: function render(h) {
    var _this5 = this;

    return h("div", {
      "class": "ui-v"
    }, [this.$slots.default.map(function (item) {
      return _this5.isInstance(item) ? h(v_error, {
        attrs: {
          errors: _this5.errors,
          name: _this5.isInstance(item)
        }
      }, [item]) : item;
    })]);
  }
});
// CONCATENATED MODULE: ./packages/v/v.vue?vue&type=script&lang=js&
 /* harmony default export */ var v_vvue_type_script_lang_js_ = (vvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/v/v.vue
var v_render, v_staticRenderFns




/* normalize component */

var v_component = Object(componentNormalizer["a" /* default */])(
  v_vvue_type_script_lang_js_,
  v_render,
  v_staticRenderFns,
  false,
  null,
  null,
  null
  
)

v_component.options.__file = "v.vue"
/* harmony default export */ var v = (v_component.exports);
// CONCATENATED MODULE: ./packages/v/index.js



v.install = function (Vue) {
  Vue.component(v.name, v);
};

/* harmony default export */ var packages_v = (v);
// CONCATENATED MODULE: ./packages/progress/index.js



progress_progress.install = function (Vue) {
  Vue.component(progress_progress.name, progress_progress);
};

/* harmony default export */ var packages_progress = (progress_progress);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.repeat.js
var es6_string_repeat = __webpack_require__("14b9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/marquee/marquee.vue?vue&type=script&lang=js&



/* harmony default export */ var marqueevue_type_script_lang_js_ = ({
  name: "ui-marquee",
  functional: true,
  props: {
    duration: {
      type: Number,
      default: 15
    },
    repeat: {
      type: Number,
      default: 2,
      validator: function validator(val) {
        return val >= 2;
      }
    },
    paused: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h, _ref) {
    var $style = _ref.$style,
        _ref$props = _ref.props,
        duration = _ref$props.duration,
        repeat = _ref$props.repeat,
        paused = _ref$props.paused,
        children = _ref.children,
        _ref$data = _ref.data,
        staticClass = _ref$data.staticClass,
        key = _ref$data.key;
    var text = h("div", {
      class: $style.text,
      style: {
        animationDuration: "".concat(duration, "s")
      }
    }, children);
    return h("div", {
      key: key,
      class: [staticClass, $style.wrap]
    }, [h("div", {
      class: [paused ? $style.paused : undefined, $style.content]
    }, Array(repeat).fill(text))]);
  }
});
// CONCATENATED MODULE: ./packages/marquee/marquee.vue?vue&type=script&lang=js&
 /* harmony default export */ var marquee_marqueevue_type_script_lang_js_ = (marqueevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/marquee/marquee.vue?vue&type=style&index=0&module=true&lang=css&
var marqueevue_type_style_index_0_module_true_lang_css_ = __webpack_require__("db0f");

// CONCATENATED MODULE: ./packages/marquee/marquee.vue
var marquee_render, marquee_staticRenderFns







function injectStyles (context) {
  
  this["$style"] = (marqueevue_type_style_index_0_module_true_lang_css_["default"].locals || marqueevue_type_style_index_0_module_true_lang_css_["default"])

}

/* normalize component */

var marquee_component = Object(componentNormalizer["a" /* default */])(
  marquee_marqueevue_type_script_lang_js_,
  marquee_render,
  marquee_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  
)

marquee_component.options.__file = "marquee.vue"
/* harmony default export */ var marquee = (marquee_component.exports);
// CONCATENATED MODULE: ./packages/marquee/index.js



marquee.install = function (Vue) {
  Vue.component(marquee.name, marquee);
};

/* harmony default export */ var packages_marquee = (marquee);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/share/share.vue?vue&type=template&id=d3fa0e4e&scoped=true&
var sharevue_type_template_id_d3fa0e4e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"share-btn",staticClass:"ui-share",on:{"click":_vm.doShare}},[_vm._t("default")],2)}
var sharevue_type_template_id_d3fa0e4e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/share/share.vue?vue&type=template&id=d3fa0e4e&scoped=true&

// CONCATENATED MODULE: ./packages/share/share.js

var templates = {
  weibo: "https://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",
  wechat: "javascript:",
  douban: "http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",
  linkedin: "http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",
  facebook: "https://www.facebook.com/sharer/sharer.php?u={{URL}}",
  twitter: "https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",
  google: "https://plus.google.com/share?url={{URL}}"
};

var makeUrl = function makeUrl(_ref) {
  var site = _ref.site,
      data = _ref.data;

  if (!data["summary"]) {
    data["summary"] = data["description"];
  }

  return templates[site].replace(/\{\{(\w)(\w*)\}\}/g, function (m, fix, key) {
    var nameKey = site + fix + key.toLowerCase();
    key = (fix + key).toLowerCase();
    return encodeURIComponent((data[nameKey] === undefined ? data[key] : data[nameKey]) || "");
  });
};


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/share/share.vue?vue&type=script&lang=js&


//
//
//

/* harmony default export */ var sharevue_type_script_lang_js_ = ({
  name: "ui-share",
  data: function data() {
    return {
      wechatQrcode: "",
      wechatQrcodeTitle: "微信扫一扫：分享"
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    site: {
      type: String,
      required: true
    }
  },
  methods: {
    wechatContent: function wechatContent(url) {
      return "\n       <p>".concat(this.wechatQrcodeTitle, "</p>\n       <p><img src=\"").concat(url, "\" /></p>\n     ");
    },
    doShare: function doShare() {
      var _this = this;

      if (this.site !== "wechat") {
        var shareLink = makeUrl({
          site: this.site,
          data: this.data
        });
        window.open(shareLink);
      } else {
        if (!this.data.qrcode && this.data.url) {
          promise_default.a.resolve().then(function () {
            return Object(interopRequireWildcard["a" /* default */])(__webpack_require__("d055"));
          }).then(function (module) {
            return module.default.toDataURL(_this.data.url);
          }).then(function (base64) {
            _this.wechatQrcode = base64;
            return promise_default.a.resolve().then(function () {
              return Object(interopRequireWildcard["a" /* default */])(__webpack_require__("51a1"));
            });
          }).then(function (module) {
            var Popover = module.default;
            new Popover({
              trigger: _this.$refs["share-btn"],
              content: _this.wechatContent(_this.wechatQrcode),
              textAlign: "center"
            });
          }).catch(function (err) {
            console.error(err);
          });
        }

        if (this.data.qrcode && !this.data.url) {
          promise_default.a.resolve().then(function () {
            return Object(interopRequireWildcard["a" /* default */])(__webpack_require__("51a1"));
          }).then(function (module) {
            var Popover = module.default;
            new Popover({
              trigger: _this.$refs["share-btn"],
              content: _this.wechatContent(_this.data.qrcode),
              textAlign: "center"
            });
          }).catch(function (err) {
            console.error(err);
          });
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/share/share.vue?vue&type=script&lang=js&
 /* harmony default export */ var share_sharevue_type_script_lang_js_ = (sharevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/share/share.vue?vue&type=style&index=0&id=d3fa0e4e&scoped=true&lang=css&
var sharevue_type_style_index_0_id_d3fa0e4e_scoped_true_lang_css_ = __webpack_require__("bc16");

// CONCATENATED MODULE: ./packages/share/share.vue






/* normalize component */

var share_component = Object(componentNormalizer["a" /* default */])(
  share_sharevue_type_script_lang_js_,
  sharevue_type_template_id_d3fa0e4e_scoped_true_render,
  sharevue_type_template_id_d3fa0e4e_scoped_true_staticRenderFns,
  false,
  null,
  "d3fa0e4e",
  null
  
)

share_component.options.__file = "share.vue"
/* harmony default export */ var share = (share_component.exports);
// CONCATENATED MODULE: ./packages/share/index.js



share.install = function (Vue) {
  Vue.component(share.name, share);
};

/* harmony default export */ var packages_share = (share);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/typer/typer.vue?vue&type=template&id=b82cf0c6&scoped=true&
var typervue_type_template_id_b82cf0c6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-typer"},[_c('transition-group',{attrs:{"appear":"","name":"fade"}},_vm._l((_vm.words),function(letter,index){return _c('span',{key:index + '-' + letter,staticClass:"ui-typer-item"},[_vm._v(_vm._s(letter))])}),0),(_vm.cursor)?_c('span',{staticClass:"ui-typer-cursor"},[_vm._v(_vm._s(_vm.cursor))]):_vm._e()],1)}
var typervue_type_template_id_b82cf0c6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/typer/typer.vue?vue&type=template&id=b82cf0c6&scoped=true&

// EXTERNAL MODULE: ./packages/assets/scss/typer.scss
var typer = __webpack_require__("ead3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/typer/typer.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var typervue_type_script_lang_js_ = ({
  name: "ui-typer",
  data: function data() {
    return {
      timer: null,
      index: 0
    };
  },
  props: {
    content: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 4,
      validator: function validator(value) {
        return value > 1 && value < 5;
      }
    },
    loop: Boolean,
    loopDelay: {
      type: Number,
      default: 1000
    },
    cursor: {
      type: String
    }
  },
  computed: {
    words: function words() {
      return this.content.slice(0, this.index + 1);
    },
    isTyping: function isTyping() {
      return !!this.timer;
    }
  },
  methods: {
    start: function start() {
      var _this = this;

      this.timer = setInterval(function () {
        _this.index++;
      }, 1000 / this.speed);
    },
    stop: function stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    back: function back() {
      var _this2 = this;

      this.timer = setInterval(function () {
        if (_this2.index == 0) {
          _this2.stop();

          _this2.start();

          return;
        }

        _this2.index--;
      }, 1000 / this.speed);
    }
  },
  watch: {
    index: function index(val) {
      var _this3 = this;

      if (val == this.content.length) {
        if (this.loop) {
          this.stop();
          setTimeout(function () {
            _this3.back();

            _this3.$emit("back");
          }, this.loopDelay);
        } else {
          this.stop();
          this.$emit("stop");
        }
      }
    }
  },
  mounted: function mounted() {
    this.start();
  }
});
// CONCATENATED MODULE: ./packages/typer/typer.vue?vue&type=script&lang=js&
 /* harmony default export */ var typer_typervue_type_script_lang_js_ = (typervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/typer/typer.vue?vue&type=style&index=0&id=b82cf0c6&lang=css&scoped=true&
var typervue_type_style_index_0_id_b82cf0c6_lang_css_scoped_true_ = __webpack_require__("c18e");

// CONCATENATED MODULE: ./packages/typer/typer.vue






/* normalize component */

var typer_component = Object(componentNormalizer["a" /* default */])(
  typer_typervue_type_script_lang_js_,
  typervue_type_template_id_b82cf0c6_scoped_true_render,
  typervue_type_template_id_b82cf0c6_scoped_true_staticRenderFns,
  false,
  null,
  "b82cf0c6",
  null
  
)

typer_component.options.__file = "typer.vue"
/* harmony default export */ var typer_typer = (typer_component.exports);
// CONCATENATED MODULE: ./packages/typer/index.js



typer_typer.install = function (Vue) {
  Vue.component(typer_typer.name, typer_typer);
};

/* harmony default export */ var packages_typer = (typer_typer);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/carousel/carousel.vue?vue&type=template&id=997c1e12&
var carouselvue_type_template_id_997c1e12_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items.length)?_c('div',{ref:"container",staticClass:"ui-carousel-wrapper"},[_c('div',{staticClass:"ui-carousel"},[_c('div',{staticClass:"ui-carousel-overflow",style:(_vm.expandStyles)},[_c('div',{staticClass:"ui-carousel-items",style:(_vm.listStyles)},_vm._l((_vm.items),function(item,idx){return _c('ui-carousel-item',{key:idx,class:{ 'ui-carousel-item-active': _vm.index == idx },style:(_vm.itemStyles),attrs:{"index":idx,"item":item}})}),1)])]),(_vm.navStyle == 'arrow')?_c('div',{staticClass:"ui-carousel-nav-item ui-carousel-arrow-left",attrs:{"disabled":_vm.atHead},on:{"click":function($event){_vm.moveCarousel(-1)}}},[_c('ui-icon',{attrs:{"name":"left"}})],1):_vm._e(),(_vm.navStyle == 'arrow')?_c('div',{staticClass:"ui-carousel-nav-item ui-carousel-arrow-right",attrs:{"disabled":_vm.atEnd},on:{"click":function($event){_vm.moveCarousel(1)}}},[_c('ui-icon',{attrs:{"name":"right"}})],1):_vm._e(),(_vm.navStyle == 'bar')?_c('div',{staticClass:"ui-carousel-navbar"},_vm._l((_vm.items),function(item,idx){return _c('span',{key:idx,staticClass:"ui-carousel-navbar-bar",class:{ 'ui-carousel-navbar-bar-active': _vm.index == idx },on:{"click":function($event){_vm.barClick(idx)}}})}),0):_vm._e()]):_vm._e()}
var carouselvue_type_template_id_997c1e12_staticRenderFns = []


// CONCATENATED MODULE: ./packages/carousel/carousel.vue?vue&type=template&id=997c1e12&

// EXTERNAL MODULE: ./packages/assets/scss/carousel.scss
var carousel = __webpack_require__("d6c2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/carousel/carousel-item.vue?vue&type=script&lang=js&

/* harmony default export */ var carousel_itemvue_type_script_lang_js_ = ({
  name: "ui-carousel-item",
  data: function data() {
    return {
      width: ""
    };
  },
  props: {
    item: Object,
    index: Number
  },
  render: function render(h) {
    return this.item.tag ? h("div", {
      ref: "item",
      "class": "ui-carousel-item"
    }, [this.item]) : "";
  }
});
// CONCATENATED MODULE: ./packages/carousel/carousel-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_carousel_itemvue_type_script_lang_js_ = (carousel_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/carousel/carousel-item.vue
var carousel_item_render, carousel_item_staticRenderFns




/* normalize component */

var carousel_item_component = Object(componentNormalizer["a" /* default */])(
  carousel_carousel_itemvue_type_script_lang_js_,
  carousel_item_render,
  carousel_item_staticRenderFns,
  false,
  null,
  null,
  null
  
)

carousel_item_component.options.__file = "carousel-item.vue"
/* harmony default export */ var carousel_item = (carousel_item_component.exports);
// CONCATENATED MODULE: ./src/utils/touchHandler.js
var touches = {
  touchstart: {
    x: -1,
    y: -1
  },
  touchmove: {
    x: -1,
    y: -1
  },
  touchend: false,
  direction: "undetermined"
};

var touchHandler = function touchHandler(_ref) {
  var event = _ref.event,
      _ref$axis = _ref.axis,
      axis = _ref$axis === void 0 ? "x" : _ref$axis;
  var touch;

  if (typeof event !== "undefined") {
    event.preventDefault();

    if (typeof event.touches !== "undefined") {
      touch = event.touches[0];

      switch (event.type) {
        case "touchstart":
        case "touchmove":
          touches[event.type].x = touch.pageX;
          touches[event.type].y = touch.pageY;
          break;

        case "touchend":
          touches[event.type] = true;

          if (axis == "x") {
            if (touches.touchstart.x > -1 && touches.touchmove.x > -1) {
              touches.direction = touches.touchstart.x < touches.touchmove.x ? "right" : "left";
              return touches.direction;
            }
          } else {
            if (touches.touchstart.y > -1 && touches.touchmove.y > -1) {
              touches.direction = touches.touchstart.y < touches.touchmove.y ? "down" : "up";
              return touches.direction;
            }
          }

          break;

        default:
          break;
      }
    }
  }
};

/* harmony default export */ var utils_touchHandler = (touchHandler);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/carousel/carousel.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var carouselvue_type_script_lang_js_ = ({
  name: "ui-carousel",
  data: function data() {
    return {
      inited: false,
      currentOffset: 0,
      items: [],
      index: 0,
      timer: null // list: [],
      // pull: {
      //   from: -1,
      //   to: -1,
      //   distance: 0,
      //   type: null,
      //   available: false
      // },

    };
  },
  components: {
    UiCarouselItem: carousel_item,
    UiIcon: icon["a" /* default */]
  },
  props: {
    scrollCount: {
      type: Number,
      default: 1
    },
    navStyle: String,
    touch: {
      type: Boolean,
      default: true
    },
    auto: Boolean,
    delay: {
      type: Number,
      default: 2000
    },
    loop: Boolean,
    expand: Number,
    // 解决overflow可能盖住元素阴影或其他效果的可能
    fullWidth: Boolean
  },
  computed: {
    expandStyles: function expandStyles() {
      return {
        padding: this.expand + "px",
        width: "calc(100% + ".concat(this.expand, "px)"),
        margin: -this.expand + "px"
      };
    },
    listStyles: function listStyles() {
      return {
        transform: "translateX" + "(" + this.currentOffset + "px" + ")"
      };
    },
    itemStyles: function itemStyles() {
      return {
        marginRight: this.gutter + "px"
      };
    },
    atEnd: function atEnd() {
      return this.index == this.items.length - 1;
    },
    atHead: function atHead() {
      return this.index == 0;
    }
  },
  watch: {
    index: function index(val) {
      this.currentOffset = -this.getOffset(this.index);
      this.$emit("change", val);
    }
  },
  methods: {
    getOffset: function getOffset(index) {
      var list = Array.prototype.slice.call(this.$el.querySelectorAll(".ui-carousel-item"), 0, index);
      list = list.map(function (item, index) {
        return item.clientWidth;
      });
      return list.reduce(function (a, b) {
        return a + b;
      }, 0);
    },
    moveCarousel: function moveCarousel(direction) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scrollCount;

      if (direction === 1 && !this.atEnd) {
        this.index += count;

        if (this.index > this.items.length - 1) {
          this.index = this.items.length - 1;
        }
      } else if (direction === -1 && !this.atHead) {
        this.index -= count;

        if (this.index < 0) {
          this.index = 0;
        }
      }
    },
    renderItems: function renderItems() {
      this.items = this.$slots.default.filter(function (item) {
        return item.tag;
      });

      if (this.fullWidth) {
        this.setWidth();
      } // this.renderContainer()

    },
    setWidth: function setWidth() {
      var _this = this;

      this.$nextTick(function () {
        var width = _this.$el.offsetWidth;
        Array.prototype.forEach.call(_this.$el.querySelectorAll(".ui-carousel-item > *"), function (item) {
          item.style.width = width + "px";
        });
      });
    },
    renderContainer: function renderContainer() {},
    bindEvents: function bindEvents() {
      window.addEventListener("resize", this.setWidth);
    },
    unBindEvents: function unBindEvents() {
      window.removeEventListener("resize", this.setWidth);
    },
    barClick: function barClick(index) {
      this.index = index;
    },
    startAuto: function startAuto() {
      var _this2 = this;

      this.timer = setInterval(function () {
        if (_this2.index < _this2.items.length - _this2.scrollCount) {
          _this2.moveCarousel(1);
        } else {
          clearInterval(_this2.timer);
          _this2.timer = null;

          if (_this2.loop) {
            _this2.back();
          }
        }
      }, this.delay);
    },
    back: function back() {
      var _this3 = this;

      this.timer = setInterval(function () {
        if (_this3.index <= _this3.scrollCount) {
          clearInterval(_this3.timer);

          _this3.startAuto();
        }

        _this3.moveCarousel(-1);
      }, this.delay);
    },
    handleTouchStart: function handleTouchStart(event) {
      utils_touchHandler({
        event: event
      });
    },
    handleTouchMove: function handleTouchMove(event) {
      utils_touchHandler({
        event: event
      });
    },
    handleTouchEnd: function handleTouchEnd(event) {
      if (utils_touchHandler({
        event: event
      }) == "left") {
        this.moveCarousel(1);
      }

      if (utils_touchHandler({
        event: event
      }) == "right") {
        this.moveCarousel(-1);
      }
    },
    bindTouchEvents: function bindTouchEvents() {
      this.$refs["container"].addEventListener("touchstart", this.handleTouchStart);
      this.$refs["container"].addEventListener("touchmove", this.handleTouchMove);
      this.$refs["container"].addEventListener("touchend", this.handleTouchEnd);
    },
    unBindTouchEvents: function unBindTouchEvents() {
      this.$refs["container"].removeEventListener("touchstart", this.handleTouchStart);
      this.$refs["container"].removeEventListener("touchmove", this.handleTouchMove);
      this.$refs["container"].removeEventListener("touchend", this.handleTouchEnd);
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.renderItems();
    this.$nextTick(function () {
      if (_this4.touch) {
        _this4.bindTouchEvents();

        _this4.inited = true;
      }

      if (_this4.auto) {
        _this4.startAuto();
      }

      _this4.bindEvents();
    });
  },
  activated: function activated() {
    if (this.touch && this.inited) {
      this.bindTouchEvents();
    }

    if (this.inited) {
      this.bindEvents();
    }
  },
  deactivated: function deactivated() {
    if (this.touch) {
      this.unBindTouchEvents();
    }

    this.unBindEvents();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.touch) {
      this.unBindTouchEvents();
    }

    this.unBindEvents();
  },
  beforeMount: function beforeMount() {
    this.setWidth = debounce_default()(this.setWidth, 100);
  }
});
// CONCATENATED MODULE: ./packages/carousel/carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_carouselvue_type_script_lang_js_ = (carouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/carousel/carousel.vue





/* normalize component */

var carousel_component = Object(componentNormalizer["a" /* default */])(
  carousel_carouselvue_type_script_lang_js_,
  carouselvue_type_template_id_997c1e12_render,
  carouselvue_type_template_id_997c1e12_staticRenderFns,
  false,
  null,
  null,
  null
  
)

carousel_component.options.__file = "carousel.vue"
/* harmony default export */ var carousel_carousel = (carousel_component.exports);
// CONCATENATED MODULE: ./packages/carousel/index.js



carousel_carousel.install = function (Vue) {
  Vue.component(carousel_carousel.name, carousel_carousel);
};

/* harmony default export */ var packages_carousel = (carousel_carousel);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/countdown/countdown.vue?vue&type=template&id=74106fd2&
var countdownvue_type_template_id_74106fd2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-countdown",class:[("ui-countdown-theme-" + _vm.theme)]},[(_vm.second)?_c('span',{staticClass:"ui-countdown-second"},[_vm._v(_vm._s(_vm.sec))]):_vm._e(),(_vm.date)?_c('div',{staticClass:"ui-countdown-date"},[(_vm.showDays)?_c('div',{staticClass:"ui-countdown-date-d"},[_vm._v("\n      "+_vm._s(_vm.days)),_vm._t("day",[_c('span',{staticClass:"ui-countdown-date-unit"},[_vm._v("天")])])],2):_vm._e(),(_vm.showHours)?_c('div',{staticClass:"ui-countdown-date-h"},[_vm._v("\n      "+_vm._s(_vm.hours)),_vm._t("hour",[_c('span',{staticClass:"ui-countdown-date-unit"},[_vm._v("小时")])])],2):_vm._e(),(_vm.showMinutes)?_c('div',{staticClass:"ui-countdown-date-m"},[_vm._v("\n      "+_vm._s(_vm.minutes)),_vm._t("minute",[_c('span',{staticClass:"ui-countdown-date-unit"},[_vm._v("分")])])],2):_vm._e(),(_vm.showSeconds)?_c('div',{staticClass:"ui-countdown-date-s"},[_vm._v("\n      "+_vm._s(_vm.seconds)),_vm._t("second",[_c('span',{staticClass:"ui-countdown-date-unit"},[_vm._v("秒")])])],2):_vm._e(),(_vm.showMs)?_c('div',{staticClass:"ui-countdown-date-ms"},[_vm._v("\n      "+_vm._s(_vm.ms)),_vm._t("ms",[_c('span',{staticClass:"ui-countdown-date-unit"})])],2):_vm._e()]):_vm._e(),_vm._t("default")],2)}
var countdownvue_type_template_id_74106fd2_staticRenderFns = []


// CONCATENATED MODULE: ./packages/countdown/countdown.vue?vue&type=template&id=74106fd2&

// EXTERNAL MODULE: ./packages/assets/scss/coutdown.scss
var coutdown = __webpack_require__("ab8a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/countdown/countdown.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var countdownvue_type_script_lang_js_ = ({
  name: "ui-countdown",
  data: function data() {
    return {
      sec: "",
      timer: null,
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      ms: "00",
      endDate: "",
      startDate: ""
    };
  },
  props: {
    second: Number,
    date: [Date, String],
    delay: {
      type: Number,
      default: 1000
    },
    showDays: {
      type: Boolean,
      default: true
    },
    showHours: {
      type: Boolean,
      default: true
    },
    showMinutes: {
      type: Boolean,
      default: true
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    showMs: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      validator: function validator(val) {
        return ["card", "flip"].includes(val);
      }
    }
  },
  computed: {},
  methods: {
    start: function start() {
      if (this.second) {
        this.startSecond();
      }

      if (this.date) {
        this.endDate = new Date(this.date).getTime();

        if (isNaN(this.endDate)) {
          return;
        }

        if (typeof this.date == "string") {
          this.startCountDate();
        } else {
          this.startCountDate();
        }
      }

      this.$emit("start");
    },
    stop: function stop() {
      clearInterval(this.timer);
      this.timer = null;
      this.$emit("stop");
    },
    startSecond: function startSecond() {
      var _this = this;

      this.sec = this.second;
      clearInterval(this.timer);
      this.timer = setInterval(function () {
        _this.sec--;

        if (_this.sec <= 0) {
          _this.stop();
        }
      }, this.delay);
    },
    parseFormat: function parseFormat() {},
    startCountDate: function startCountDate() {
      setInterval(this.calculate, this.delay);
    },
    calculate: function calculate() {
      var start = new Date();
      this.startDate = start.getTime();

      var timeRemaining = parse_int_default()((this.endDate - this.startDate) / 10);

      if (timeRemaining >= 0) {
        this.days = parse_int_default()(timeRemaining / 8640000);
        timeRemaining = timeRemaining % 8640000;
        this.hours = parse_int_default()(timeRemaining / 360000);
        timeRemaining = timeRemaining % 360000;
        this.minutes = parse_int_default()(timeRemaining / 6000);
        timeRemaining = timeRemaining % 6000;
        this.seconds = parse_int_default()(timeRemaining / 100);
        timeRemaining = timeRemaining % 100;
        this.ms = parse_int_default()(timeRemaining);
      } else {
        this.$emit("stop");
      }
    }
  },
  mounted: function mounted() {
    this.start();
  }
});
// CONCATENATED MODULE: ./packages/countdown/countdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var countdown_countdownvue_type_script_lang_js_ = (countdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/countdown/countdown.vue





/* normalize component */

var countdown_component = Object(componentNormalizer["a" /* default */])(
  countdown_countdownvue_type_script_lang_js_,
  countdownvue_type_template_id_74106fd2_render,
  countdownvue_type_template_id_74106fd2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

countdown_component.options.__file = "countdown.vue"
/* harmony default export */ var countdown = (countdown_component.exports);
// CONCATENATED MODULE: ./packages/countdown/index.js



countdown.install = function (Vue) {
  Vue.component(countdown.name, countdown);
};

/* harmony default export */ var packages_countdown = (countdown);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/slide-panel/slide-panel.vue?vue&type=template&id=0985f30b&scoped=true&
var slide_panelvue_type_template_id_0985f30b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"enter-active-class":_vm.enterClass,"leave-active-class":_vm.leaveClass},on:{"before-enter":function($event){_vm.animating = true},"after-enter":_vm.enter,"before-leave":function($event){_vm.animating = true},"after-leave":_vm.leave}},[(_vm._show)?_c('div',{staticClass:"ui-slide-panel",class:[_vm.isolate && 'ui-slide-panel-isolate'],style:({ 'animation-duration': _vm.speed + 'ms' })},[_vm._t("default")],2):_vm._e()])}
var slide_panelvue_type_template_id_0985f30b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/slide-panel/slide-panel.vue?vue&type=template&id=0985f30b&scoped=true&

// EXTERNAL MODULE: ./packages/assets/scss/slide-panel.scss
var slide_panel = __webpack_require__("ad21");

// CONCATENATED MODULE: ./src/utils/upperCase.js
var upperCase = function upperCase(str) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!str) return "";
  if (index >= str.length) return str.toUpperCase();
  return "".concat(str.slice(0, index + 1).toUpperCase()).concat(str.slice(index + 1));
};

/* harmony default export */ var utils_upperCase = (upperCase);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/slide-panel/slide-panel.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var slide_panelvue_type_script_lang_js_ = ({
  name: "ui-slide-panel",
  data: function data() {
    return {
      animating: false
    };
  },
  computed: {
    _show: {
      get: function get() {
        return this.show;
      },
      set: function set(newValue) {
        if (!this.animating) {
          return newValue;
        }
      }
    },
    enterClass: function enterClass() {
      return "slideIn".concat(utils_upperCase(this.direction));
    },
    leaveClass: function leaveClass() {
      return "slideOut".concat(utils_upperCase(this.direction));
    }
  },
  props: {
    show: Boolean,
    speed: Number,
    isolate: Boolean,
    zIndex: Number,
    direction: {
      type: String,
      default: "right",
      validator: function validator(val) {
        return ["down", "up", "right", "left"].includes(val);
      }
    }
  },
  methods: {
    open: function open() {
      this._show = true;
    },
    close: function close() {
      this._show = false;
    },
    enter: function enter() {
      this.animating = true;
      this.$emit("open");
    },
    leave: function leave() {
      this.animating = false;
      this.$emit("close");
    }
  },
  watch: {
    _show: function _show() {
      if (this._show && this.isolate) {
        document.body.appendChild(this.$el);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/slide-panel/slide-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var slide_panel_slide_panelvue_type_script_lang_js_ = (slide_panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/slide-panel/slide-panel.vue?vue&type=style&index=0&id=0985f30b&lang=css&scoped=true&
var slide_panelvue_type_style_index_0_id_0985f30b_lang_css_scoped_true_ = __webpack_require__("f9ca");

// CONCATENATED MODULE: ./packages/slide-panel/slide-panel.vue






/* normalize component */

var slide_panel_component = Object(componentNormalizer["a" /* default */])(
  slide_panel_slide_panelvue_type_script_lang_js_,
  slide_panelvue_type_template_id_0985f30b_scoped_true_render,
  slide_panelvue_type_template_id_0985f30b_scoped_true_staticRenderFns,
  false,
  null,
  "0985f30b",
  null
  
)

slide_panel_component.options.__file = "slide-panel.vue"
/* harmony default export */ var slide_panel_slide_panel = (slide_panel_component.exports);
// CONCATENATED MODULE: ./packages/slide-panel/index.js



slide_panel_slide_panel.install = function (Vue) {
  Vue.component(slide_panel_slide_panel.name, slide_panel_slide_panel);
};

/* harmony default export */ var packages_slide_panel = (slide_panel_slide_panel);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__("0f32");
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// CONCATENATED MODULE: ./packages/sticky/sticky.js


var listenAction;
var supportCSSSticky;

var sticky_getBindingConfig = function getBindingConfig(binding) {
  var params = binding.value || {};
  var top = params.top || 0;
  var zIndex = binding.value.zIndex ? binding.value.zIndex : external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex.get();
  var disabled = params.disabled;
  return {
    top: top,
    zIndex: zIndex,
    disabled: disabled
  };
};

var getInitialiConfig = function getInitialiConfig(el) {
  return {
    zIndex: el.style.zIndex
  };
};

var unwatch = function unwatch() {
  window.removeEventListener("scroll", listenAction);
};

var watch = function watch() {
  window.addEventListener("scroll", listenAction);
};

var bindingConfig = {};
var initialConfig = {};
/* harmony default export */ var sticky_sticky = ({
  name: "ui-sticky",
  bind: function bind(el, binding) {
    bindingConfig = sticky_getBindingConfig(binding);
    initialConfig = getInitialiConfig(el);
    var _bindingConfig = bindingConfig,
        disabled = _bindingConfig.disabled,
        top = _bindingConfig.top,
        zIndex = _bindingConfig.zIndex;
    if (disabled) return;
    var elStyle = el.style;
    elStyle.position = "-webkit-sticky";
    elStyle.position = "sticky";
    var childStyle = el.firstElementChild.style;
    supportCSSSticky = ~elStyle.position.indexOf("sticky");

    if (supportCSSSticky) {
      elStyle.top = "".concat(top, "px");
      elStyle.zIndex = zIndex;
    } else {
      elStyle.position = "";
      childStyle.cssText = "left: 0; right: 0; top: ".concat(top, "px; z-index: ").concat(zIndex, "; ").concat(childStyle.cssText);
    }

    var active = false;

    var sticky = function sticky() {
      if (supportCSSSticky || active) return;

      if (!elStyle.height) {
        elStyle.height = "".concat(el.offsetHeight, "px");
      }

      if (childStyle) {
        childStyle.position = "fixed";
      }

      active = true;
    };

    var reset = function reset() {
      if (supportCSSSticky || !active) return;
      childStyle.position = "static";
      active = false;
    };

    listenAction = throttle_default()(function () {
      var offsetTop = el.getBoundingClientRect().top;

      if (offsetTop <= top) {
        return sticky();
      }

      reset();
    });
    watch();
  },
  unbind: unwatch,
  update: function update(el, binding) {
    bindingConfig = sticky_getBindingConfig(binding);
    var _bindingConfig2 = bindingConfig,
        top = _bindingConfig2.top,
        zIndex = _bindingConfig2.zIndex;
    var childStyle = el.firstElementChild.style;

    if (supportCSSSticky) {
      el.style.top = "".concat(top, "px");
      el.style.zIndex = zIndex;
    } else {
      childStyle.top = "".concat(top, "px");
      childStyle.zIndex = zIndex;
    }

    if (bindingConfig.disabled) {
      if (supportCSSSticky) {
        el.style.position = "";
      } else {
        childStyle.position = "";
        childStyle.top = "";
        childStyle.zIndex = initialConfig.zIndex;
        unwatch();
      }

      return;
    }

    if (supportCSSSticky) {
      el.style.position = "-webkit-sticky";
      el.style.position = "sticky";
    } else {
      watch();
    }
  }
});
// CONCATENATED MODULE: ./packages/sticky/index.js


sticky_sticky.install = function (Vue, opt) {
  Vue.directive("ui-sticky", sticky_sticky);
};

/* harmony default export */ var packages_sticky = (sticky_sticky);
// CONCATENATED MODULE: ./packages/height-transition/index.js



height_transition_height_transition.install = function (Vue) {
  Vue.component(height_transition_height_transition.name, height_transition_height_transition);
};

/* harmony default export */ var packages_height_transition = (height_transition_height_transition);
// EXTERNAL MODULE: ./packages/popover/popover.js
var popover = __webpack_require__("51a1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./packages/popover/tooltip.js



var tooltip_tooltipOptins = function tooltipOptins(el, options) {
  if (typeof options == "string") {
    options = {
      content: options
    };
  }

  var defaultOptions = {
    insertAfter: false,
    closeDelay: 50,
    interactive: true,
    tooltip: true,
    openOnMouseover: true,
    closeOnMouseleave: true
  };
  options.trigger = el;
  options = assign_default()(defaultOptions, options);
  return options;
};

var tooltip_tooltip = function tooltip(el, binding) {
  var options = tooltip_tooltipOptins(el, binding.value);
  var instance;

  if (el.instance) {
    instance = el.instance;
  } else {
    instance = new popover["default"](options);
  }

  el.addEventListener("mouseover", function (e) {
    setTimeout(function () {
      instance.isShow = true;
    }, options.openDelay);
  });
  el.addEventListener("mouseleave", function (e) {
    var target = e.target;
    setTimeout(function () {
      if (!instance.isMouseIn) {
        setTimeout(function () {
          instance.isShow = false;
          delete el.instance;
        }, options.closeDelay);
      }
    }, 300);
  });
  return instance;
};

/* harmony default export */ var popover_tooltip = ({
  name: "ui-tooltip",
  inserted: function inserted(el, binding, vnode) {
    if (!binding.value) {
      return;
    }

    tooltip_tooltip(el, binding);
  },
  update: function update(el, binding, vnode) {
    if (!binding.value) {
      return;
    }

    tooltip_tooltip(el, binding);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/popover/dropdown.vue?vue&type=template&id=b102e274&scoped=true&
var dropdownvue_type_template_id_b102e274_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-dropdown"},[_c('div',{ref:"trigger",staticClass:"ui-dropdown-trigger",attrs:{"data-popover":_vm.id},on:{"click":_vm.open}},[_vm._t("trigger")],2),_c('popover',{ref:"popover",attrs:{"triggerId":_vm.id,"dropdown":"","close-on-click":_vm.closeOnClick,"open-on-mouseover":_vm.openOnMouseover,"close-on-mouseleave":_vm.closeOnMouseleave,"on-close":_vm.onClose,"open-delay":_vm.openDelay,"close-delay":_vm.closeDelay,"arrow":_vm.arrow,"offset":_vm.offset,"arrow-size":_vm.arrowSize,"arrow-offset":_vm.arrowOffset,"radius":_vm.radius,"throttle":_vm.throttle},on:{"open":_vm.onPopOpen,"close":_vm.onPopClose}},[_vm._t("default")],2)],1)}
var dropdownvue_type_template_id_b102e274_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/popover/dropdown.vue?vue&type=template&id=b102e274&scoped=true&

// EXTERNAL MODULE: ./packages/popover/popover.vue + 11 modules
var popover_popover = __webpack_require__("d4da");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/popover/dropdown.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
  name: "ui-dropdown",
  data: function data() {
    return {
      id: ""
    };
  },
  props: {
    closeOnClick: {
      type: Boolean,
      default: true
    },
    openOnMouseover: Boolean,
    closeOnMouseleave: Boolean,
    onClose: Function,
    openDelay: Number,
    closeDelay: Number,
    arrow: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 10
    },
    arrowSize: {
      type: Number,
      default: 10
    },
    arrowOffset: {
      type: Number,
      default: 10
    },
    radius: {
      type: Number,
      default: 8
    },
    throttle: {
      type: Number,
      default: 20
    }
  },
  components: {
    popover: popover_popover["a" /* default */]
  },
  methods: {
    open: function open() {
      this.id = "popover-" + index_browser_default()();
      this.$refs["popover"].isShow = true;
    },
    onPopOpen: function onPopOpen() {
      this.$emit("open");
    },
    onPopClose: function onPopClose() {
      this.$emit("close");
    }
  }
});
// CONCATENATED MODULE: ./packages/popover/dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var popover_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/popover/dropdown.vue?vue&type=style&index=0&id=b102e274&lang=css&scoped=true&
var dropdownvue_type_style_index_0_id_b102e274_lang_css_scoped_true_ = __webpack_require__("05c2");

// CONCATENATED MODULE: ./packages/popover/dropdown.vue






/* normalize component */

var dropdown_component = Object(componentNormalizer["a" /* default */])(
  popover_dropdownvue_type_script_lang_js_,
  dropdownvue_type_template_id_b102e274_scoped_true_render,
  dropdownvue_type_template_id_b102e274_scoped_true_staticRenderFns,
  false,
  null,
  "b102e274",
  null
  
)

dropdown_component.options.__file = "dropdown.vue"
/* harmony default export */ var dropdown = (dropdown_component.exports);
// CONCATENATED MODULE: ./packages/popover/index.js





dropdown.install = function (Vue) {
  Vue.component(dropdown.name, dropdown);
};


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("268f");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("e265");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/toast/toast.vue?vue&type=template&id=2ca436d0&
var toastvue_type_template_id_2ca436d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,on:{"mouseenter":_vm.pause,"mouseleave":_vm.resume}},[_c('transition',{attrs:{"enter-active-class":"bounceIn","leave-active-class":"fadeOut"},on:{"after-enter":_vm.entered,"after-leave":_vm.destroy,"before-leave":function($event){_vm.isEntered = false}}},[(!_vm.isMessage && _vm.show)?_c('div',{staticClass:"ui-toast-icon",style:(_vm.iconStyles),on:{"click":_vm.clickIcon}},[(_vm.iconName)?_c('ui-icon',{attrs:{"name":_vm.iconName}}):_vm._e()],1):_vm._e()]),_c('transition',{attrs:{"enter-active-class":_vm.toastInTransition,"leave-active-class":_vm.toastOutTransition},on:{"after-enter":function($event){_vm.showContent = true},"before-leave":function($event){_vm.showContent = false}}},[(!_vm.isMessage && _vm.isEntered)?_c('div',{staticClass:"ui-toast-background",style:(_vm.backgroundStyles)}):_vm._e()]),(!_vm.isMessage && _vm.message)?_c('div',{staticClass:"ui-toast-content",style:(_vm.contentStyles)},[_vm._v("\n    "+_vm._s(_vm.message)+"\n  ")]):_vm._e(),_c('transition',{attrs:{"enter-active-class":"slideInDown","leave-active-class":"slideOutUp"},on:{"after-leave":_vm.destroy}},[(_vm.isMessage && _vm.show)?_c('div',{staticClass:"ui-message-content",class:[
        _vm.iconName && 'ui-message-content-with-icon',
        _vm.showClose && 'ui-message-content-with-close'
      ]},[(_vm.title)?_c('div',{staticClass:"ui-message-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),(_vm.message)?_c('div',{staticClass:"ui-message-message"},[_vm._v(_vm._s(_vm.message))]):_vm._e(),(_vm.iconName)?_c('div',{staticClass:"ui-message-icon"},[_c('ui-icon',{attrs:{"name":_vm.iconName}})],1):_vm._e(),(_vm.showClose)?_c('div',{staticClass:"ui-message-close",on:{"click":_vm.stop}},[_c('ui-icon',{attrs:{"name":"icon-close-circle-fill"}})],1):_vm._e(),(_vm.actions.length)?_c('div',{staticClass:"ui-message-actions"},_vm._l((_vm.actions),function(action){return _c('span',{key:action.text,staticClass:"ui-message-action-item",on:{"click":function($event){_vm.clickOnMessageIcon(action)}}},[(action.icon)?_c('ui-icon',{attrs:{"name":action.icon}}):_vm._e(),_vm._v("\n          "+_vm._s(action.text))],1)}),0):_vm._e()]):_vm._e()])],1)}
var toastvue_type_template_id_2ca436d0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/toast/toast.vue?vue&type=template&id=2ca436d0&

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./src/utils/timer.js



/**
 * setTimout with pause, resume, cancel
 * usage: new Timer(cb,duration)
 */
var timer_Timer =
/*#__PURE__*/
function () {
  function Timer(callback, duration) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.duration = duration;
    this.triggerTime = this._now() + duration;
    this.timeId = this._start(callback, duration);
    this.timeLeft = 0;
  }

  _createClass(Timer, [{
    key: "_now",
    value: function _now() {
      return new Date().getTime();
    }
  }, {
    key: "_start",
    value: function _start(callback, duration) {
      return setTimeout(callback, duration);
    }
  }, {
    key: "getTimeLeft",
    value: function getTimeLeft() {
      return this.triggerTime - this._now();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.timeLeft = this.getTimeLeft();
      clearTimeout(this.timeId);
      this.timeId = null;
    }
  }, {
    key: "resume",
    value: function resume(extend) {
      if (this.timeId == null) {
        this.timeId = this._start(this.callback, this.timeLeft + extend);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      clearTimeout(this.timeId);
      this.timeId = null;
    }
  }]);

  return Timer;
}();

/* harmony default export */ var timer = (timer_Timer);
// EXTERNAL MODULE: ./packages/assets/scss/toast.scss
var toast = __webpack_require__("539c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/toast/toast.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var toastvue_type_script_lang_js_ = ({
  name: "ui-toast",
  data: function data() {
    return {
      showContent: false,
      show: false,
      type: "info",
      message: "",
      duration: 3000,
      showClose: false,
      onClose: null,
      timer: null,
      closed: false,
      id: "",
      icon: "",
      title: "",
      actions: [],
      zIndex: this.$zIndex ? this.$zIndex.get() : 1000,
      isEntered: false,
      closeOnClick: false,
      onClick: null,
      isMessage: false
    };
  },
  components: {
    UiIcon: icon["a" /* default */]
  },
  computed: {
    iconName: function iconName() {
      if (this.type == "info") {
        return this.icon ? this.icon : "bell";
      } else if (this.type == "warning") {
        return this.icon ? this.icon : "warning-circle";
      } else if (this.type == "error") {
        return this.icon ? this.icon : "close";
      } else {
        return "";
      }
    },
    classes: function classes() {
      return ["ui-toast", this.type && "ui-".concat(this.isMessage ? "message" : "toast", "-").concat(this.type), {
        "ui-message": this.isMessage
      }];
    },
    toastTransition: function toastTransition() {
      return "ui-toast-transition-x-".concat(this.position.x);
    },
    iconStyles: function iconStyles() {
      return {
        zIndex: this.zIndex + 2
      };
    },
    backgroundStyles: function backgroundStyles() {
      return {
        zIndex: this.zIndex + 1
      };
    },
    contentStyles: function contentStyles() {
      return {
        zIndex: this.zIndex + 1,
        // visibility: this.showContent ? 'visible' : 'hidden',
        opacity: this.showContent ? 1 : 0
      };
    },
    toastInTransition: function toastInTransition() {
      return this.position.x == "right" ? "toastInRight" : "toastInLeft";
    },
    toastOutTransition: function toastOutTransition() {
      return this.position.x == "right" ? "toastOutRight" : "toastOutLeft";
    }
  },
  methods: {
    entered: function entered() {
      this.isEntered = true;
    },
    resume: function resume() {
      if (this.duration > 0) {
        this.timer.resume(500);
      }
    },
    pause: function pause() {
      if (this.duration > 0) {
        this.timer.pause();
      }
    },
    clickIcon: function clickIcon() {
      if (this.closeOnClick) {
        this.stop();
      }

      if (this.onClick && typeof this.onClick == "function") {
        this.onClick();
      }
    },
    start: function start() {
      var _this = this;

      if (this.duration > 0) {
        this.timer = new timer(function () {
          if (!_this.closed) {
            _this.stop();
          }
        }, this.duration);
      }
    },
    stop: function stop() {
      this.show = false;

      if (this.onClose && typeof this.onClose == "function") {
        this.onClose(this);
        this.closeToast();
      }
    },
    destroy: function destroy() {
      if (!this.closed) {
        this.$el.parentNode.removeChild(this.$el);

        if (this.$zIndex) {
          this.$zIndex.remove();
        }

        this.closed = true;
        this.closeToast();
      }
    },
    clickOnMessageIcon: function clickOnMessageIcon(action) {
      if (action.onClick && typeof action.onClick == "function") {
        action.onClick();
      }

      if (action.closeAfter) {
        this.stop();
      }
    }
  },
  mounted: function mounted() {
    this.start();
  },
  watch: {
    show: function show(newValue) {
      if (newValue) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/toast/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/toast/toast.vue





/* normalize component */

var toast_component = Object(componentNormalizer["a" /* default */])(
  toast_toastvue_type_script_lang_js_,
  toastvue_type_template_id_2ca436d0_render,
  toastvue_type_template_id_2ca436d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

toast_component.options.__file = "toast.vue"
/* harmony default export */ var toast_toast = (toast_component.exports);
// CONCATENATED MODULE: ./packages/toast/toast.js






var ToastConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(toast_toast);
var instances = [];
var toastContainer = {};

var toast_$UiToast = function $UiToast(options) {
  options = typeof options === "string" ? {
    message: options
  } : options;

  if (!options.message) {
    throw new Error("message is required");
  }

  var _options = options,
      _options$position = _options.position,
      position = _options$position === void 0 ? {
    x: "right",
    y: "top"
  } : _options$position;

  if (typeof_typeof(position) !== "object" || !position.x || !position.y) {
    throw new Error("position should a Object with x,y axis");
  }

  var p = "".concat(position.y, "-").concat(position.x);

  if (!toastContainer[p]) {
    toastContainer[p] = document.createElement("div");
    toastContainer[p].className = "ui-toast-wrapper ui-toast-wrapper-x-".concat(position.x, " ui-toast-wrapper-y-").concat(position.y);
    document.body.appendChild(toastContainer[p]);
    toastContainer[p].style.zIndex = options.zIndex ? options.zIndex : external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex ? external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex.add() : 1000;
  }

  var id = index_browser_default()();
  options.position = position;

  options.closeToast = function () {
    $UiToast.closeToast(id);
  };

  var instance = new ToastConstructor({
    el: document.createElement("div"),
    data: options
  });
  instance.$mount();
  instance.show = true;
  instance.$id = id;
  toastContainer[p].appendChild(instance.$el);
  instances.push(instance);

  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex) {
    instance.$on("open", function () {
      toastContainer[p].style.zIndex = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex.add();
    });
    instance.$on("close", function () {
      toastContainer[p].style.zIndex = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex.remove();
    });
  }

  return instance;
};

toast_$UiToast.closeToast = function (id) {
  instances.splice(instances.findIndex(function (toast) {
    return toast.$id == id;
  }), 1);
};

toast_$UiToast.closeAll = function () {
  for (var i = instances.length - 1; i >= 0; i--) {
    instances[i].stop();
  }
};

var types = ["info", "error", "warning"];
types.forEach(function (type) {
  toast_$UiToast[type] = function (options) {
    options = typeof options === "string" ? {
      message: options
    } : options;
    return new toast_$UiToast(_objectSpread({}, options, {
      type: type
    }));
  };
});
/* harmony default export */ var packages_toast_toast = (toast_$UiToast);

// CONCATENATED MODULE: ./packages/toast/index.js

/* harmony default export */ var packages_toast = (packages_toast_toast);
// CONCATENATED MODULE: ./packages/message/index.js



var message_$UiMessage = function $UiMessage() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = typeof options === "string" ? {
    message: options
  } : options;
  options.isMessage = true;

  if (!options.title && !options.message) {
    throw new Error("must have title/message");
  }

  var instance = new packages_toast_toast(options);
  return instance;
};

var message_types = ["info", "error", "warning"];
message_types.forEach(function (type) {
  message_$UiMessage[type] = function (options) {
    options = typeof options === "string" ? {
      message: options
    } : options;
    return new message_$UiMessage(_objectSpread({}, options, {
      type: type
    }));
  };
});
/* harmony default export */ var packages_message = (message_$UiMessage);
// CONCATENATED MODULE: ./packages/loading-bar/loading-bar.js



var UiLoadingBar = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(bar);
var loading_bar_instance = null;


var loading_bar_timer = function timer(instance, duration) {
  instance.percentage = 0;
  clearInterval(instance.timer);
  instance.timer = setInterval(function () {
    instance.percentage += 100 / (10 * (duration / 1000));

    if (instance.percentage >= 100) {
      clearInterval(instance.timer);
    }
  }, 100);
};

var loading_bar_$UiLoadingBar = function $UiLoadingBar(options) {
  var defaultOptions = {
    size: 3,
    percentage: 0,
    indeterminate: false,
    loadingBar: true,
    showNumber: false,
    foreColor: "#08D7B8",
    backColor: "transparent",
    duration: 4000,
    zIndex: external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex ? external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex.add() : 4000
  };
  options = assign_default()(defaultOptions, options);

  if (loading_bar_instance) {
    loading_bar_instance.propsData = options;
    loading_bar_instance.show = true;
    loading_bar_timer(loading_bar_instance, options.duration);
    return;
  }

  loading_bar_instance = new UiLoadingBar({
    propsData: options
  });
  loading_bar_instance.$mount();
  document.body.appendChild(loading_bar_instance.$el);
  loading_bar_instance.show = true;

  if (!options.indeterminate) {
    loading_bar_timer(loading_bar_instance, options.duration);
  }

  return loading_bar_instance;
};

loading_bar_$UiLoadingBar.finish = function () {
  if (!loading_bar_instance) {
    return;
  }

  loading_bar_instance.percentage = 100;
  clearInterval(loading_bar_instance.timer);
  setTimeout(function () {
    loading_bar_instance.show = false;
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$zIndex.remove();
  }, 500);
};

loading_bar_$UiLoadingBar.increase = function () {
  var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (!loading_bar_instance) {
    return;
  }

  loading_bar_instance.percentage += percent;

  if (loading_bar_instance.percentage >= 100) {
    loading_bar_instance.percentage = 100;
  }
};

loading_bar_$UiLoadingBar.decrease = function () {
  var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (!loading_bar_instance) {
    return;
  }

  loading_bar_instance.percentage -= percent;

  if (loading_bar_instance.percentage <= 0) {
    loading_bar_instance.percentage = 0;
  }
};

loading_bar_$UiLoadingBar.fail = function () {
  if (!loading_bar_instance) {
    return;
  }

  loading_bar_instance.percentage = 100;
  loading_bar_instance.foreColor = "#ea4335";
  setTimeout(function () {
    loading_bar_instance.show = false;
  }, 1000);
  clearInterval(loading_bar_instance.timer);
  loading_bar_instance.time = null;
};

/* harmony default export */ var loading_bar = (loading_bar_$UiLoadingBar);
// CONCATENATED MODULE: ./packages/loading-bar/index.js

/* harmony default export */ var packages_loading_bar = (loading_bar);
// CONCATENATED MODULE: ./src/utils/zHandler.js
// class zHandler {
//   constructor(init = 200) {
//     this.initZ = init;
//   }
//   get() {
//     return this.initZ;
//   }
//   add(num) {
//     return num ? this.initZ + num : ++this.initZ;
//   }
//   remove() {
//     return --this.initZ;
//   }
// }
var ZHandler = function ZHandler() {
  var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  this.z = init;
};

ZHandler.prototype.get = function () {
  return this.z;
};

ZHandler.prototype.add = function (num) {
  return num ? this.z + num : ++this.z;
};

ZHandler.prototype.remove = function () {
  return --this.z;
};

/* harmony default export */ var zHandler = (ZHandler);
// CONCATENATED MODULE: ./packages/index.js












































 // import Rem from '../src/utils/rem.js'

var components = [packages_avatar, packages_icon["a" /* default */], packages_v, packages_loader, packages_spinner, uplaoder, dropdown, packages_alert, row, col, packages_card, packages_input, packages_image, packages_heading, button_button, button_group, packages_checkbox, packages_radio, accordion, accordion_item, packages_autocomplete, packages_tag, packages_hr, backdrop_backdrop, packages_textarea, modal_modal, confirm_confirm, packages_progress, packages_marquee, packages_share, packages_typer, packages_carousel, packages_countdown, packages_slide_panel, packages_height_transition];
var plugins = {
  $UiPopover: popover["default"],
  $UiToast: packages_toast,
  $UiCover: backdrop_$UiCover,
  $UiModal: packages_modal_modal,
  $UiConfirm: packages_confirm_confirm,
  $UiMessage: packages_message,
  $UiLoadingBar: packages_loading_bar
};
var directives = [popover_tooltip, packages_highlight, packages_loading, packages_mask, packages_sticky];


var packages_install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.prototype.$zIndex = new zHandler(options.zIndex);
  components.forEach(function (component) {
    return Vue.component(component.name, component);
  });

  keys_default()(plugins).forEach(function (key) {
    Vue.prototype[key] = plugins[key];
  });

  directives.forEach(function (directive) {
    Vue.directive(directive.name, directive);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  packages_install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  install: packages_install,
  UiAvatar: packages_avatar,
  UiIcon: packages_icon["a" /* default */],
  UiLoader: packages_loader,
  UiSpinner: packages_spinner,
  UiUpload: uplaoder,
  UiDropdown: dropdown,
  UiTooltip: popover_tooltip,
  UiRow: row,
  UiCol: col,
  UiCard: packages_card,
  UiAlert: packages_alert,
  UiInput: packages_input,
  UiImage: packages_image,
  UiHeading: packages_heading,
  UiButton: button_button,
  UiButtonGroup: button_group,
  UiCheckbox: packages_checkbox,
  UiRadio: packages_radio,
  UiAccordion: accordion,
  UiAccordionItem: accordion_item,
  UiAutocomplete: packages_autocomplete,
  UiTag: packages_tag,
  UiHr: packages_hr,
  UiBackdrop: backdrop_backdrop,
  UiTextarea: packages_textarea,
  UiV: packages_v,
  UiProgress: packages_progress,
  UiMarquee: packages_marquee,
  UiShare: packages_share,
  UiTyper: packages_typer,
  UiCarousel: packages_carousel,
  UiCountdown: packages_countdown,
  UiSlidePanel: packages_slide_panel,
  UiSticky: packages_sticky,
  UiModal: modal_modal,
  UiHeightTransition: packages_height_transition,
  $UiPopover: popover["default"],
  $UiToast: packages_toast,
  $UiCover: backdrop_$UiCover,
  $UiModal: packages_modal_modal,
  $UiConfirm: packages_confirm_confirm,
  $UiMessage: packages_message,
  $UiLoadingBar: packages_loading_bar // Rem

});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fb97":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iconfont.735f1c2a.svg";

/***/ }),

/***/ "fde4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bf90");
var $Object = __webpack_require__("584a").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "ff0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ffd6":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

/******/ });
});