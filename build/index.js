'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _iso6391 = require('iso-639-1');

var _iso63912 = _interopRequireDefault(_iso6391);

var _iso31661Alpha2 = require('iso-3166-1-alpha-2');

var _iso31661Alpha22 = _interopRequireDefault(_iso31661Alpha2);

var REG = /^([a-z]{2})-([A-Z]{2})$/;

var LocaleCode = (function () {
  function LocaleCode() {
    _classCallCheck(this, LocaleCode);
  }

  _createClass(LocaleCode, null, [{
    key: 'getLanguageCode',

    /* language iso-639-1 */
    value: function getLanguageCode(code) {
      if (!LocaleCode.validate(code)) return '';

      var match = code.match(REG);
      return match[1];
    }
  }, {
    key: 'getLanguageName',
    value: function getLanguageName(code) {
      var languageCode = LocaleCode.getLanguageCode(code);
      return _iso63912['default'].getName(languageCode);
    }
  }, {
    key: 'getLanguageNativeName',
    value: function getLanguageNativeName(code) {
      var languageCode = LocaleCode.getLanguageCode(code);
      return _iso63912['default'].getNativeName(languageCode);
    }
  }, {
    key: 'validateLanguageCode',
    value: function validateLanguageCode(code) {
      return _iso63912['default'].validate(code);
    }
  }, {
    key: 'getLanguages',
    value: function getLanguages(codes) {
      var list = [];
      for (var i = 0; i < codes.length; i++) {
        list.push({
          code: codes[i],
          name: getLanguageName(codes[i]),
          nativeName: getLanguageNativeName(codes[i])
        });
      }
      return list;
    }
  }, {
    key: 'getCountryCode',

    /* country iso-3166-1-alpha-2 */
    value: function getCountryCode(code) {
      if (!LocaleCode.validate(code)) return '';

      var match = code.match(REG);
      return match[2];
    }
  }, {
    key: 'getCountryName',
    value: function getCountryName(code) {
      var countryCode = LocaleCode.getCountryCode(code);
      return _iso31661Alpha22['default'].getCountry(countryCode);
    }
  }, {
    key: 'validateCountryCode',
    value: function validateCountryCode(code) {
      if (_iso31661Alpha22['default'].getCodes().indexOf(code) === -1) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: 'validate',

    /* validate */
    value: function validate(code) {
      var match = code.match(REG);
      if (match && match.length === 3 && LocaleCode.validateLanguageCode(match[1]) && LocaleCode.validateCountryCode(match[2])) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return LocaleCode;
})();

exports['default'] = LocaleCode;
module.exports = exports['default'];