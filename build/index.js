(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LocaleCode"] = factory();
	else
		root["LocaleCode"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
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

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
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
    if (own && key in exports) continue;
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

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
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

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
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

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/iso-3166-1-alpha-2/index.js":
/***/ (function(module, exports, __webpack_require__) {

(function() {
    var Iso31661a2, mout, singleton;

    mout = __webpack_require__("./node_modules/mout/object.js");

    Iso31661a2 = (function() {
        function Iso31661a2() {}

        Iso31661a2.prototype.getCountry = function(code) {
            return Iso31661a2.prototype.countries[code];
        };

        Iso31661a2.prototype.getCode = function(country) {
            var idx, ret;
            ret = null;
            if (country != null) {
                idx = mout.values(Iso31661a2.prototype.countries).indexOf(country);
                if (idx !== -1) {
                    ret = Object.keys(Iso31661a2.prototype.countries)[idx];
                }
            }
            return ret;
        };

        Iso31661a2.prototype.getCountries = function() {
            return mout.values(Iso31661a2.prototype.countries);
        };

        Iso31661a2.prototype.getCodes = function() {
            return Object.keys(Iso31661a2.prototype.countries);
        };

        Iso31661a2.prototype.getData = function() {
            return Iso31661a2.prototype.countries;
        };

        Iso31661a2.prototype.countries = {
            AF: "Afghanistan",
            AX: "Åland Islands",
            AL: "Albania",
            DZ: "Algeria",
            AS: "American Samoa",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            AQ: "Antarctica",
            AG: "Antigua and Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia, Plurinational State of",
            BQ: "Bonaire, Sint Eustatius and Saba",
            BA: "Bosnia and Herzegovina",
            BW: "Botswana",
            BV: "Bouvet Island",
            BR: "Brazil",
            IO: "British Indian Ocean Territory",
            BN: "Brunei Darussalam",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            KH: "Cambodia",
            CM: "Cameroon",
            CA: "Canada",
            CV: "Cape Verde",
            KY: "Cayman Islands",
            CF: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            CN: "China",
            CX: "Christmas Island",
            CC: "Cocos (Keeling) Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo",
            CD: "Congo, the Democratic Republic of the",
            CK: "Cook Islands",
            CR: "Costa Rica",
            CI: "Côte d'Ivoire",
            HR: "Croatia",
            CU: "Cuba",
            CW: "Curaçao",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            GQ: "Equatorial Guinea",
            ER: "Eritrea",
            EE: "Estonia",
            ET: "Ethiopia",
            FK: "Falkland Islands (Malvinas)",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            GF: "French Guiana",
            PF: "French Polynesia",
            TF: "French Southern Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            GH: "Ghana",
            GI: "Gibraltar",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GP: "Guadeloupe",
            GU: "Guam",
            GT: "Guatemala",
            GG: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HT: "Haiti",
            HM: "Heard Island and McDonald Mcdonald Islands",
            VA: "Holy See (Vatican City State)",
            HN: "Honduras",
            HK: "Hong Kong",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IR: "Iran, Islamic Republic of",
            IQ: "Iraq",
            IE: "Ireland",
            IM: "Isle of Man",
            IL: "Israel",
            IT: "Italy",
            JM: "Jamaica",
            JP: "Japan",
            JE: "Jersey",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            KP: "Korea, Democratic People's Republic of",
            KR: "Korea, Republic of",
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Lao People's Democratic Republic",
            LV: "Latvia",
            LB: "Lebanon",
            LS: "Lesotho",
            LR: "Liberia",
            LY: "Libya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            MO: "Macao",
            MK: "Macedonia, the Former Yugoslav Republic of",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MH: "Marshall Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            YT: "Mayotte",
            MX: "Mexico",
            FM: "Micronesia, Federated States of",
            MD: "Moldova, Republic of",
            MC: "Monaco",
            MN: "Mongolia",
            ME: "Montenegro",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            MM: "Myanmar",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            MP: "Northern Mariana Islands",
            NO: "Norway",
            OM: "Oman",
            PK: "Pakistan",
            PW: "Palau",
            PS: "Palestine, State of",
            PA: "Panama",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn",
            PL: "Poland",
            PT: "Portugal",
            PR: "Puerto Rico",
            QA: "Qatar",
            RE: "Réunion",
            RO: "Romania",
            RU: "Russian Federation",
            RW: "Rwanda",
            BL: "Saint Barthélemy",
            SH: "Saint Helena, Ascension and Tristan da Cunha",
            KN: "Saint Kitts and Nevis",
            LC: "Saint Lucia",
            MF: "Saint Martin (French part)",
            PM: "Saint Pierre and Miquelon",
            VC: "Saint Vincent and the Grenadines",
            WS: "Samoa",
            SM: "San Marino",
            ST: "Sao Tome and Principe",
            SA: "Saudi Arabia",
            SN: "Senegal",
            RS: "Serbia",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SX: "Sint Maarten (Dutch part)",
            SK: "Slovakia",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            GS: "South Georgia and the South Sandwich Islands",
            SS: "South Sudan",
            ES: "Spain",
            LK: "Sri Lanka",
            SD: "Sudan",
            SR: "Suriname",
            SJ: "Svalbard and Jan Mayen",
            SZ: "Swaziland",
            SE: "Sweden",
            CH: "Switzerland",
            SY: "Syrian Arab Republic",
            TW: "Taiwan, Province of China",
            TJ: "Tajikistan",
            TZ: "Tanzania, United Republic of",
            TH: "Thailand",
            TL: "Timor-Leste",
            TG: "Togo",
            TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad and Tobago",
            TN: "Tunisia",
            TR: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks and Caicos Islands",
            TV: "Tuvalu",
            UG: "Uganda",
            UA: "Ukraine",
            AE: "United Arab Emirates",
            GB: "United Kingdom",
            US: "United States",
            UM: "United States Minor Outlying Islands",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VU: "Vanuatu",
            VE: "Venezuela, Bolivarian Republic of",
            VN: "Viet Nam",
            VG: "Virgin Islands, British",
            VI: "Virgin Islands, U.S.",
            WF: "Wallis and Futuna",
            EH: "Western Sahara",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe"
        };

        return Iso31661a2;

    })();

    singleton = null;

    module.exports = (function() {
        return singleton != null ? singleton : singleton = new Iso31661a2();
    })();

}).call(this);


/***/ }),

/***/ "./node_modules/iso-639-1-zh/src/data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LANGUAGES_ZH_NAMES = {
  aa: '阿法尔语',
  ab: '阿布哈兹语',
  ae: '阿维斯陀语',
  af: '南非荷兰语',
  ak: '阿坎语',
  am: '阿姆哈拉语',
  an: '阿拉贡语',
  ar: '阿拉伯语',
  as: '阿萨姆语',
  av: '阿瓦尔语',
  ay: '艾马拉语',
  az: '阿塞拜疆语',
  ba: '巴什基尔语',
  be: '白俄罗斯语',
  bg: '保加利亚语',
  bh: '比哈尔语',
  bi: '比斯拉马语',
  bm: '班巴拉语',
  bn: '孟加拉语',
  bo: '藏语',
  br: '布列塔尼语',
  bs: '波斯尼亚语',
  ca: '加泰罗尼亚语',
  ce: '车臣语',
  ch: '查莫洛语',
  co: '科西嘉语',
  cr: '克里语',
  cs: '捷克语',
  cu: '古教会斯拉夫语',
  cv: '楚瓦什语',
  cy: '威尔士语',
  da: '丹麦语',
  de: '德语',
  dv: '迪维希语',
  dz: '不丹语',
  ee: '埃维语',
  el: '希腊语',
  en: '英语',
  eo: '世界语',
  es: '西班牙语',
  et: '爱沙尼亚语',
  eu: '巴斯克语',
  fa: '波斯语',
  ff: '富拉语',
  fi: '芬兰语',
  fj: '斐济语',
  fo: '法罗语',
  fr: '法语',
  fy: '西弗里西亚语',
  ga: '爱尔兰语',
  gd: '苏格兰盖尔语',
  gl: '加利西亚语',
  gn: '瓜拉尼语',
  gu: '古吉拉特语',
  gv: '马恩岛语',
  ha: '豪萨语',
  he: '希伯来语',
  hi: '印地语',
  ho: '莫图语',
  hr: '克罗地亚语',
  ht: '海地文',
  hu: '匈牙利语',
  hy: '亚美尼亚语',
  hz: '赫勒娄语',
  ia: '国际语',
  id: '印尼语',
  ie: '国际语',
  ig: '伊博语',
  ii: '诺苏语',
  ik: '依奴皮维克文',
  io: '伊多文',
  is: '冰岛语',
  it: '意大利语',
  iu: '因纽特语',
  ja: '日语',
  jv: '爪哇语',
  ka: '格鲁吉亚语',
  kg: '刚果语',
  ki: '基库尤语',
  kj: '宽亚马语',
  kk: '哈萨克语',
  kl: '格陵兰语',
  km: '高棉语',
  kn: '卡纳达语',
  ko: '韩语',
  kr: '卡努里语',
  ks: '克什米尔语',
  ku: '库尔德语',
  kv: '科米语',
  kw: '科尼什语',
  ky: '吉尔吉斯语',
  la: '拉丁语',
  lb: '卢森堡语',
  lg: '甘达语',
  li: '林堡语',
  ln: '林加拉语',
  lo: '老挝语',
  lt: '立陶宛语',
  lu: '卢巴加丹加语',
  lv: '拉脱维亚语',
  mg: '马尔加什语',
  mh: '马绍尔语',
  mi: '毛利语',
  mk: '马其顿语',
  ml: '马拉雅拉姆语',
  mn: '蒙古文',
  mr: '马拉地语',
  ms: '马来语',
  mt: '马耳他语',
  my: '缅甸语',
  na: '瑙鲁语',
  nb: '挪威博克马尔语',
  nd: '北恩德贝勒语',
  ne: '尼泊尔语',
  ng: '尼日尔刚果语',
  nl: '荷兰语',
  nn: '挪威尼诺斯克语',
  no: '挪威语',
  nr: '南恩德贝勒语',
  nv: '纳瓦霍语',
  ny: '齐切瓦语',
  oc: '奥克西唐语',
  oj: '欧及布威语',
  om: '奥罗莫语',
  or: '奥里亚语',
  os: '奥塞梯语',
  pa: '旁遮普语',
  pi: '巴利语',
  pl: '波兰语',
  ps: '普什图语',
  pt: '葡萄牙语',
  qu: '克丘亚语',
  rm: '罗曼斯语',
  rn: '基隆迪语',
  ro: '罗马尼亚语',
  ru: '俄语',
  rw: '卢旺达语',
  sa: '梵文',
  sc: '撒丁岛语',
  sd: '信德语',
  se: '北萨米文',
  sg: '桑戈语',
  si: '僧伽罗语',
  sk: '斯洛伐克语',
  sl: '斯洛文尼亚语',
  sm: '萨摩亚语',
  sn: '绍纳语',
  so: '索马里语',
  sq: '阿尔巴尼亚语',
  sr: '塞尔维亚语',
  ss: '斯瓦蒂语',
  st: '南索托语',
  su: '巽他语',
  sv: '瑞典语',
  sw: '斯瓦希里语',
  ta: '泰米尔语',
  te: '泰卢固语',
  tg: '塔吉克语',
  th: '泰语',
  ti: '提格雷语',
  tk: '土库曼语',
  tl: '菲律宾语',
  tn: '茨瓦纳语',
  to: '汤加语',
  tr: '土耳其语',
  ts: '特松加语',
  tt: '塔塔尔语',
  tw: '契维语',
  ty: '塔希提语',
  ug: '维吾尔语',
  uk: '乌克兰语',
  ur: '乌尔都语',
  uz: '乌兹别克语',
  ve: '文达语',
  vi: '越南语',
  vo: '沃拉普克语',
  wa: '华隆语',
  wo: '沃洛夫语',
  xh: '科萨语',
  yi: '意第绪语',
  yo: '约鲁巴语',
  za: '壮语',
  zh: '中文',
  zu: '祖鲁语',
};

/* harmony default export */ __webpack_exports__["a"] = (LANGUAGES_ZH_NAMES);


/***/ }),

