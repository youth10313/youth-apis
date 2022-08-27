import { Class } from "../../../../@types/class";
import { Pagination } from "../../../../@types/common";
import { Lesson } from "../../../../@types/lesson";
import { Teacher } from "../../../../@types/teacher";
declare const School: {
    Classes: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: Class) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComelete: (func: (data: Pagination<Class>) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        create: (body: Class, locale: string, Authorization?: string) => {
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
            onComelete: (func: (data: Class) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComelete: (func: (data: Class) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: Class) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
    };
    Lessons: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: Lesson) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComelete: (func: (data: Pagination<Lesson>) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        create: (body: Lesson, locale: string, Authorization?: string) => {
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
            onComelete: (func: (data: Lesson) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComelete: (func: (data: Lesson) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: Lesson) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
    };
    Teachers: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: Teacher) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComelete: (func: (data: Pagination<Teacher>) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        create: (body: Teacher, locale: string, Authorization?: string) => {
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
            onComelete: (func: (data: Teacher) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComelete: (func: (data: Teacher) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComelete: (func: (data: Teacher) => any) => any;
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
export default School;
