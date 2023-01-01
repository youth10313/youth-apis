declare const NLP: {
    fetch: (locale: string) => {
        onComplete: (func: <A = unknown>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    create: (name: string, locale: string, Authorization?: string) => {
        onComplete: (func: <A = unknown>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    update: (id: string, name: string, locale: string, Authorization?: string) => {
        onComplete: (func: <A = unknown>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    remove: (id: string, Authorization?: string) => {
        onComplete: (func: <A = unknown>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    train: (id: string, namespace: string, questions: string[], answers: string[], locale: string, Authorization?: string) => {
        onComplete: (func: <A = unknown>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    ask: (id: string, q: string, locale: string, Authorization?: string) => {
        onComplete: (func: <A = unknown>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default NLP;
