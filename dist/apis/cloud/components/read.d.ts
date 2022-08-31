declare const ReadDirectory: (path?: string, token?: string) => {
    onComelete: (func: (data: {
        name: string;
        isDir: boolean;
        size: number;
    }[]) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
    abort: () => void;
};
export default ReadDirectory;
