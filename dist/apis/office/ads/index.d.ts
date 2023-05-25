import { ResponseType } from "axios";
import { Ad, AdBody } from "../../../@types/ads";
declare const Ads: {
    Job: (fetch: boolean, Authorization?: string) => {
        onComplete: (func: <A = {
            id: string;
        }>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    UploadAttachment: (id: string, body: {
        title: any;
        file: any;
        type: any;
    }, Authorization?: string) => {
        onComplete: (func: <A_1 = {
            id: string;
        }>(data: A_1) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    FetchAttachments: (id: string, Authorization?: string, token?: string) => {
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
    FetchAttachment: (id: string, file: string, responseType?: ResponseType, Authorization?: string, token?: string) => {
        onComplete: (func: <A_3 = any>(data: A_3) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: any) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    CreateUserAd: (body: AdBody, Authorization?: string) => {
        onComplete: (func: <A_4 = {
            id: string;
        }>(data: A_4) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    UpdateAd: (id: string, body: any, token?: string) => {
        onComplete: (func: <A_5 = {
            id: string;
        }>(data: A_5) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    SignAds: (token?: string) => {
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
    RemoveAd: (id: string, token?: string, Authorization?: string) => {
        onComplete: (func: <A_7 = {
            msg: "DELETED";
        }>(data: A_7) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "DELETED";
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetDepartmentAds: (from: Date | undefined, to: Date | undefined, signed: boolean, count: boolean, token?: string) => {
        onComplete: (func: <A_8 = Ad[]>(data: A_8) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: Ad[]) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetUserAds: (from: Date | undefined, to: Date | undefined, signed: boolean, count: boolean, Authorization?: string) => {
        onComplete: (func: <A_8 = Ad[]>(data: A_8) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: Ad[]) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    SendUserAdReport: (id: string, body: {
        description: string;
    }, Authorization?: string) => {
        onComplete: (func: <A_9 = {
            id: string;
        }>(data: A_9) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    DeleteUserAdReport: (id: string, Authorization?: string) => {
        onComplete: (func: <A_10 = {
            id: string;
        }>(data: A_10) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetUserAdReports: (id: string, Authorization?: string) => {
        onComplete: (func: <A_8 = Ad[]>(data: A_8) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: Ad[]) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetDepartmentUserAdReports: (id: string, token?: string) => {
        onComplete: (func: <A_8 = Ad[]>(data: A_8) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: Ad[]) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Ads;
