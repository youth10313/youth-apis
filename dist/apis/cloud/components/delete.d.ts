declare const Unlink: (path?: string, token?: string) => {
    onComelete: (func: (data: {
        msg: 'FILE_DELETED';
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined) => void;
    abort: () => void;
};
export default Unlink;
