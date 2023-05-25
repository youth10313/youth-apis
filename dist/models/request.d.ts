import { ResponseType } from "axios";
import { Args } from "../@types/subscribe";
export declare const YouthAPI: <T>(method: 'get' | 'delete' | 'post' | 'patch', url: string, params: any, headers: any, body: any, onChange: (state: boolean) => void | any, controller: AbortController, timeout?: number, responseType?: ResponseType) => Promise<T>;
export declare const YouthRoute: <T>(method: 'get' | 'delete' | 'post' | 'patch', url: string, params: any, headers: any, body: any, timeout?: number, responseType?: ResponseType) => {
    onComplete: (func: <A = T>(data: A) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    Convert: (func: (data: T) => any) => any;
    subscribe: (projects?: string[], args?: Args) => void;
    abort: () => void;
};
