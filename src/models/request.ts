import axios from "axios"

export const YouthAPI = <T>(
    method: 'get' | 'delete' | 'post' | 'patch',
    url: string,
    params: any,
    headers: any,
    body: any,
    onChange: (state: boolean) => void | any,
    controller: AbortController,
    timeout = 1000 * 13) => new Promise<T>((resolve, reject) => {
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
    timeout = 1000 * 13) => {
    const controller = new AbortController();
    let complete: (data: T) => any
    let error: (err: any) => any
    let change: (state: boolean) => any
    let abort = () => controller.abort()
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
        subscribe: (projects?: string[]) => {
            if (projects && !params) params = {}
            if (projects && projects.length) {
                let queryType = "";
                projects.forEach((item, i) => {
                    queryType += item + (i === projects.length - 1 ? "" : "-")
                })
            }
            YouthAPI<T>(method, url, params, headers, body, change, controller, timeout)
                .then(res => complete(res))
                .catch(err => error(err))
        },
        abort
    }
    return obj;
}