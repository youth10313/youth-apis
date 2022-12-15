import { Pagination } from "../../../../@types/common";
import { Podcast } from "../../../../@types/podcast";
import { Track } from "../../../../@types/track";
declare const Musics: {
    Tracks: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: Track) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComplete: (func: (data: Pagination<Track>) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Track, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                id: string;
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: any, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: Track) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: Track) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: Track) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    Podcasts: {
        fetchOne: (latinTitle_or_id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: Podcast) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        fetch: (locale: string, querystring?: any, Authorization?: string, page?: number | undefined, perPage?: number | undefined, search?: string | undefined, sort_by?: string | undefined, sort_order?: "ASC" | "DESC" | undefined, date_start?: Date | undefined, date_end?: Date | undefined, category?: string | string[] | undefined) => {
            onComplete: (func: (data: Pagination<Podcast>) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        create: (body: Podcast, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                id: string;
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        update: (id: string, body: any, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        remove: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: {
                msg: "DELETED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        trash: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: Podcast) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        empty: (locale: string, Authorization?: string) => {
            onComplete: (func: (data: Podcast) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        restore: (id: string, locale: string, Authorization?: string) => {
            onComplete: (func: (data: Podcast) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
};
export default Musics;
