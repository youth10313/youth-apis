import axios from "axios"
import { Args } from "../@types/subscribe";

export const YouthAPI = <T>(
    method: 'get' | 'delete' | 'post' | 'patch',
    url: string,
    params: any,
    headers: any,
    body: any,
    onChange: (state: boolean) => void | any,
    controller: AbortController,
    timeout = 1000 * 60) => new Promise<T>((resolve, reject) => {
        onChange(true)
        const ax = method === 'get' || method === 'delete' ? axios[method](url, { headers, params, timeout, signal: controller.signal }) : axios[method](url, body, { headers, params, timeout, signal: controller.signal });
        ax.then(res => {
            resolve(res.data as T);
            onChange(false)
        }).catch(err => {
            reject(err)
            onChange(false)
        })
    })

export const YouthRoute = <T>(
    method: 'get' | 'delete' | 'post' | 'patch',
    url: string,
    params: any,
    headers: any,
    body: any,
    timeout = 1000 * 60) => {
    const controller = new AbortController();
    let complete: (data: T) => any = res => res;
    let error: (err: any) => any = err => err;
    let change: (state: boolean) => any = state => state;
    let convert: (response: T) => any = response => response;
    let abort = () => controller.abort()
    const obj = {
        onComplete: (func: <A = T>(data: A) => any) => {
            complete = func;
            return obj;
        },
        onError: (func: (err: any) => any) => {
            error = func;
            return obj;
        },
        onChange: (func: (state: boolean) => any) => {
            change = func;
            return obj
        },
        Convert: (func: (data: T) => any) => {
            convert = func;
            return obj
        },
        subscribe: (projects?: string[], args?: Args) => {
            if (args) {
                if (args.id && args.cid) {
                    url = url.replace(args.cid, args.id);
                }
                params = args.params || params;
                headers = args.headers || headers;
                body = args.body || body;
            }
            if (projects && !params) params = {}
            if (projects && projects.length) {
                let queryType = "";
                projects.forEach((item, i) => {
                    queryType += item + (i === projects.length - 1 ? "" : "-")
                })
                params['project'] = queryType;
            }
            YouthAPI<T>(method, url, params, headers, body, change, controller, timeout)
                .then(res => complete(convert(res)))
                .catch(err => error(err))
        },
        abort
    }
    return obj;
}