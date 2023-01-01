import { Category, CategoryOption } from "../@types/category";
export declare class EntityRequest<A = any, B = any, C = A[]> {
    private url;
    constructor(url: string);
    Functions(): {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_1 = A>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: A) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number, perPage?: number, search?: string, sort_by?: string, sort_order?: 'ASC' | 'DESC', date_start?: Date, date_end?: Date, category?: string | string[]) => {
            onComplete: (func: <A_2 = C>(data: A_2) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: C) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: A, locale: string, Authorization?: string) => {
            onComplete: (func: <A_3 = {
                id: string;
            }>(data: A_3) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                id: string;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: B, locale: string, Authorization?: string) => {
            onComplete: (func: <A_4 = {
                msg: "UPDATED";
            }>(data: A_4) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_5 = {
                msg: "DELETED";
            }>(data: A_5) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_1 = A>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: A) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_1 = A>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: A) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_1 = A>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: A) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    CategoryFunctions(): {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_1 = A>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: A) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_2 = Category[]>(data: A_2) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Category[]) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Category, locale: string, Authorization?: string) => {
            onComplete: (func: <A_3 = {
                id: string;
            }>(data: A_3) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                id: string;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: CategoryOption, locale: string, Authorization?: string) => {
            onComplete: (func: <A_4 = {
                msg: "UPDATED";
            }>(data: A_4) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_5 = {
                msg: "DELETED";
            }>(data: A_5) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_1 = A>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: A) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_1 = A>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: A) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_1 = A>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: A) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
}
