import assign from 'object-assign'
import LanguageCode from 'iso-639-1'
import CountryCode from 'iso-3166-1-alpha-2'

const REG = /^([a-z]{2})-([A-Z]{2})$/

export default class LocaleCode {
  static getLanguageCode(code) {
    if(!LocaleCode.validate(code)) return ''

    var match = code.match(REG)
    return match[1]
  }
  static getLanguage(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return LanguageCode.getName(languageCode)
  }
  static getLanguageNativeName(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return LanguageCode.getNativeName(languageCode)
  }

  static getCountryCode(code) {
    if(!LocaleCode.validate(code)) return ''

    var match = code.match(REG)
    return match[2]
  }
  static getCountry(code) {
    var countryCode = LocaleCode.getCountryCode(code)
    return CountryCode.getCountry(countryCode)
  }

  static validate(code) {
    var match = code.match(REG)
    if(match && match.length === 3 && 
      LocaleCode.validateLanguageCode(match[1]) &&
      LocaleCode.validateCountryCode(match[2])) {
      return true
    } else {
      return false
    }
  }
  static validateLanguageCode(code) {
    return LanguageCode.validate(code)
  }
  static validateCountryCode(code) {
    if(CountryCode.getCodes().indexOf(code) === -1) {
      return false
    } else {
      return true
    }
  }
}