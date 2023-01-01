declare const ReadDirectory: (path?: string, token?: string) => {
    onComplete: (func: <A = {
        name: string;
        isDir: boolean;
        size: number;
    }[]>(data: A) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    Convert: (func: (data: {
        name: string;
        isDir: boolean;
        size: number;
    }[]) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default ReadDirectory;
