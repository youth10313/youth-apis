import { DATA_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const fetch = (locale: string) => YouthRoute('get', `${DATA_API}nlp`, { locale }, { locale }, {});
const create = (name: string, locale: string, Authorization = '') => YouthRoute('post', `${DATA_API}nlp`, {}, { Authorization, locale }, { name });
const update = (id: string, name: string, locale: string, Authorization = '') => YouthRoute('patch', `${DATA_API}nlp/${id}`, {}, { Authorization, locale }, { name });
const remove = (id: string, Authorization = '') => YouthRoute('delete', `${DATA_API}nlp/${id}`, {}, { Authorization }, {});
const train = (id: string, namespace: string, questions: string[], answers: string[], locale: string, Authorization = '') => YouthRoute('post', `${DATA_API}nlp/${id}/train`, {}, { locale, Authorization }, { id: namespace, questions, answers });
const ask = (id: string, q: string, locale: string, Authorization = '') => YouthRoute('get', `${DATA_API}nlp/${id}/ask`, { q }, { locale, Authorization }, {})

const NLP = {
    fetch, create, update, remove, train, ask
}

export default NLP