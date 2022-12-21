import { Pagination } from "../../../@types/common";
import { DATA_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";


const Core = (q: string, locale: string, page: number, perPage: number) => YouthRoute<Pagination<{
    _id: string,
    title: string,
    latinTitle?: string,
    description: string,
    keywords: string,
    locale: string
}>>('get', `${DATA_API}core`, { q, locale, page, perPage }, { locale }, {});

export default Core;