/***/ "./node_modules/iso-639-1-zh/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iso_639_1__ = __webpack_require__("./node_modules/iso-639-1/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_js__ = __webpack_require__("./node_modules/iso-639-1-zh/src/data.js");



class ISO6391ZH extends __WEBPACK_IMPORTED_MODULE_0_iso_639_1__["a" /* default */] {
  static getLanguages(codes) {
    return super.getLanguages(codes).map(language => {
      Object.assign(language, {
        zhName: ISO6391ZH.getZhName(language.code),
      });
      return language;
    });
  }

  static getZhName(code) {
    return super.validate(code) ? __WEBPACK_IMPORTED_MODULE_1__data_js__["a" /* default */][code] : '';
  }

  static getAllZhNames() {
    return Object.values(__WEBPACK_IMPORTED_MODULE_1__data_js__["a" /* default */]);
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = ISO6391ZH;



/***/ }),

/***/ "./node_modules/iso-639-1/src/data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LANGUAGES_LIST = {
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf',
  },
  ab: {
    name: 'Abkhaz',
    nativeName: 'аҧсуа бызшәа',
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta',
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan',
  },
  am: {
    name: 'Amharic',
    nativeName: 'አማርኛ',
  },
  an: {
    name: 'Aragonese',
    nativeName: 'aragonés',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'اللغة العربية',
  },
  as: {
    name: 'Assamese',
    nativeName: 'অসমীয়া',
  },
  av: {
    name: 'Avaric',
    nativeName: 'авар мацӀ',
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru',
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili',
  },
  ba: {
    name: 'Bashkir',
    nativeName: 'башҡорт теле',
  },
  be: {
    name: 'Belarusian',
    nativeName: 'беларуская мова',
  },
  bg: {
    name: 'Bulgarian',
    nativeName: 'български език',
  },
  bh: {
    name: 'Bihari',
    nativeName: 'भोजपुरी',
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama',
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan',
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা',
  },
  bo: {
    name: 'Tibetan Standard',
    nativeName: 'བོད་ཡིག',
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg',
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik',
  },
  ca: {
    name: 'Catalan',
    nativeName: 'català',
  },
  ce: {
    name: 'Chechen',
    nativeName: 'нохчийн мотт',
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru',
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu',
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ',
  },
  cs: {
    name: 'Czech',
    nativeName: 'čeština',
  },
  cu: {
    name: 'Old Church Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  cv: {
    name: 'Chuvash',
    nativeName: 'чӑваш чӗлхи',
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg',
  },
  da: {
    name: 'Danish',
    nativeName: 'dansk',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
  },
  dv: {
    name: 'Divehi',
    nativeName: 'Dhivehi',
  },
  dz: {
    name: 'Dzongkha',
    nativeName: 'རྫོང་ཁ',
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe',
  },
  el: {
    name: 'Greek',
    nativeName: 'ελληνικά',
  },
  en: {
    name: 'English',
    nativeName: 'English',
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti',
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara',
  },
  fa: {
    name: 'Persian',
    nativeName: 'فارسی',
  },
  ff: {
    name: 'Fula',
    nativeName: 'Fulfulde',
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi',
  },
  fj: {
    name: 'Fijian',
    nativeName: 'Vakaviti',
  },
  fo: {
    name: 'Faroese',
    nativeName: 'føroyskt',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk',
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge',
  },
  gd: {
    name: 'Scottish Gaelic',
    nativeName: 'Gàidhlig',
  },
  gl: {
    name: 'Galician',
    nativeName: 'galego',
  },
  gn: {
    name: 'Guaraní',
    nativeName: "Avañe'ẽ",
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg',
  },
  ha: {
    name: 'Hausa',
    nativeName: 'هَوُسَ',
  },
  he: {
    name: 'Hebrew',
    nativeName: 'עברית',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी',
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu',
  },
  hr: {
    name: 'Croatian',
    nativeName: 'hrvatski jezik',
  },
  ht: {
    name: 'Haitian',
    nativeName: 'Kreyòl ayisyen',
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'magyar',
  },
  hy: {
    name: 'Armenian',
    nativeName: 'Հայերեն',
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero',
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua',
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Indonesian',
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Interlingue',
  },
  ig: {
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
  },
  ii: {
    name: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop',
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'Iñupiaq',
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido',
  },
  is: {
    name: 'Icelandic',
    nativeName: 'Íslenska',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
  },
  iu: {
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa',
  },
  ka: {
    name: 'Georgian',
    nativeName: 'ქართული',
  },
  kg: {
    name: 'Kongo',
    nativeName: 'Kikongo',
  },
  ki: {
    name: 'Kikuyu',
    nativeName: 'Gĩkũyũ',
  },
  kj: {
    name: 'Kwanyama',
    nativeName: 'Kuanyama',
  },
  kk: {
    name: 'Kazakh',
    nativeName: 'қазақ тілі',
  },
  kl: {
    name: 'Kalaallisut',
    nativeName: 'kalaallisut',
  },
  km: {
    name: 'Khmer',
    nativeName: 'ខេមរភាសា',
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri',
  },
  ks: {
    name: 'Kashmiri',
    nativeName: 'कश्मीरी',
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurdî',
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв',
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek',
  },
  ky: {
    name: 'Kyrgyz',
    nativeName: 'Кыргызча',
  },
  la: {
    name: 'Latin',
    nativeName: 'latine',
  },
  lb: {
    name: 'Luxembourgish',
    nativeName: 'Lëtzebuergesch',
  },
  lg: {
    name: 'Ganda',
    nativeName: 'Luganda',
  },
  li: {
    name: 'Limburgish',
    nativeName: 'Limburgs',
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála',
  },
  lo: {
    name: 'Lao',
    nativeName: 'ພາສາ',
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvių kalba',
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: 'Tshiluba',
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latviešu valoda',
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'fiteny malagasy',
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ',
  },
  mi: {
    name: 'Māori',
    nativeName: 'te reo Māori',
  },
  mk: {
    name: 'Macedonian',
    nativeName: 'македонски јазик',
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
  },
  mn: {
    name: 'Mongolian',
    nativeName: 'Монгол хэл',
  },
  mr: {
    name: 'Marathi',
    nativeName: 'मराठी',
  },
  ms: {
    name: 'Malay',
    nativeName: 'هاس ملايو‎',
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti',
  },
  my: {
    name: 'Burmese',
    nativeName: 'ဗမာစာ',
  },
  na: {
    name: 'Nauru',
    nativeName: 'Ekakairũ Naoero',
  },
  nb: {
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål',
  },
  nd: {
    name: 'Northern Ndebele',
    nativeName: 'isiNdebele',
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली',
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk',
  },
  nr: {
    name: 'Southern Ndebele',
    nativeName: 'isiNdebele',
  },
  nv: {
    name: 'Navajo',
    nativeName: 'Diné bizaad',
  },
  ny: {
    name: 'Chichewa',
    nativeName: 'chiCheŵa',
  },
  oc: {
    name: 'Occitan',
    nativeName: 'occitan',
  },
  oj: {
    name: 'Ojibwe',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ',
  },
  os: {
    name: 'Ossetian',
    nativeName: 'ирон æвзаг',
  },
  pa: {
    name: 'Panjabi',
    nativeName: 'ਪੰਜਾਬੀ',
  },
  pi: {
    name: 'Pāli',
    nativeName: 'पाऴि',
  },
  pl: {
    name: 'Polish',
    nativeName: 'język polski',
  },
  ps: {
    name: 'Pashto',
    nativeName: 'پښتو',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi',
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun',
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'Ikirundi',
  },
  ro: {
    name: 'Romanian',
    nativeName: 'limba română',
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda',
  },
  sa: {
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu',
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी',
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvisámegiella',
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö',
  },
  si: {
    name: 'Sinhala',
    nativeName: 'සිංහල',
  },
  sk: {
    name: 'Slovak',
    nativeName: 'slovenčina',
  },
  sl: {
    name: 'Slovene',
    nativeName: 'slovenski jezik',
  },
  sm: {
    name: 'Samoan',
    nativeName: "gagana fa'a Samoa",
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona',
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga',
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip',
  },
  sr: {
    name: 'Serbian',
    nativeName: 'српски језик',
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati',
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho',
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda',
  },
  sv: {
    name: 'Swedish',
    nativeName: 'svenska',
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
  },
  tg: {
    name: 'Tajik',
    nativeName: 'тоҷикӣ',
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย',
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ',
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'Türkmen',
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog',
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana',
  },
  to: {
    name: 'Tonga',
    nativeName: 'faka Tonga',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga',
  },
  tt: {
    name: 'Tatar',
    nativeName: 'татар теле',
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi',
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti',
  },
  ug: {
    name: 'Uyghur',
    nativeName: 'ئۇيغۇرچە‎',
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'Українська',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'Ўзбек',
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa',
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük',
  },
  wa: {
    name: 'Walloon',
    nativeName: 'walon',
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof',
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa',
  },
  yi: {
    name: 'Yiddish',
    nativeName: 'ייִדיש',
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá',
  },
  za: {
    name: 'Zhuang',
    nativeName: 'Saɯ cueŋƅ',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文',
  },
  zu: {
    name: 'Zulu',
    nativeName: 'isiZulu',
  },
};

