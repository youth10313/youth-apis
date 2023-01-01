declare const Upload: (body: any, path?: string, token?: string) => {
    onComplete: (func: <A = {
        msg: 'FILE_UPLOADED';
    }>(data: A) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    Convert: (func: (data: {
        msg: 'FILE_UPLOADED';
    }) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default Upload;
