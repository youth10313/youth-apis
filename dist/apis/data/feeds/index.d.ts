declare const Feeds: {
    Bigbang: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_1 = import("../../../@types/common").Pagination<import("../../../@types/post").Post>>(data: A_1) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                onComplete: (func: <A_2 = {
                    id: string;
                }>(data: A_2) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                onComplete: (func: <A_3 = {
                    msg: "UPDATED";
                }>(data: A_3) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
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
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComplete: (func: <A_6 = {
                    id: string;
                }>(data: A_6) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                onComplete: (func: <A_7 = {
                    msg: "UPDATED";
                }>(data: A_7) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
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
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    Blog: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_1 = import("../../../@types/common").Pagination<import("../../../@types/post").Post>>(data: A_1) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                onComplete: (func: <A_2 = {
                    id: string;
                }>(data: A_2) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                onComplete: (func: <A_3 = {
                    msg: "UPDATED";
                }>(data: A_3) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
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
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComplete: (func: <A_6 = {
                    id: string;
                }>(data: A_6) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                onComplete: (func: <A_7 = {
                    msg: "UPDATED";
                }>(data: A_7) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
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
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    Prays: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_9 = import("../../../@types/pray").Pray>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_10 = import("../../../@types/common").Pagination<import("../../../@types/pray").Pray>>(data: A_10) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/pray").Pray>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/pray").Pray, locale: string, Authorization?: string) => {
                onComplete: (func: <A_11 = {
                    id: string;
                }>(data: A_11) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_12 = {
                    msg: "UPDATED";
                }>(data: A_12) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_13 = {
                    msg: "DELETED";
                }>(data: A_13) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_9 = import("../../../@types/pray").Pray>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_9 = import("../../../@types/pray").Pray>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_9 = import("../../../@types/pray").Pray>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_9 = import("../../../@types/pray").Pray>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComplete: (func: <A_14 = {
                    id: string;
                }>(data: A_14) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                onComplete: (func: <A_15 = {
                    msg: "UPDATED";
                }>(data: A_15) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_16 = {
                    msg: "DELETED";
                }>(data: A_16) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_9 = import("../../../@types/pray").Pray>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_9 = import("../../../@types/pray").Pray>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_9 = import("../../../@types/pray").Pray>(data: A_9) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    FAQ: {
        Doubts: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_17 = import("../../../@types/doubt").Doubt>(data: A_17) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComplete: (func: <A_18 = import("../../../@types/common").Pagination<import("../../../@types/doubt").Doubt>>(data: A_18) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/doubt").Doubt>) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/doubt").Doubt, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_19 = {
                        id: string;
                    }>(data: A_19) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: any, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_20 = {
                        msg: "UPDATED";
                    }>(data: A_20) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_21 = {
                        msg: "DELETED";
                    }>(data: A_21) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_17 = import("../../../@types/doubt").Doubt>(data: A_17) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_17 = import("../../../@types/doubt").Doubt>(data: A_17) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_17 = import("../../../@types/doubt").Doubt>(data: A_17) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_17 = import("../../../@types/doubt").Doubt>(data: A_17) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_22 = {
                        id: string;
                    }>(data: A_22) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_23 = {
                        msg: "UPDATED";
                    }>(data: A_23) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_24 = {
                        msg: "DELETED";
                    }>(data: A_24) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_17 = import("../../../@types/doubt").Doubt>(data: A_17) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_17 = import("../../../@types/doubt").Doubt>(data: A_17) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_17 = import("../../../@types/doubt").Doubt>(data: A_17) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
        };
        Questions: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_25 = import("../../../@types/question").Question>(data: A_25) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/question").Question) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComplete: (func: <A_26 = import("../../../@types/common").Pagination<import("../../../@types/question").Question>>(data: A_26) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/question").Question>) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/question").Question, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_27 = {
                        id: string;
                    }>(data: A_27) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: any, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_28 = {
                        msg: "UPDATED";
                    }>(data: A_28) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_29 = {
                        msg: "DELETED";
                    }>(data: A_29) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_25 = import("../../../@types/question").Question>(data: A_25) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/question").Question) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_25 = import("../../../@types/question").Question>(data: A_25) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/question").Question) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_25 = import("../../../@types/question").Question>(data: A_25) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/question").Question) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_25 = import("../../../@types/question").Question>(data: A_25) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/question").Question) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_30 = {
                        id: string;
                    }>(data: A_30) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_31 = {
                        msg: "UPDATED";
                    }>(data: A_31) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_32 = {
                        msg: "DELETED";
                    }>(data: A_32) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_25 = import("../../../@types/question").Question>(data: A_25) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/question").Question) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_25 = import("../../../@types/question").Question>(data: A_25) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/question").Question) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_25 = import("../../../@types/question").Question>(data: A_25) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/question").Question) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
        };
    };
    Islam: {
        Ethics: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComplete: (func: <A_1 = import("../../../@types/common").Pagination<import("../../../@types/post").Post>>(data: A_1) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_33 = {
                        id: string;
                    }>(data: A_33) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: any, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_34 = {
                        msg: "UPDATED";
                    }>(data: A_34) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_35 = {
                        msg: "DELETED";
                    }>(data: A_35) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_36 = {
                        id: string;
                    }>(data: A_36) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_37 = {
                        msg: "UPDATED";
                    }>(data: A_37) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_38 = {
                        msg: "DELETED";
                    }>(data: A_38) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
        };
        Beliefs: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComplete: (func: <A_1 = import("../../../@types/common").Pagination<import("../../../@types/post").Post>>(data: A_1) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_33 = {
                        id: string;
                    }>(data: A_33) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: any, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_34 = {
                        msg: "UPDATED";
                    }>(data: A_34) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_35 = {
                        msg: "DELETED";
                    }>(data: A_35) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_36 = {
                        id: string;
                    }>(data: A_36) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_37 = {
                        msg: "UPDATED";
                    }>(data: A_37) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_38 = {
                        msg: "DELETED";
                    }>(data: A_38) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
        };
        Sharia: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComplete: (func: <A_1 = import("../../../@types/common").Pagination<import("../../../@types/post").Post>>(data: A_1) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_33 = {
                        id: string;
                    }>(data: A_33) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: any, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_34 = {
                        msg: "UPDATED";
                    }>(data: A_34) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_35 = {
                        msg: "DELETED";
                    }>(data: A_35) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_36 = {
                        id: string;
                    }>(data: A_36) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_37 = {
                        msg: "UPDATED";
                    }>(data: A_37) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_38 = {
                        msg: "DELETED";
                    }>(data: A_38) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
        };
        Civilizations: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComplete: (func: <A_1 = import("../../../@types/common").Pagination<import("../../../@types/post").Post>>(data: A_1) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_33 = {
                        id: string;
                    }>(data: A_33) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: any, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_34 = {
                        msg: "UPDATED";
                    }>(data: A_34) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_35 = {
                        msg: "DELETED";
                    }>(data: A_35) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_36 = {
                        id: string;
                    }>(data: A_36) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        id: string;
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_37 = {
                        msg: "UPDATED";
                    }>(data: A_37) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "UPDATED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                remove: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A_38 = {
                        msg: "DELETED";
                    }>(data: A_38) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: {
                        msg: "DELETED";
                    }) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                trash: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComplete: (func: <A = import("../../../@types/post").Post>(data: A) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    Convert: (func: (data: import("../../../@types/post").Post) => any) => any;
                    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                    abort: () => void;
                };
            };
        };
    };
    Library: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_39 = import("../../../@types/book").Book>(data: A_39) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/book").Book) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_40 = import("../../../@types/common").Pagination<import("../../../@types/book").Book>>(data: A_40) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/book").Book>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/book").Book, locale: string, Authorization?: string) => {
                onComplete: (func: <A_41 = {
                    id: string;
                }>(data: A_41) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_42 = {
                    msg: "UPDATED";
                }>(data: A_42) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_43 = {
                    msg: "DELETED";
                }>(data: A_43) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_39 = import("../../../@types/book").Book>(data: A_39) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/book").Book) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_39 = import("../../../@types/book").Book>(data: A_39) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/book").Book) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_39 = import("../../../@types/book").Book>(data: A_39) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/book").Book) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_39 = import("../../../@types/book").Book>(data: A_39) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/book").Book) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_5 = import("../../../@types/category").Category[]>(data: A_5) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComplete: (func: <A_44 = {
                    id: string;
                }>(data: A_44) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
                onComplete: (func: <A_45 = {
                    msg: "UPDATED";
                }>(data: A_45) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_46 = {
                    msg: "DELETED";
                }>(data: A_46) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_39 = import("../../../@types/book").Book>(data: A_39) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/book").Book) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_39 = import("../../../@types/book").Book>(data: A_39) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/book").Book) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_39 = import("../../../@types/book").Book>(data: A_39) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/book").Book) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        ledgers: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_47 = import("../../../@types/ledger").Ledger>(data: A_47) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ledger").Ledger) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_48 = import("../../../@types/common").Pagination<import("../../../@types/ledger").Ledger>>(data: A_48) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/ledger").Ledger>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/ledger").Ledger, locale: string, Authorization?: string) => {
                onComplete: (func: <A_49 = {
                    id: string;
                }>(data: A_49) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_50 = {
                    msg: "UPDATED";
                }>(data: A_50) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_51 = {
                    msg: "DELETED";
                }>(data: A_51) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_47 = import("../../../@types/ledger").Ledger>(data: A_47) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ledger").Ledger) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_47 = import("../../../@types/ledger").Ledger>(data: A_47) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ledger").Ledger) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_47 = import("../../../@types/ledger").Ledger>(data: A_47) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ledger").Ledger) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        seasons: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_52 = import("../../../@types/ledger").Season>(data: A_52) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ledger").Season) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_53 = import("../../../@types/common").Pagination<import("../../../@types/ledger").Season>>(data: A_53) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/ledger").Season>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/ledger").Season, locale: string, Authorization?: string) => {
                onComplete: (func: <A_54 = {
                    id: string;
                }>(data: A_54) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_55 = {
                    msg: "UPDATED";
                }>(data: A_55) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_56 = {
                    msg: "DELETED";
                }>(data: A_56) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_52 = import("../../../@types/ledger").Season>(data: A_52) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ledger").Season) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_52 = import("../../../@types/ledger").Season>(data: A_52) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ledger").Season) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_52 = import("../../../@types/ledger").Season>(data: A_52) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ledger").Season) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    Main: {
        Sermons: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_57 = import("../../../@types/sermon").Sermon>(data: A_57) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/sermon").Sermon) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_58 = import("../../../@types/sermon").Sermon[]>(data: A_58) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/sermon").Sermon[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/sermon").Sermon, locale: string, Authorization?: string) => {
                onComplete: (func: <A_59 = {
                    id: string;
                }>(data: A_59) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_60 = {
                    msg: "UPDATED";
                }>(data: A_60) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_61 = {
                    msg: "DELETED";
                }>(data: A_61) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_57 = import("../../../@types/sermon").Sermon>(data: A_57) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/sermon").Sermon) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_57 = import("../../../@types/sermon").Sermon>(data: A_57) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/sermon").Sermon) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_57 = import("../../../@types/sermon").Sermon>(data: A_57) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/sermon").Sermon) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Meetings: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_62 = import("../../../@types/meeting").Meeting>(data: A_62) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/meeting").Meeting) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_63 = import("../../../@types/meeting").Meeting[]>(data: A_63) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/meeting").Meeting[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/meeting").Meeting, locale: string, Authorization?: string) => {
                onComplete: (func: <A_64 = {
                    id: string;
                }>(data: A_64) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_65 = {
                    msg: "UPDATED";
                }>(data: A_65) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_66 = {
                    msg: "DELETED";
                }>(data: A_66) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_62 = import("../../../@types/meeting").Meeting>(data: A_62) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/meeting").Meeting) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_62 = import("../../../@types/meeting").Meeting>(data: A_62) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/meeting").Meeting) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_62 = import("../../../@types/meeting").Meeting>(data: A_62) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/meeting").Meeting) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Statements: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_67 = import("../../../@types/statement").Statement>(data: A_67) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/statement").Statement) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_68 = import("../../../@types/statement").Statement[]>(data: A_68) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/statement").Statement[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/statement").Statement, locale: string, Authorization?: string) => {
                onComplete: (func: <A_69 = {
                    id: string;
                }>(data: A_69) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_70 = {
                    msg: "UPDATED";
                }>(data: A_70) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_71 = {
                    msg: "DELETED";
                }>(data: A_71) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_67 = import("../../../@types/statement").Statement>(data: A_67) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/statement").Statement) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_67 = import("../../../@types/statement").Statement>(data: A_67) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/statement").Statement) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_67 = import("../../../@types/statement").Statement>(data: A_67) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/statement").Statement) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Ansars: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_72 = import("../../../@types/ansar").Ansar>(data: A_72) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ansar").Ansar) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_73 = import("../../../@types/ansar").Ansar[]>(data: A_73) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ansar").Ansar[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/ansar").Ansar, locale: string, Authorization?: string) => {
                onComplete: (func: <A_74 = {
                    id: string;
                }>(data: A_74) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_75 = {
                    msg: "UPDATED";
                }>(data: A_75) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_76 = {
                    msg: "DELETED";
                }>(data: A_76) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_72 = import("../../../@types/ansar").Ansar>(data: A_72) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ansar").Ansar) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_72 = import("../../../@types/ansar").Ansar>(data: A_72) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ansar").Ansar) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_72 = import("../../../@types/ansar").Ansar>(data: A_72) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/ansar").Ansar) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Histories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_77 = import("../../../@types/history").History>(data: A_77) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/history").History) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_78 = import("../../../@types/history").History[]>(data: A_78) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/history").History[]) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/history").History, locale: string, Authorization?: string) => {
                onComplete: (func: <A_79 = {
                    id: string;
                }>(data: A_79) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_80 = {
                    msg: "UPDATED";
                }>(data: A_80) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_81 = {
                    msg: "DELETED";
                }>(data: A_81) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_77 = import("../../../@types/history").History>(data: A_77) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/history").History) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_77 = import("../../../@types/history").History>(data: A_77) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/history").History) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_77 = import("../../../@types/history").History>(data: A_77) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/history").History) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    Musics: {
        Tracks: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_82 = import("../../../@types/track").Track>(data: A_82) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/track").Track) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_83 = import("../../../@types/common").Pagination<import("../../../@types/track").Track>>(data: A_83) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/track").Track>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/track").Track, locale: string, Authorization?: string) => {
                onComplete: (func: <A_84 = {
                    id: string;
                }>(data: A_84) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_85 = {
                    msg: "UPDATED";
                }>(data: A_85) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_86 = {
                    msg: "DELETED";
                }>(data: A_86) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_82 = import("../../../@types/track").Track>(data: A_82) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/track").Track) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_82 = import("../../../@types/track").Track>(data: A_82) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/track").Track) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_82 = import("../../../@types/track").Track>(data: A_82) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/track").Track) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Podcasts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_87 = import("../../../@types/podcast").Podcast>(data: A_87) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/podcast").Podcast) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_88 = import("../../../@types/common").Pagination<import("../../../@types/podcast").Podcast>>(data: A_88) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/podcast").Podcast>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/podcast").Podcast, locale: string, Authorization?: string) => {
                onComplete: (func: <A_89 = {
                    id: string;
                }>(data: A_89) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_90 = {
                    msg: "UPDATED";
                }>(data: A_90) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_91 = {
                    msg: "DELETED";
                }>(data: A_91) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_87 = import("../../../@types/podcast").Podcast>(data: A_87) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/podcast").Podcast) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_87 = import("../../../@types/podcast").Podcast>(data: A_87) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/podcast").Podcast) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_87 = import("../../../@types/podcast").Podcast>(data: A_87) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/podcast").Podcast) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    Reasons: {
        ReasonsFeeds: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_92 = import("../../../@types/reason").Reason>(data: A_92) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_92 = import("../../../@types/reason").Reason>(data: A_92) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/reason").Reason, locale: string, Authorization?: string) => {
                onComplete: (func: <A_93 = {
                    id: string;
                }>(data: A_93) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_94 = {
                    msg: "UPDATED";
                }>(data: A_94) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_95 = {
                    msg: "DELETED";
                }>(data: A_95) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_92 = import("../../../@types/reason").Reason>(data: A_92) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_92 = import("../../../@types/reason").Reason>(data: A_92) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_92 = import("../../../@types/reason").Reason>(data: A_92) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Religions: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_96 = import("../../../@types/religion").Religion>(data: A_96) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_96 = import("../../../@types/religion").Religion>(data: A_96) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/religion").Religion, locale: string, Authorization?: string) => {
                onComplete: (func: <A_97 = {
                    id: string;
                }>(data: A_97) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_98 = {
                    msg: "UPDATED";
                }>(data: A_98) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_99 = {
                    msg: "DELETED";
                }>(data: A_99) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_96 = import("../../../@types/religion").Religion>(data: A_96) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_96 = import("../../../@types/religion").Religion>(data: A_96) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_96 = import("../../../@types/religion").Religion>(data: A_96) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
    School: {
        Classes: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_100 = import("../../../@types/class").Class>(data: A_100) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/class").Class) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_101 = import("../../../@types/common").Pagination<import("../../../@types/class").Class>>(data: A_101) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/class").Class>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/class").Class, locale: string, Authorization?: string) => {
                onComplete: (func: <A_102 = {
                    id: string;
                }>(data: A_102) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_103 = {
                    msg: "UPDATED";
                }>(data: A_103) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_104 = {
                    msg: "DELETED";
                }>(data: A_104) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_100 = import("../../../@types/class").Class>(data: A_100) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/class").Class) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_100 = import("../../../@types/class").Class>(data: A_100) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/class").Class) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_100 = import("../../../@types/class").Class>(data: A_100) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/class").Class) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Lessons: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_105 = import("../../../@types/lesson").Lesson>(data: A_105) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/lesson").Lesson) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_106 = import("../../../@types/common").Pagination<import("../../../@types/lesson").Lesson>>(data: A_106) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/lesson").Lesson>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/lesson").Lesson, locale: string, Authorization?: string) => {
                onComplete: (func: <A_107 = {
                    id: string;
                }>(data: A_107) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_108 = {
                    msg: "UPDATED";
                }>(data: A_108) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_109 = {
                    msg: "DELETED";
                }>(data: A_109) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_105 = import("../../../@types/lesson").Lesson>(data: A_105) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/lesson").Lesson) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_105 = import("../../../@types/lesson").Lesson>(data: A_105) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/lesson").Lesson) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_105 = import("../../../@types/lesson").Lesson>(data: A_105) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/lesson").Lesson) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Teachers: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_110 = import("../../../@types/teacher").Teacher>(data: A_110) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/teacher").Teacher) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComplete: (func: <A_111 = import("../../../@types/common").Pagination<import("../../../@types/teacher").Teacher>>(data: A_111) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/teacher").Teacher>) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            create: (body: import("../../../@types/teacher").Teacher, locale: string, Authorization?: string) => {
                onComplete: (func: <A_112 = {
                    id: string;
                }>(data: A_112) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    id: string;
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            update: (id: string, body: any, locale: string, Authorization?: string) => {
                onComplete: (func: <A_113 = {
                    msg: "UPDATED";
                }>(data: A_113) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "UPDATED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            remove: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_114 = {
                    msg: "DELETED";
                }>(data: A_114) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: {
                    msg: "DELETED";
                }) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            trash: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_110 = import("../../../@types/teacher").Teacher>(data: A_110) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/teacher").Teacher) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComplete: (func: <A_110 = import("../../../@types/teacher").Teacher>(data: A_110) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/teacher").Teacher) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComplete: (func: <A_110 = import("../../../@types/teacher").Teacher>(data: A_110) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: import("../../../@types/teacher").Teacher) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
        Chapters: {
            Passed: (Authorization?: string) => {
                onComplete: (func: <A_115 = unknown>(data: A_115) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            Pass: (lessonId: string, Authorization?: string) => {
                onComplete: (func: <A_115 = unknown>(data: A_115) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
            UnPass: (lessonId: string, Authorization?: string) => {
                onComplete: (func: <A_115 = unknown>(data: A_115) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                Convert: (func: (data: unknown) => any) => any;
                subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
                abort: () => void;
            };
        };
    };
};
export default Feeds;
