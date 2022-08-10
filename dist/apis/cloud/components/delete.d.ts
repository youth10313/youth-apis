declare const Unlink: (path?: string, token?: string) => {
    onComelete: (func: (data: {
        msg: 'FILE_DELETED';
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default Unlink;
