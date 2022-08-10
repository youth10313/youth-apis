import axios from "axios"

export const YouthAPI = <T>(
    method: 'get' | 'delete' | 'post' | 'patch',
    url: string,
    params: any,
    headers: any,
    body: any,
    onChange: (state: boolean) => void | any,
    timeout = 1000 * 13) => new Promise<T>((resolve, reject) => {
        onChange(true)
        const ax = method === 'get' || method === 'delete' ? axios[method](url, { headers, params, timeout }) : axios[method](url, body, { headers, params, timeout });
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
    timeout = 1000 * 13) => {
    let complete: (data: T) => any
    let error: (err: any) => any
    let change: (state: boolean) => any
    const obj = {
        onComelete: (func: (data: T) => any) => {
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
        subscribe: () => {
            YouthAPI<T>(method, url, params, headers, body, change, timeout)
                .then(res => complete(res))
                .catch(err => error(err))
        },
    }
    return obj;
}