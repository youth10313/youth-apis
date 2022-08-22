import { Pagination } from "../../../../@types/common";
import { Post } from "../../../../@types/post";
declare const Islam: {
    Ethics: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: Pagination<Post>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: Post, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../../@types/category").Category[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    Beliefs: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: Pagination<Post>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: Post, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../../@types/category").Category[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    Sharia: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: Pagination<Post>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: Post, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../../@types/category").Category[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    Civilizations: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: Pagination<Post>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: Post, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../../@types/category").Category[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
};
export default Islam;
