import { I18n, I18nFull } from "../../../@types/common";
import { DATA_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const Translate = (app: string, i18n: I18n, locale: string, Authorization = '') => YouthRoute<{ msg: "TRANSLATED" }>('post', `${DATA_API}translations/${app}`, {}, { Authorization, locale }, { locale, i18n });
const App = (app: string) => YouthRoute<I18nFull>('get', `${DATA_API}translations/${app}`, {}, {}, {});
const Locale = (app: string, locale: string) => YouthRoute<I18nFull>('get', `${DATA_API}translations/${app}/${locale}`, {}, {}, {});
const Module = (app: string, locale: string, module: string) => YouthRoute<I18nFull>('get', `${DATA_API}translations/${app}/${locale}/${module}`, {}, {}, {});

const AppLocales = (app: string) => YouthRoute<string[]>('get', `${DATA_API}localizations/${app}`, {}, {}, {});
const AddLocale = (app: string, locale: string, Authorization = '') => YouthRoute<{ msg: "DONE" }>('post', `${DATA_API}localizations/${app}/${locale}`, {}, { Authorization }, {});
const RemoveLocale = (app: string, locale: string, Authorization = '') => YouthRoute<{ msg: "DONE" }>('delete', `${DATA_API}localizations/${app}/${locale}`, {}, { Authorization }, {});


const Translations = {
    Translate,
    App,
    Locale,
    Module,
    AddLocale,
    AppLocales,
    RemoveLocale
};

export default Translations;