/* harmony default export */ __webpack_exports__["a"] = (LANGUAGES_LIST);


/***/ }),

/***/ "./node_modules/iso-639-1/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__("./node_modules/iso-639-1/src/data.js");


class ISO6391 {
  static getLanguages(codes = []) {
    return codes.map(code => ({
      code,
      name: ISO6391.getName(code),
      nativeName: ISO6391.getNativeName(code),
    }));
  }

  static getName(code) {
    return ISO6391.validate(code) ? __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */][code].name : '';
  }

  static getAllNames() {
    return Object.values(__WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */]).map(l => l.name);
  }

  static getNativeName(code) {
    return ISO6391.validate(code) ? __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */][code].nativeName : '';
  }

  static getAllNativeNames() {
    return Object.values(__WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */]).map(l => l.nativeName);
  }

  static getCode(name) {
    const code = Object.keys(__WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */]).find(code => {
      const language = __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */][code];

      return (
        language.name.toLowerCase() === name.toLowerCase() ||
        language.nativeName.toLowerCase() === name.toLowerCase()
      );
    });
    return code || '';
  }

  static getAllCodes() {
    return Object.keys(__WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */]);
  }

  static validate(code) {
    return __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */][code] !== undefined;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ISO6391;



/***/ }),

