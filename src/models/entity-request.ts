import { Category, CategoryOption } from "../@types/category";
import { YouthRoute } from "./request";

export class EntityRequest<A = any, B = any, C = A[]> {
    constructor(private url: string) { }
    Functions() {
        const create = (body: A, locale: string, Authorization = '') => YouthRoute<{ id: string }>('post', this.url, {}, { Authorization, locale }, body, 1000 * 60 * 5);
        const update = (id: string, body: B, locale: string, Authorization = '') => YouthRoute<{ msg: "UPDATED" }>('patch', `${this.url}/${id}`, {}, { Authorization, locale }, body, 1000 * 60 * 5);
        const remove = (id: string, locale: string, Authorization = '') => YouthRoute<{ msg: "DELETED" }>('delete', `${this.url}/${id}`, {}, { Authorization, locale }, {});
        const fetch = (
            locale: string,
            Authorization = '',
            page?: number,
            perPage?: number,
            search?: string,
            sort_by?: string,
            sort_order?: 'ASC' | 'DESC',
            date_start?: Date,
            date_end?: Date,
            category?: string | string[]
        ) => {
            if (date_start) {
                date_start = date_start.toISOString() as any;
            }
            if (date_end) {
                date_end = date_end.toISOString() as any;
            }
            if (category && category instanceof Array) {
                category = '?category=' + category.reduce((t, c) => t + '&category=' + c)
            }
            return YouthRoute<C>('get', `${this.url}${category || ''}`, { page, perPage, search, sort_by, sort_order, locale }, { Authorization, locale }, {});
        }
        const fetchOne = (latinTitle_or_id: string, locale: string, Authorization = '') => YouthRoute<A>('get', `${this.url}/${latinTitle_or_id}`, { locale }, { locale, Authorization }, {});
        const trash = (locale: string, Authorization = '') => YouthRoute<A>('get', `${this.url}/trash`, { locale }, { Authorization, locale }, {});
        const empty = (locale: string, Authorization = '') => YouthRoute<A>('delete', `${this.url}/trash`, {}, { Authorization, locale }, {});
        const restore = (id: string, locale: string, Authorization = '') => YouthRoute<A>('patch', `${this.url}/trash/${id}`, {}, { Authorization, locale }, {});
        return { fetchOne, fetch, create, update, remove, trash, empty, restore }
    }
    CategoryFunctions() {
        const create = (body: Category, locale: string, Authorization = '') => YouthRoute<{ id: string }>('post', `${this.url}-category`, {}, { Authorization, locale }, body, 1000 * 60 * 5);
        const update = (id: string, body: CategoryOption, locale: string, Authorization = '') => YouthRoute<{ msg: "UPDATED" }>('patch', `${this.url}-category/${id}`, {}, { Authorization, locale }, body, 1000 * 60 * 5);
        const remove = (id: string, locale: string, Authorization = '') => YouthRoute<{ msg: "DELETED" }>('delete', `${this.url}-category/${id}`, {}, { Authorization, locale }, {});
        const fetch = (
            locale: string,
            Authorization = ''
        ) => YouthRoute<Category[]>('get', `${this.url}-category`, { locale }, { Authorization, locale }, {});
        const fetchOne = (latinTitle_or_id: string, locale: string, Authorization = '') => YouthRoute<A>('get', `${this.url}-category/${latinTitle_or_id}`, { locale }, { Authorization, locale }, {});
        const trash = (locale: string, Authorization = '') => YouthRoute<A>('get', `${this.url}-category/trash`, { locale }, { Authorization, locale }, {});
        const empty = (locale: string, Authorization = '') => YouthRoute<A>('delete', `${this.url}-category/trash`, {}, { Authorization, locale }, {});
        const restore = (id: string, locale: string, Authorization = '') => YouthRoute<A>('patch', `${this.url}-category/trash/${id}`, {}, { Authorization, locale }, {});
        return { fetchOne, fetch, create, update, remove, trash, empty, restore }
    }
}