var assert = require('assert')
var LocaleCode = require('../build/index')


describe('getLanguageCode()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.getLanguageCode('en-US'), 'en')
  })
  it('zh-US', function(){
    assert.equal(LocaleCode.getLanguageCode('zh-CN'), 'zh')
  })
})

describe('getLanguageName()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.getLanguageName('en-US'), 'English')
  })
  it('zh-CN', function(){
    assert.equal(LocaleCode.getLanguageName('zh-CN'), 'Chinese')
  })
})

describe('getLanguageNativeName()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.getLanguageNativeName('en-US'), 'English')
  })
  it('zh-CN', function(){
    assert.equal(LocaleCode.getLanguageNativeName('zh-CN'), '中文')
  })
})

describe('getLanguageZhName()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.getLanguageZhName('en-US'), '英语')
  })
  it('zh-CN', function(){
    assert.equal(LocaleCode.getLanguageZhName('zh-CN'), '中文')
  })
})

describe('getLanguages()', function() {
  it('[en-US,zh-CN]', function(){
    assert.deepEqual(LocaleCode.getLanguages(['en-US','zh-CN']), [{code:'en-US', name:'English', nativeName:'English', zhName:'英语'}, {code:'zh-CN', name:'Chinese', nativeName:'中文', zhName:'中文'}])
  })
})

describe('validateLanguageCode()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.validateLanguageCode('en-US'), true)
  })
  it('zh-CN', function(){
    assert.equal(LocaleCode.validateLanguageCode('zh-CN'), true)
  })
  it('bb-XX', function(){
    assert.equal(LocaleCode.validateLanguageCode('bb-XX'), false)
  })
})


describe('getCountryCode()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.getCountryCode('en-US'), 'US')
  })
  it('zh-US', function(){
    assert.equal(LocaleCode.getCountryCode('zh-CN'), 'CN')
  })
})

describe('getCountryName()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.getCountryName('en-US'), 'United States')
  })
  it('zh-CN', function(){
    assert.equal(LocaleCode.getCountryName('zh-CN'), 'China')
  })
})

describe('validateCountryCode()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.validateCountryCode('en-US'), true)
  })
  it('zh-CN', function(){
    assert.equal(LocaleCode.validateCountryCode('zh-CN'), true)
  })
  it('bb-XX', function(){
    assert.equal(LocaleCode.validateCountryCode('bb-XX'), false)
  })
})

describe('validate()', function() {
  it('en-US', function(){
    assert.equal(LocaleCode.validate('en-US'), true)
  })
  it('en_US', function(){
    assert.equal(LocaleCode.validate('en_US'), false)
  })
  it('zh-CN', function(){
    assert.equal(LocaleCode.validate('zh-CN'), true)
  })
  it('bb-XX', function(){
    assert.equal(LocaleCode.validate('bb-XX'), false)
  })
})

