declare const Upload: (body: any, path?: string, token?: string) => {
    onComelete: (func: (data: {
        msg: 'FILE_UPLOADED';
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined) => void;
    abort: () => void;
};
export default Upload;
