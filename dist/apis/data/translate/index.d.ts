import { I18n, I18nFull } from "../../../@types/common";
declare const Translations: {
    Translate: (app: string, i18n: I18n, locale: string, Authorization?: string) => {
        onComelete: (func: (data: {
            msg: "TRANSLATED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    App: (app: string) => {
        onComelete: (func: (data: I18nFull) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    Locale: (app: string, locale: string) => {
        onComelete: (func: (data: I18nFull) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    Module: (app: string, locale: string, module: string) => {
        onComelete: (func: (data: I18nFull) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    AddLocale: (app: string, locale: string, Authorization?: string) => {
        onComelete: (func: (data: {
            msg: "DONE";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    AppLocales: (app: string) => {
        onComelete: (func: (data: string[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    RemoveLocale: (app: string, locale: string, Authorization?: string) => {
        onComelete: (func: (data: {
            msg: "DONE";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
};
export default Translations;