/***/ "./node_modules/mout/array/contains.js":
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__("./node_modules/mout/array/indexOf.js");

    /**
     * If array contains values.
     */
    function contains(arr, val) {
        return indexOf(arr, val) !== -1;
    }
    module.exports = contains;



/***/ }),

/***/ "./node_modules/mout/array/forEach.js":
/***/ (function(module, exports) {



    /**
     * Array forEach
     */
    function forEach(arr, callback, thisObj) {
        if (arr == null) {
            return;
        }
        var i = -1,
            len = arr.length;
        while (++i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
                break;
            }
        }
    }

    module.exports = forEach;




/***/ }),

/***/ "./node_modules/mout/array/indexOf.js":
/***/ (function(module, exports) {



    /**
     * Array.indexOf
     */
    function indexOf(arr, item, fromIndex) {
        fromIndex = fromIndex || 0;
        if (arr == null) {
            return -1;
        }

        var len = arr.length,
            i = fromIndex < 0 ? len + fromIndex : fromIndex;
        while (i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[i] === item) {
                return i;
            }

            i++;
        }

        return -1;
    }

    module.exports = indexOf;



/***/ }),

/***/ "./node_modules/mout/array/max.js":
/***/ (function(module, exports, __webpack_require__) {

var makeIterator = __webpack_require__("./node_modules/mout/function/makeIterator_.js");

    /**
     * Return maximum value inside array
     */
    function max(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return Infinity;
        } else if (arr.length && !iterator) {
            return Math.max.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = -Infinity,
                value,
                temp;

            var i = -1, len = arr.length;
            while (++i < len) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp > compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    module.exports = max;




/***/ }),

/***/ "./node_modules/mout/array/min.js":
/***/ (function(module, exports, __webpack_require__) {

var makeIterator = __webpack_require__("./node_modules/mout/function/makeIterator_.js");

    /**
     * Return minimum value inside array
     */
    function min(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return -Infinity;
        } else if (arr.length && !iterator) {
            return Math.min.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = Infinity,
                value,
                temp;

            var i = -1, len = arr.length;
            while (++i < len) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp < compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    module.exports = min;




/***/ }),

/***/ "./node_modules/mout/array/slice.js":
/***/ (function(module, exports) {



    /**
     * Create slice of source array or array-like object
     */
    function slice(arr, start, end){
        var len = arr.length;

        if (start == null) {
            start = 0;
        } else if (start < 0) {
            start = Math.max(len + start, 0);
        } else {
            start = Math.min(start, len);
        }

        if (end == null) {
            end = len;
        } else if (end < 0) {
            end = Math.max(len + end, 0);
        } else {
            end = Math.min(end, len);
        }

        var result = [];
        while (start < end) {
            result.push(arr[start++]);
        }

        return result;
    }

    module.exports = slice;




/***/ }),

/***/ "./node_modules/mout/function/bind.js":
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__("./node_modules/mout/array/slice.js");

    /**
     * Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.
     * @param {Function} fn  Function.
     * @param {object} context   Execution context.
     * @param {rest} args    Arguments (0...n arguments).
     * @return {Function} Wrapped Function.
     */
    function bind(fn, context, args){
        var argsArr = slice(arguments, 2); //curried args
        return function(){
            return fn.apply(context, argsArr.concat(slice(arguments)));
        };
    }

    module.exports = bind;




/***/ }),

/***/ "./node_modules/mout/function/identity.js":
/***/ (function(module, exports) {



    /**
     * Returns the first argument provided to it.
     */
    function identity(val){
        return val;
    }

    module.exports = identity;




/***/ }),

/***/ "./node_modules/mout/function/makeIterator_.js":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("./node_modules/mout/function/identity.js");
var prop = __webpack_require__("./node_modules/mout/function/prop.js");
var deepMatches = __webpack_require__("./node_modules/mout/object/deepMatches.js");

    /**
     * Converts argument into a valid iterator.
     * Used internally on most array/object/collection methods that receives a
     * callback/iterator providing a shortcut syntax.
     */
    function makeIterator(src, thisObj){
        if (src == null) {
            return identity;
        }
        switch(typeof src) {
            case 'function':
                // function is the first to improve perf (most common case)
                // also avoid using `Function#call` if not needed, which boosts
                // perf a lot in some cases
                return (typeof thisObj !== 'undefined')? function(val, i, arr){
                    return src.call(thisObj, val, i, arr);
                } : src;
            case 'object':
                return function(val){
                    return deepMatches(val, src);
                };
            case 'string':
            case 'number':
                return prop(src);
        }
    }

    module.exports = makeIterator;




/***/ }),

/***/ "./node_modules/mout/function/prop.js":
/***/ (function(module, exports) {



    /**
     * Returns a function that gets a property of the passed object
     */
    function prop(name){
        return function(obj){
            return obj[name];
        };
    }

    module.exports = prop;




/***/ }),

/***/ "./node_modules/mout/lang/clone.js":
/***/ (function(module, exports, __webpack_require__) {

var kindOf = __webpack_require__("./node_modules/mout/lang/kindOf.js");
var isPlainObject = __webpack_require__("./node_modules/mout/lang/isPlainObject.js");
var mixIn = __webpack_require__("./node_modules/mout/object/mixIn.js");

    /**
     * Clone native types.
     */
    function clone(val){
        switch (kindOf(val)) {
            case 'Object':
                return cloneObject(val);
            case 'Array':
                return cloneArray(val);
            case 'RegExp':
                return cloneRegExp(val);
            case 'Date':
                return cloneDate(val);
            default:
                return val;
        }
    }

    function cloneObject(source) {
        if (isPlainObject(source)) {
            return mixIn({}, source);
        } else {
            return source;
        }
    }

    function cloneRegExp(r) {
        var flags = '';
        flags += r.multiline ? 'm' : '';
        flags += r.global ? 'g' : '';
        flags += r.ignoreCase ? 'i' : '';
        return new RegExp(r.source, flags);
    }

    function cloneDate(date) {
        return new Date(+date);
    }

    function cloneArray(arr) {
        return arr.slice();
    }

    module.exports = clone;




/***/ }),

