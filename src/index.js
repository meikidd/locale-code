import LanguageCode from 'iso-639-1-zh'
import CountryCode from 'iso-3166-1-alpha-2'

const REG = /^([a-z]{2})-([A-Z]{2})$/

export default class LocaleCode {
  /* language iso-639-1 */
  static getLanguageCode(code) {
    var match = code.match(REG)
    if(!match || match.length < 1) return ''
    return match[1]
  }

  static getLanguageName(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return LanguageCode.getName(languageCode)
  }

  static getLanguageNativeName(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return LanguageCode.getNativeName(languageCode)
  }

  static getLanguageZhName(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return LanguageCode.getZhName(languageCode)
  }

  static validateLanguageCode(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return LanguageCode.validate(languageCode)
  }

  static getLanguages(codes) {
    var list = []
    for (var i = 0; i < codes.length; i++) {
      list.push({
        code:codes[i], 
        name: LocaleCode.getLanguageName(codes[i]),
        nativeName: LocaleCode.getLanguageNativeName(codes[i]),
        zhName: LocaleCode.getLanguageZhName(codes[i])
      })
    }
    return list
  }

  /* country iso-3166-1-alpha-2 */
  static getCountryCode(code) {
    var match = code.match(REG)
    if(!match || match.length < 2) return ''
    return match[2]
  }
  static getCountryName(code) {
    var countryCode = LocaleCode.getCountryCode(code)
    return CountryCode.getCountry(countryCode)
  }
  static validateCountryCode(code) {
    code = LocaleCode.getCountryCode(code)
    if(CountryCode.getCodes().indexOf(code) === -1) {
      return false
    } else {
      return true
    }
  }

  /* validate */
  static validate(code) {
    var match = code.match(REG)
    if(match && match.length === 3 && 
      LocaleCode.validateLanguageCode(code) &&
      LocaleCode.validateCountryCode(code)) {
      return true
    } else {
      return false
    }
  }
}