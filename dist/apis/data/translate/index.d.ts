import { I18n, I18nFull } from "../../../@types/common";
declare const Translations: {
    Translate: (app: string, i18n: I18n, locale: string, Authorization?: string) => {
        onComelete: (func: (data: {
            msg: "TRANSLATED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    App: (app: string) => {
        onComelete: (func: (data: I18nFull) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    Locale: (app: string, locale: string) => {
        onComelete: (func: (data: I18nFull) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    Module: (app: string, locale: string, module: string) => {
        onComelete: (func: (data: I18nFull) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    AddLocale: (app: string, locale: string, Authorization?: string) => {
        onComelete: (func: (data: {
            msg: "DONE";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    AppLocales: (app: string) => {
        onComelete: (func: (data: string[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    RemoveLocale: (app: string, locale: string, Authorization?: string) => {
        onComelete: (func: (data: {
            msg: "DONE";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
};
export default Translations;
