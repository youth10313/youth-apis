export declare const YouthAPI: <T>(method: 'get' | 'delete' | 'post' | 'patch', url: string, params: any, headers: any, body: any, onChange: (state: boolean) => void | any, controller: AbortController, timeout?: number) => Promise<T>;
export declare const YouthRoute: <T>(method: 'get' | 'delete' | 'post' | 'patch', url: string, params: any, headers: any, body: any, timeout?: number) => {
    onComelete: (func: (data: T) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[]) => void;
    abort: () => void;
};
