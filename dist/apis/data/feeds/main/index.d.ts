import { Ansar } from "../../../../@types/ansar";
import { History } from "../../../../@types/history";
import { Meeting } from "../../../../@types/meeting";
import { Sermon } from "../../../../@types/sermon";
import { Statement } from "../../../../@types/statement";
declare const Main: {
    Sermons: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A = Sermon>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Sermon) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComplete: (func: <A_1 = Sermon[]>(data: A_1) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Sermon[]) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Sermon, locale: string, Authorization?: string) => {
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
        update: (id: string, body: any, locale: string, Authorization?: string) => {
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
            onComplete: (func: <A = Sermon>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Sermon) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A = Sermon>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Sermon) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A = Sermon>(data: A) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Sermon) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    Meetings: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_5 = Meeting>(data: A_5) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Meeting) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComplete: (func: <A_6 = Meeting[]>(data: A_6) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Meeting[]) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Meeting, locale: string, Authorization?: string) => {
            onComplete: (func: <A_7 = {
                id: string;
            }>(data: A_7) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                id: string;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: any, locale: string, Authorization?: string) => {
            onComplete: (func: <A_8 = {
                msg: "UPDATED";
            }>(data: A_8) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_9 = {
                msg: "DELETED";
            }>(data: A_9) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_5 = Meeting>(data: A_5) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Meeting) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_5 = Meeting>(data: A_5) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Meeting) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_5 = Meeting>(data: A_5) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Meeting) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    Statements: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_10 = Statement>(data: A_10) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Statement) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComplete: (func: <A_11 = Statement[]>(data: A_11) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Statement[]) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Statement, locale: string, Authorization?: string) => {
            onComplete: (func: <A_12 = {
                id: string;
            }>(data: A_12) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                id: string;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: any, locale: string, Authorization?: string) => {
            onComplete: (func: <A_13 = {
                msg: "UPDATED";
            }>(data: A_13) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_14 = {
                msg: "DELETED";
            }>(data: A_14) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_10 = Statement>(data: A_10) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Statement) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_10 = Statement>(data: A_10) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Statement) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_10 = Statement>(data: A_10) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Statement) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    Ansars: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_15 = Ansar>(data: A_15) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Ansar) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComplete: (func: <A_16 = Ansar[]>(data: A_16) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Ansar[]) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Ansar, locale: string, Authorization?: string) => {
            onComplete: (func: <A_17 = {
                id: string;
            }>(data: A_17) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                id: string;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: any, locale: string, Authorization?: string) => {
            onComplete: (func: <A_18 = {
                msg: "UPDATED";
            }>(data: A_18) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_19 = {
                msg: "DELETED";
            }>(data: A_19) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_15 = Ansar>(data: A_15) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Ansar) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_15 = Ansar>(data: A_15) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Ansar) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_15 = Ansar>(data: A_15) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: Ansar) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    Histories: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_20 = History>(data: A_20) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: History) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComplete: (func: <A_21 = History[]>(data: A_21) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: History[]) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: History, locale: string, Authorization?: string) => {
            onComplete: (func: <A_22 = {
                id: string;
            }>(data: A_22) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                id: string;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: any, locale: string, Authorization?: string) => {
            onComplete: (func: <A_23 = {
                msg: "UPDATED";
            }>(data: A_23) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
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
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_20 = History>(data: A_20) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: History) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: <A_20 = History>(data: A_20) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: History) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: <A_20 = History>(data: A_20) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: History) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
};
export default Main;