/***/ "./node_modules/mout/lang/deepClone.js":
/***/ (function(module, exports, __webpack_require__) {

var clone = __webpack_require__("./node_modules/mout/lang/clone.js");
var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var kindOf = __webpack_require__("./node_modules/mout/lang/kindOf.js");
var isPlainObject = __webpack_require__("./node_modules/mout/lang/isPlainObject.js");

    /**
     * Recursively clone native types.
     */
    function deepClone(val, instanceClone) {
        switch ( kindOf(val) ) {
            case 'Object':
                return cloneObject(val, instanceClone);
            case 'Array':
                return cloneArray(val, instanceClone);
            default:
                return clone(val);
        }
    }

    function cloneObject(source, instanceClone) {
        if (isPlainObject(source)) {
            var out = {};
            forOwn(source, function(val, key) {
                this[key] = deepClone(val, instanceClone);
            }, out);
            return out;
        } else if (instanceClone) {
            return instanceClone(source);
        } else {
            return source;
        }
    }

    function cloneArray(arr, instanceClone) {
        var out = [],
            i = -1,
            n = arr.length,
            val;
        while (++i < n) {
            out[i] = deepClone(arr[i], instanceClone);
        }
        return out;
    }

    module.exports = deepClone;





/***/ }),

/***/ "./node_modules/mout/lang/is.js":
/***/ (function(module, exports) {



    /**
     * Check if both arguments are egal.
     */
    function is(x, y){
        // implementation borrowed from harmony:egal spec
        if (x === y) {
          // 0 === -0, but they are not identical
          return x !== 0 || 1 / x === 1 / y;
        }

        // NaN !== NaN, but they are identical.
        // NaNs are the only non-reflexive value, i.e., if x !== x,
        // then x is a NaN.
        // isNaN is broken: it converts its argument to number, so
        // isNaN("foo") => true
        return x !== x && y !== y;
    }

    module.exports = is;




/***/ }),

/***/ "./node_modules/mout/lang/isArray.js":
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__("./node_modules/mout/lang/isKind.js");
    /**
     */
    var isArray = Array.isArray || function (val) {
        return isKind(val, 'Array');
    };
    module.exports = isArray;



/***/ }),

/***/ "./node_modules/mout/lang/isFunction.js":
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__("./node_modules/mout/lang/isKind.js");
    /**
     */
    function isFunction(val) {
        return isKind(val, 'Function');
    }
    module.exports = isFunction;



/***/ }),

/***/ "./node_modules/mout/lang/isKind.js":
/***/ (function(module, exports, __webpack_require__) {

var kindOf = __webpack_require__("./node_modules/mout/lang/kindOf.js");
    /**
     * Check if value is from a specific "kind".
     */
    function isKind(val, kind){
        return kindOf(val) === kind;
    }
    module.exports = isKind;



/***/ }),

/***/ "./node_modules/mout/lang/isObject.js":
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__("./node_modules/mout/lang/isKind.js");
    /**
     */
    function isObject(val) {
        return isKind(val, 'Object');
    }
    module.exports = isObject;



/***/ }),

/***/ "./node_modules/mout/lang/isPlainObject.js":
/***/ (function(module, exports) {



    /**
     * Checks if the value is created by the `Object` constructor.
     */
    function isPlainObject(value) {
        return (!!value && typeof value === 'object' &&
            value.constructor === Object);
    }

    module.exports = isPlainObject;




/***/ }),

/***/ "./node_modules/mout/lang/isPrimitive.js":
/***/ (function(module, exports) {



    /**
     * Checks if the object is a primitive
     */
    function isPrimitive(value) {
        // Using switch fallthrough because it's simple to read and is
        // generally fast: http://jsperf.com/testing-value-is-primitive/5
        switch (typeof value) {
            case "string":
            case "number":
            case "boolean":
                return true;
        }

        return value == null;
    }

    module.exports = isPrimitive;




/***/ }),

/***/ "./node_modules/mout/lang/kindOf.js":
/***/ (function(module, exports) {



    var _rKind = /^\[object (.*)\]$/,
        _toString = Object.prototype.toString,
        UNDEF;

    /**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     */
    function kindOf(val) {
        if (val === null) {
            return 'Null';
        } else if (val === UNDEF) {
            return 'Undefined';
        } else {
            return _rKind.exec( _toString.call(val) )[1];
        }
    }
    module.exports = kindOf;



/***/ }),

/***/ "./node_modules/mout/object.js":
/***/ (function(module, exports, __webpack_require__) {



//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'bindAll' : __webpack_require__("./node_modules/mout/object/bindAll.js"),
    'contains' : __webpack_require__("./node_modules/mout/object/contains.js"),
    'deepFillIn' : __webpack_require__("./node_modules/mout/object/deepFillIn.js"),
    'deepMatches' : __webpack_require__("./node_modules/mout/object/deepMatches.js"),
    'deepMixIn' : __webpack_require__("./node_modules/mout/object/deepMixIn.js"),
    'equals' : __webpack_require__("./node_modules/mout/object/equals.js"),
    'every' : __webpack_require__("./node_modules/mout/object/every.js"),
    'fillIn' : __webpack_require__("./node_modules/mout/object/fillIn.js"),
    'filter' : __webpack_require__("./node_modules/mout/object/filter.js"),
    'find' : __webpack_require__("./node_modules/mout/object/find.js"),
    'flatten' : __webpack_require__("./node_modules/mout/object/flatten.js"),
    'forIn' : __webpack_require__("./node_modules/mout/object/forIn.js"),
    'forOwn' : __webpack_require__("./node_modules/mout/object/forOwn.js"),
    'functions' : __webpack_require__("./node_modules/mout/object/functions.js"),
    'get' : __webpack_require__("./node_modules/mout/object/get.js"),
    'has' : __webpack_require__("./node_modules/mout/object/has.js"),
    'hasOwn' : __webpack_require__("./node_modules/mout/object/hasOwn.js"),
    'keys' : __webpack_require__("./node_modules/mout/object/keys.js"),
    'map' : __webpack_require__("./node_modules/mout/object/map.js"),
    'matches' : __webpack_require__("./node_modules/mout/object/matches.js"),
    'max' : __webpack_require__("./node_modules/mout/object/max.js"),
    'merge' : __webpack_require__("./node_modules/mout/object/merge.js"),
    'min' : __webpack_require__("./node_modules/mout/object/min.js"),
    'mixIn' : __webpack_require__("./node_modules/mout/object/mixIn.js"),
    'namespace' : __webpack_require__("./node_modules/mout/object/namespace.js"),
    'omit' : __webpack_require__("./node_modules/mout/object/omit.js"),
    'pick' : __webpack_require__("./node_modules/mout/object/pick.js"),
    'pluck' : __webpack_require__("./node_modules/mout/object/pluck.js"),
    'reduce' : __webpack_require__("./node_modules/mout/object/reduce.js"),
    'reject' : __webpack_require__("./node_modules/mout/object/reject.js"),
    'result' : __webpack_require__("./node_modules/mout/object/result.js"),
    'set' : __webpack_require__("./node_modules/mout/object/set.js"),
    'size' : __webpack_require__("./node_modules/mout/object/size.js"),
    'some' : __webpack_require__("./node_modules/mout/object/some.js"),
    'unset' : __webpack_require__("./node_modules/mout/object/unset.js"),
    'values' : __webpack_require__("./node_modules/mout/object/values.js")
};




/***/ }),

/***/ "./node_modules/mout/object/bindAll.js":
/***/ (function(module, exports, __webpack_require__) {

var functions = __webpack_require__("./node_modules/mout/object/functions.js");
var bind = __webpack_require__("./node_modules/mout/function/bind.js");
var forEach = __webpack_require__("./node_modules/mout/array/forEach.js");
var slice = __webpack_require__("./node_modules/mout/array/slice.js");

    /**
     * Binds methods of the object to be run in it's own context.
     */
    function bindAll(obj, rest_methodNames){
        var keys = arguments.length > 1?
                    slice(arguments, 1) : functions(obj);
        forEach(keys, function(key){
            obj[key] = bind(obj[key], obj);
        });
    }

    module.exports = bindAll;




/***/ }),

