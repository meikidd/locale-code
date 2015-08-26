# locale-code
Simple interface for [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes and [ISO-3166-1-alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.

## Install

```
npm install locale-code
```


## Methods


### getLanguageCode(code) 
  - @param code {string}
  - @return {string}

Lookup language code from locale code

### getLanguageName(code) 
  - @param code {string}
  - @return {string}

Lookup language english name by code

### getLanguageNativeName(code) 
  - @param code {string}
  - @return {string}

Lookup language native name by code

### validateLanguageCode(code) 
  - @param code {string}
  - @return {boolean}

Check whether the given code is in the list of [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

### getLanguages(codes) 
  - @param codes {array}
  - @return {array}

Get the array of the language objects by the given codes


### getCountryCode(code) 
  - @param code {string}
  - @return {string}

Lookup country code from locale code

### getCountryName(code) 
  - @param code {string}
  - @return {string}

Lookup country name by code

### validateCountryCode(code) 
  - @param code {string}
  - @return {boolean}

Check whether the given code is in the list of [ISO-3166-1-alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### validate(code) 
  - @param code {string}
  - @return {boolean}

Check whether the given code is in the list of [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and [ISO-3166-1-alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)


## Usage

```
var  LocaleCode = require('locale-code')

console.log(LocaleCode.getLanguageCode('en-US')); // 'en'

console.log(LocaleCode.getLanguageName('zh-CN')); // 'Chinese'

console.log(LocaleCode.getLanguageNativeName('zh-CN')); // '中文'

console.log(LocaleCode.validateLanguageCode('en-US')); // true

console.log(LocaleCode.validateLanguageCode('bb-US')); // false

console.log(LocaleCode.getLanguages(['en-US','zh-CN'])); 
// [{code:'en-US', name:'English', nativeName:'English'}, {code:'zh-CN', name:'Chinese', nativeName:'中文'}]


console.log(LocaleCode.getCountryCode('en-US')); // 'US'

console.log(LocaleCode.getCountryName('en-US')); // 'United States'

console.log(LocaleCode.validateCountryCode('en-US')); // true

console.log(LocaleCode.validateCountryCode('en-ZZ')); // false

console.log(LocaleCode.validate('en-US')); // true

console.log(LocaleCode.validate('en_US')); // false

console.log(LocaleCode.validate('bb-ZZ')); // false

```