declare const Feeds: {
    Bigbang: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    Blog: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    Prays: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/pray").Pray>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/pray").Pray, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/pray").Pray) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    FAQ: {
        Doubts: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/doubt").Doubt>) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/doubt").Doubt, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: {
                        id: string;
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/doubt").Doubt) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
        };
        Questions: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/question").Question) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/question").Question>) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/question").Question, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/question").Question) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/question").Question) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/question").Question) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/question").Question) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: {
                        id: string;
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/question").Question) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/question").Question) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/question").Question) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
        };
    };
    Islam: {
        Ethics: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: {
                        id: string;
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
        };
        Beliefs: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: {
                        id: string;
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
        };
        Sharia: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: {
                        id: string;
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
        };
        Civilizations: {
            posts: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                    onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/post").Post>) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/post").Post, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
            categories: {
                fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                fetch: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: {
                        id: string;
                    }) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                empty: (locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
                restore: (id: string, locale: string, Authorization?: string) => {
                    onComelete: (func: (data: import("../../../@types/post").Post) => any) => any;
                    onError: (func: (err: any) => any) => any;
                    onChange: (func: (state: boolean) => any) => any;
                    subscribe: () => void;
                };
            };
        };
    };
    Library: {
        posts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/book").Book) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/book").Book>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/book").Book, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/book").Book) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/book").Book) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/book").Book) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        categories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/book").Book) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/category").Category[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/category").Category, locale: string, Authorization?: string) => {
                onComelete: (func: (data: {
                    id: string;
                }) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            update: (id: string, body: import("../../../@types/category").CategoryOption, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/book").Book) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/book").Book) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/book").Book) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    Main: {
        Sermons: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/sermon").Sermon) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/sermon").Sermon[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/sermon").Sermon, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/sermon").Sermon) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/sermon").Sermon) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/sermon").Sermon) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Meetings: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/meeting").Meeting) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/meeting").Meeting[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/meeting").Meeting, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/meeting").Meeting) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/meeting").Meeting) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/meeting").Meeting) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Statements: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/statement").Statement) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/statement").Statement[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/statement").Statement, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/statement").Statement) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/statement").Statement) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/statement").Statement) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Ansars: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/ansar").Ansar) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/ansar").Ansar[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/ansar").Ansar, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/ansar").Ansar) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/ansar").Ansar) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/ansar").Ansar) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Histories: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/history").History) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/history").History[]) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/history").History, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/history").History) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/history").History) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/history").History) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    Musics: {
        Tracks: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/track").Track) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/track").Track>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/track").Track, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/track").Track) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/track").Track) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/track").Track) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Podcasts: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/podcast").Podcast) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/podcast").Podcast>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/podcast").Podcast, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/podcast").Podcast) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/podcast").Podcast) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/podcast").Podcast) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    Reasons: {
        ReasonsFeeds: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/reason").Reason, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/reason").Reason) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Religions: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/religion").Religion, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/religion").Religion) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
    School: {
        Classes: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/class").Class) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/class").Class>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/class").Class, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/class").Class) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/class").Class) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/class").Class) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Lessons: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/lesson").Lesson) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/lesson").Lesson>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/lesson").Lesson, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/lesson").Lesson) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/lesson").Lesson) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/lesson").Lesson) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Teachers: {
            fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/teacher").Teacher) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
                onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/teacher").Teacher>) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            create: (body: import("../../../@types/teacher").Teacher, locale: string, Authorization?: string) => {
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
                onComelete: (func: (data: import("../../../@types/teacher").Teacher) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            empty: (locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/teacher").Teacher) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            restore: (id: string, locale: string, Authorization?: string) => {
                onComelete: (func: (data: import("../../../@types/teacher").Teacher) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
        Chapters: {
            Passed: (Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            Pass: (lessonId: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
            UnPass: (lessonId: string, Authorization?: string) => {
                onComelete: (func: (data: unknown) => any) => any;
                onError: (func: (err: any) => any) => any;
                onChange: (func: (state: boolean) => any) => any;
                subscribe: () => void;
            };
        };
    };
};
export default Feeds;