/***/ "./node_modules/mout/object/contains.js":
/***/ (function(module, exports, __webpack_require__) {

var some = __webpack_require__("./node_modules/mout/object/some.js");

    /**
     * Check if object contains value
     */
    function contains(obj, needle) {
        return some(obj, function(val) {
            return (val === needle);
        });
    }
    module.exports = contains;




/***/ }),

/***/ "./node_modules/mout/object/deepFillIn.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__("./node_modules/mout/lang/isPlainObject.js");

    /**
     * Deeply copy missing properties in the target from the defaults.
     */
    function deepFillIn(target, defaults){
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n) {
            obj = arguments[i];
            if (obj) {
                // jshint loopfunc: true
                forOwn(obj, function(newValue, key) {
                    var curValue = target[key];
                    if (curValue == null) {
                        target[key] = newValue;
                    } else if (isPlainObject(curValue) &&
                               isPlainObject(newValue)) {
                        deepFillIn(curValue, newValue);
                    }
                });
            }
        }

        return target;
    }

    module.exports = deepFillIn;




/***/ }),

/***/ "./node_modules/mout/object/deepMatches.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var isArray = __webpack_require__("./node_modules/mout/lang/isArray.js");

    function containsMatch(array, pattern) {
        var i = -1, length = array.length;
        while (++i < length) {
            if (deepMatches(array[i], pattern)) {
                return true;
            }
        }

        return false;
    }

    function matchArray(target, pattern) {
        var i = -1, patternLength = pattern.length;
        while (++i < patternLength) {
            if (!containsMatch(target, pattern[i])) {
                return false;
            }
        }

        return true;
    }

    function matchObject(target, pattern) {
        var result = true;
        forOwn(pattern, function(val, key) {
            if (!deepMatches(target[key], val)) {
                // Return false to break out of forOwn early
                return (result = false);
            }
        });

        return result;
    }

    /**
     * Recursively check if the objects match.
     */
    function deepMatches(target, pattern){
        if (target && typeof target === 'object') {
            if (isArray(target) && isArray(pattern)) {
                return matchArray(target, pattern);
            } else {
                return matchObject(target, pattern);
            }
        } else {
            return target === pattern;
        }
    }

    module.exports = deepMatches;




/***/ }),

/***/ "./node_modules/mout/object/deepMixIn.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__("./node_modules/mout/lang/isPlainObject.js");

    /**
     * Mixes objects into the target object, recursively mixing existing child
     * objects.
     */
    function deepMixIn(target, objects) {
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n){
            obj = arguments[i];
            if (obj) {
                forOwn(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {
        var existing = this[key];
        if (isPlainObject(val) && isPlainObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    module.exports = deepMixIn;




/***/ }),

/***/ "./node_modules/mout/object/equals.js":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("./node_modules/mout/object/hasOwn.js");
var every = __webpack_require__("./node_modules/mout/object/every.js");
var isObject = __webpack_require__("./node_modules/mout/lang/isObject.js");
var is = __webpack_require__("./node_modules/mout/lang/is.js");

    // Makes a function to compare the object values from the specified compare
    // operation callback.
    function makeCompare(callback) {
        return function(value, key) {
            return hasOwn(this, key) && callback(value, this[key]);
        };
    }

    function checkProperties(value, key) {
        return hasOwn(this, key);
    }

    /**
     * Checks if two objects have the same keys and values.
     */
    function equals(a, b, callback) {
        callback = callback || is;

        if (!isObject(a) || !isObject(b)) {
            return callback(a, b);
        }

        return (every(a, makeCompare(callback), b) &&
                every(b, checkProperties, a));
    }

    module.exports = equals;



/***/ }),

/***/ "./node_modules/mout/object/every.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__("./node_modules/mout/function/makeIterator_.js");

    /**
     * Object every
     */
    function every(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = true;
        forOwn(obj, function(val, key) {
            // we consider any falsy values as "false" on purpose so shorthand
            // syntax can be used to check property existence
            if (!callback(val, key, obj)) {
                result = false;
                return false; // break
            }
        });
        return result;
    }

    module.exports = every;




/***/ }),

/***/ "./node_modules/mout/object/fillIn.js":
/***/ (function(module, exports, __webpack_require__) {

var forEach = __webpack_require__("./node_modules/mout/array/forEach.js");
var slice = __webpack_require__("./node_modules/mout/array/slice.js");
var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");

    /**
     * Copy missing properties in the obj from the defaults.
     */
    function fillIn(obj, var_defaults){
        forEach(slice(arguments, 1), function(base){
            forOwn(base, function(val, key){
                if (obj[key] == null) {
                    obj[key] = val;
                }
            });
        });
        return obj;
    }

    module.exports = fillIn;




/***/ }),

/***/ "./node_modules/mout/object/filter.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__("./node_modules/mout/function/makeIterator_.js");

    /**
     * Creates a new object with all the properties where the callback returns
     * true.
     */
    function filterValues(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var output = {};
        forOwn(obj, function(value, key, obj) {
            if (callback(value, key, obj)) {
                output[key] = value;
            }
        });

        return output;
    }
    module.exports = filterValues;



/***/ }),

/***/ "./node_modules/mout/object/find.js":
/***/ (function(module, exports, __webpack_require__) {

var some = __webpack_require__("./node_modules/mout/object/some.js");
var makeIterator = __webpack_require__("./node_modules/mout/function/makeIterator_.js");

    /**
     * Returns first item that matches criteria
     */
    function find(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result;
        some(obj, function(value, key, obj) {
            if (callback(value, key, obj)) {
                result = value;
                return true; //break
            }
        });
        return result;
    }

    module.exports = find;




/***/ }),

/***/ "./node_modules/mout/object/flatten.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__("./node_modules/mout/lang/isPlainObject.js");

    /*
     * Helper function to flatten to a destination object.
     * Used to remove the need to create intermediate objects while flattening.
     */
    function flattenTo(obj, result, prefix, level) {
        forOwn(obj, function (value, key) {
            var nestedPrefix = prefix ? prefix + '.' + key : key;

            if (level !== 0 && isPlainObject(value)) {
                flattenTo(value, result, nestedPrefix, level - 1);
            } else {
                result[nestedPrefix] = value;
            }
        });

        return result;
    }

    /**
     * Recursively flattens an object.
     * A new object containing all the elements is returned.
     * If level is specified, it will only flatten up to that level.
     */
    function flatten(obj, level) {
        if (obj == null) {
            return {};
        }

        level = level == null ? -1 : level;
        return flattenTo(obj, {}, '', level);
    }

    module.exports = flatten;




/***/ }),

