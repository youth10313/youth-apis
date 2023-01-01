import { Pagination } from "../../../../@types/common";
import { Post } from "../../../../@types/post";
declare const Bigbang: {
    posts: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A = Post>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Post) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComplete: (func: <A_1 = Pagination<Post>>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Pagination<Post>) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Post, locale: string, Authorization?: string) => {
            onComplete: (func: <A_2 = {
                id: string;
            }>(data: A_2) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                id: string;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: Post, locale: string, Authorization?: string) => {
            onComplete: (func: <A_3 = {
                msg: "UPDATED";
            }>(data: A_3) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_4 = {
                msg: "DELETED";
            }>(data: A_4) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: <A = Post>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Post) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A = Post>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Post) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A = Post>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Post) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    categories: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A = Post>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Post) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_5 = import("../../../../@types/category").Category[]>(data: A_5) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: import("../../../../@types/category").Category[]) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: import("../../../../@types/category").Category, locale: string, Authorization?: string) => {
            onComplete: (func: <A_6 = {
                id: string;
            }>(data: A_6) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                id: string;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: import("../../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
            onComplete: (func: <A_7 = {
                msg: "UPDATED";
            }>(data: A_7) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_8 = {
                msg: "DELETED";
            }>(data: A_8) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: <A = Post>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Post) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A = Post>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Post) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A = Post>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Post) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
};
export default Bigbang;
