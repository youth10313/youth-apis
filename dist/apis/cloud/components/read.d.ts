declare const ReadDirectory: (path?: string, token?: string) => {
    onComplete: (func: (data: {
        name: string;
        isDir: boolean;
        size: number;
    }[]) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default ReadDirectory;
