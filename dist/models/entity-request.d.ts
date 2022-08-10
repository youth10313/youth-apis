import { Category, CategoryOption } from "../@types/category";
export declare class EntityRequest<A = any, B = any, C = A[]> {
    private url;
    constructor(url: string);
    Functions(): {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        fetch: (locale: string, Authorization?: string, page?: number, perPage?: number, search?: string, sort_by?: string, sort_order?: 'ASC' | 'DESC', date_start?: Date, date_end?: Date, category?: string | string[]) => {
            onComelete: (func: (data: C) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        create: (body: A, locale: string, Authorization?: string) => {
            onComelete: (func: (data: {
                id: string;
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        update: (id: string, body: B, locale: string, Authorization?: string) => {
            onComelete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComelete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComelete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
    };
    CategoryFunctions(): {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        fetch: (locale: string, Authorization?: string) => {
            onComelete: (func: (data: Category[]) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        create: (body: Category, locale: string, Authorization?: string) => {
            onComelete: (func: (data: {
                id: string;
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        update: (id: string, body: CategoryOption, locale: string, Authorization?: string) => {
            onComelete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComelete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComelete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
    };
}
