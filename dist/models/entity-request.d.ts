import { Category, CategoryOption } from "../@types/category";
export declare class EntityRequest<A = any, B = any, C = A[]> {
    private url;
    constructor(url: string);
    Functions(): {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number, perPage?: number, search?: string, sort_by?: string, sort_order?: 'ASC' | 'DESC', date_start?: Date, date_end?: Date, category?: string | string[]) => {
            onComplete: (func: (data: C) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: A, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                id: string;
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: B, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    CategoryFunctions(): {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: Category[]) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Category, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                id: string;
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: CategoryOption, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
}