/***/ "./node_modules/mout/object/forIn.js":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("./node_modules/mout/object/hasOwn.js");

    var _hasDontEnumBug,
        _dontEnums;

    function checkDontEnum(){
        _dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

        _hasDontEnumBug = true;

        for (var key in {'toString': null}) {
            _hasDontEnumBug = false;
        }
    }

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forIn(obj, fn, thisObj){
        var key, i = 0;
        // no need to check if argument is a real object that way we can use
        // it for arrays, functions, date, etc.

        //post-pone check till needed
        if (_hasDontEnumBug == null) checkDontEnum();

        for (key in obj) {
            if (exec(fn, obj, key, thisObj) === false) {
                break;
            }
        }


        if (_hasDontEnumBug) {
            var ctor = obj.constructor,
                isProto = !!ctor && obj === ctor.prototype;

            while (key = _dontEnums[i++]) {
                // For constructor, if it is a prototype object the constructor
                // is always non-enumerable unless defined otherwise (and
                // enumerated above).  For non-prototype objects, it will have
                // to be defined on this object, since it cannot be defined on
                // any prototype objects.
                //
                // For other [[DontEnum]] properties, check if the value is
                // different than Object prototype value.
                if (
                    (key !== 'constructor' ||
                        (!isProto && hasOwn(obj, key))) &&
                    obj[key] !== Object.prototype[key]
                ) {
                    if (exec(fn, obj, key, thisObj) === false) {
                        break;
                    }
                }
            }
        }
    }

    function exec(fn, obj, key, thisObj){
        return fn.call(thisObj, obj[key], key, obj);
    }

    module.exports = forIn;




/***/ }),

/***/ "./node_modules/mout/object/forOwn.js":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("./node_modules/mout/object/hasOwn.js");
var forIn = __webpack_require__("./node_modules/mout/object/forIn.js");

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forOwn(obj, fn, thisObj){
        forIn(obj, function(val, key){
            if (hasOwn(obj, key)) {
                return fn.call(thisObj, obj[key], key, obj);
            }
        });
    }

    module.exports = forOwn;




/***/ }),

/***/ "./node_modules/mout/object/functions.js":
/***/ (function(module, exports, __webpack_require__) {

var forIn = __webpack_require__("./node_modules/mout/object/forIn.js");

    /**
     * return a list of all enumerable properties that have function values
     */
    function functions(obj){
        var keys = [];
        forIn(obj, function(val, key){
            if (typeof val === 'function'){
                keys.push(key);
            }
        });
        return keys.sort();
    }

    module.exports = functions;




/***/ }),

/***/ "./node_modules/mout/object/get.js":
/***/ (function(module, exports, __webpack_require__) {

var isPrimitive = __webpack_require__("./node_modules/mout/lang/isPrimitive.js");

    /**
     * get "nested" object property
     */
    function get(obj, prop){
        var parts = prop.split('.'),
            last = parts.pop();

        while (prop = parts.shift()) {
            obj = obj[prop];
            if (obj == null) return;
        }

        return obj[last];
    }

    module.exports = get;




/***/ }),

/***/ "./node_modules/mout/object/has.js":
/***/ (function(module, exports, __webpack_require__) {

var get = __webpack_require__("./node_modules/mout/object/get.js");

    var UNDEF;

    /**
     * Check if object has nested property.
     */
    function has(obj, prop){
        return get(obj, prop) !== UNDEF;
    }

    module.exports = has;





/***/ }),

/***/ "./node_modules/mout/object/hasOwn.js":
/***/ (function(module, exports) {



    /**
     * Safer Object.hasOwnProperty
     */
     function hasOwn(obj, prop){
         return Object.prototype.hasOwnProperty.call(obj, prop);
     }

     module.exports = hasOwn;




/***/ }),

/***/ "./node_modules/mout/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");

    /**
     * Get object keys
     */
     var keys = Object.keys || function (obj) {
            var keys = [];
            forOwn(obj, function(val, key){
                keys.push(key);
            });
            return keys;
        };

    module.exports = keys;




/***/ }),

/***/ "./node_modules/mout/object/map.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__("./node_modules/mout/function/makeIterator_.js");

    /**
     * Creates a new object where all the values are the result of calling
     * `callback`.
     */
    function mapValues(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var output = {};
        forOwn(obj, function(val, key, obj) {
            output[key] = callback(val, key, obj);
        });

        return output;
    }
    module.exports = mapValues;



/***/ }),

/***/ "./node_modules/mout/object/matches.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");

    /**
     * checks if a object contains all given properties/values
     */
    function matches(target, props){
        // can't use "object/every" because of circular dependency
        var result = true;
        forOwn(props, function(val, key){
            if (target[key] !== val) {
                // break loop at first difference
                return (result = false);
            }
        });
        return result;
    }

    module.exports = matches;




/***/ }),

/***/ "./node_modules/mout/object/max.js":
/***/ (function(module, exports, __webpack_require__) {

var arrMax = __webpack_require__("./node_modules/mout/array/max.js");
var values = __webpack_require__("./node_modules/mout/object/values.js");

    /**
     * Returns maximum value inside object.
     */
    function max(obj, compareFn) {
        return arrMax(values(obj), compareFn);
    }

    module.exports = max;



/***/ }),

/***/ "./node_modules/mout/object/merge.js":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("./node_modules/mout/object/hasOwn.js");
var deepClone = __webpack_require__("./node_modules/mout/lang/deepClone.js");
var isObject = __webpack_require__("./node_modules/mout/lang/isObject.js");

    /**
     * Deep merge objects.
     */
    function merge() {
        var i = 1,
            key, val, obj, target;

        // make sure we don't modify source element and it's properties
        // objects are passed by reference
        target = deepClone( arguments[0] );

        while (obj = arguments[i++]) {
            for (key in obj) {
                if ( ! hasOwn(obj, key) ) {
                    continue;
                }

                val = obj[key];

                if ( isObject(val) && isObject(target[key]) ){
                    // inception, deep merge objects
                    target[key] = merge(target[key], val);
                } else {
                    // make sure arrays, regexp, date, objects are cloned
                    target[key] = deepClone(val);
                }

            }
        }

        return target;
    }

    module.exports = merge;




/***/ }),

/***/ "./node_modules/mout/object/min.js":
/***/ (function(module, exports, __webpack_require__) {

var arrMin = __webpack_require__("./node_modules/mout/array/min.js");
var values = __webpack_require__("./node_modules/mout/object/values.js");

    /**
     * Returns minimum value inside object.
     */
    function min(obj, iterator) {
        return arrMin(values(obj), iterator);
    }

    module.exports = min;



/***/ }),

/***/ "./node_modules/mout/object/mixIn.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");

    /**
    * Combine properties from all the objects into first one.
    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
    * @param {object} target    Target Object
    * @param {...object} objects    Objects to be combined (0...n objects).
    * @return {object} Target Object.
    */
    function mixIn(target, objects){
        var i = 0,
            n = arguments.length,
            obj;
        while(++i < n){
            obj = arguments[i];
            if (obj != null) {
                forOwn(obj, copyProp, target);
            }
        }
        return target;
    }

    function copyProp(val, key){
        this[key] = val;
    }

    module.exports = mixIn;



/***/ }),

/***/ "./node_modules/mout/object/namespace.js":
/***/ (function(module, exports, __webpack_require__) {

var forEach = __webpack_require__("./node_modules/mout/array/forEach.js");

    /**
     * Create nested object if non-existent
     */
    function namespace(obj, path){
        if (!path) return obj;
        forEach(path.split('.'), function(key){
            if (!obj[key]) {
                obj[key] = {};
            }
            obj = obj[key];
        });
        return obj;
    }

    module.exports = namespace;




/***/ }),

