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
      var match = code.match(REG);
      if (!match || match.length < 1) return '';
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
      console.log(code);
      var languageCode = LocaleCode.getLanguageCode(code);
      console.log(languageCode);
      return _iso63912['default'].validate(languageCode);
    }
  }, {
    key: 'getLanguages',
    value: function getLanguages(codes) {
      var list = [];
      for (var i = 0; i < codes.length; i++) {
        list.push({
          code: codes[i],
          name: LocaleCode.getLanguageName(codes[i]),
          nativeName: LocaleCode.getLanguageNativeName(codes[i])
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
      return _iso31661Alpha22['default'].getCountry(countryCode);
    }
  }, {
    key: 'validateCountryCode',
    value: function validateCountryCode(code) {
      console.log(code);
      code = LocaleCode.getCountryCode(code);
      console.log(code);
      if (_iso31661Alpha22['default'].getCodes().indexOf(code) === -1) {
        return false;
      } else {
        return true;
      }
    }

    /* validate */
  }, {
    key: 'validate',
    value: function validate(code) {
      console.log(code);
      var match = code.match(REG);
      console.log(match);
      if (match && match.length === 3 && LocaleCode.validateLanguageCode(code) && LocaleCode.validateCountryCode(code)) {
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