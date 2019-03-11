declare module 'locale-code' {
  export interface LocaleObject {
    code: string;
    name: string;
    nativeName: string;
    [propName: string]: any;
  }
  interface LocaleCode {
    getLanguageCode(code: string): string;
    getLanguageName(code: string): string;
    getLanguageNativeName(code: string): string;
    validateLanguageCode(code: string): boolean;
    getLanguages(code: string[]): LocaleObject[];
    getCountryCode(code: string): string;
    getCountryName(code: string): string;
    validateCountryCode(code: string): boolean;
    validate(code: string): boolean;
  }
  let localeCode: LocaleCode;
  export default localeCode;
}