/***/ "./node_modules/mout/object/omit.js":
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__("./node_modules/mout/array/slice.js");
var contains = __webpack_require__("./node_modules/mout/array/contains.js");

    /**
     * Return a copy of the object, filtered to only contain properties except the blacklisted keys.
     */
    function omit(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
            out = {};

        for (var property in obj) {
            if (obj.hasOwnProperty(property) && !contains(keys, property)) {
                out[property] = obj[property];
            }
        }
        return out;
    }

    module.exports = omit;




/***/ }),

/***/ "./node_modules/mout/object/pick.js":
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__("./node_modules/mout/array/slice.js");

    /**
     * Return a copy of the object, filtered to only have values for the whitelisted keys.
     */
    function pick(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
            out = {},
            i = 0, key;
        while (key = keys[i++]) {
            out[key] = obj[key];
        }
        return out;
    }

    module.exports = pick;




/***/ }),

/***/ "./node_modules/mout/object/pluck.js":
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__("./node_modules/mout/object/map.js");
var prop = __webpack_require__("./node_modules/mout/function/prop.js");

    /**
     * Extract a list of property values.
     */
    function pluck(obj, propName){
        return map(obj, prop(propName));
    }

    module.exports = pluck;




/***/ }),

/***/ "./node_modules/mout/object/reduce.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var size = __webpack_require__("./node_modules/mout/object/size.js");

    /**
     * Object reduce
     */
    function reduce(obj, callback, memo, thisObj) {
        var initial = arguments.length > 2;

        if (!size(obj) && !initial) {
            throw new Error('reduce of empty object with no initial value');
        }

        forOwn(obj, function(value, key, list) {
            if (!initial) {
                memo = value;
                initial = true;
            }
            else {
                memo = callback.call(thisObj, memo, value, key, list);
            }
        });

        return memo;
    }

    module.exports = reduce;




/***/ }),

/***/ "./node_modules/mout/object/reject.js":
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__("./node_modules/mout/object/filter.js");
var makeIterator = __webpack_require__("./node_modules/mout/function/makeIterator_.js");

    /**
     * Object reject
     */
    function reject(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        return filter(obj, function(value, index, obj) {
            return !callback(value, index, obj);
        }, thisObj);
    }

    module.exports = reject;




/***/ }),

/***/ "./node_modules/mout/object/result.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/mout/lang/isFunction.js");

    function result(obj, prop) {
        var property = obj[prop];

        if(property === undefined) {
            return;
        }

        return isFunction(property) ? property.call(obj) : property;
    }

    module.exports = result;



/***/ }),

/***/ "./node_modules/mout/object/set.js":
/***/ (function(module, exports, __webpack_require__) {

var namespace = __webpack_require__("./node_modules/mout/object/namespace.js");

    /**
     * set "nested" object property
     */
    function set(obj, prop, val){
        var parts = (/^(.+)\.(.+)$/).exec(prop);
        if (parts){
            namespace(obj, parts[1])[parts[2]] = val;
        } else {
            obj[prop] = val;
        }
    }

    module.exports = set;




/***/ }),

/***/ "./node_modules/mout/object/size.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");

    /**
     * Get object size
     */
    function size(obj) {
        var count = 0;
        forOwn(obj, function(){
            count++;
        });
        return count;
    }

    module.exports = size;




/***/ }),

/***/ "./node_modules/mout/object/some.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__("./node_modules/mout/function/makeIterator_.js");

    /**
     * Object some
     */
    function some(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = false;
        forOwn(obj, function(val, key) {
            if (callback(val, key, obj)) {
                result = true;
                return false; // break
            }
        });
        return result;
    }

    module.exports = some;




/***/ }),

/***/ "./node_modules/mout/object/unset.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/mout/object/has.js");

    /**
     * Unset object property.
     */
    function unset(obj, prop){
        if (has(obj, prop)) {
            var parts = prop.split('.'),
                last = parts.pop();
            while (prop = parts.shift()) {
                obj = obj[prop];
            }
            return (delete obj[last]);

        } else {
            // if property doesn't exist treat as deleted
            return true;
        }
    }

    module.exports = unset;




/***/ }),

/***/ "./node_modules/mout/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__("./node_modules/mout/object/forOwn.js");

    /**
     * Get object values
     */
    function values(obj) {
        var vals = [];
        forOwn(obj, function(val, key){
            vals.push(val);
        });
        return vals;
    }

    module.exports = values;




/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _iso6391Zh = __webpack_require__("./node_modules/iso-639-1-zh/src/index.js");

var _iso6391Zh2 = _interopRequireDefault(_iso6391Zh);

var _iso31661Alpha = __webpack_require__("./node_modules/iso-3166-1-alpha-2/index.js");

var _iso31661Alpha2 = _interopRequireDefault(_iso31661Alpha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REG = /^([a-z]{2})-([A-Z]{2})$/;

var LocaleCode = function () {
  function LocaleCode() {
    (0, _classCallCheck3.default)(this, LocaleCode);
  }

  (0, _createClass3.default)(LocaleCode, null, [{
    key: 'getLanguageCode',

    /* language iso-639-1 */
    value: function getLanguageCode(code) {
      var match = code.match(REG);
      if (!match || match.length < 1) return '';
      return match[1];
    }
  }, {
    key: 'getLanguageName',
    value: function getLanguageName(code) {
      var languageCode = LocaleCode.getLanguageCode(code);
      return _iso6391Zh2.default.getName(languageCode);
    }
  }, {
    key: 'getLanguageNativeName',
    value: function getLanguageNativeName(code) {
      var languageCode = LocaleCode.getLanguageCode(code);
      return _iso6391Zh2.default.getNativeName(languageCode);
    }
  }, {
    key: 'getLanguageZhName',
    value: function getLanguageZhName(code) {
      var languageCode = LocaleCode.getLanguageCode(code);
      return _iso6391Zh2.default.getZhName(languageCode);
    }
  }, {
    key: 'validateLanguageCode',
    value: function validateLanguageCode(code) {
      var languageCode = LocaleCode.getLanguageCode(code);
      return _iso6391Zh2.default.validate(languageCode);
    }
  }, {
    key: 'getLanguages',
    value: function getLanguages(codes) {
      var list = [];
      for (var i = 0; i < codes.length; i++) {
        list.push({
          code: codes[i],
          name: LocaleCode.getLanguageName(codes[i]),
          nativeName: LocaleCode.getLanguageNativeName(codes[i]),
          zhName: LocaleCode.getLanguageZhName(codes[i])
        });
      }
      return list;
    }

    /* country iso-3166-1-alpha-2 */

  }, {
    key: 'getCountryCode',
    value: function getCountryCode(code) {
      var match = code.match(REG);
      if (!match || match.length < 2) return '';
      return match[2];
    }
  }, {
    key: 'getCountryName',
    value: function getCountryName(code) {
      var countryCode = LocaleCode.getCountryCode(code);
      return _iso31661Alpha2.default.getCountry(countryCode);
    }
  }, {
    key: 'validateCountryCode',
    value: function validateCountryCode(code) {
      code = LocaleCode.getCountryCode(code);
      if (_iso31661Alpha2.default.getCodes().indexOf(code) === -1) {
        return false;
      } else {
        return true;
      }
    }

    /* validate */

  }, {
    key: 'validate',
    value: function validate(code) {
      var match = code.match(REG);
      if (match && match.length === 3 && LocaleCode.validateLanguageCode(code) && LocaleCode.validateCountryCode(code)) {
        return true;
      } else {
        return false;
      }
    }
  }]);
  return LocaleCode;
}();

exports.default = LocaleCode;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map