import { DATA_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const AdjustFont = (app: string, url: string, locale: string, Authorization = '') => YouthRoute('patch', `${DATA_API}settings/${app}/font`, {}, { Authorization, locale }, { url, locale });
const AdjustCluster = (app: string, size: number, locale: string, Authorization = '') => YouthRoute('patch', `${DATA_API}settings/${app}/${size}`, {}, { Authorization, locale }, {});
const Refresh = (app: string, locale: string, Authorization = '') => YouthRoute('patch', `${DATA_API}settings/${app}`, {}, { Authorization, locale }, {});

const Settings = {
    AdjustCluster,
    AdjustFont,
    Refresh
};

export default Settings;