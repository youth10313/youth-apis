declare const Cloud: {
    ReadDirectory: (path?: string, token?: string) => {
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
    Upload: (body: any, path?: string, token?: string) => {
        onComelete: (func: (data: {
            msg: "FILE_UPLOADED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
    Unlink: (path?: string, token?: string) => {
        onComelete: (func: (data: {
            msg: "FILE_DELETED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
};
export default Cloud;
