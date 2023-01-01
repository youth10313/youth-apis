declare const Cloud: {
    ReadDirectory: (path?: string, token?: string) => {
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
        subscribe: (projects?: string[] | undefined, args?: import("../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Upload: (body: any, path?: string, token?: string) => {
        onComplete: (func: <A_1 = {
            msg: "FILE_UPLOADED";
        }>(data: A_1) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "FILE_UPLOADED";
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Unlink: (path?: string, token?: string) => {
        onComplete: (func: <A_2 = {
            msg: "FILE_DELETED";
        }>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "FILE_DELETED";
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Cloud;
